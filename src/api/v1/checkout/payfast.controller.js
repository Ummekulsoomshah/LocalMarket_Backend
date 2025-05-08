
const db = require('../../../db/db.config');

exports.createPaymentLink = async (req, res) => {
  try {
    const { amount, email, firstName, lastName, checkoutId } = req.body;

    const payfastData = {
      merchant_id: process.env.MERCHANT_ID,
      merchant_key: process.env.MERCHANT_KEY,
      return_url: process.env.RETURN_URL,
      cancel_url: process.env.CANCEL_URL,
      notify_url: process.env.NOTIFY_URL || "https://ea88-119-155-197-254.ngrok-free.app/api/payfast/notify",
      amount,
      item_name: `Checkout for ${firstName} ${lastName}`,
      name_first: firstName,
      name_last: lastName,
      email_address: email,
      custom_int1: checkoutId // Attach the checkout ID here
    };

    const query = Object.entries(payfastData)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&');

    const url = `https://sandbox.payfast.co.za/eng/process?${query}`;
    res.json({ url });
  } catch (error) {
    console.error("PayFast error:", error);
    res.status(500).json({ error: "Failed to generate PayFast URL" });
  }
};

exports.processPaymentNotification = async (req, res) => {
  try {
    console.log('Received notification:', req.body);

    const { payment_status, custom_int1, pf_payment_id, amount_gross } = req.body;
    const checkout_id = custom_int1;

    if (!payment_status || !checkout_id || !pf_payment_id) {
      console.log('Missing required fields in notification:', req.body);
      return res.status(400).send('Bad Request: Missing required fields');
    }

    let newStatus = '';
    if (payment_status === 'COMPLETE') {
      newStatus = 'SUCCESS';
    } else if (payment_status === 'CANCELLED') {
      newStatus = 'CANCELLED';
    } else {
      console.log('Unknown payment status:', payment_status);
      return res.status(400).send('Bad Request: Unknown payment status');
    }

    const updateCheckoutQuery = `
      UPDATE checkout
      SET payment_status = ?, transaction_id = ?, updated_at = NOW()
      WHERE id = ?;
    `;

    const [result] = await db.query(updateCheckoutQuery, [newStatus, pf_payment_id, checkout_id]);

    if (result.affectedRows > 0) {
      console.log(`Checkout ${checkout_id} updated to status: ${newStatus}`);
    } else {
      console.log(`Checkout ${checkout_id} not found or update failed.`);
    }

    res.status(200).send('Payment notification processed');
  } catch (error) {
    console.error('Error processing PayFast notification:', error);
    res.status(500).send('Internal Server Error');
  }
};

const db = require('../../../db/db.config');

const createPaymentLink = async (req, res) => {
  try {
    const { amount, email, firstName, lastName, checkoutId } = req.body;

    const payfastData = {
      merchant_id: process.env.MERCHANT_ID,
      merchant_key: process.env.MERCHANT_KEY,
      return_url: 'http://localhost:3001/success',
      cancel_url: 'http://localhost:3001/cancel',
      notify_url: 'https://ab1234.ngrok.io/payment/notify',
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
    res.status(200).json({ url });
  } catch (error) {
    console.error("PayFast error:", error);
    res.status(500).json({ error: "Failed to generate PayFast URL" });
  }
};

// const processPaymentNotification = async (req, res) => {
//   console.log('Received notification:');
//   try {

//     // const { payment_status, custom_int1, pf_payment_id, amount_gross } = req.body;
//     // const checkout_id = custom_int1;

//     // if (!payment_status || !checkout_id || !pf_payment_id) {
//     //   console.log('Missing required fields in notification:', req.body);
//     //   return res.status(400).send('Bad Request: Missing required fields');
//     // }

//     // let newStatus = '';
//     // if (payment_status === 'COMPLETE') {
//     //   newStatus = 'SUCCESS';
//     // } else if (payment_status === 'CANCELLED') {
//     //   newStatus = 'CANCELLED';
//     // } else {
//     //   console.log('Unknown payment status:', payment_status);
//     //   return res.status(400).send('Bad Request: Unknown payment status');
//     // }
//     const userId = req.user.id

//     const [orderItems] = await db.query(
//       'SELECT itemId FROM orders WHERE userId = ?',
//       [userId]
//     );
//     for (const order of orderItems) {
//       const { itemId } = order;
//       await db.query(
//         'UPDATE items SET quantity = quantity - 1 WHERE id = ? AND quantity >= ?',
//         [itemId]
//       );
//       await db.query('INSERT INTO placedorders(itemId,userId) values(?,?)', [itemId, userId])
//     }

//     await db.query(
//       'DELETE FROM orders WHERE userId = ?',
//       [userId]
//     );


//     res.status(200).send('Payment notification processed');
//   } catch (error) {
//     console.error('Error processing PayFast notification:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };
module.exports =  createPaymentLink

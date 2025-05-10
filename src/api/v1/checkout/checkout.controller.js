
const db = require('../../../db/db.config');

exports.createCheckout = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, street, city, state, zip, amount, paymentStatus } = req.body;

    const user_id = 1; // Replace with actual authenticated user ID in real scenarios

    const [result] = await db.query(
      `INSERT INTO checkout (user_id, first_name, last_name, email, phone, street, city, state, zip, amount, payment_status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, firstName, lastName, email, phone, street, city, state, zip, amount, paymentStatus]
    );

    res.status(201).json({ message: "Checkout saved", checkoutId: result.insertId });
  } catch (error) {
    console.error("Checkout Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

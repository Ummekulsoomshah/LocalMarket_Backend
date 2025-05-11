
const db = require('../../../db/db.config');

const checkout = async (req, res) => {
  try {
    
    const { firstName, lastName, email, phone, street, city, state, zip, amount, paymentStatus } = req.body;
    const userdata={
      firstName, lastName, email, phone, street, city, state, zip, amount, paymentStatus
    }
    console.log('req.body',req.body)
    console.log(userdata)

    const user_id = req.user.id

    const [result] = await db.query(
      `INSERT INTO checkout (user_id, first_name, last_name, email, phone, street, city, state, zip, amount, payment_status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, firstName, lastName, email, phone, street, city, state, zip, amount, paymentStatus]
    );

    res.status(200).json({ message: "Checkout saved", checkoutId: result.insertId });
  } catch (error) {
    console.error("Checkout Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = checkout

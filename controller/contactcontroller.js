 const db = require("../config/db");

/* ✅ Submit Contact Form */
exports.createContact = (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, Email and Message are required",
    });
  }

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      contactId: result.insertId,
    });
  });
};

/* ✅ Get All Contacts (Admin) */
exports.getAllContacts = (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    res.json({
      success: true,
      data: results,
    });
  });
};

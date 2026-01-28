const express = require("express");
const { createContact, getAllContacts } = require("../controller/contactcontroller");
const router = express.Router();


router.post("/contact", createContact);
router.get("/contacts", getAllContacts);

module.exports = router;

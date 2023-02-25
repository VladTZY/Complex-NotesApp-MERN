const express = require("express");

const {
  getNotes,
  getNoteById,
  addNote,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/", getNotes);

router.get("/:id", getNoteById);

router.post("/", addNote);

router.delete("/:id", deleteNote);

router.put("/:id", updateNote);

module.exports = router;

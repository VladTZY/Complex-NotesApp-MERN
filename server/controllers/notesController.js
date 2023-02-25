const { noteModel } = require("../database/sequelize");

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.findAll();

    return res.status(200).json(notes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await noteModel.findByPk(req.params.id);

    if (note == null) throw new Error("Note not found");

    return res.status(200).json(note);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const addNote = async (req, res) => {
  try {
    if (req.body.title == null || req.body.description == null) {
      throw new Error("You need to complete all the fields");
    }

    if (req.body.title == "") {
      throw new Error("You need to have a title");
    }

    const newNote = {
      title: req.body.title,
      description: req.body.description,
    };

    noteModel.create(newNote).then(() => {
      return res.status(200).json(newNote);
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await noteModel.findByPk(req.params.id);

    if (note == null) throw new Error("Note not found");

    await note.destroy();

    return res.status(200).send("Note deleted");
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await noteModel.findByPk(req.params.id);

    if (note == null) throw new Error("Note not found");

    if (req.body.title == null || req.body.description == null) {
      throw new Error("You need to complete all the fields");
    }

    if (req.body.title == "") {
      throw new Error("You need to have a title");
    }

    await note.update({
      title: req.body.title,
      description: req.body.description,
    });

    return res.status(200).json(note);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getNotes,
  getNoteById,
  addNote,
  deleteNote,
  updateNote,
};

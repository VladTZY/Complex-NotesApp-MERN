const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Note = sequelize.define("note", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Note;
};

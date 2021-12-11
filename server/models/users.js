const { v4: uuidv4 } = require("uuid");

const Credential = require("./credentials");

const Sequelize = require("./index").Sequelize;
const Datatypes = require("./index").DataTypes;

const User = Sequelize.define("users", {
  id: {
    type: Datatypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
  },
  firstname: {
    type: Datatypes.STRING,
    allowNull: true,
  },
  surname: {
    type: Datatypes.STRING,
    allowNull: true,
  },
  sex: {
    type: Datatypes.STRING,
    allowNull: false,
    defaultValue: "male",
  },
  phone: {
      type: Datatypes.STRING(11), 
      allowNull: true,
  },
  dob: {
      type: Datatypes.DATEONLY, 
      allowNull: false,
  }
  ,
  uid: {
    type: Datatypes.UUID,
    allowNull: false,
    unique: true,

    references: {
      model: Credential,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
});

module.exports = User;

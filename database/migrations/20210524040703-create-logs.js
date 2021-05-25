module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("logs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      source: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.STRING,
      },
      device_id: {
        type: Sequelize.STRING,
      },
      device_model: {
        type: Sequelize.STRING,
      },
      os_version: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable("logs");
  },
};

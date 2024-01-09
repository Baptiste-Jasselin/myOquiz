const client = require("./database-client");

const dataMapper = {
  async getAllLevels() {
    const result = await client.query('SELECT * FROM "level"'); // { rows, rowCount, ... }
    const levels = result.rows; // [{ ... }, { ... }, { ... }]
    return levels;
  }
};

module.exports = dataMapper;

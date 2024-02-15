const sequelize = require('./connect')
const m = require('./migrations/20240211124552-general_database')

// const migrate = async () => {
//     await m.down(sequelize.getQueryInterface());
//     await m.up(sequelize.getQueryInterface());
// }
// migrate();
module.exports = sequelize;
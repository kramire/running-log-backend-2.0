import { Sequelize } from 'sequelize';
import RunModel from './run.model';
import UserModel from './user.model';

const sequelize = new Sequelize('runninglog2', 'katieramire', '', {
  host: 'localhost',
  dialect: 'postgres'
});

const Run = RunModel(sequelize);
const User = UserModel(sequelize);

User.hasMany(Run);
Run.belongsTo(User);

export default sequelize;

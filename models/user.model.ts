import { DataTypes, Model, Sequelize } from 'sequelize';

export type Unit = 'mi' | 'km';
export type TrainingFor = 'marathon' | 'halfMarathon' | '10k' | '5k';

export const weekStartDict = {
  0: 'Sun',
  1: 'Mon'
};

interface UserInstance extends Model {
  id: number;
  userName: string;
  firstName: string;
  unit: Unit;
  weekStart: number;
  trainingFor: TrainingFor | null;
  sendAlerts: boolean;
}

const UserModel = (sequelize: Sequelize) =>
  sequelize.define<UserInstance>('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unit: {
      type: DataTypes.ENUM('mi', 'km'),
      allowNull: false,
      defaultValue: 'mi'
    },
    weekStart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    trainingFor: {
      type: DataTypes.ENUM('marathon', 'halfMarathon', '10k', '5k'),
      allowNull: true,
      defaultValue: null
    },
    sendAlerts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });

export default UserModel;

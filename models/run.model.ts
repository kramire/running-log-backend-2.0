import { Model, Sequelize, DataTypes } from 'sequelize';
import { Unit } from './user.model';

export type RunType =
  | 'Speed'
  | 'Distance'
  | 'Tempo'
  | 'Easy'
  | 'Intervals'
  | 'Hills'
  | 'Recovery'
  | 'Farlek'
  | 'Progression';

interface RunInstance extends Model {
  distance: number;
  unit: Unit;
  date: string;
  location: string | null;
  note: string | null;
  runType: RunType[];
  latitude: number | null;
  longitude: number | null;
}

const RunModel = (sequelize: Sequelize) =>
  sequelize.define<RunInstance>('Run', {
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      defaultValue: 0
    },
    unit: {
      type: DataTypes.ENUM('mi', 'km'),
      allowNull: false,
      defaultValue: 'mi'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    runType: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: []
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });

export default RunModel;

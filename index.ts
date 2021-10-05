import express from 'express';
import router from './router';
import sequelize from './models';
import cors from 'cors';

const PORT = '4000';

const app = express();

sequelize.sync().then((res) => {
  app.use(cors({ origin: 'http://localhost:3000' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/', router);
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});

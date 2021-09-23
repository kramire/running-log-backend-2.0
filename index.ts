import express from 'express';
import router from './router';
import sequelize from './models';

const PORT = '3000';

const app = express();

sequelize.sync().then((res) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/', router);
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});

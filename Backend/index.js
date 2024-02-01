import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});


app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie');
    await sequelize.sync(); // Synchroniser les modèles avec la base de données
    console.log('Modèles synchronisés avec la base de données');
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    process.exit(1);
  }
});

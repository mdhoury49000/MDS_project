const express = require('express');
const { PrismaClient } = require('@prisma/client');
const mainRoute = require('./routes/index');

const prisma = new PrismaClient();
const app = express();

app.use('/', mainRoute);

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

// Handling database disconnection on application termination
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

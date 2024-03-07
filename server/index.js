import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
// Set up CORS
app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use('/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

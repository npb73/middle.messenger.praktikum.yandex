import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile('./dist/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Проект запущен: http://localhost:${PORT}`);
});

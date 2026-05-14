require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'projeto',
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
  queueLimit: 0,
});

app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, nome, email, criado_em FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.post('/users', async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'nome, email e senha são obrigatórios' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.get('/ordens', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT o.id, o.titulo, o.descricao, o.status, o.criado_em, u.id AS tecnico_id, u.nome AS tecnico_nome
       FROM ordens_servico o
       LEFT JOIN usuarios u ON u.id = o.tecnico_id`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar ordens de serviço' });
  }
});

app.post('/ordens', async (req, res) => {
  const { titulo, descricao, tecnicoId, status } = req.body;
  if (!titulo || !descricao) {
    return res.status(400).json({ error: 'titulo e descricao são obrigatórios' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO ordens_servico (titulo, descricao, tecnico_id, status) VALUES (?, ?, ?, ?)',
      [titulo, descricao, tecnicoId || null, status || 'pendente']
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar ordem de serviço' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
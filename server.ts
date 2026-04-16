import express from 'express';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json()); // Equivalente a body-parser

  // Base de datos simulada (Array local)
  // En un entorno real, aquí te conectarías a MongoDB (Mongoose) o PostgreSQL (Prisma/Sequelize)
  const subscribers: string[] = [];

  // Ruta POST para recibir correos
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    // Validación básica
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Por favor, ingresa un correo válido.' });
    }

    // Verificar si ya existe
    if (subscribers.includes(email)) {
      return res.status(409).json({ error: 'Este correo ya está suscrito.' });
    }

    // Guardar en la "base de datos"
    subscribers.push(email);
    console.log('Nuevos suscriptores:', subscribers);

    // Respuesta exitosa
    return res.status(200).json({ message: '¡Suscripción exitosa! Gracias por unirte.' });
  });

  // Integración con Vite para el Frontend (Desarrollo y Producción)
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

startServer();

import express from 'express';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json()); // Equivalente a body-parser

  // Usar un archivo local para persistir los correos de los suscriptores
  const DB_FILE = path.join(process.cwd(), 'suscriptores.json');

  // Inicializar archivo si no existe
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
  }

  // Ruta POST para recibir correos
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    // Validación básica
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Por favor, ingresa un correo válido.' });
    }

    try {
      // Leer el archivo de base de datos
      const data = fs.readFileSync(DB_FILE, 'utf-8');
      const subscribers: string[] = JSON.parse(data);

      // Verificar si ya existe
      if (subscribers.includes(email)) {
        return res.status(409).json({ error: 'Este correo ya está suscrito.' });
      }

      // Guardar en la "base de datos"
      subscribers.push(email);
      fs.writeFileSync(DB_FILE, JSON.stringify(subscribers, null, 2));
      console.log('Nuevo suscriptor guardado:', email);

      // Respuesta exitosa
      return res.status(200).json({ message: '¡Suscripción exitosa! Gracias por unirte.' });
    } catch (error) {
      console.error('Error guardando el correo:', error);
      return res.status(500).json({ error: 'Error del servidor al guardar el correo.' });
    }
  });

  // Ruta GET para que el administrador pueda ver los correos suscritos
  app.get('/api/suscriptores', (req, res) => {
    try {
      if (fs.existsSync(DB_FILE)) {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        const subscribers = JSON.parse(data);
        return res.status(200).json({
          total: subscribers.length,
          subscribers: subscribers
        });
      } else {
        return res.status(200).json({ total: 0, subscribers: [] });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Error al leer el archivo de suscriptores.' });
    }
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

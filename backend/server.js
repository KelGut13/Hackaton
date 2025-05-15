import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:3000",  // Dirección de tu frontend en desarrollo
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  }));
  
app.use(express.json());

app.post("/api/contacto", async (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.CORREO_ORIGEN,
        pass: process.env.CORREO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${nombre}" <${correo}>`,
      to: process.env.CORREO_DESTINO,
      subject: `Formulario Web: ${asunto}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    res.status(200).json({ message: "Correo enviado correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

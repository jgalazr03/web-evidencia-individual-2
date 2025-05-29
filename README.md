# Encuestas App

### Integrantes del equipo:

* Jesús Alonso Galaz Reyes
* Diego de Jesús Esparza

### Breve descripción:
Una aplicación web para crear encuestas, votar por opciones y visualizar los resultados en tiempo real.
El proyecto está dividido en dos servicios dentro de un monorepo:

* Backend: API REST desarrollada con Express y Prisma, conectada a PostgreSQL.
* Frontend: Aplicación Next.js con TypeScript.

### Cómo correr el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/encuestas-app.git](https://github.com/jgalazr03/web-evidencia-individual-2
   cd encuestas-app
   ```

2. Instala dependencias:

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Configura las variables de entorno:

   En `backend/.env`:

   ```
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/tu_basedatos
   ```

   En `frontend/.env.local`:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:4000/api/polls
   ```

   Asegúrate de tener PostgreSQL corriendo.

4. Corre el backend:

   ```bash
   cd backend
   npx prisma generate
   npx prisma migrate dev --name init
   npm run dev
   ```

5. Corre el frontend:

   ```bash
   cd frontend
   npm run dev
   ```

   La app estará disponible en: [http://localhost:3000](http://localhost:3000)

**Demo funcional:**

* Frontend desplegado: [https://sunny-peace-production.up.railway.app](https://sunny-peace-production.up.railway.app)
* Backend API: [https://web-evidencia-individual-2-production.up.railway.app/api/polls](https://web-evidencia-individual-2-production.up.railway.app/api/polls)

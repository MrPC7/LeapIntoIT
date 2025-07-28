const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const errorHandler = require('./middlewares/error.middleware');
const courseRoutes = require('./routes/course.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const quizRoutes = require('./routes/quiz.routes');


const swaggerDocument = YAML.load('./src/docs/swagger.yaml');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/quizzes', quizRoutes);

// Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error Handler
app.use(errorHandler);

module.exports = app;

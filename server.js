require('dotenv').config();

const path = require('path');
const express = require('express');

const authRoutes = require('./src/routes/auth');
const resumeRoutes = require('./src/routes/resumes');
const publicRoutes = require('./src/routes/public');
const analyticsRoutes = require('./src/routes/analytics');
const sharedRoutes = require('./src/routes/shared');

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/shared', sharedRoutes);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Resume Builder running at http://localhost:${PORT}`));

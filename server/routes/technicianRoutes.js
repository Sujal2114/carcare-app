const express = require('express');
const { getTasks, updateTask } = require('../controllers/technicianController');

const router = express.Router();

// GET /api/technician/tasks
router.get('/tasks', getTasks);

// PATCH /api/technician/tasks/:id
router.patch('/tasks/:id', updateTask);

module.exports = router;
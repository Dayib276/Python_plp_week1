const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Bug = require('../models/Bug');
const bugRoutes = require('../routes/bugs');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/mern-bug-tracker-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Bug API', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Bug1', description: 'Bug description' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Bug1');
  });

  it('should get all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

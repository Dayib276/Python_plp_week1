# MERN Bug Tracker

## Project Setup

1. Install dependencies in both backend and frontend:
   - `npm install` in each directory
2. Set up a `.env` file in backend with your MongoDB URI if needed.
3. Start backend: `node index.js` or `npm start`
4. Start frontend: `npm start`

## Features
- Report, view, update, and delete bugs
- Status tracking (open, in-progress, resolved)

## Testing
- Backend: `npm test` in backend
- Frontend: `npm test` in frontend

## Debugging
- Use console logs, Chrome DevTools, Node Inspector
- Error boundaries in React

## Testing Approach
- Unit tests for helpers/components
- Integration tests for API and UI
- Mocking with jest-mock

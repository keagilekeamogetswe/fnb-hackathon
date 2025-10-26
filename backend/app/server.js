import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 2000;

app.use(express.json()); // Needed to parse JSON body

app.use(session({
  secret: 'dev environment secret',
  resave: false,
  saveUninitialized: true
}));

app.post('/api/report/', (req, res) => {
  const request_id = uuidv4();
  const { email, subject, details } = req.body || {};

  // Initialize reports store if not present
  if (!req.session.reports) {
    req.session.reports = {};
  }

  req.session.reports[request_id] = {
    status: "Report awaiting review",
    subject,
    email,
    details
  };

  res.json({ request_id });
});

app.get('/api/report/', (req, res) => {
  const id = req.query.id;

  if (!req.session.reports || !req.session.reports[id]) {
    return res.status(404).json({ error: 'Report not found' });
  }

  const { status: current_status, ...other } = req.session.reports[id];
  res.json({ current_status, other });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

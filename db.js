const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(path.join(DATA_DIR, 'resume.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT    NOT NULL,
  email         TEXT    NOT NULL UNIQUE,
  password_hash TEXT    NOT NULL,
  role          TEXT    NOT NULL DEFAULT 'user',
  preferred_language TEXT NOT NULL DEFAULT 'en',
  created_at    TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS resumes (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER NOT NULL,
  title         TEXT    NOT NULL DEFAULT 'Untitled Resume',
  slug          TEXT    NOT NULL UNIQUE,
  template      TEXT    NOT NULL DEFAULT 'classic',
  is_public     INTEGER NOT NULL DEFAULT 0,
  full_name     TEXT    DEFAULT '',
  job_title     TEXT    DEFAULT '',
  email         TEXT    DEFAULT '',
  phone         TEXT    DEFAULT '',
  location      TEXT    DEFAULT '',
  website       TEXT    DEFAULT '',
  summary       TEXT    DEFAULT '',
  portfolio_url TEXT    DEFAULT '',
  font          TEXT    NOT NULL DEFAULT 'inter',
  accent_color  TEXT    NOT NULL DEFAULT '',
  section_order TEXT    NOT NULL DEFAULT '["summary","experience","education","skills"]',
  created_at    TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT    NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS educations (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  resume_id      INTEGER NOT NULL,
  institution    TEXT    NOT NULL,
  degree         TEXT    DEFAULT '',
  field_of_study TEXT    DEFAULT '',
  start_year     TEXT    DEFAULT '',
  end_year       TEXT    DEFAULT '',
  grade          TEXT    DEFAULT '',
  FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS experiences (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  resume_id   INTEGER NOT NULL,
  company     TEXT    NOT NULL,
  role        TEXT    DEFAULT '',
  location    TEXT    DEFAULT '',
  start_date  TEXT    DEFAULT '',
  end_date    TEXT    DEFAULT '',
  description TEXT    DEFAULT '',
  FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS skills (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  resume_id INTEGER NOT NULL,
  name      TEXT    NOT NULL,
  level     INTEGER NOT NULL DEFAULT 3,
  FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS projects (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  resume_id   INTEGER NOT NULL,
  title       TEXT    NOT NULL,
  description TEXT    DEFAULT '',
  link        TEXT    DEFAULT '',
  FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS resume_views (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  resume_id  INTEGER NOT NULL,
  viewed_at  TEXT    NOT NULL DEFAULT (datetime('now')),
  referrer   TEXT    DEFAULT '',
  user_agent TEXT    DEFAULT '',
  FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS resume_shares (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  resume_id       INTEGER NOT NULL,
  shared_by       INTEGER NOT NULL,
  shared_with     TEXT    NOT NULL,
  note            TEXT    DEFAULT '',
  shared_at       TEXT    NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE CASCADE,
  FOREIGN KEY (shared_by) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_resumes_user ON resumes(user_id);
CREATE INDEX IF NOT EXISTS idx_edu_resume   ON educations(resume_id);
CREATE INDEX IF NOT EXISTS idx_exp_resume   ON experiences(resume_id);
CREATE INDEX IF NOT EXISTS idx_skill_resume ON skills(resume_id);
CREATE INDEX IF NOT EXISTS idx_proj_resume  ON projects(resume_id);
CREATE INDEX IF NOT EXISTS idx_views_resume ON resume_views(resume_id);
CREATE INDEX IF NOT EXISTS idx_shares_with  ON resume_shares(shared_with);
`);

/* -------- Safe migrations for existing databases -------- */
function addColumn(table, column, type, defaultSql) {
  const cols = db.pragma(`table_info(${table})`).map((c) => c.name);
  if (!cols.includes(column)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${type} DEFAULT ${defaultSql}`);
  }
}

addColumn('users', 'role', 'TEXT', "'user'");
addColumn('users', 'preferred_language', 'TEXT', "'en'");
addColumn('resumes', 'portfolio_url', 'TEXT', "''");
addColumn('resumes', 'font', 'TEXT', "'inter'");
addColumn('resumes', 'accent_color', 'TEXT', "''");
addColumn('resumes', 'section_order', 'TEXT', `'["summary","experience","education","skills"]'`);

module.exports = db;
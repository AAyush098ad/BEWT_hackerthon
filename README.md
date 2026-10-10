# 📄 me resu-me

A full-stack resume builder that creates, customizes, and exports professional resumes. Features **32 templates**, **19 themes**, photo upload, PDF watermark, QR codes with logos, analytics, password-protected sharing, and a guided 6-step wizard.

![me resu-me Banner](https://img.shields.io/badge/me_resu--me-4f46e5?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

---

## 📸 Screenshots

### 🏠 Landing Page
The hero page — clean, dark, and instantly tells you what this does.

![Landing page](docs/landing.png)

---

### 📄 Templates Gallery
Browse all 32 templates with live mini previews before you commit.

![Templates gallery](docs/templates.png)

---

### 🌸 Seasonal Templates
Six hand-crafted seasonal themes: Halloween, Holiday, Spring, Summer, Autumn, Winter.

![Seasonal templates](docs/seasonal-templates.png)

---

### 📥 Import from Templates
Skip the blank page — start with a pre-filled resume for common roles.

![Import from templates](docs/import-modal.png)

---

### 📝 The Wizard
A guided 6-step flow: Heading → Work → Education → Skills → Summary → Finalize.

![Wizard editor](docs/wizard.png)

---

### 🎨 Finalize & Customize
Pick your template, font, accent color, reorder sections, and preview live.

![Finalize step](docs/finalize.png)

---

### 📄 PDF Export
Download a real, print-ready PDF with one click — no print dialog.

![PDF export](docs/pdf-export.png)

---

### 📊 Dashboard with Analytics
See all your resumes with view counts, sparklines, and quick actions.

![Dashboard](docs/dashboard.png)

---

### 📈 Analytics Modal
Total views, last 30 days, and a 14-day activity bar chart.

![Analytics](docs/analytics.png)

---

### 📱 QR Code with Logo
Each published resume gets a branded QR code with your initials in the center.

![QR code](docs/qr-code.png)

---

### 🌙 Dark Mode
Every theme has a dark variant — auto-detects your system preference on first visit.

![Dark mode](docs/dark-mode.png)

---

## ✨ Features

- **📝 Guided 6-Step Wizard** — Heading → Work History → Education → Skills → Summary → Finalize
- **🎨 19 Built-in Themes** — 9 light + 10 dark themes, switchable from a palette menu
- **📄 32 Resume Templates** — 26 classic + 6 seasonal
- **📥 Import from Templates** — 6 pre-filled sample resumes for common roles
- **📸 Photo Upload** — Auto-crops to 240×240 JPEG, ~20 KB per photo
- **💧 PDF Watermark** — Optional "me resu-me" watermark across exports
- **📱 QR Code with Logo** — Branded QR with your initials in the center
- **📊 Analytics** — Views, last 30 days, 14-day bar chart, sparklines
- **🔒 Password Publish** — Gate any public resume with a password
- **📤 Share with Recruiter** — Send to a recruiter email; they see it in their Inbox
- **🌍 Multi-language** — English, Spanish, Hindi
- **🖋️ Font & Color Customization** — 6 fonts, 12 accents + custom picker
- **🔀 Drag-and-Drop Section Reorder** — Reorder any section in seconds
- **🔗 Social Links** — LinkedIn, GitHub, Twitter with inline SVG icons
- **🌙 Auto Dark Mode** — Follows your OS preference
- **👥 Role-Based Dashboards** — Job Seeker or Recruiter
- **📦 Multiple Resumes** — Create, edit, duplicate, and delete as many as you want
- **📱 Fully Responsive** — Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

**Frontend**
- HTML5 · CSS3 (custom properties, Grid, Flexbox, clip-path) · Vanilla JavaScript

**Backend**
- Node.js · Express.js · better-sqlite3 · bcryptjs · jsonwebtoken · dotenv

**Database**
- SQLite (file-based, zero config)

**CDN Libraries**
- html2pdf.js · qrcodejs · Google Fonts (Inter, Playfair, Roboto, Lora, Montserrat, Merriweather, JetBrains Mono)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ ([download](https://nodejs.org))
- npm (comes with Node.js)
- Git ([download](https://git-scm.com))

### Installation

```bash
# 1. Clone
git clone https://github.com/AAyush098ad/BEWT_hackerthon.git
cd BEWT_hackerthon

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and set a strong JWT_SECRET

# 4. Start the server
npm start

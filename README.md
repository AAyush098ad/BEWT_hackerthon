# 📄 me resu-me

A full-stack resume builder that creates, customizes, and exports professional resumes. Features 32 templates, 19 themes, photo upload, PDF watermark, QR codes with logos, analytics, password-protected sharing, and a guided 6-step wizard — all in one self-contained application.

![Resume Builder Banner](https://img.shields.io/badge/me_resu--me-4f46e5?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

---

## ✨ Features

- **📝 Guided 6-Step Wizard** — Heading → Work History → Education → Skills → Summary → Finalize
- **🎨 19 Built-in Themes** — 9 light + 10 dark themes, switchable from a palette menu
- **📄 32 Resume Templates** — 26 classic layouts + 6 seasonal (Halloween, Holiday, Spring, Summer, Autumn, Winter)
- **📥 Import from Templates** — 6 pre-filled sample resumes for common roles (Backend Dev, Frontend Dev, Designer, Data Analyst, Product Manager, Teacher)
- **📸 Photo Upload** — Auto-crops to 240×240 JPEG at ~20 KB per photo
- **💧 PDF Watermark** — Optional "me resu-me" watermark repeated across exported PDFs
- **📱 QR Code with Logo** — Branded QR with your initials in the center
- **📊 Analytics** — Views, last 30 days, 14-day bar chart, sparklines on dashboard cards
- **🔒 Password Publish** — Protect any public resume link with a password
- **📤 Share with Recruiter** — Send a resume to a recruiter email; they see it in a Recruiter Inbox
- **🌍 Multi-language** — English, Spanish, Hindi
- **🖋️ Font & Color Customization** — 6 fonts, 12 accent colors + custom color picker
- **🔀 Drag-and-Drop Section Reorder** — Reorder Summary/Experience/Education/Skills
- **🔗 Social Links** — LinkedIn, GitHub, Twitter with inline SVG icons
- **🌙 Auto Dark Mode** — Follows your OS preference on first visit
- **👥 Role-Based Dashboards** — Register as Job Seeker or Recruiter
- **💾 Real PDF Export** — One-click download of a print-ready, ATS-friendly PDF
- **📦 Multiple Resumes** — Create, edit, duplicate, and delete as many as you want
- **📱 Responsive Design** — Works seamlessly on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** — Semantic markup, single-page-application feel
- **CSS3** — CSS custom properties for theming, Flexbox & Grid, clip-path, animations
- **Vanilla JavaScript** — Hash-based routing, DOM manipulation, fetch API

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — Web framework for REST API
- **better-sqlite3** — Fast, synchronous SQLite driver
- **bcryptjs** — Password hashing
- **jsonwebtoken** — JWT-based authentication
- **dotenv** — Environment variable management

### Database
- **SQLite** — Lightweight, file-based relational database

### Libraries (CDN)
- **html2pdf.js** — Client-side PDF generation
- **qrcodejs** — QR code generation
- **Google Fonts** — Inter, Playfair Display, Roboto, Lora, Montserrat, Merriweather, JetBrains Mono

---

## 📸 Screenshots

> _Add your own screenshots here after hosting. Suggested images:_

| Landing Page | Templates Gallery |
|---|---|
| ![Landing](docs/landing.png) | ![Templates](docs/templates.png) |

| Wizard Editor | PDF Export |
|---|---|
| ![Editor](docs/editor.png) | ![PDF](docs/pdf.png) |

| Dashboard with Analytics | QR Code with Logo |
|---|---|
| ![Dashboard](docs/dashboard.png) | ![QR](docs/qr.png) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later ([download](https://nodejs.org))
- **npm** (comes with Node.js)
- **Git** ([download](https://git-scm.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AAyush098ad/BEWT_hackerthon.git
   cd BEWT_hackerthon

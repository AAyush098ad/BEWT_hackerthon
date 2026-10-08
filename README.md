# 📄 Resume Builder

A full-stack web application that helps users create, customize, and export professional resumes in minutes. Built with a guided step-by-step wizard, 19 themes, and 14 professionally designed templates.

![Resume Builder Banner](https://img.shields.io/badge/Resume-Builder-4f46e5?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- **User Authentication** — Secure registration and login using JWT and bcrypt-hashed passwords
- **Guided 6-Step Wizard** — Heading → Work History → Education → Skills → Summary → Finalize
- **19 Built-in Themes** — 9 light themes and 10 dark themes, switchable from a palette menu
- **14 Resume Templates** — Classic, Modern, Minimal, Creative, Elegant, Bold, Compact, Professional, Two Column, Timeline, Executive, Designer, Tech, Academic
- **Live Preview** — See your resume update in real-time as you type
- **Auto-Save** — Every keystroke is saved to the database automatically
- **Real PDF Export** — One-click download of a print-ready, ATS-friendly PDF using `html2pdf.js`
- **Public Sharing** — Publish any resume and get a unique shareable URL
- **Multiple Resumes** — Create, edit, duplicate, and delete as many resumes as you want
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Dark Mode Support** — Every theme has proper dark/light variants with seamless switching

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** — Semantic markup, single-page-application feel
- **CSS3** — Custom properties (CSS variables) for theming, Flexbox & Grid layouts
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
- **Google Fonts** — Inter & Playfair Display typefaces

---

## 📸 Screenshots

> Add your own screenshots here after hosting. Suggested images:

| Landing Page | Templates Page |
|---|---|
| ![Landing](docs/landing.png) | ![Templates](docs/templates.png) |

| Wizard Editor | PDF Export |
|---|---|
| ![Editor](docs/editor.png) | ![PDF](docs/pdf.png) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** v18 or later ([download](https://nodejs.org))
- **npm** (comes with Node.js)
- **Git** ([download](https://git-scm.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/resume-builder.git
   cd resume-builder
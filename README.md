# Summafy – AI-Powered PDF Summarization Platform

<p align="center">
  <img src="public/file.ico" alt="Summafy Logo" width="100"/>
</p>

**Summafy** is a modern web application that transforms lengthy PDF documents into concise, actionable summaries using artificial intelligence.  
Built with **Next.js 14** and powered by **Google's Gemini AI**, it offers a smart, efficient solution for professionals, researchers, and students to extract key insights quickly.

---

## ✨ Features

- 📱 **Responsive Design** – Optimized for both desktop and mobile devices
- 🔒 **Secure Authentication** – User login/signup powered by **Clerk**
- 📤 **Easy Upload** – Drag-and-drop PDF upload using **Uploadthing**
- 🤖 **AI-Powered** – Summarization using **Google Gemini AI**
- 📋 **Interactive Summaries** – View summaries section-by-section
- ⬇️ **Export** – Download summaries as `.txt` files
- 📊 **Dashboard** – Manage and track all your uploaded documents
- 🎨 **Modern UI** – Clean and intuitive interface built with **Tailwind CSS** & **Shadcn UI**

---

## 🛠️ Tech Stack

| Layer         | Technologies Used                    |
|---------------|---------------------------------------|
| **Frontend**  | Next.js 14, React, TypeScript         |
| **Styling**   | Tailwind CSS, Shadcn UI               |
| **Auth**      | Clerk                                 |
| **Database**  | PostgreSQL (Neon)                     |
| **Storage**   | Uploadthing                           |
| **AI Engine** | Google Gemini AI                      |
| **Deployment**| Vercel                                |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kartikgarg3000/summafy-ai.git
cd summafy-ai

2. Install dependencies
npm install

3. Set up environment variables
Create a .env.local file in the root and add the following:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
UPLOADTHING_TOKEN=your_uploadthing_token
GEMINI_KEY=your_gemini_api_key
DATABASE_URL=your_postgres_db_url

4. Run development server
npm run dev

5. Open in browser
Visit http://localhost:3000 to view the app.

📖 Documentation & Resources

Next.js Documentation
Clerk Authentication Docs
Google Gemini API
Uploadthing Docs

🤝 Contributing
Contributions are welcome! Here's how:
Fork the repository
Create a new branch: git checkout -b feature/YourFeature
Make your changes and commit: git commit -m 'Add YourFeature'
Push to GitHub: git push origin feature/YourFeature
Open a Pull Request

📝 License
This project is licensed under the MIT License.

👏 Acknowledgments
Google Gemini AI – for summarization API
Clerk – for seamless authentication
Vercel – for easy deployment

All contributors and open-source supporters
Made with 💚 by Kartik Garg```

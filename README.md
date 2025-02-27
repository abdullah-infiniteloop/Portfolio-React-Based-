# My Portfolio Website

![Portfolio Preview](assets/preview.png)

Welcome to my personal portfolio website! This project showcases my skills, projects, and experience as a web developer and content creator.

## 🔥 Features

- Responsive & modern UI with **Tailwind CSS**
- Built with **React.js** for fast and dynamic rendering
- Interactive animations and smooth transitions
- **Collaboration & Partnership** page with human verification & guided input steps
- Fully optimized for SEO and performance
- Built with **Framer Motion** for animations
- Utilizes **Lodash** for optimized utility functions

## 📸 Screenshots

![Home Page](assets/home.png)
![Projects Section](assets/projects.png)
![Contact Page](assets/contact.png)

## 🚀 Installation & Setup

Follow these steps to install and run the project locally:

### 1️⃣ Install Node.js
First, download and install **Node.js** (LTS recommended) from the official website:  
🔗 [Download Node.js](https://nodejs.org/)

To verify the installation, run:
```bash
node -v
npm -v
```
If Node.js and npm are not installed, follow the official guide to set them up.

### 2️⃣ Choose an Editor
You can use any code editor of your choice. Recommended editors:
- **VS Code**: [Download](https://code.visualstudio.com/)
- **WebStorm**: [Download](https://www.jetbrains.com/webstorm/)
- **Sublime Text**: [Download](https://www.sublimetext.com/)

### 3️⃣ Clone the Repository
```bash
git clone https://github.com/abdullah-infiniteloop/Portfolio-React-Based.git
cd Portfolio-React-Based
```

### 4️⃣ Install Dependencies
```bash
npm install
```
If any dependencies are missing, install them manually:
```bash
npm install react-router-dom axios lucide-react framer-motion lodash
```
### 5️⃣ Run ESLint and Prettier (Optional, for code formatting)
To ensure clean and consistent code, you can install ESLint and Prettier:
```bash
npm install --save-dev eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier
```
Run ESLint to check for issues:
```bash
npx eslint .
```
Format the code using Prettier:
```bash
npx prettier --write .
```

### 6️⃣ Start Development Server
```bash
npm run dev
```
Then open `http://localhost:5173/` in your browser.

## 🛠️ Build for Production
```bash
npm run build
```
This will generate an optimized `dist/` folder ready for deployment.

## 🚀 Deployment
### Deploy on Vercel
1. Install Vercel CLI:
```bash
npm install -g vercel
```
2. Run the deployment command:
```bash
vercel
```
Follow the instructions to deploy.

### Deploy on Netlify
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```
2. Deploy using:
```bash
netlify deploy --prod
```

## 🔧 Configuration
- Update your **personal details** in `src/data/profile.js`
- Modify the **SEO meta tags** in `index.html`
- Add or update projects in `src/data/projects.js`

## 🎨 Tech Stack
- **Frontend**: React.js, Tailwind CSS, Vite
- **Routing**: React Router
- **HTTP Requests**: Axios
- **Icons**: Lucide React
- **State Management**: React Context API (if required)
- **Animations**: Framer Motion
- **Utility Functions**: Lodash
- **Code Formatting**: ESLint, Prettier
- **Hosting**: Vercel / Netlify

## 🤝 Contributing
Pull requests are welcome! Feel free to open an issue for discussions.

## 📜 License
This project is open-source under the [MIT License](LICENSE).

---
### 📬 Contact Me
📧 Email: your-email@example.com  
🔗 Portfolio: [yourwebsite.com](https://yourwebsite.com)  
🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)

# Helena Zhao Portfolio

A luxurious, lightweight portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, responsive design, and easy content management through data files.

## 🚀 Features

- **Modern Design**: Clean, luxurious aesthetic with gold accents
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered transitions
- **Easy Content Management**: Edit content through data files
- **Fast Performance**: Built with Vite for optimal speed
- **SEO Ready**: Structured for search engine optimization

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display + Inter)

## 📁 Project Structure

```
helenazhao-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Footer.jsx
│   ├── data/               # Content data files
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── assets/             # Images and static files
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd helenazhao-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Content Management

### Updating Experience

Edit `src/data/experience.js` to modify work experience entries:

```javascript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    role: "Job Title",
    period: "Start Date–End Date",
    description: "Brief description",
    bullets: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
];
```

### Updating Projects

Edit `src/data/projects.js` to modify project entries:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "/assets/project-image.png",
    technologies: ["Tech 1", "Tech 2"],
    link: "https://project-link.com"
  }
];
```

### Updating Skills

Edit `src/data/skills.js` to modify the skills list:

```javascript
export const skills = [
  "Skill 1",
  "Skill 2",
  "Skill 3"
];
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2B2B2B',    // Charcoal
      accent: '#D4AF37',     // Gold
      background: '#FDFCFB', // Off-white
    }
  }
}
```

### Fonts

Fonts are imported in `src/index.css` and can be changed by updating the Google Fonts import and Tailwind configuration.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Helena Zhao - [LinkedIn](https://linkedin.com/in/helenazhao) - helena@example.com

---

Made with ❤️ by Helena Zhao
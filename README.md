# Dhanush's 3D Portfolio Website 🚀

A modern, futuristic portfolio website featuring stunning 3D elements, smooth animations, and a premium dark theme with neon blue and purple accents.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-3D-green?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Stunning 3D Graphics**: Interactive 3D elements using Three.js and React Three Fiber
- **🌊 Smooth Animations**: Fluid page transitions with Framer Motion
- **💎 Glassmorphism Design**: Modern UI with glass-effect cards
- **🎭 Dark Theme**: Futuristic dark theme with neon blue and purple glow effects
- **📱 Fully Responsive**: Perfect experience on all devices
- **⚡ Performance Optimized**: Fast loading and smooth interactions
- **🎯 Interactive Elements**:
  - Floating 3D cubes and particles
  - 3D rotating skill spheres
  - Hover effects on project cards
  - Animated contact form
  - Parallax mouse tracking
  - Smooth scroll animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typography**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Git

### Setup Instructions

1. **Clone or navigate to the project directory**

```bash
cd c:\Portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
c:\Portfolio\
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── 3d/
│   │   ├── FloatingCubes.tsx    # 3D floating cubes and particles
│   │   ├── SkillSphere.tsx      # 3D skill spheres
│   │   └── Scene3D.tsx          # 3D scene wrapper
│   └── sections/
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About Me section
│       ├── Skills.tsx           # Skills section
│       ├── Projects.tsx         # Projects section
│       ├── Experience.tsx       # Experience/Education timeline
│       ├── Contact.tsx          # Contact form
│       └── Footer.tsx           # Footer with social links
├── public/
│   └── fonts/                   # 3D text fonts (add if needed)
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Update name and titles
   - Modify typing animation text

2. **About Section** (`components/sections/About.tsx`):
   - Replace profile image/icon
   - Update bio text
   - Modify stats

3. **Skills** (`components/sections/Skills.tsx`):
   - Add/remove skills
   - Change colors

4. **Projects** (`components/sections/Projects.tsx`):
   - Add your projects
   - Update descriptions, tags, links

5. **Experience** (`components/sections/Experience.tsx`):
   - Update education and work experience

6. **Contact** (`components/sections/Contact.tsx`):
   - Configure form submission (integrate with backend/service)

7. **Footer** (`components/sections/Footer.tsx`):
   - Update social media links

### Color Scheme

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0EA5E9',      // Blue
  secondary: '#A855F7',    // Purple
  neon: {
    blue: '#00F0FF',
    purple: '#BF00FF',
  },
}
```

## 🎯 Sections Overview

1. **Hero**: Full-screen intro with 3D background and animated typing
2. **About**: Glassmorphism card with animated profile frame
3. **Skills**: Interactive 3D rotating skill spheres (drag to rotate)
4. **Projects**: 3D hover cards with project showcases
5. **Experience**: Animated timeline with education and work history
6. **Contact**: Floating 3D contact form
7. **Footer**: Neon-styled social links

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy on Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Use Next.js template
- **AWS Amplify**: Follow Next.js deployment guide

## 📝 Additional Notes

### 3D Font for Skills Section

For the 3D text in skill spheres to work properly, you need to add the Helvetiker font file:

1. Download `helvetiker_regular.typeface.json` from [Three.js fonts](https://github.com/mrdoob/three.js/tree/dev/examples/fonts)
2. Place it in `public/fonts/` directory

Or use a different font by updating the font path in `SkillSphere.tsx`.

### Performance Tips

- The 3D elements are optimized but may impact performance on low-end devices
- Consider reducing particle count in `FloatingCubes.tsx` if needed
- Use lazy loading for heavy components

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Dhanush**
- Portfolio: [Your deployed site]
- GitHub: [@dhanush](https://github.com/dhanush)
- LinkedIn: [Dhanush](https://linkedin.com/in/dhanush)

---

Made with ❤️ using Next.js, Three.js, and Framer Motion


# Rascal Network Website

A dynamic, anime-inspired website for the Rascal Network Telegram community. Created by Pranav Ajay.

## 🚀 Features

- Animated Hero Section with Dynamic Text
- Team Members Showcase
- Community Rules Section
- About Section
- Smooth Scrolling Navigation
- Responsive Design
- Animated Background Effects
- Interactive UI Elements

## 💻 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Type Animation

## 📦 Installation

1. Clone the repository:
\```bash
git clone https://github.com/itspranavajay/rascal-network.git
\```

2. Navigate to the project directory:
\```bash
cd rascal-network
\```

3. Install dependencies:
\```bash
npm install -f
\```

4. Run the development server:
\```bash
npm run dev
\```

## 🌐 Hosting on Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
\```bash
npm install -g vercel
\```

3. Login to Vercel:
\```bash
vercel login
\```

4. Deploy the project:
\```bash
vercel
\```

5. For production deployment:
\```bash
vercel --prod
\```

## 📁 Project Structure

\```
rascal-network/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── AnimatedBackground.tsx
│   ├── Hero.tsx
│   ├── Rules.tsx
│   ├── SideNav.tsx
│   └── Team.tsx
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── tailwind.config.js
└── package.json
\```

## 🎨 Customization

### Colors
Edit the Tailwind configuration in `tailwind.config.js`:

\```javascript
theme: {
  extend: {
    colors: {
      "anime-pink": "var(--anime-pink)",
      "anime-blue": "var(--anime-blue)",
      "anime-yellow": "var(--anime-yellow)",
      "anime-green": "var(--anime-green)",
    }
  }
}
\```

### Team Members
Edit the team members data in `components/Team.tsx`:

\```typescript
const teamMembers = [
  { name: "M I K E Y", role: "Founder", icon: Crown, color: "text-yellow-400" },
  // Add more team members...
]
\```

## 🔧 Development

### Running Tests
\```bash
npm run test
\```

### Building for Production
\```bash
npm run build
\```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## ⚡ Performance Optimization

- Images are optimized
- Code splitting implemented
- Dynamic imports where necessary
- Proper caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Creator

**Pranav Ajay**

## 🙏 Acknowledgments

- Rascal Network Community
- All team members and contributors
- Special thanks to the Telegram community

---

Made with ❤️ for Rascal Network
\```
</ReactProject>

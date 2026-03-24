# 🎨 Instagram Filters

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-instagramfilters.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://instagramfilters.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-6-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A fast, browser-based image editor that lets you upload photos, apply **44+ Instagram-style filters**, fine-tune adjustments with custom sliders, and download the result — all without leaving the browser.

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Usage](#-usage)
- [Available Filters](#-available-filters)
- [Custom Adjustments](#-custom-adjustments)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## ✨ Features

| Feature | Description |
|---|---|
| 📤 **Image Upload** | Click anywhere on the canvas to upload a `.png`, `.jpg`, or `.jpeg` image |
| 🎨 **44+ Instagram Filters** | One-click application of classic Instagram-style CSS filters |
| 🎛️ **Custom Adjustments** | Fine-tune Contrast, Brightness, Saturation, Sepia, and Grayscale via sliders |
| 📥 **One-Click Download** | Save the filtered image as a high-quality PNG using the HTML5 Canvas API |
| ⚡ **Blazing Fast** | Powered by Vite for near-instant HMR during development and optimised production builds |
| 📱 **Fully Responsive** | Adapts seamlessly to mobile, tablet, and desktop viewports |
| 🖥️ **No Server Required** | All image processing happens client-side — your photos never leave your device |

---

## 🌐 Live Demo

👉 **[https://instagramfilters.vercel.app/](https://instagramfilters.vercel.app/)**

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| [React](https://react.dev/) | UI framework | 18.x |
| [Vite](https://vitejs.dev/) | Build tool & dev server | 5.x |
| [MUI (Material UI)](https://mui.com/) | Slider UI components | 6.x |
| [instagram.css](https://github.com/picturepan2/instagram.css) | CSS filter library | 0.1.4 |
| [HTML5 Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Filter rendering & image export | — |
| [Vercel](https://vercel.com/) | Deployment & hosting | — |

---

## 📁 Project Structure

```
InstagramFilters/
├── public/
│   ├── Aden.jpg                  # Sample image used in filter previews
│   └── vite.svg
├── src/
│   ├── Component/
│   │   ├── FilterPreview/        # Grid of filter thumbnail previews
│   │   │   ├── FilterPreview.jsx
│   │   │   └── FilterPreview.css
│   │   ├── ImageField/           # Clickable upload area + rendered image
│   │   │   ├── ImageField.jsx
│   │   │   └── ImageField.css
│   │   └── Slider/               # MUI sliders for custom adjustments
│   │       ├── FilterSlider.jsx
│   │       └── FilterSlider.css
│   ├── Utilits/                      # Utilities
│   │   └── Utilitis.jsx          # Filter name → CSS class mapping (44+ filters)
│   ├── App.jsx                   # Root component & state management
│   ├── App.css
│   ├── index.css
│   └── main.jsx                  # React entry point
├── dist/
│   ├── instagram.css             # Full instagram.css filter library
│   └── instagram.min.css         # Minified instagram.css
├── index.html                    # HTML entry point
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (bundled with Node.js)

Verify your versions:

```bash
node -v
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/karthick1005/InstagramFilters.git

# 2. Navigate into the project directory
cd InstagramFilters

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app supports **Hot Module Replacement (HMR)** — changes are reflected instantly.

### Building for Production

```bash
npm run build
```

The optimised output will be placed in the `dist/` folder and is ready to serve with any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

To preview the production build locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📖 Usage

1. **Open the app** in your browser (local or live demo).
2. **Click the upload area** to select a `.png`, `.jpg`, or `.jpeg` image from your device.
3. Choose a mode:
   - **Instagram Filter** tab — Browse the grid of 44+ filter previews and click one to apply it instantly.
   - **Custom** tab — Use the sliders to manually adjust individual properties.
4. Click **Download Image** to save the result to your device as a PNG file.

---

## 🎞️ Available Filters

The following Instagram-inspired filters are available out of the box:

| # | Filter | # | Filter | # | Filter |
|---|--------|---|--------|---|--------|
| 1 | Normal | 2 | 1977 | 3 | Aden |
| 4 | Amaro | 5 | Ashby | 6 | Brannan |
| 7 | Brooklyn | 8 | Charmes | 9 | Clarendon |
| 10 | Crema | 11 | Dogpatch | 12 | Earlybird |
| 13 | Gingham | 14 | Ginza | 15 | Hefe |
| 16 | Helena | 17 | Hudson | 18 | Inkwell |
| 19 | Kelvin | 20 | Kuno | 21 | Lark |
| 22 | Lo-Fi | 23 | Ludwig | 24 | Maven |
| 25 | Mayfair | 26 | Moon | 27 | Nashville |
| 28 | Perpetua | 29 | Poprocket | 30 | Reyes |
| 31 | Rise | 32 | Sierra | 33 | Skyline |
| 34 | Slumber | 35 | Stinson | 36 | Sutro |
| 37 | Toaster | 38 | Valencia | 39 | Vesper |
| 40 | Walden | 41 | Willow | 42 | X-Pro II |

Filters are powered by [`instagram.css`](https://github.com/picturepan2/instagram.css) (MIT License).

---

## 🎛️ Custom Adjustments

When the **Custom** tab is active, five independent sliders let you build your own look:

| Property | Range | Default |
|---|---|---|
| Contrast | 0 – 200% | 100% |
| Brightness | 0 – 200% | 100% |
| Saturation | 0 – 200% | 100% |
| Sepia | 0 – 200% | 0% |
| Grayscale | 0 – 200% | 0% |

All adjustments are applied in real-time via CSS `filter` properties and captured correctly on download.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add your feature"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** and describe your changes

Please make sure your code passes linting (`npm run lint`) before submitting.

---

## 📄 License

This project is distributed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [instagram.css](https://github.com/picturepan2/instagram.css) by [Yan Zhu (picturepan2)](https://github.com/picturepan2) — the CSS filter library that powers all Instagram-style effects.
- [Material UI](https://mui.com/) — for the smooth, accessible slider components.
- [Vite](https://vitejs.dev/) — for the lightning-fast development experience.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/karthick1005">udhayakarthick</a> &copy; 2024
</div>

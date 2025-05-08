# SoftSell - License Resale Marketing Page

A modern, responsive marketing website for reselling software licenses.  
Built with React + Vite and custom CSS, featuring dark/light mode, testimonials, and a clean UI.

---

## Features

- Hero, How it Works, Why Us, Testimonials, Contact Form
- Mobile Responsive, Clean Custom CSS
- Bonus: Mock AI ChatBot, SEO Meta, Light/Dark Mode Ready

---

## Tech Stack

- React + Vite
- Custom CSS (no Tailwind/Bootstrap)

---

## Deployment

### Hosted on GitHub Pages

Your site is (or can be) published at:  
**https://Itz-ZeroTwo.github.io/Marketing-Website**

#### To deploy/update:

1. **Set the homepage in `package.json`:**

"homepage": "https://Itz-ZeroTwo.github.io/Marketing-Website"

text

2. **Install the GitHub Pages deploy tool:**

npm install --save-dev gh-pages

text

3. **Add these scripts to your `package.json`:**

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}

text

4. **(For Vite) Set the base path in `vite.config.js`:**

// vite.config.js
export default {
base: '/Marketing-Website/',
// ...other config
}

text

5. **Build and deploy:**

npm run deploy

text

6. **Configure GitHub Pages:**
- Go to your repository on GitHub
- Click **Settings > Pages**
- Set the source branch to `gh-pages` and folder to `/ (root)`

7. **Visit your site:**  
[https://Itz-ZeroTwo.github.io/Marketing-Website](https://Itz-ZeroTwo.github.io/Marketing-Website)

---

## Local Development

1. Clone the repo  
`git clone https://github.com/Itz-ZeroTwo/Marketing-Website.git`
2. Install dependencies  
`npm install`
3. Run locally  
`npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## Time Taken

~6 hours

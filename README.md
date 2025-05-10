# 🏥 Nurture Home Care Services

**Nurture Home Care Services** is a user-friendly healthcare booking platform that allows patients to log in or sign up to access specialized home-based medical services such as wound care, chronic disease management, pediatric care, and more.

## 🌐 Live Demo

> Coming soon..on github pages

---

## 📁 Project Structure

```
nurture-homecare/
├── index.html           # Main homepage (accessible after login)
├── auth.html            # Login / Signup form
│
├── css/
│   ├── style.css        # Main site styling
│   └── auth.css         # Auth page styling
│
├── js/
│   ├── main.js          # General interactivity
│   └── auth.js          # Login/signup logic
│
├── images/
│   └── background.jpg   # Background image (optional)
└── README.md            # Project overview
```

---

## 🚀 Features

- 🛡️ **Login & Signup Authentication (Simulated using `localStorage`)**
- 📅 **Service Booking with Multi-Select Dropdown**
- 🖼️ **Background Image Support for Login/Signup**
- 💡 **Interactive and Responsive Design**
- 📲 **Social Media Integration (GitHub, Instagram, Facebook, TikTok)**
- 💬 **Expandable Sections for Blog, Testimonials, Contact**
- 🎨 **Customizable via CSS**

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/nurture-homecare.git
   cd nurture-homecare
   ```

2. **Open in browser**:
   - Open `auth.html` first to sign up or login.
   - After logging in, you'll be redirected to `index.html`.

> You can also open `index.html` directly to preview the full site (if you're testing locally).

---

## 🔧 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub Pages or Netlify (optional for deployment)

---

## 🔒 Auth Logic

Authentication is simulated using `localStorage`. Upon successful login or signup:

```js
localStorage.setItem("loggedIn", "true");
```

To protect pages, a redirect is triggered if the user isn't logged in:

```js
if (!localStorage.getItem("loggedIn")) {
    window.location.href = "auth.html";
}
```

---

## 📸 Screenshots

Coming soon...

---

## 👥 Team

- Juliet — Developer, Designer, Innovator  
- GitHub: [@juliet-03](https://github.com/juliet-03)

---

## 📬 Contact

📧 Email: nurturehomecare@example.com  
📱 Instagram: [@nurturehomecare](https://www.instagram.com/nurturehomecare?igsh=MTAyY3BmaHU3bHo0OQ==)  
📘 Facebook: [Homebased Care Redefined](https://www.facebook.com/homebasedcareredifined)  
🎵 TikTok: Coming soon  
💻 GitHub: [@juliet-03](https://github.com/juliet-03)

---

## ✅ Future Improvements

- Real backend for login/signup
- Appointment confirmation emails
- Admin panel for service management
- Enhanced health blog system

---


v

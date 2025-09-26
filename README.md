# ✨ Ticket Management Dashboard

[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![React-Toastify](https://img.shields.io/badge/React--Toastify-9.1-ff9800?logo=react)](https://fkhadra.github.io/react-toastify/introduction)

> **Live Demo ➡️ [projectcustomersupport.surge.sh](http://projectcustomersupport.surge.sh/)**

A modern, responsive **Customer Support Ticket Dashboard**  
that lets you track tickets, move them to **In-Progress**,  
mark them **Complete**, and celebrate with stylish **toast notifications**. 🚀

---

## 🎬 Quick Preview

![Ticket Dashboard Demo](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnltOXU3cDE0anl0djd6NXJjOHU5dmdocmlsZWVuZDRmZ2ZxemF3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GghGKaZ8JeHJx0apQC/giphy.gif)

---

## ⚡ Features

- **🧭 Smart Navbar** – Logo on the left, menu & **New Ticket** button on the right.
- **🎨 Figma-inspired Banner** – Beautiful linear-gradient background.
- **📊 Real-Time Stats** – Live counters for:
  - **In-Progress** tickets
  - **Resolved** tickets (start at `0`).
- **🎟️ Ticket Cards** – Display all ticket details:
  - `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.
- **🔄 Interactive Task Status**:
  - Click a card ➡️ moves it to **Task Status** section & shows a toast.
  - **Complete** button ➡️ removes from Task Status, adds to **Resolved List**.
  - Counters update instantly.
- **🔔 Toast Notifications** – Replaced boring `alert()` with **React-Toastify**.
- **📱 Fully Responsive** – Optimized for mobile, tablet & desktop.

---

## 🛠️ Tech Stack

| Technology            | Role                        |
| --------------------- | --------------------------- |
| ⚛️ **React + JSX**    | Component-based UI          |
| 🎨 **Tailwind CSS**   | Modern, responsive styling  |
| 🔔 **React-Toastify** | Elegant toast notifications |
| 📄 **JSON**           | Local ticket data source    |

---

## 💡 Key Learnings

- Difference between **State & Props** and how to share state across components.
- Using **`useState` Hook** for dynamic UI updates.
- **Event Handling** in React for interactive components.
- Managing a small app-level state without external libraries.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/TusharChow20/projectCustomerSupport.git

# Install dependencies
npm install

# Run locally
npm start
```

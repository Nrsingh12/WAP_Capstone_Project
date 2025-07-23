# 🛍️ React Shopping Cart Project

[![React](https://img.shields.io/badge/React-v18-blue.svg)](https://reactjs.org)
[![Google OAuth](https://img.shields.io/badge/Google%20OAuth-2.0-orange.svg)](https://developers.google.com/identity/protocols/oauth2)
[![Responsive](https://img.shields.io/badge/Responsive-✅-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive)

A modern, minimalist React.js shopping cart application featuring product browsing with category filtering, cart management with quantity updates, simulated payment, and secure Google login/registration. Users must log in or register before shopping or checking out.

## 🚀 Features

- 🛍️ **Product Browsing:** Fetches products and categories from [Fake Store API](https://fakestoreapi.com/)
- 🎯 **Category Filter:** Allows filtering products by selectable categories
- 🛒 **Shopping Cart:** Add/remove products, update quantities, and view subtotal and total
- 🔐 **User Authentication:** Google OAuth 2.0 login and registration using `@react-oauth/google`
- 🔑 **Protected Routes:** Access to shopping functionalities (cart, payment) requires authentication
- 💳 **Simulated Payment:** Simple payment flow mimicking checkout process
- 💾 **Persistent State:** Cart and user info stored locally to persist on page reload
- 📱 **Responsive Design:** Works seamlessly on desktop and mobile devices
- 🎨 **Professional, Clean UI:** Minimalist styling with a focus on usability
- 📝 **User Profile:** Add and manage contact number and address information

## 🎮 Demo

Live Demo: [https://wap-capstone-project-devbynishant.vercel.app/](https://wap-capstone-project-devbynishant.vercel.app/)

Try the application live with all features including product browsing, cart management, and Google authentication.

## 🛠️ Tech Stack

- **Frontend:**
  - React.js (with hooks and React Router v6)
  - Google OAuth via `@react-oauth/google`
  - `jwt-decode` for decoding Google credentials
  - Fake Store API for products and categories
  - CSS modules for clean, modular styling

## 📁 Project Structure

```
src/
├── components/      # Reusable components + their styles
│   ├── Navbar       # Navigation component
│   ├── ProductList  # Product display and filtering
│   ├── ProductCard  # Individual product display
│   ├── Cart         # Shopping cart management
│   ├── CartItem     # Individual cart item
│   ├── PaymentForm  # Payment form
│   └── Footer       # Footer component
├── pages/           # Route page components
│   ├── Home         # Main landing page
│   ├── CartPage     # Cart management page
│   ├── ProfilePage  # User profile management
│   ├── AuthPage     # Combined login/register
│   └── PaymentPage  # Payment processing
├── App.js           # Main app with routing
├── index.js         # App entry point
├── App.css          # Global styles
└── index.css        # Base styles
```

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (v14 or newer recommended)
- npm (v6 or newer)

### 📦 Installation

1. Clone the repository:

```bash
git clone 
cd 
```

2. Install dependencies:

```bash
npm install
npm install @react-oauth/google jwt-decode react-router-dom
```

3. Add your Google OAuth **Client ID**:

- Obtain your Client ID from [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
- Update `src/index.js`:

```jsx
<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* ... */} </GoogleOAuthProvider>
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

1. Register or Login with your Google account
2. Browse products and filter by category
3. Add items to your cart
4. View and edit your cart
5. Manage your profile information (contact and address)
6. Proceed to the payment page (login required)
7. Simulate payment to complete your order

## 📚 Directory & File Overview

- **src/components:** Reusable UI components
- **src/pages:** Route-specific components
- **src/App.js:** Main application setup and routing
- **src/index.js:** Application entry point with authentication setup

## 🔐 Security Notes

- User authentication is handled on the client side using Google OAuth
- User data is stored in `localStorage` for persistence
- For production use, consider:
  - Backend integration for secure token verification
  - Enhanced security measures
  - Production-grade payment processing

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Uses Fake Store API for product data
- Inspired by modern e-commerce applications

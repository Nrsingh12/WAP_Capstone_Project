# React Shopping Cart Project with Google Authentication

A modern, minimalist React.js shopping cart application featuring product browsing with category filtering, cart management with quantity updates, simulated payment, and secure Google login/registration. Users must log in or register before shopping or checking out.

---

## Features

- **Product Browsing:** Fetches products and categories from [Fake Store API](https://fakestoreapi.com/)
- **Category Filter:** Allows filtering products by selectable categories
- **Shopping Cart:** Add/remove products, update quantities, and view subtotal and total
- **User Authentication:** Google OAuth 2.0 login and registration using `@react-oauth/google`
- **Protected Routes:** Access to shopping functionalities (cart, payment) requires authentication
- **Simulated Payment:** Simple payment flow mimicking checkout process
- **Persistent State:** Cart and user info stored locally to persist on page reload
- **Responsive Design:** Works seamlessly on desktop and mobile devices
- **Professional, Clean UI:** Minimalist styling with a focus on usability

---

## Demo

*(Optionally add a deployed site link if available)*

---

## Tech Stack

- React.js (with hooks and React Router v6)
- Google OAuth via `@react-oauth/google`
- `jwt-decode` for decoding Google credentials
- Fake Store API for products and categories
- CSS modules for clean, modular styling

---

## Folder Structure

```
src/
  ├── components/     # Reusable components + their styles
  ├── pages/          # Route page components
  ├── App.js          # Main app with routing and authentication wrapper
  ├── index.js        # App entry point with GoogleOAuthProvider
  ├── App.css         # Global styles
  └── index.css       # Base styles
```

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)
- npm (v6 or newer)

### Installation

1. Clone the repository:

```
git clone 
cd 
```

2. Install dependencies:

```
npm install
npm install @react-oauth/google jwt-decode react-router-dom
```

3. Add your Google OAuth **Client ID**:

- Obtain your Client ID from [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
- Update `src/index.js`:

```
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* ... */} </GoogleOAuthProvider>
```

4. Start the development server:

```
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- Register or Login with your Google account.
- Browse products, filter by category, and add items to your cart.
- View and edit your cart.
- Proceed to the payment page (login required).
- Simulate payment to clear the cart.

---

## Directory & File Overview

- **src/components:** Navbar, ProductList, ProductCard, Cart, CartItem, LoginForm, RegistrationForm, PaymentForm, Footer
- **src/pages:** Home, CartPage, LoginPage, RegisterPage, PaymentPage
- **src/App.js:** Sets up routing and protection of private routes using `RequireAuth`
- **src/index.js:** Wraps the app in Google OAuth provider with your Client ID.

---

## Notes

- User authentication is handled on the client side and uses `localStorage` for simple persistence.
- For production, consider integrating a secure backend for token verification and data management.
- The payment feature is a placeholder simulating a payment flow for demonstration purposes.

---

Thanks for checking out this project.
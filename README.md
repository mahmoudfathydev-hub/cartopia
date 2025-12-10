# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# E-Commerce Application

A modern, responsive e-commerce platform built with React, Vite, and Framer Motion. This application provides a seamless shopping experience with smooth animations and intuitive user interface.

## 🚀 Features

- **Product Browsing**: View products in a responsive grid layout
- **Product Details**: Detailed product pages with image gallery
- **Shopping Cart**: Add/remove items, update quantities
- **Category Filtering**: Browse products by category
- **Search Functionality**: Find products quickly
- **Smooth Animations**: Page transitions and hover effects
- **Responsive Design**: Works on all device sizes

## 🛠️ Technologies Used

- **Frontend**: React 18
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Styling**: CSS Modules
- **Build Tool**: Vite
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── header/          # Header components
│   ├── slideProducts/   # Product carousel components
│   ├── Pagetransition.jsx # Page transition animations
│   └── ScrollToTop.jsx  # Scroll to top on route change
├── context/             # React context providers
├── pages/               # Page components
│   ├── Home/            # Home page
│   ├── cart/            # Shopping cart page
│   ├── category/        # Category listing page
│   ├── productdetails/  # Product details page
│   └── search/          # Search results page
└── App.jsx              # Main application component
```

## 🎯 Key Components

### 1. Header Components

- **TopHeader**: Displays site branding and navigation
- **BtmHeader**: Contains category navigation and search functionality

### 2. Product Components

- **ProductCard**: Displays product preview with image, title, price, and add to cart button
- **ProductDetails**: Shows detailed product information, images, and purchase options
- **ProductCarousel**: Displays featured or related products in a sliding carousel

### 3. Animation System

- **Page Transitions**: Smooth transitions between routes using Framer Motion
- **Hover Effects**: Interactive hover states on buttons and cards
- **Loading States**: Animated loading indicators

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:5173](http://localhost:5173) to view the application

## 🎨 Styling

- CSS Modules for scoped styling
- Responsive design using CSS Grid and Flexbox
- Custom animations and transitions

## 🌟 Features in Detail

### 1. Product Browsing

- Responsive grid layout
- Category filtering
- Sort and filter options
- Infinite scroll (if implemented)

### 2. Shopping Cart

- Add/remove items
- Update quantities
- Calculate totals
- Persist cart state

### 3. Animations

- Page transitions with Framer Motion
- Hover effects on interactive elements
- Loading skeletons
- Toast notifications

## 📝 Notes

- This project uses React 18+ features including hooks
- All API calls are mocked using a local data file
- The application is optimized for performance with code splitting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

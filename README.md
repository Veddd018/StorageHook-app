# Session Storage App

A modern React application built with Vite that demonstrates the practical use of browser storage APIs (localStorage and sessionStorage) through an interactive interface. This app showcases a custom React hook for managing persistent data with theme switching capabilities.

## Features

- **Local Storage Demo**: Persist data across browser sessions
- **Session Storage Demo**: Temporary storage that clears when the tab is closed
- **Custom Storage Hook**: Reusable `useStorage` hook for easy storage management
- **Theme Toggle**: Switch between light and dark themes with system preference detection
- **Responsive Design**: Clean, modern UI with animated background elements
- **Error Handling**: Robust error handling for storage operations

## Technologies Used

- **React 19**: Latest React with modern hooks
- **Vite**: Fast build tool and development server
- **JavaScript ES6+**: Modern JavaScript features
- **CSS**: Custom styling with CSS variables for theming
- **ESLint**: Code linting for quality assurance

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd session-storage-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

## Usage

1. **Local Storage**: Enter a username in the cyan-themed card. This data persists even after closing and reopening the browser.

2. **Session Storage**: Enter a quick note in the purple-themed card. This data clears when you close the browser tab.

3. **Theme Toggle**: Click the sun/moon icon in the top-right to switch between light and dark themes. The app respects your system's theme preference by default.

## Project Structure

```
session-storage-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css          # Main application styles
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.jsx         # Application entry point
│   └── useStorage.js    # Custom storage hook
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Custom Hook: useStorage

The `useStorage` hook provides a simple interface for working with browser storage:

```javascript
const [value, setValue, clearValue] = useStorage(key, defaultValue, storageObject);
```

- `key`: Storage key
- `defaultValue`: Default value if key doesn't exist
- `storageObject`: `localStorage` (default) or `sessionStorage`

## Browser Support

This application works in all modern browsers that support:
- ES6 modules
- localStorage and sessionStorage APIs
- CSS custom properties (variables)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Ved Patel - [GitHub](https://github.com/Veddd018)


Photos 

<img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/d69fdd88-b45a-4c95-89aa-3c60f613f430" />

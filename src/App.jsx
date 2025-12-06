import React, { useEffect } from 'react';
import { useStorage } from './useStorage';
import './App.css';

function App() {
  const [username, setUsername, clearUser] = useStorage('user-name', '');
  const [draft, setDraft, clearDraft] = useStorage('session-draft', '', sessionStorage);

  // Add theme state stored in localStorage with default '' to detect system
  const [theme, setTheme] = useStorage('theme', '');

  // Detect system preference
  const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Applied theme: explicit user `theme` takes precedence, otherwise use system
  const appliedTheme = theme || (systemPrefersDark ? 'dark' : 'light');

  // Apply theme to the document root so CSS selectors like :root[data-theme] work
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  // Toggle theme: if current applied theme is dark -> switch to light, else dark
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || (systemPrefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <div className="app-body">
      {/* 1. BACKGROUND ELEMENTS */}
      <div className="background-grid"></div>
      <div className="glow-spot spot-1"></div>
      <div className="glow-spot spot-2"></div>

      {/* 2. MAIN CONTENT */}
      <div className="content-container">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={appliedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={appliedTheme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
          {appliedTheme === 'dark' ? '☀️' : '🌙'}
        </button>

        <header className="main-header">
          <h1>Storage<span>Hook</span></h1>
          <p>Interactive Data Persistence</p>
        </header>

        <div className="cards-wrapper">

          {/* CARD 1: LOCAL STORAGE (Cyan Theme) */}
          <div className="card cyan-theme">
            <div className="card-icon">💾</div>
            <h2>Local Storage</h2>
            <p className="subtitle">Saves forever</p>

            <div className="input-box">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter name..."
              />
            </div>

            <div className="output">
              Stored: <span>{username || '...'}</span>
            </div>

            <button onClick={clearUser}>Clear Local</button>
          </div>

          {/* CARD 2: SESSION STORAGE (Purple Theme) */}
          <div className="card purple-theme">
            <div className="card-icon">⚡</div>
            <h2>Session Storage</h2>
            <p className="subtitle">Clears on close</p>

            <div className="input-box">
              <label>Quick Note</label>
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Enter note..."
              />
            </div>

            <div className="output">
              Stored: <span>{draft || '...'}</span>
            </div>

            <button onClick={clearDraft}>Clear Session</button>
          </div>

        </div>

        {/* ABOUT SECTION */}
        <div className="about-section">
          <h2>About</h2>
          <p className='post-body' style={{marginTop: 8}}>
            Ved is a passionate developer who enjoys building clean and
            functional web applications.
          </p>
          <h3>Social Links</h3>
          <p className='post-body' style={{marginTop: 14}}>
            <a href='https://github.com/Veddd018' target='_blank' rel='noopener noreferrer' className='post-body-a' >
              <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' style={{opacity: 0.9}}>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
              <span>@Veddd018</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

const TogglePosition = {
  dark: 'translate-x-0',
  light: 'translate-x-5',
  pink: 'translate-x-9',
};

type Theme = 'dark' | 'light' | 'pink';

export default function Header() {
  const [theme, setTheme] = useState<Theme>(() => {
    const persistedTheme = localStorage.getItem('theme');
    if (!persistedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return persistedTheme as Theme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      document.body.classList.remove('pink');
    } else if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.remove('pink');
    } else {
      document.body.classList.add('pink');
      document.body.classList.remove('dark');
      document.body.classList.remove('light');
    }
  }, [theme]);

  return (
    <header className="flex items-center justify-between">
      <h1 className="font-bold text-3xl">calc</h1>

      <div className="flex items-baseline gap-6">
        <span className="uppercase text-sm font-semibold">theme</span>

        <div className="relative flex items-center justify-start w-14 h-5 p-1 bg-keypad rounded-full">
          <div className="absolute inset-0 -top-full grid grid-cols-3 text-center">
            <label
              htmlFor="dark"
              className="cursor-pointer font-semibold text-sm"
              title="Switch to Dark Theme"
            >
              1
              <input
                type="radio"
                className="sr-only"
                name="theme"
                id="dark"
                checked={theme === 'dark'}
                onChange={() => setTheme('dark')}
              />
            </label>
            <label
              htmlFor="light"
              className="cursor-pointer font-semibold text-sm"
              title="Switch to Light Theme"
            >
              2
              <input
                type="radio"
                className="sr-only"
                name="theme"
                id="light"
                checked={theme === 'light'}
                onChange={() => setTheme('light')}
              />
            </label>
            <label
              htmlFor="pink"
              className="cursor-pointer font-semibold text-sm"
              title="Switch to Pink Theme"
            >
              3
              <input
                type="radio"
                className="sr-only"
                name="theme"
                id="pink"
                checked={theme === 'pink'}
                onChange={() => setTheme('pink')}
              />
            </label>
          </div>
          {/* Switch Ball */}
          <span
            className={`bg-key-accent h-full aspect-square rounded-full pointer-events-none transition-transform duration-500 ${TogglePosition[theme]}`}
          />
        </div>
      </div>
    </header>
  );
}

const KEY = 'theme';

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (sun && moon) {
    sun.style.display = theme === 'dark' ? 'none' : 'block';
    moon.style.display = theme === 'dark' ? 'block' : 'none';
  }
}

export function initThemeToggle() {
  const saved = localStorage.getItem(KEY);
  const theme = saved || (systemPrefersDark() ? 'dark' : 'light');
  applyTheme(theme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    applyTheme(next);
    console.log('Applied theme:', theme);
  });
}


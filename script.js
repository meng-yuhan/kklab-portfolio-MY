(function () {
  const root = document.documentElement;
  root.classList.add('js-enabled');

  const langButton = document.querySelector('[data-lang-toggle]');
  const themeButton = document.querySelector('[data-theme-toggle]');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Some local file previews block storage. The page should still render.
    }
  }

  function getInitialTheme() {
    const savedTheme = readStorage('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getInitialLanguage() {
    const savedLang = readStorage('lang');
    if (savedLang === 'ja' || savedLang === 'en') {
      return savedLang;
    }
    return navigator.language && navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    writeStorage('theme', theme);
    const isDark = theme === 'dark';
    themeButton.textContent = isDark ? '🌙' : '☀️';
    themeButton.setAttribute('aria-pressed', String(isDark));
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function applyLanguage(lang) {
    root.lang = lang;
    writeStorage('lang', lang);
    document.querySelectorAll('[data-i18n-jp][data-i18n-en]').forEach((element) => {
      element.textContent = element.dataset[lang === 'ja' ? 'i18nJp' : 'i18nEn'];
    });
    const isJapanese = lang === 'ja';
    langButton.textContent = isJapanese ? 'JP' : 'EN';
    langButton.setAttribute('aria-pressed', String(!isJapanese));
    langButton.setAttribute('aria-label', isJapanese ? 'Switch language to English' : '日本語に切り替える');
  }

  function setupReveal() {
    const targets = Array.from(document.querySelectorAll('.reveal'));
    if (motionQuery.matches || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    targets.forEach((target) => observer.observe(target));
  }

  themeButton.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  langButton.addEventListener('click', () => {
    applyLanguage(root.lang === 'ja' ? 'en' : 'ja');
  });

  applyTheme(getInitialTheme());
  applyLanguage(getInitialLanguage());
  setupReveal();
})();

export const getSectionIdFromPath = (path = window.location.pathname) => {
  const normalized = path === '/' ? 'home' : path.replace(/^\//, '').split('/')[0];
  return normalized || 'home';
};

export const navigateToSection = (sectionId) => {
  const cleanPath = sectionId === 'home' ? '/' : `/${sectionId}`;

  if (window.location.pathname !== cleanPath) {
    window.history.pushState({}, '', cleanPath);
  }

  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

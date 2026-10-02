function setLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setLang === lang);
  });
  localStorage.setItem('dakhlek-site-lang', lang);
}
(function(){
  const saved = localStorage.getItem('dakhlek-site-lang');
  setLang(saved === 'en' ? 'en' : 'ar');
})();

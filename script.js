// تفعيل الأنيميشن AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true, offset: 120 });
});

// نظام الثيم
const themeBtn = document.getElementById('theme-toggle');
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeBtn.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}
const savedTheme = localStorage.getItem('theme') || 'dark'; // افتراضي مظلم
applyTheme(savedTheme);
themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
});

// نظام اللغة
const langBtn = document.getElementById('lang-toggle');
const translations = { en: { btn: "العربية", dir: "ltr" }, ar: { btn: "English", dir: "rtl" } };
function applyLang(lang) {
    document.documentElement.setAttribute('dir', translations[lang].dir);
    langBtn.innerText = translations[lang].btn;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-en]').forEach(el => el.innerText = el.getAttribute(`data-${lang}`));
}
const savedLang = localStorage.getItem('lang') || 'en';
applyLang(savedLang);
langBtn.addEventListener('click', () => applyLang(document.documentElement.getAttribute('dir') === 'ltr' ? 'ar' : 'en'));

// Lightbox
const lb = document.createElement('div');
lb.style = "display:none; position:fixed; z-index:9999; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); align-items:center; justify-content:center; cursor:zoom-out;";
lb.innerHTML = `<img id="lb-img" style="max-width:90%; max-height:85%; border-radius:15px; border:3px solid white;">`;
document.body.appendChild(lb);
document.querySelectorAll('.clickable').forEach(img => {
    img.onclick = () => { lb.style.display='flex'; document.getElementById('lb-img').src=img.src; document.body.style.overflow='hidden'; }
});
lb.onclick = () => { lb.style.display='none'; document.body.style.overflow='auto'; };
const DEFAULT_LANG = "ca";
const LANGS = ["ca", "es", "en"];
const HTML_LANG = { ca: "ca", es: "es", en: "en" };

document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-btn");
    const translatable = document.querySelectorAll("[data-lang-ca]");

    const setLanguage = (lang) => {
        if (!LANGS.includes(lang)) {
            return;
        }

        document.documentElement.lang = HTML_LANG[lang];

        translatable.forEach((element) => {
            const text = element.getAttribute(`data-lang-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });

        langButtons.forEach((button) => {
            const isActive = button.dataset.lang === lang;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    };

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage(DEFAULT_LANG);
});

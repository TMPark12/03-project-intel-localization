const languageSelect = document.querySelector("#language-select");
const rightToLeftLanguages = new Set(["ar", "fa", "he", "ur"]);

function applyLanguage(language) {
  const direction = rightToLeftLanguages.has(language) ? "rtl" : "ltr";

  document.documentElement.lang = language;
  document.documentElement.dir = direction;
}

const savedLanguage = localStorage.getItem("site-language") || languageSelect.value;
languageSelect.value = savedLanguage;
applyLanguage(savedLanguage);

languageSelect.addEventListener("change", (event) => {
  const language = event.target.value;

  applyLanguage(language);
  localStorage.setItem("site-language", language);
});

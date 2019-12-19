const getLanguage = context => {
    if (localStorage.getItem("language")) return localStorage.getItem("language");
    return context.language;
};
export { getLanguage };
import styles from "./page.module.css";

// contactHref must be locale-aware (/contact or /pl/contact), see getPathname in @/i18n/navigation.
export function getHighlightedString(translations, key, { contactHref = '/contact' } = {}) {
    return translations.markup(
        key, 
        {
          highlighted: (chunks) => `<span class=${styles.highlighted}>${chunks}</span>`,
          contactLink: (chunks) => `<a href="${contactHref}" class=${styles.highlighted}>${chunks}</a>`
        });
}

export function getBoldString(translations, key) {
    return translations.markup(key, {bold: (chunks) => `<b>${chunks}</b>`});
}
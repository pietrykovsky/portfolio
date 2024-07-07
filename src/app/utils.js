import styles from "./page.module.css";

export function getHighlightedString(translations, key) {
    return translations.markup(
        key, 
        {
          highlighted: (chunks) => `<span class=${styles.highlighted}>${chunks}</span>`
        });
}

export function getBoldString(translations, key) {
    return translations.markup(key, {bold: (chunks) => `<b>${chunks}</b>`});
}
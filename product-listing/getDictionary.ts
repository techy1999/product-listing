
const dictionaries: any = {
    en: () => import('./dictionaries/en.json').then(r => r.default),
    de: () => import('./dictionaries/de.json').then(r => r.default),
}

export const getDictionary = (lang: string) => {
    return dictionaries[lang]();
}
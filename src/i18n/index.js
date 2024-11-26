import { createI18n } from 'vue-i18n'
import en from "./locales/en"
import pl from "./locales/pl"

const messages = {
    en,
    pl
}

export const i18n = createI18n({
    locale: 'pl',
    fallbackLocale: 'en',
    messages
})
import * as validators from '@vuelidate/validators'
import { i18n } from "@/i18n"

// or import { createI18nMessage } from '@vuelidate/validators'
const { createI18nMessage } = validators

// Create your i18n message instance. Used for vue-i18n@9
const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
// for vue-i18n@8
// const withI18nMessage = createI18nMessage({ t: i18n.t.bind(i18n) })

const mustBeInteger = (value) =>
    Array.isArray(eval(value)) ?
        !eval(value).some(v => !Number.isInteger(v)) :
        !value.split(',').map(Number).some(v => !Number.isInteger(v))

// wrap each validator.
export const required = withI18nMessage(validators.required)
export const integerArrayRequired = withI18nMessage(mustBeInteger)
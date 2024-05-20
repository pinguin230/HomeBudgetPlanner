import Joi from "joi";

const userRegisterEntitySchema = Joi.object({
    first_name : Joi.string()
        .trim()
        .required()
        .pattern(/^[a-zA-Zа-яА-ЯіІїЇєЄ`'"\s]+$/)
        .messages({
            'string.base': 'Ім\'я повинно бути рядком.',
            'string.empty': 'Введіть, будь ласка, ваше ім\'я.',
            'string.pattern.base': 'Ім\'я може містити лише літери, пробіли та символи `\'"`.',
        }),
    last_name : Joi.string()
        .required()
        .trim()
        .pattern(/^[a-zA-Zа-яА-ЯіІїЇєЄ`'"\s]+$/)
        .messages({
            'string.base': 'Прізвище повинно бути рядком.',
            'string.empty': 'Введіть, будь ласка, ваше Прізвище.',
            'string.min': 'Прізвище повинно містити принаймні {#limit} символи.',
            'string.max': 'Прізвище не повинно перевищувати {#limit} символів.',
            'string.pattern.base': 'Прізвище може містити лише літери, пробіли та символи `\'"`.',
        }),
    email: Joi.string()
        .trim()
        .email()
        .required()
        .messages({
            'string.base': 'Електронна пошта повинна бути рядком.',
            'string.empty': 'Введіть, будь ласка, вашу електронну пошту.',
            'string.email': 'Введіть правильну електронну пошту.',
        }),
    password: Joi.string()
        .trim()
        .min(8)
        .max(30)
        .pattern(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]).{8,30}$/)
        .required()
        .messages({
            'string.base': 'Пароль повинен бути рядком.',
            'string.empty': 'Введіть, будь ласка, ваш пароль.',
            'string.min': 'Пароль повинен містити принаймні {#limit} символів.',
            'string.max': 'Пароль не повинен перевищувати {#limit} символів.',
            'string.pattern.base': 'Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ.',
        }),

});
const userLoginEntitySchema= Joi.object({
    email : Joi.string()
                .email()
                .required(),
    password:Joi.string()
                .required()

});
export { userRegisterEntitySchema ,userLoginEntitySchema }
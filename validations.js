import {body} from "express-validator";

export const loginValidation=[
    body('email','ваша электронная почта или пароль неверны').isEmail(),
    body('password','ваша электронная почта или пароль неверны').isLength({min:5}),
];
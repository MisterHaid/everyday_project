import { body} from "express-validator";

export const registerValidation=[
    body('email',' Wrong email format').isEmail(),
    body('password', ' The password size is minimum 5 symbols').isLength({min:5}),
    body('fullName','Input your fullname').isLength({min:1}),
    body('avatarUrl',' Wrong avatar link').optional().isURL(),
];
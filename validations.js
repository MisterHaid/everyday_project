import { body} from "express-validator";

export const loginValidation=[
    body('email',' Wrong email format').isEmail(),
    body('password', ' The password size is minimum 5 symbols').isLength({min:5}),
];

export const registerValidation=[
    body('email',' Wrong email format').isEmail(),
    body('password', ' The password size is minimum 5 symbols').isLength({min:5}),
    body('fullName','Input your fullname').isLength({min:1}),
    body('avatarUrl',' Wrong avatar link').optional().isURL(),
];

export const postCreateValidation=[
    body('title',' Put title of post').isLength({min:3}).isString(),
    body('text', ' Put text of post ').isLength({min:3}).isString(),
    body('tags','Wrong format of tags').optional().isString(),
    body('imageUrl',' Wrong link').optional().isString(),
];
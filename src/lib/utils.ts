import * as Yup from 'yup'

export const authFormSchema = (type: string) => {
    switch (type) {
        case 'sign-up':
            return Yup.object({
                name: Yup.string()
                    .min(2, 'Name must have at least 2 characters')
                    .required('Name is required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
                    .required('Email is required'),
                password: Yup.string().min(8, 'Password must be at least 8 characters long')
                    .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
                    .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
                    .matches(/(?=.*\d)/, 'Password must contain at least one number')
                    .required('Password is required')
            });
        case 'sign-in':
            return Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
                    .required('Email is required'),
                password: Yup.string().required('Password is required')
            });
        case 'reset-password':
            return Yup.object({
                email: Yup.string().required('Email is required')
            });
        case 'new-password':
            return Yup.object({
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters long')
                    .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
                    .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
                    .matches(/(?=.*\d)/, 'Password must contain at least one number')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match')
                    .required('Please confirm your password')
            });
        default:
            return Yup.object();
    }
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
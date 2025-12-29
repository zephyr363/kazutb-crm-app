export interface IUser {
    id: string
    email: string
}

export type UserLoginProps = {
    email: string;
    password: string;
}

export type UserCreateProps = {
    email: string;
    password: string 
}

export type AuthFormProps = UserLoginProps & Partial<UserCreateProps>;

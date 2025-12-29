import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthCard } from "../components/auth/AuthCard";
import { Input } from "../components/auth/Input";
import { Button } from "../components/auth/Button";
import type { AuthFormProps, UserCreateProps, UserLoginProps } from "../types";
import { useLoginMutation } from "../services/auth";
import { useCreateMutation, useMeQuery } from "../services/user";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleAuth } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

type AuthMode = "login" | "signup";

const AuthScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const [mode, setMode] = useState<AuthMode>("login");
    const { data: user, isSuccess } = useMeQuery();
    const [login, loginResult] = useLoginMutation();
    const [create, createResult] = useCreateMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthFormProps>();

    const onSubmit = async (data: UserLoginProps | UserCreateProps) => {
        try {
            if (mode === "login") {
                const resp = await login(data).unwrap();
                dispatch(toggleAuth({ isAuth: true, user: resp }));
                navigate("/");
            } else {
                await create(data).unwrap();
                navigate("/");
            }
        } catch (error) {
            dispatch(toggleAuth({ isAuth: false, user: null }));
        }
    };

    if (user || isSuccess) {
        navigate("/")
    }

    if (loginResult.isLoading || createResult.isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="text-gray-500 text-sm">Загрузка...</span>
            </div>
        );
    }


    return (
        <AuthCard
            title={
                mode === "login"
                    ? "Вход в CRM KazUTB"
                    : "Регистрация в CRM KazUTB"
            }
            subtitle="Казахский университет технологии и бизнеса"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Email"
                    placeholder="example@kazutb.edu.kz"
                    error={errors.email?.message}
                    {...register("email", {
                        required: "Введите email",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Некорректный email",
                        },
                    })}
                />

                <Input
                    label="Пароль"
                    type="password"
                    error={errors.password?.message}
                    {...register("password", {
                        required: "Введите пароль",
                        minLength: {
                            value: 6,
                            message: "Минимум 6 символов",
                        },
                    })}
                />
                <Button type="submit">
                    {mode === "login" ? "Войти" : "Зарегистрироваться"}
                </Button>
                <div className="text-sm text-center text-gray-600">
                    {mode === "login" ? (
                        <>
                            Нет аккаунта?{" "}
                            <button
                                type="button"
                                onClick={() => setMode("signup")}
                                className="text-blue-900 hover:underline font-medium"
                            >
                                Зарегистрироваться
                            </button>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{" "}
                            <button
                                type="button"
                                onClick={() => setMode("login")}
                                className="text-blue-900 hover:underline font-medium"
                            >
                                Войти
                            </button>
                        </>
                    )}
                </div>
            </form>
        </AuthCard>
    );
};

export default AuthScreen;

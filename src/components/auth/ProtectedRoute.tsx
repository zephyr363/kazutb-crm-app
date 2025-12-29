import { useEffect } from "react";
import { useMeQuery } from "../../services/user"
import { useAppDispatch } from "../../store/hooks"
import { Outlet } from "react-router-dom";
import { toggleAuth } from "../../store/slices/authSlice";



const ProtectedRoute = () => {
    const dispatch = useAppDispatch()
    const { data: user, isLoading, isError } = useMeQuery();

    useEffect(() => {
        if (user) {
            toggleAuth({ isAuth: true, user: user })
        }
    }, [dispatch, user])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="text-gray-500 text-sm">Загрузка...</span>
            </div>
        );
    }

    if (isError || !user) {
        window.location.href = "/auth"
    }

    return <Outlet />;
}


export default ProtectedRoute
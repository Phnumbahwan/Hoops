import { Navigate, Outlet } from "react-router";

function RequireCookie() {

    return (
        Cookies.get('teamA') && Cookies.get('teamB')
            ? <Outlet />
            : <Navigate to="/" replace />
    )
}

export default RequireCookie;
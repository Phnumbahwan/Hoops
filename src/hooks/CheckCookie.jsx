import { Navigate, Outlet } from "react-router";

function CheckCookie() {

    return (
        !Cookies.get('teamA') && !Cookies.get('teamB')
            ? <Outlet />
            : <Navigate to="/game" replace />
    )
}

export default CheckCookie;
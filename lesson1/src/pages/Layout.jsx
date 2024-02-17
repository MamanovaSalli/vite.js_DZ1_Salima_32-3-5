import {Outlet} from "react-router-dom";

import Menu from "./Menu.jsx";

const Layout = () => {
    return (
        <>
            <Menu/>
            <div className="container">
                <Outlet/>
            </div>
            <footer>My footer</footer>
        </>
    )
}
export default Layout;
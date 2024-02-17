import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink  to="/post">Посты</NavLink></li>
                    <li><NavLink  to="/api">API</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;
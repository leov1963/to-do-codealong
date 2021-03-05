import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>To Do</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to="/todos">Todos</Link>
            </nav>
        </div>
    );
}

export default Header;

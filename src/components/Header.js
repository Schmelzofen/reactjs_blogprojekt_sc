import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <h1>My Life</h1>
            </div>
            <div className="headerRight">
                <ul>
                    <li>
                        <Link className="linkHeader" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="linkHeader" to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
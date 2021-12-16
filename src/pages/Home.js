import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="mainSection">
            <div className="mainImage">
            </div>
            <div className="mainText">
                <h1>Welcome to my simple Blog</h1>
                <button className="mainButton"><Link className="link" to="/blog">Go to articles</Link></button>
            </div>
        </div>
    );
}

export default Home;
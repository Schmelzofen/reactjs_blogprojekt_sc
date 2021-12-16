import React from 'react';
import { Link } from "react-router-dom";

const BlogItem = (props) => {
    return (
        <article>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <button><Link className="link" to={`/BlogData/${props.id}`}>Read More</Link></button>
        </article>
    );
}

export default BlogItem;
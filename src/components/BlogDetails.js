import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogData from "./BlogData"
import Blog from "../pages/Blog"

const BlogDetails = () => {
    let { id } = useParams()

    let bData = BlogData.filter(elt => {
        return elt.id.toString() === id.toString()
    })

    console.log(bData)
    return (
        <section className="detailSection">
            <Link className="linkBack" to="/blog" element={<Blog />}><i class="fas fa-chevron-left"></i>back</Link>
            <div className="detailImage">
                <img src={bData[0].img_url} alt={bData[0].title} />
            </div>
            <div className="detailTitle">
                <h1>{bData[0].title}</h1>
                <p>{bData[0].published_date}</p>
            </div>
            <p>{bData[0].description}</p>
            <p>{bData[0].author}</p>
        </section>
    );
}

export default BlogDetails;
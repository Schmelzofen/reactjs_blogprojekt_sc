import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlogItem from "../components/BlogItem"
import BlogData from "../components/BlogData"


class Blog extends Component {
    render() {
        return <div className="gridSection">
            {BlogData.map(elt => <BlogItem
                key={uuidv4()}
                image={elt.img_url}
                title={elt.title}
                id={elt.id}
            />)}
        </div>;
    }
}

export default Blog;
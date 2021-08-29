import {useState, useEffect} from 'react';
import loading from "../img/loading.jpg"

const AllBlogs = () => {
    const [blogData, getBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kendevops`)
        .then(res => res.json())
        .then(response => {
            getBlogData(response.items);
            setIsLoading(false);
        })
      .catch(err => console.log(err));
    }, [])

    return (
        <div className="blogs">
            {(isLoading) ?
                <img className="loadingImg" src={loading} alt="loading.."/> :
                blogData.map((blog) => (
                    <div className="blog" key={blog.guid}>
                        <div className="blog-content">
                            <img src={blog.thumbnail} alt={blog.title} />
                            <a href={blog.link} className="blog-link" target="_blank" rel="noreferrer">{blog.title.toUpperCase()}</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AllBlogs;
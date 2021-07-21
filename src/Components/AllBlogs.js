import React, {useState, useEffect} from 'react';

const AllBlogs = () => {
    const [blogData, getBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const data = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kendevops`);
        const res = data.json();
        console.log(res);
        getBlogData(res);
    }, [])
}

export default AllBlogs;
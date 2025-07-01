import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import sampleoutput from "./sampleoutput.json";

export default function News(props) {
  const [news, setNews] = useState(sampleoutput.articles || []);
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false); // Loading state 
  const [totalResults, setTotalResults] = useState(0);
  
  const fetchData = async () => {
    setLoading(true); // Show loading indicator
    setNews([]); // Clear previous news before fetching new ones
    try {
      const response = await fetch(
        `https://api.mediastack.com/v1/news?access_key=${props.APIkey}&categories=${props.category}&countries=${props.country}&offset=${(page - 1) * props.pageSize}&limit=${props.pageSize}`

      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNews(data.data);
      setTotalResults(data.pagination.total); // Total available articles
      console.log("Fetched page:", page, data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false); // Hide loading indicator
  };

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data when `page` changes

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
  }
  };




  return (
    <div>
      <div className="container my-3">
        <h1 className="text-center">NewsShort - Top Headlines</h1>

        {/* Show loading indicator */}
        {loading && (
                    <div className="text-center">
                        <img src="/loading.gif" alt="Loading..." width="200" />
                    </div>
                )}

        <div className="row my-3">
          {news.length > 0 ? (
            news.map((item) => (
              <div className="col-md-4 my-3" key={item.url}>
                <NewsItem
                  title={item.title ? item.title.slice(0, 50) : ""}
                  desc={item.description ? item.description.slice(0, 80) : ""}
                  imgUrl={item.image ? item.image : "https://icrier.org/wp-content/uploads/2022/12/media-Event-Image-Not-Found.jpg"}
                  newsUrl={item.url}
                  mode={props.mode}
                />
              </div>
            ))
          ) : (
            !loading && <h3>No news available</h3>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1 || loading}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevious}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={handleNext}  disabled={page >= Math.ceil(totalResults / props.pageSize) || loading}>
            Next &rarr;
          </button>
        </div>
      </div>
    

    </div>
  );
}

import React, { useEffect, useState } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=dba307f1758a424a8887f7072adbf412"
    );

    const data = await response.json();
    setNews(data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="list top1">
      {news.map((item) => {
        return (
          // <div class="card">
          //   {/* <div class="card-header"></div> */}
          //   <div class="card-body">
          //     <h5 class="card-title">{item.title}</h5>
          //     <p class="card-title">{item.description}</p>
          //     {/* <p class="card-text">{item.status}</p> */}
          //     <a href={item.url} class="btn btn-primary">
          //       Read News
          //     </a>
          //   </div>
          // </div>
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={item.urlToImage}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
              <a href={item.url} class="btn btn-primary">
                Read News
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;

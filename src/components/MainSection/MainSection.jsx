import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = ({ modalVisibility }) => {
  const [movieLists, setMovieLists] = useState({});
  const [filteredTop, setFilteredTop] = useState([]);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  return (
    <div className="MainSection">
      {movieLists.popular && (
        <MainCard
          cardData={movieLists.popular[0]}
          modalVisibility={modalVisibility}
        />
      )}
      <div className="MainSection_right">
        {movieLists.topRated && (
          <TopRatedList
            cardData={movieLists.topRated}
            nCards={6}
            modalVisibility={modalVisibility}
          />
        )}
        {movieLists.upcoming && (
          <UpcomingList
            cardData={movieLists.upcoming}
            nCards={4}
            modalVisibility={modalVisibility}
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;

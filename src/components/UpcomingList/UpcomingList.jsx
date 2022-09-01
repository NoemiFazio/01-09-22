import MainCard from "../MainCard";
import "./index.css";

const UpcomingList = ({ cardData, modalVisibility }) => {
  return (
    // in Cardstyle dovremmo mettere in teoria il nome di una classe (tipo cardStyle=topRatedStyle), quindi vai a maincard
    <div className="UpcomingList">
      <div className="UpcomingList_content">
        {cardData.map((cardData, ii) => (
          <MainCard
            cardData={cardData}
            value={{ className: "upcomingStyle" }}
            key={ii}
            averageIsVis={false}
            modalVisibility={modalVisibility}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingList;

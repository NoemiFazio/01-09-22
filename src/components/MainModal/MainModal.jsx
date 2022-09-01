import "./index.css";

const MainModal = ({ data, isVisibile, onModalClick }) => {
  const { title, overview, poster_path } = data;

  return (
    isVisibile && (
      <div className="Modal__overlay">
        <div className="Modal" onClick={() => onModalClick(false)}>
          <img
            className="Modal__img"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <div className="Modal__info">
            <h2 className="Modal__header">{title}</h2>
            <p className="Modal__desc">{overview}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default MainModal;

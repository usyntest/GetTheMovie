import { Link } from "react-router-dom";

function Carousel({ data }) {
  return (
    <div className="carousel slide" id="carousel">
      <div className="carousel-inner">
        {data.map((elem, i) => {
          const { original_title, poster_path } = elem;
          return (
            <Link>
              <div
                className={i === 0 ? "carousel-item active" : "carousel-item"}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w780${poster_path}`}
                  className="d-block w-100 carousel-img img-fluid"
                  alt={`${original_title} poster`}
                />
                <div className="carousel-caption">
                  {/* <h2 className="text-wrap fw-bolder text-light">
                    {original_title}
                  </h2> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Carousel;

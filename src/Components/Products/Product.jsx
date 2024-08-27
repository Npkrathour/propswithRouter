import PropTypes from "prop-types";

function Product({
  cardImage,
  title = "Default Title",
  paragraph = "Default paragraph content.",
  btnText = "Visit Us",
  btnLink = "http://google.com",
}) {
  return (
    <>
      <div className="card w-full h-full shadow-xxl border p-2 rounded-xl">
        <div className="card-image w-full h-[200px]">
          <img className="w-full object-cover h-full rounded-xl" src={cardImage} alt={title} />
        </div>
        <div className="card-details py-3">
          <h3 className="text-lg font-medium">{title}</h3>
          <p>{paragraph}</p>
          <div className="card-button pt-5">
            <a
              href={btnLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-300 m-0 px-7 py-2 text-base font-medium rounded duration-200"
            >
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  cardImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  btnText: PropTypes.string,
  btnLink: PropTypes.string,
};

export default Product;

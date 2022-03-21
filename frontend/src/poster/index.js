import "./poster.css";
function Poster({ image }) {
  return (
    <div>
      <div className="height"></div>
      <div className="wrapper poster">
        <img src={image} alt="" />
      </div>
      <div className="height"></div>
    </div>
  );
}
export default Poster;

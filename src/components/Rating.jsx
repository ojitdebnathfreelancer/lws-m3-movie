/* eslint-disable react/prop-types */
import star from "../assets/star.svg";

const Rating = ({ value }) => {
  const starts = Array(value).fill(star);
  return (
    <>
      {starts.map((s, index) => (
        <img key={index} src={s} width="14" height="14"></img>
      ))}
    </>
  );
};

export default Rating;

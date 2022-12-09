import React from "react";

const SliderControl = ({ type, title, onClick }) => {
  return (
    <button
      className={`slider__button slider__button--${type}`}
      tittle={title}
      onClick={onClick}
    >
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

export default SliderControl;

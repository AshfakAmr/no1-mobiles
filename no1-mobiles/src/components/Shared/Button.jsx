import React from "react";

const Button = ({ handler, children, bgColor, textColor, styles }) => {
  // console.log(textColor);
  // console.log(styles);

  return (
    <button
      onClick={handler}
      style={{ color: styles }}
      className={`${bgColor} ${textColor}  cursor-pointer rounded-full hover:scale-105 duration-300 py-2 px-8 relative z-10`}
    >
      {children}
    </button>
  );
};

export default Button;

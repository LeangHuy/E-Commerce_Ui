import React from "react";

const Tag = ({ title, className }) => {
  return (
    <span
      className={
        " py-1 px-4 border inline-block text-xs rounded-sm font-medium " +
        className
      }
    >
      {title}
    </span>
  );
};

export default Tag;

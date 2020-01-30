import React from "react";

export default function Button({ type, children, className, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

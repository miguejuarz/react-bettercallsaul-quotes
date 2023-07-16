import React from "react";

const Quote = ({quote}) => {
  return (
    <p>
      {quote.quote} <br />
      <span> - {quote.author}</span>
    </p>
  );
};

export default Quote;

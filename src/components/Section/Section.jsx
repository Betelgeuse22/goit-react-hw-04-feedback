import React from 'react';

const Section = ({titel, children }) => {
  return (
    <>
      <h2>{titel}</h2>
      {children}
    </>
  );
};


export default Section;
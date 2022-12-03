import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, SectionTitel, } from './Section.styled';

const Section = ({ titel, children }) => {
  return (
    <SectionWrap>
      <SectionTitel>{titel}</SectionTitel>
      {children}
    </SectionWrap>
  );
};

Section.prototype = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;

import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, SectionTitel } from './Section.styled';

const Section = ({ titel, children }) => {
  return (
    <SectionWrap>
      <SectionTitel>{titel}</SectionTitel>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  titel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;

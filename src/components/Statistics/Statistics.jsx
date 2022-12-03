import React from 'react';
import PropTypes from 'prop-types';
import{StyledText} from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StyledText>Good:{good}</StyledText>
      <StyledText>Neutral:{neutral}</StyledText>
      <StyledText>Bad:{bad}</StyledText>
      <StyledText>Total:{total}</StyledText>
      <StyledText>Positive feedback:{positivePercentage} %</StyledText>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

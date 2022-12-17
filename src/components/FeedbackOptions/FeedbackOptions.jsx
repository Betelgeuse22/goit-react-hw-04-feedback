import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrap, FeedbackBtn } from './FeedbackOption.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {options.map(option => (
        <FeedbackBtn
          key={option}
          type="button"
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </FeedbackBtn>
      ))}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

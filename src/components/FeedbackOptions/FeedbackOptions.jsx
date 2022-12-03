import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { BtnWrap, FeedbackBtn } from './FeedbackOption.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {options.map(option => (
        <FeedbackBtn
          key={nanoid()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackBtn>
      ))}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

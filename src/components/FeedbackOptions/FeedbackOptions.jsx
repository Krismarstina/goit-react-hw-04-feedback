import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButton
              type="button"
              onClick={chooseFeedback(option, onLeaveFeedback)}
            >
              {option}
            </FeedbackButton>
          </li>
        );
      })}
    </FeedbackList>
  );
};

function chooseFeedback(option, onLeaveFeedback) {
  if (option === 'good') {
    return onLeaveFeedback[0];
  }
  if (option === 'neutral') {
    return onLeaveFeedback[1];
  }
  if (option === 'bad') {
    return onLeaveFeedback[2];
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func),
};

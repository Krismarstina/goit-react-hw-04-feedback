import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticsList>
        <StatisticsItem style={{ color: 'green' }}>Good: {good}</StatisticsItem>
        <StatisticsItem style={{ color: 'brown' }}>
          Neutral: {neutral}
        </StatisticsItem>
        <StatisticsItem style={{ color: 'red' }}>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {positivePercentage}%
        </StatisticsItem>
      </StatisticsList>
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};

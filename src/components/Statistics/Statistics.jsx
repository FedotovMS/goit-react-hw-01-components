import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title = '' }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      {stats.map(({ id, label, percentage }) => (
        <ul key={id} className={css.statList}>
          <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        </ul>
      ))}
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

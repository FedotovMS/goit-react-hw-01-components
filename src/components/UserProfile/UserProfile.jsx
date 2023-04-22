import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

export const UserProfile = ({ userData }) => {
  console.log(userData);
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{userData.username}</p>
        <p className={css.tag}>{userData.tag}</p>
        <p className={css.location}>{userData.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{userData.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{userData.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

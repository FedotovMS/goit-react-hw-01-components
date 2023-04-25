import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusClass}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

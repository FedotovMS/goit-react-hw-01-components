import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

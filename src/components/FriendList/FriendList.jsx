import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';

import { FriendSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSection>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </FriendSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

import PropTypes from 'prop-types';

export const FriendListItem = ({friend}) => {
    return <div>
            <li class="item">
                <span class="status"></span>
                <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p class="name">{friend.name}</p>
            </li>
        </div>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
}
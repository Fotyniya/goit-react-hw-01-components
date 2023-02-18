import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types';

export const FriendsList = ({friends})=> {
    return (<ul class="friend-list">
        {friends.map(item => 
            <li key={item.id}>
              <FriendListItem friend = {item}/>  
            </li>
            )
        }
    </ul>)
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired
};
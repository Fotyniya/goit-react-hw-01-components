import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import {Container} from './FriendList.styled'

export const FriendsList = ({friends})=> {
    return (<Container class="friend-list">
        {friends.map(item => 
            <li key={item.id}>
              <FriendListItem friend = {item}/>  
            </li>
            )
        }
    </Container>)
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired
};
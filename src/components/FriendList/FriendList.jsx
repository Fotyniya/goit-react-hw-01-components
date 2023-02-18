import { FriendListItem } from "components/FriendListItem/FriendListItem"

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
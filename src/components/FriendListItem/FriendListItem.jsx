export const FriendListItem = ({friend}) => {
    return <div>
            <li class="item">
                <span class="status"></span>
                <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p class="name">{friend.name}</p>
            </li>
        </div>
} 
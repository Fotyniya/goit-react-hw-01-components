import PropTypes from 'prop-types';
import { BsFillCircleFill } from "react-icons/bs";
import {Container, Image, FriendName, Marker} from './FriendListItem.styled'

export const FriendListItem = ({friend}) => {
    return <Container>
                <Marker isOnline={friend.isOnline === true}><BsFillCircleFill/></Marker>
                <Image src={friend.avatar} alt="User avatar" width="100" />
                <FriendName>{friend.name}</FriendName>
        </Container>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]).isRequired,
    }).isRequired
}
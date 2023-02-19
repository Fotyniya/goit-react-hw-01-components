import PropTypes from 'prop-types';
import {Image, Description, List, ListItem} from './Profile.styled'

export const Profile = ({user: {username, tag, avatar, location, stats: {followers, views, likes}}})=> {
  return <div>
    <Description>
      <Image
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <h2>{username}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
    </Description>
    <List>
      <ListItem>
        <span>Followers</span>
        <span>{followers}</span>
      </ListItem>
      <ListItem>
        <span>Views</span>
        <span>{views}</span>
      </ListItem>
      <ListItem>
       <span>Likes</span>
        <span>{likes}</span>
      </ListItem>
    </List>
  </div>
}

Profile.propType = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired
}
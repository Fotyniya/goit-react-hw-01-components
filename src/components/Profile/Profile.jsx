import PropTypes from 'prop-types';

export const Profile = ({user: {username, tag, avatar, location, stats: {followers, views, likes}}})=> {
  return <div>
    <div class="description">
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>
    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
       <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
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
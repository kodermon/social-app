import './closeFriends.css'

const CloseFriends = ({ user }) => {
  return (
    <li className='sidebar-friend'>
        <img src={user.profilePicture} alt='' className='sidebar-friend-propic' />
        <span className='sidebar-friend-name'>{user.username}</span>
    </li>
  )
}

export default CloseFriends
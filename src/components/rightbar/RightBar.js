import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const RightBar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className='birthday-container'>
          <img src='asset/gift.png' alt='' className='birthday-img'/>
          <span className='birthday-text'>
            <b> Joe Regan </b>and <b>3 others</b> have birthday today
          </span>
        </div>
        <img src='asset/ad.png' alt='' className='rightbar-ad' />
        <h4 className='rightbar-title'>Online Friends</h4>
        <ul className='rightbar-friend-list'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbar-title'>User Information</h4>
        <div className='rightbar-info'>
          <div className='rightbar-info-item'>
            <span className='rightbar-info-key'>City:</span>
            <span className='rightbar-info-value'>New York</span>
          </div>
          <div className='rightbar-info-item'>
            <span className='rightbar-info-key'>From:</span>
            <span className='rightbar-info-value'>Madrid</span>
          </div>
          <div className='rightbar-info-item'>
            <span className='rightbar-info-key'>Relationship:</span>
            <span className='rightbar-info-value'>Single</span>
          </div>
        </div>
        <h4 className='rightbar-title'>User Friends</h4>
        <div className='rightbar-followings'>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
          <div className='rightbar-following'>
            <img src='asset/person/2.jpeg' alt='' className='rightbar-following-img' />
            <span className='rightbar-following-name'>Katie Bell</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbar-wrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default RightBar
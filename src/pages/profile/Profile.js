import './profile.css'

import TopBar from "../../components/topbar/TopBar"
import SideBar from "../../components/sidebar/SideBar"
import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightbar/RightBar"

const Profile = () => {
  return (
    <>
        <TopBar />
        <div className="profile">
            <SideBar />
            <div className='profile-right'>
                <div className='profile-right-top'>
                    <div className='profile-cover'>
                        <img src='asset/post/3.jpeg' alt='' className='profile-cover-img' />
                        <img src='asset/person/3.jpeg' alt='' className='profile-img' />
                    </div>
                    <div className='profile-info'>
                        <h4 className='profile-info-name'>No Name</h4>
                        <span className='profile-info-desc'>Welcome to my profile</span>
                    </div>
                </div>
                <div className='profile-right-bottom'>
                    <Feed />
                    <RightBar profile/>
                </div>
            </div> 
        </div>
    </>
  )
}

export default Profile
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import './topbar.css'

const TopBar = () => {
  return (
    <div className='topbar-container'>
        <div className='topbar-left'>
            <span className='logo'>Social App</span>
        </div>
        <div className='topbar-center'>
            <div className='search-bar'>
                <Search className='search-icon'/>
                <input type='text' placeholder='Search fro friend, post, video' className='search-input' />
            </div>
        </div>
        <div className='topbar-right'>
            <div className='topbar-links'>
                <span className='topbar-link'>Homepage</span>
                <span className='topbar-link'>Timeline</span>
            </div>
            <div className='topbar-icons'>
                <div className='topbar-icon-item'>
                    <Person />
                    <span className='topbar-icon-badge'>1</span>
                </div>
                <div className='topbar-icon-item'>
                    <Chat />
                    <span className='topbar-icon-badge'>1</span>
                </div>
                <div className='topbar-icon-item'>
                    <Notifications />
                    <span className='topbar-icon-badge'>1</span>
                </div>
            </div>
            <img src='/asset/profile/pro.jfif' alt='profile picture' className='topbar-img' />
        </div>
    </div>
  )
}

export default TopBar
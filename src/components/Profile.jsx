import './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <>
            <div>
               <div>
                   <img src={image}/> 
                   <p>{name}</p>
                   <p>@{tag}</p>
                   <p>{location}</p>
               </div>

               <ul>
                    <li>
                        <span>Followers</span>
                        <span>{stats.folowers}</span>
                    </li>
                    <li>
                        <span>Views</span>
                        <span>{stats.views}</span>
                    </li>
                    <li>
                        <span>Likes</span>
                        <span>{stats.likes}</span>
                    </li>
               </ul>
           </div>
        </>
    )
}

export default Profile;
import styles from'./Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <>
            <div className={styles.personProfile}>
               <div>
                   <img className={styles.imgProfile} src={image}/> 
                   <p className={styles.personName}>{name}</p>
                   <p className={styles.personLink}>@{tag}</p>
                   <p className={styles.personLocation}>{location}</p>
               </div>

               <ul className={styles.infoList}>
                    <li className={styles.infoItem}>
                        <span>Followers</span>
                        <span className={styles.item}>{stats.followers}</span>
                    </li>
                    <li className={styles.infoItem}>
                        <span>Views</span>
                        <span className={styles.item}>{stats.views}</span>
                    </li>
                    <li className={styles.infoItem}>
                        <span>Likes</span>
                        <span className={styles.item}>{stats.likes}</span>
                    </li>
               </ul>
           </div>
        </>
    )
}

export default Profile;
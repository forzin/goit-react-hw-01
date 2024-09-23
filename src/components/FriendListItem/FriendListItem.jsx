import clsx from 'clsx'

import styles from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline = false}) => {
    const classname = clsx({
        [styles.online]: isOnline,
        [styles.offline]: !isOnline
    })
    return (
        <div className={styles.friendItem}>
           <img src={avatar} alt="Avatar" width="48" />
           <p className={styles.friendName}>{name}</p>
           <p className={classname}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}

export default FriendListItem;
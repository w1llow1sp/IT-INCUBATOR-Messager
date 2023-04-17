import React from 'react';
import {MessageType} from "../../../App";
import {Avatar} from "@mui/material";
import UserPic from "../userDisplay/userPic.png";
import styles from "../FriendMessage/MessageFriend.module.scss";
import friendAvatar from "../friendDispalay/FriendPic.webp";

type messageUserType ={
    messages:Array<MessageType>
    style: string
}


 export const MessageUser = (props:messageUserType) => {
     const className = `${styles.card} ${styles[`card_${props.style}`]}`
     const avatarStyle = props.style === 'left' ? {} : { marginLeft: 'auto' };
     const cardStyle = props.style === 'left' ? styles.card_left : styles.card_right;
     return (
         <>
             {props.messages.map(el => (
                 <div className={styles.wrapper} key={el.id}>
                     <Avatar
                         src={UserPic}
                         alt='Friend avatar'
                         sx={avatarStyle}
                     />
                     <div className={`${styles.card} ${cardStyle}`}>{el.message}</div>
                 </div>
             ))}
         </>
     );
}

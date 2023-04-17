import React from 'react';
import styles from './friendDisplay.module.scss'
//import Types
import {MessagesStorageType} from "../../../App";
//import components Material UI
import {Avatar, Badge, Button, IconButton, Paper, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import friendAvatar from './FriendPic.webp'
//import components
import {Input} from "../../components-UI/Input/Input";
import {MessageUser} from "../UserMessage/MessageUser";
import {MessageFriend} from "../FriendMessage/MessageFriend";

type AppPropsType = {
    messages: MessagesStorageType
    friendMessage: string
    setFriendMessage: (friendMessage: string) => void
    saveFriendMsgToLocSrg: () => void

    MessageUser: () => void
    MessageFriend: () => void
}

export const FriendDisplay = (props: AppPropsType) => {

    const handleMessageSetter = (value: string) => {
        props.setFriendMessage(value)

    }

    return (
        <div className={styles.container}>
            <Paper
                variant={'elevation'}
                elevation={3}
                sx={{padding: 1}}
            >
                <Badge
                    overlap="circular"
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    variant={'dot'}
                    color={'success'}
                    badgeContent={' '}
                >
                    <Avatar
                        src={friendAvatar}
                        alt='Friend avatar'
                    />

                </Badge>
                <Typography
                    variant={'overline'}
                    sx={{paddingLeft: 1}}>
                    Friend
                </Typography>
            </Paper>
            <div className={styles.messageBlock}>
                <MessageUser  style={'left'} messages={props.messages['User']}/>
                <MessageFriend style={'right'} messages={props.messages['Friend']}/>
            </div>
            <Paper
                className={styles.bottom}
                variant={'elevation'}
                elevation={3}
                sx={{padding: 1}}
            >
                <div className={styles.inputWrap}>
                    <AttachFileIcon
                        htmlColor={'#afafaf'}
                        fontSize={'large'}
                    />
                    <Input
                        type={'text'}
                        styles={'default'}
                        required={false}
                        inputValue={props.friendMessage}
                        callback={handleMessageSetter}
                        name={'Friend'}/>
                </div>

                <IconButton
                    color={'primary'}
                    onClick={props.saveFriendMsgToLocSrg}
                >
                    <SendIcon/>
                </IconButton>
            </Paper>
        </div>
    );
};


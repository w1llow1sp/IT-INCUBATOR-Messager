import React from 'react';
import styles from './userDisplay.module.scss'
import {Avatar, Badge, IconButton, Paper, Typography} from "@mui/material";
import UserPic from "./userPic.png";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {Input} from "../../components-UI/Input/Input";
import {MessagesStorageType} from "../../../App";
import {MessageFriend} from "../FriendMessage/MessageFriend";
import {MessageUser} from "../UserMessage/MessageUser";

/*TODO:
*  1.Реализовать функцию для изменения инпута
* 2.Реализовать фукнцию для изменения отправки в localStorage*/


type AppPropsType = {
    messages: MessagesStorageType
    userMessage: string
    setUserMessage: (userMessage: string) => void
    saveUserMsgToLocSrg: () => void

    MessageUser: () => void
    MessageFriend: () => void
}

export const UserDisplay = (props: AppPropsType) => {

    const handleMessageSetter = (value: string) => {
        props.setUserMessage(value)
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
                        src={UserPic}
                        alt='Friend avatar'
                    />

                </Badge>
                <Typography
                    variant={'overline'}
                    sx={{paddingLeft: 1}}>
                    User
                </Typography>
            </Paper>
            <div className={styles.messageBlock}>
                <MessageFriend style={'left'} messages={props.messages['Friend']} />
                <MessageUser style={'right'} messages={props.messages['User']}/>
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
                        inputValue={props.userMessage}
                        callback={handleMessageSetter}
                        name={'User'}/>
                </div>

                <IconButton
                    color={'primary'}
                    onClick={props.saveUserMsgToLocSrg}
                >
                    <SendIcon/>
                </IconButton>
            </Paper>

        </div>
    );
};


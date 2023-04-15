import React from 'react';
import styles from './userDisplay.module.scss'
import {Avatar, Badge, IconButton, Paper, TextField, Typography} from "@mui/material";
import UserPic from "./userPic.png";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {Input} from "../../components-UI/Input/Input";
import {KeysTypes} from "../../../App";

type AppPropsType = {
    userMessage: string
    setUserMessage: (userMessage:string) => void
    handleMessagesValue: (value:string,name:KeysTypes) => void
}

export const UserDisplay = (props:AppPropsType) => {


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
                        callback={()=>{}}
                        name={'User'}/>
                </div>

                <IconButton
                    color={'primary'}
                >
                    <SendIcon/>
                </IconButton>
            </Paper>

        </div>
    );
};


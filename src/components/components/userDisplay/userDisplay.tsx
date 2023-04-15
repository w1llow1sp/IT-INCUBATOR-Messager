import React from 'react';
import styles from './userDisplay.module.scss'
import {Avatar, Badge, IconButton, Paper, TextField, Typography} from "@mui/material";
import UserPic from "./userPic.png";
import SendIcon from "@mui/icons-material/Send";

export const UserDisplay = () => {
    return (
            <div className={styles.container}>
                <Paper
                    variant={'elevation'}
                    elevation={3}
                    sx={{padding:1}}
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
                        sx={{paddingLeft:1}}>
                        User
                    </Typography>
                </Paper>
                <aside className={styles.block_bottom}>
                    <Paper
                        variant={'elevation'}
                        elevation={3}
                        sx={{padding:1}}
                    >
                        <TextField
                            size={'small'}
                            variant="standard"/>
                        <IconButton
                            color={'primary'}
                        >
                            <SendIcon/>
                        </IconButton>
                    </Paper>
                </aside>
            </div>
    );
};


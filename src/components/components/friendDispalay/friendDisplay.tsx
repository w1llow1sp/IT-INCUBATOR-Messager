import React from 'react';
import styles from './friendDisplay.module.scss'
import {Avatar, Badge, Button, IconButton, Paper, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import friendAvatar from './FriendPic.webp'


export const FriendDisplay = () => {
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
                        src={friendAvatar}
                        alt='Friend avatar'
                    />

                </Badge>
                <Typography
                variant={'overline'}
                sx={{paddingLeft:1}}>
                    Friend
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


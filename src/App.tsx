import React, {useState} from 'react';
import './App.css';
import {UserDisplay} from "./components/components/userDisplay/userDisplay";
import {FriendDisplay} from "./components/components/friendDispalay/friendDisplay";
import {v1} from "uuid";

export type IDType = {
    ID:string
}

type MessageType = {
    id:string
    message:string
}

export type KeysTypes = "User"| 'Friend'

type MessagesStorageType ={
    [ID:string] :Array<MessageType>
}

function App() {
 //Я решила хранить значения в ассоциативном массиве.

    //Локальные стейты
    const [messages, setMessages] = useState<MessagesStorageType>({
        ['User'] :[],
        ['Friend']:[]
    });
    const [userMessage, setUserMessage] = useState('');
    const [friendMessage, setFriendMessage] = useState('');

    //Значения из localStorage
    const saveFriendMsgToLocSrg = () => {
        //сохраняем значение из input
        localStorage.setItem('friendMessage',JSON.stringify(friendMessage))
        // получаем и конвертируем в строку
        const newFriendMsgAsString =localStorage.getItem('friendMessage')
        const newFriendMsg = newFriendMsgAsString && JSON.parse(newFriendMsgAsString)
        const newMFriendObject = {
            id:v1(),
            message:newFriendMsg
        }

        setMessages({
            ...messages,
            ['Friend']:[
                ...messages['Friend'],newMFriendObject]
        })
    }


    const saveUserMsgToLocSrg = () => {
        //сохраняем значение из input
        localStorage.setItem('userMessage',JSON.stringify(userMessage))
        // получаем и конвертируем в строку
        const newUserMsgAsString =localStorage.getItem('userMessage')
        const newUserMsg = newUserMsgAsString && JSON.parse(newUserMsgAsString)
        const newMsgUserObject = {
            id:v1(),
            message:newUserMsg
        }

        setMessages({
            ['User']:[
                ...messages['User'],newMsgUserObject],
            ...messages,
        })
    }
    //Создание переменных

    //Функции

    //Рендер
    return (
    <div className="App">
        <div className={'appWrapper'}>
            <UserDisplay
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            saveUserMsgToLocSrg={saveUserMsgToLocSrg}
            />
            <FriendDisplay
                friendMessage={friendMessage}
                setFriendMessage={setFriendMessage}
                saveFriendMsgToLocSrg={saveFriendMsgToLocSrg}
            />
        </div>

    </div>
  );
}

export default App;

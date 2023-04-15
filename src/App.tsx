import React, {useState} from 'react';
import './App.css';
import {UserDisplay} from "./components/components/userDisplay/userDisplay";
import {FriendDisplay} from "./components/components/friendDispalay/friendDisplay";
import {v1} from "uuid";
/*TODO:
*  1.Создать функцию для */
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

    //Создание переменных

    //Функции
    const handleMessagesValue = (value:string,name:KeysTypes) => {
        name === 'User' ? setUserMessage(value) : setFriendMessage(value)
    }
    //Рендер
    return (
    <div className="App">
        <div className={'appWrapper'}>
            <UserDisplay
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            handleMessagesValue={handleMessagesValue}/>
            <FriendDisplay
            />
        </div>

    </div>
  );
}

export default App;

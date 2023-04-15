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
    title:string
}

type MessagesStorageType ={
    [ID:string] :Array<MessageType>
}

function App() {
 //Я решила хранить значения в ассоциативном массиве.
    const UserID=v1()
    const FriendID = v1()
    const [messages, setMessages] = useState<MessagesStorageType>({
        [UserID] :[],
        [FriendID]:[]
    });





    return (
    <div className="App">
        <div className={'appWrapper'}>
            <UserDisplay/>
            <FriendDisplay/>
        </div>

    </div>
  );
}

export default App;

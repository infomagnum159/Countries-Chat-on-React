import React, {useEffect, useState} from 'react';
import {CHAT_URL} from "../../config";
import axios from "axios";
import './Chat.css'

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const [message, setMessage] = useState( {
        author: '', message: ''
    });
    useEffect( () => {
        let lastDate = '';

        const fetchData = async () => {
            const { data } = await axios(CHAT_URL + lastDate);
        if(lastDate.length === 0) {
            setMessages([...data]);
        }
        if(lastDate.length > 0) {
            setNewMessages([...data])
        }
        if(data.length > 0) {
            lastDate = '?datetime=' + data[data.length - 1].datetime;
        }
        };
        setInterval(() => {
            setNewMessages([])
            fetchData().catch(e => console.error(e));
        }, 2000);
    },[]);

    useEffect(()=> {
        if(newMessages.length > 0) {
            setMessages(prev => [...prev, ...newMessages,]);
        }
    },[newMessages])
    const onChanges = (e) => {
        const {name, value} = e.target;
        setMessage(prev => ({
            ...prev,
            [name]: value,
        }))
    };
    const addMessage = (e) => {
        e.preventDefault();
        const data = new URLSearchParams();
        data.set('message', message.message);
        data.set('author', message.author);

        axios.post(CHAT_URL, data).then();
    };
    return (
        <div className="messages">

            {messages.map(message => (
                <div className="message" style={{width: '500px', margin: 'auto'}} key={message._id}>
                    <h6><b>Author: </b>{message.author}</h6>
                    <p><b>Message: </b>{message.message}</p>
                </div>


            ))}
            <form className="form" onSubmit={addMessage}>
                <input type="text" className="message-form" name="message" placeholder="message" onChange={e => onChanges(e)} value={message.message}/>
                <input type="text" className="author" name="author" placeholder="author" onChange={e => onChanges(e)} value={message.author}/>
                <button className="btn-send" type="submit">Add</button>
            </form>
        </div>
    );
};

export default Chat;
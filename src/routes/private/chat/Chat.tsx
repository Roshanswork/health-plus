import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatWebSocketExample: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const socket = useRef<WebSocket | null>(null);

    useEffect(() => {
        socket.current = new WebSocket('wss://echo.websocket.org/');

        socket.current.onopen = () => {
            console.log('Connection opened');
            socket.current?.send('Hello Server!');
        };

        socket.current.onmessage = (event: WebSocketMessageEvent) => {
            setMessages(prevMsgs => [...prevMsgs, event.data]);
            console.log('Message from server:', event.data);
        };

        socket.current.onerror = (error: WebSocketErrorEvent) => {
            console.error('WebSocket error:', error.message);
        };

        socket.current.onclose = () => {
            console.log('Connection closed');
        };

        return () => {
            if (socket.current && socket.current.readyState === WebSocket.OPEN) {
                socket.current.close();
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text>Messages Received:</Text>
            {messages.map((msg, index) => (
                <Text key={index}>{msg}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    }
})

export default ChatWebSocketExample;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const httpServer = app.listen(8080, () => {
    console.log(`${new Date()} :: Http server running on port 8080`);
});
app.use(express_1.default.json());
app.get('/*', (req, res) => {
    res.send("HI there you generic get calling fuck");
});
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary) {
        try {
            // Attempt to parse incoming message as JSON to ensure it's valid
            const messageData = JSON.parse(data.toString());
            console.log('Received message:', messageData);
            // Broadcast the message to all connected clients
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(messageData), { binary: isBinary });
                }
            });
        }
        catch (error) {
            console.error('Invalid JSON:', error);
            ws.send(JSON.stringify({ error: 'Invalid JSON format' }));
        }
    });
    // ws.send('Hello! Message From Server!!');
});

const express = require('express')
const cors = require('cors')

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1316189",
  key: "616eacdcfa7fc32e1553",
  secret: "dbdb55b63558cb4ae72b",
  cluster: "us2",
  useTLS: true
});

const app = express();

// make sure to include the path to
// where you are running your CLIENT in the Cors list of 'origins'
app.use(cors({
    origin: [
        'http://localhost:3000', // normal for React
        'http://localhost:8080',
        'http://localhost:4200', // normal for Angular
        'http://localhost:2222'
    ]
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log('Node-chat: listening to port 8000...');
app.listen(8000)
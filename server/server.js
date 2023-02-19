const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
// IF THE CLIENT URL IS FOUND IN ENV VARIABLES
process.env.CLIENT_URL 
// THEN CORS SETTINGS FOR PRODUCTION ENVIRONMENT
? app.use(cors({
    origin: process.env.CLIENT_URL,
    preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
})) 
// ELSE, IN DEV ENVIRONMENT, NO CORS SETTINGS NECESSARY
: app.use(cors());

const SafariRoutes = require("./routes/safari.route");
SafariRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`) );


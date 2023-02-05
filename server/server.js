const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors({origin:"http://localhost:3000"}));
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
const SafariRoutes = require("./routes/safari.route");
SafariRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`) );
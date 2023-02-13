const SafariController = require("../controllers/safari.controller");

//Routes that go to controller 
module.exports = app => {
    //Test
    app.get('/api/hello', SafariController.index)

    //Get all- Get
    app.get("/api/safari", SafariController.getAllSafari);

    //Create new- Post
    app.post("/api/safari", SafariController.createNewSafari);

    //Get one- Get
    app.get("/api/safari/:id", SafariController.findOneSafari);

    //Update- Put
    app.put("/api/safari/:id", SafariController.updateOneSafari);

    //Delete- post
    app.delete("/api/safari/:id", SafariController.deleteOneSafari);
};
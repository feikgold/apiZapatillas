

const { request, response } = require("express");
const { robots } = require("../robots");

const getRobots = (req = request, res = response) => {
    return res.json({
        robots
    });
}

const getRobotsById = (req = request, res = response) => {
    const id = req.params.id;

    let robotS = robots.find((robot) => {
        return robot.id === parseInt(id); // Asegúrate de que el id sea un número
    });

    if (robotS) {
        return res.json({
            ok: true,
            robotS,
            statusCode: 200
        });
    } else {
        return res.json({
            ok: false,
            msg: "ERROR, no hay robot con esa id",
            statusCode: 404
        });
    }
}

module.exports = {
    getRobots,
    getRobotsById
}



const database = require("./database-connection");

module.exports = {
    list() {
        return database('camper')
    },
    read(id) {
        return database('camper')
            .where('id', id)
    },
    create(camper) {
        return database('camper')
            .insert(camper)
            .returning('*')
            .then(record => record[0])
    },
    update(id, camper) {
        return database('camper')
        update(camper)
            .where('id', id)
            .returning('*')
    },
    delete(id) {
        return database('camper')
            .where('id', id)
            .del()
    }
};

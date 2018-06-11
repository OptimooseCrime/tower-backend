const database = require("./database-connection");

module.exports = {
    list() {
        return database('campers')
    },
    read(id) {
        return database('campers')
            .where('id', id)
    },
    create(campers) {
        return database('campers')
            .insert(campers)
            .returning('*')
            .then(record => record[0])
    },
    update(id, campers) {
        return database('campers')
        update(campers)
            .where('id', id)
            .returning('*')
    },
    delete(id) {
        return database('campers')
            .where('id', id)
            .del()
    }
};

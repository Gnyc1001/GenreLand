const db = require('../db/config');

const Events = {};

Events.findAll = (zipcode) => {
    return db.query(`
    SELECT * FROM
    events WHERE zipcode = zip_code`)
};

Events.findById = id => {
    return db.one(`
    SELECT * FROM events
    WHERE id = $1`,
    [id])
};

Events.create = data => {
    return db.one(`
    INSERT INTO events 
    (title, address, event_date, event_time, genre, description, zip_code, createdby )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8`,
    [data.title, data.address, data.event_date, data.event_time, data.genre, data.description, data.createdby])
};

Events.destroy = id => {
    return db.none(`
    DELETE FROM events
    WHERE id = $1`,
    [id])
}

Events.update = (data, id) => {
    return db.one(`
    UPDATE events SET
    title = $1,
    address = $2,
    event_date = $3,
    event_time = $4,
    genre = $5,
    description = $6,
    createdby = $7,
    zip_code = $8
    WHERE id = $9 `,
    [data.title, data.address, data.event_date, data.event_time, data.genre, data.description, data.createdby, data.zip_code, id])
}

module.exports = Events;
const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit);
  return findById(id);
}

async function update(id, changes) {
  await db("hobbits")
    .where({ id })
    .update(changes)

    return findById(id);
}

function remove(id) {
  return db("hobbits")
    .where({ id })
    .del()
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return db('hobbits')
    .where({ id })
    .first()
}

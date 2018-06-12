exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
    return knex.raw('DELETE FROM "campers"; ALTER SEQUENCE campers_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      let campers =
        [{
            id: 1,
            username: 'XxSuper420GamerXx',
            bio: "I'm only here because my parents make me go camping with them.I wanna go home and pwn noobs ",
          },
          {
            id: 2,
            username: 'a.regular.susan',
            bio: "I'd rather be cooking on an open fire in the middle of the woods"
          },
          {
            id: 3,
            username: "Dirtbike-Dingus",
            bio: '"Tent camping in the sand dunes, and waking up early to ride my dirt bike. #braplife"'
          }
        ]
        return knex('campers').insert(campers)
    });
};
const data = require('./data');
const tables = require('./tables');
const database = require('./database');

const sequencePromises = function (promises) {
    return promises.reduce((promise, promiseFunction) => {
        return promise.then(() => {
            return promiseFunction();
        });
    }, Promise.resolve());
}

const createDatabase = () => {
    let promises = [tables.users, tables.usersFriends, tables.posts].map((table) => {
        return () => database.getSql(table.create().toQuery());
    });

    return sequencePromises(promises);
}

const insertData = () => {
    let { users, posts, usersFriends } = data;

    let queries = [
        tables.users.insert(users).toQuery(),
        tables.posts.insert(posts).toQuery(),
        tables.usersFriends.insert(usersFriends).tiQuery(),
    ];

    let promises = queries.map((query) => {
        return () => database.getSql(query);
    });
    return sequencePromises(promises);
};
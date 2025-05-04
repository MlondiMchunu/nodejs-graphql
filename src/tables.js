import sql from 'sql';

sql.setDialect('sqlite');

export const users = sql.define({
    name: 'users',
    columns: [{
        name: 'id',
        dataType: 'INTEGER',
        primaryKey: true
    }, {
        name: 'about',
        dataType: 'text'
    }]
});
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

export const posts = sql.define({
    name: 'posts',
    columns: [{
        name: 'id',
        dataType: 'INTEGER',
        primaryKey: true
    },{
        name:'user_id',
        dataType:'int'
    },{
        name:'body',
        dataType:'text'
    },{
        name:'level',
        dataType:'text'
    },{
        name:'created_at',
        dataType:'datetime'
    }]
});
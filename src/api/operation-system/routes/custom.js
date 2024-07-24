   
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/custom/operation-systems',
            handler: 'operation-system.customFind',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/custom/operation-systems/:id',
            handler: 'operation-system.customFindOne',
            config: {
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/custom/operation-systems/:id',
            handler: 'operation-system.customDelete',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/customs/operation-systems/:id',
            handler: 'operation-system.customUpdate',
            config: {
                auth: false,
            },
        },
    ]
 }
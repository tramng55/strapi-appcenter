   
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/custom/systems',
            handler: 'system.customFind',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/custom/systems/:id',
            handler: 'system.customFindOne',
            config: {
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/custom/systems/:id',
            handler: 'system.customDelete',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/custom/systems/:id',
            handler: 'system.customUpdate',
            config: {
                auth: false,
            },
        },
    ]
 }
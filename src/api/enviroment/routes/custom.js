   
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/custom/enviroments',
            handler: 'enviroment.customFind',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/custom/enviroments/:id',
            handler: 'enviroment.customFindOne',
            config: {
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/custom/enviroments/:id',
            handler: 'enviroment.customDelete',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/custom/enviroments/:id',
            handler: 'enviroment.customUpdate',
            config: {
                auth: false,
            },
        },
    ]
 }
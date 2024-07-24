   
module.exports = {
   routes: [
        {
            method: 'GET',
            path: '/custom/apps',
            handler: 'app.customFind',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/custom/apps/:id',
            handler: 'app.customFindOne',
            config: {
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/custom/apps/:id',
            handler: 'app.customDelete',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/custom/apps/:id',
            handler: 'app.customUpdate',
            config: {
                auth: false,
            },
        },
    ]
}
   
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/custom/versions',
            handler: 'version.customFind',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/custom/versions/:id',
            handler: 'version.customFindOne',
            config: {
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/custom/versions/:id',
            handler: 'version.customDelete',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/custom/versions/:id',
            handler: 'version.customUpdate',
            config: {
                auth: false,
            },
        },
    ]
 }
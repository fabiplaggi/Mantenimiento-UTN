import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend',
            version: '1.0.0',
            description: 'Mantenimiento UTN',
            contact: {
                name: 'Fabián Plaggi'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ["./src/routes/*.js"]
};

const specs = swaggerJsdoc(options);
export default specs;
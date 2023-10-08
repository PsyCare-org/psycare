const concurrently = require('concurrently')
const path = require('path')

const run = async () => {
    try {
        await concurrently([
            {
                name: 'Web',
                prefixColor: 'bgGreen',
                command: 'npm start',
                cwd: path.join(__dirname, '../../psycare-web')
            },
            {
                name: 'Data API',
                prefixColor: 'bgYellow',
                command: 'npm start',
                cwd: path.join(__dirname, '../../psycare-data-api')
            }
        ])
    } catch(err) {
        console.log(err)
    }
}

run()
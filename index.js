const server = require('express')

const port  = process.env.PORT || 4300;

server.listen(port, () => console.log(`n\n** Running on port ${port} **/n`))
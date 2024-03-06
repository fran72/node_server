const { io } = require('../index');  // asi lo importas desde index.js 


io.on('connection', client => { // CLIENT es el PC que se conecta a mi SERVER
    console.log('Cliente conectado...');
    
    client.on('disconnect', () => {
        console.log('Cliente desconectado...');
    });
    
    client.on('mensaje', (msg) => {
        console.log('Nuevo mensaje...', msg); // se imprime en la terminal de vscode
    });
    
    client.emit('mensaje2', { message: 'Mensaje de retorno'});
});

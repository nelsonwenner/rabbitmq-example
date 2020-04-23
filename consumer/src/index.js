const mq = require('./modules/core/controller/rabbitmq');


mq.consumer('micro', 'queueTest', 'test', (msg) => {
    
    console.log(`\n[X] Message receved: ${msg.content}`);

});
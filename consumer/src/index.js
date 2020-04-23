const mq = require('./modules/core/controller/rabbitmq');


mq.consumer('my_exchange', 'queueTest', 'test', (msg) => {
    
    console.log(`\n[X] Message receved: ${msg.content}`);

});
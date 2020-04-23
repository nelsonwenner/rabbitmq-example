const amqp = require('amqplib/callback_api');
const ON_DEATH = require('death');
require('dotenv/config');

const url = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`;


const publish = (ex, msgKey, msgPayload) => {

    amqp.connect(url, (connectError, connection) => {

        if (connectError) { throw connectError; }

        connection.createChannel((channelError, channel) => {

            if (channelError) { throw channelError; }
            
            channel.assertExchange(ex, 'direct', {durable: true});
            channel.publish(ex, msgKey, Buffer.from(msgPayload));

            console.log(`\n[X] Send: ${msgKey}`);

            return '';
        });

        ON_DEATH((signal, error) => {
            console.log("\nClear...");
            setTimeout(() => {
                connection.close();
                process.emit(0);
            }, 500);
        });
    });
}

module.exports = { publish };

/*
amqp.connect(url, (connectError, connection) => {

    if (connectError) { throw connectError; }

    connection.createChannel((channelError, channel) => {

        if (channelError) { throw channelError; }
        
        const QUEUE = 'test';
          
        channel.assertQueue(QUEUE);

        const encodeBuffer = Buffer.from('Hello World');

        channel.sendToQueue(QUEUE, encodeBuffer);

        console.log(`Message send queue:-> ${QUEUE}\nBuffer:-> ${encodeBuffer}`);

    });
});
*/
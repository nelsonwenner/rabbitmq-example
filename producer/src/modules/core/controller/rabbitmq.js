const amqp = require('amqplib/callback_api');
const ON_DEATH = require('death');
require('dotenv/config');

const url = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`;


const publish = (exchange, routerKey, msgPayload) => {

    amqp.connect(url, (connectError, connection) => {

        if (connectError) { throw connectError; }

        connection.createChannel((channelError, channel) => {

            if (channelError) { throw channelError; }
            
            channel.assertExchange(exchange, 'direct', {durable: true});
            channel.publish(exchange, routerKey, Buffer.from(msgPayload));

            console.log(`\n[X] Send: ${routerKey}`);

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
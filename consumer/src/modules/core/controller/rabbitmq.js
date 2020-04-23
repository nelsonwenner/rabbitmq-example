const amqp = require('amqplib/callback_api');
const ON_DEATH = require('death');
require('dotenv/config');

const url = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`;


const consumer = (exchange, queueName, routerKey, ACK) => {

    amqp.connect(url, (connectError, connection) => {

        if (connectError) { throw connectError; }

        connection.createChannel((channelError, channel) => {

            if (channelError) { throw channelError; }
            
            channel.assertExchange(exchange, 'direct', {durable: true});

            channel.assertQueue(queueName, {exclusive: false}, (error, q) => {

                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);

                channel.bindQueue(q.queue, exchange, routerKey);

                channel.consume(q.queue, (msg) => {

                    ACK(msg);

                    ON_DEATH((signal, error) => {
                        console.log("\nClear...");
                        setTimeout(() => {
                            connection.close();
                            process.emit(0);
                        }, 500);
                    });
                }, {
                    noAck: true
                });
            });
        });
    });
}

module.exports = { consumer };

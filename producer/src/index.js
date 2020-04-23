const mq = require('./modules/core/controller/rabbitmq');

mq.publish('my_exchange', 'test', 'Hi, Nelson!')
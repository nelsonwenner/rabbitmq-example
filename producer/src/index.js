const mq = require('./modules/core/controller/rabbitmq');

mq.publish('micro', 'test', 'Hi, Nelson!')
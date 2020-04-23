<h1 align="center">
    RABBITMQ - SYSTEM MENSSAGING
</h1>

#### Example of using messages to communicate between systems based on microservices using queues.

### Prerequisites
* Docker Compose version (1.25.4)
* Docker version (19.03.8)
* Node version (12.16.1)
* Npm version (6.14.4)

## Getting Started
1. Fork this repository and clone on your machine
2. Change the directory to `rabbitmq-nodejs-messaging-example` where you cloned it;
3. At the terminal, run:

```bash
/* Install dependencies from consumer */

$ cd consumer

$ npm install

/* Install dependencies from producer */

$ cd producer

$ npm install
```

4. Run docker. In the directory `rabbitmq-nodejs-messaging-example` execute.

```bash
/* Up docker */

$ docker-compose up -d

/* Down docker */

$ docker-compose down
```

5. Open robbitMQ: the host [localhost:15672](http://localhost:15672) and start using it. Credentials `user: rabbitmq password: rabbitmq`

6. Execute project on consumer & producer.

```bash
/* execute on directory consumer */

$ npm run start

/* execute on directory producer */

$ npm run start
```
## How it works ?

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/40550247/80135937-5f053280-8577-11ea-9810-196088c5ab66.png"/>
</h1>

- **Producer**
    * The guy who will send the message, data.

- **Exchange**
    * Responsible for receiving these messages, and deciding which queue this message will be sent to. Remembering when you work with applications, you don't work with just one queue, you can have queues of everything that is different and types, and several exchanges.

- **Queue**
    * The queue stores messages and dispatches them.

- **Consumer**
    * The consumer has a process that listens to everything that arrives in the queue. In this case, he removes the messages from the queue, and gives a `ACK: acknowledge`.

---




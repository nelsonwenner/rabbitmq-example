<h1 align="center">
    RABBITMQ - SYSTEM MENSSAGING
</h1>

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



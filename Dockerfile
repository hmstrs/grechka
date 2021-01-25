FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build

ENV REDIS_ADDRESS=redis

EXPOSE 3000
CMD ["npm", "start"]
FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./dist-gRPC-Client

EXPOSE 3000

CMD node api_server.js 
FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./dist-gRPC-Server

EXPOSE 50051

CMD node gRPC_server.js 
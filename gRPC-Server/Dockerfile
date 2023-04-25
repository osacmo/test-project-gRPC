FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 8080

RUN npm run build

CMD [ "node", /home/app/dist-gRPC-Server/gRPC_server.js ]
FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

RUN npm run build

CMD [ "node", /home/app/dist-gRPC-Client/api_server.js ]
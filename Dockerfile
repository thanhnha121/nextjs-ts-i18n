FROM node:14-alpine 

RUN npm install -g pm2 
RUN npm install -g ts-node 

RUN mkdir -p /home/node/app/ 

WORKDIR /home/node/app 

COPY package*.json ./ 

RUN npm install 

COPY . . 

RUN npm run build

EXPOSE 3003

CMD [ "pm2-runtime", "start", "pm2.json" ] 
FROM node:latest

ENV NODE_ENV=production

RUN npm install -g pm2

ADD config/ /etc/api/
ADD . /opt/api/

WORKDIR /opt/api/

RUN npm install --production

EXPOSE 3000

CMD ["pm2-docker", "/etc/api/pm2.config.json"]

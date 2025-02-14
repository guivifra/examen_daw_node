FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY app/package.json app/server.js .
RUN npm install
COPY app/ .
EXPOSE 3000
CMD [ "npm", "start"]

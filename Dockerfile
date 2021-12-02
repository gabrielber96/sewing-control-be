FROM node:16-alpine3.12

WORKDIR /sewing-control-be

COPY . .

RUN npm i nodemon -g
RUN npm i

EXPOSE 3000

CMD ["nodemon","--legacy-watch","./dist/index.js"]
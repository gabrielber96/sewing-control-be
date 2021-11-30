FROM node:16-alpine3.12

WORKDIR /sewing-control-be

COPY package.json ./
COPY dist /sewing-control-be/dist
COPY .env ./

RUN npm install -g nodemon
RUN npm install

EXPOSE 3000

CMD ["npm","--legacy-watch","start"]
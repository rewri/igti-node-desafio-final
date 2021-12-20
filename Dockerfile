FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN chmod -R 777 ./data
CMD npm run start
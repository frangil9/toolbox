
FROM node:14-alpine
WORKDIR /usr/src/app
COPY . ./
RUN npm install
ADD . /usr/src/app
EXPOSE 3001 
CMD ["node", "src/app.js"]
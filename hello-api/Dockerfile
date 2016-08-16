FROM node:6.3.1

RUN mkdir /src
WORKDIR /src

COPY package.json /src
RUN npm install

COPY . /src

EXPOSE 8199

CMD node index.js


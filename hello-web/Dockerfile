FROM node:6.3.1

RUN mkdir /src
WORKDIR /src

COPY . /src
RUN npm install
EXPOSE 8280

CMD node main.js
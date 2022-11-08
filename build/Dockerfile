FROM node:12
WORKDIR /usr/src/app
COPY release.tgz ./
RUN tar -xvf release.tgz
    && RUN npm install
    && RUN npm start

FROM node:20

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/
COPY package-lock.json /code/
COPY ./src /code/src
RUN npm i

EXPOSE 8081

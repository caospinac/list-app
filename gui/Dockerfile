# base image
FROM node:9.6.1

# set working directory
RUN mkdir /gui
WORKDIR /gui

# add `/usr/src/gui/node_modules/.bin` to $PATH
ENV PATH /gui/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /gui/package.json
RUN npm install yarn --silent
RUN yarn install

# start app
CMD ["yarn", "start"]

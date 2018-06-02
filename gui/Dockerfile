# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/gui
WORKDIR /usr/src/gui

# add `/usr/src/gui/node_modules/.bin` to $PATH
ENV PATH /usr/src/gui/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/gui/package.json
RUN npm install yarn --silent
RUN yarn install

# start app
CMD ["yarn", "start"]

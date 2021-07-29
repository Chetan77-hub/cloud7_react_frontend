# pull official base image
FROM node:13.12.0-alpine AS build
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# add app
COPY . ./
# start app
RUN npm run build


FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/my-dream-app /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d


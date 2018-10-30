FROM node:9.6.1 AS build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json 
RUN npm install
RUN npm install -g @angular/cli@1.7.1

COPY . .
RUN npm run-script build

FROM nginx:alpine AS final
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /app
EXPOSE 80
COPY --from=build /usr/src/app/dist/sw-ui /usr/share/nginx/html
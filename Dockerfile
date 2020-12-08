# DEV STAGE
FROM node:lts-alpine as dev-stage

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .


# BUILD STAGE
FROM dev-stage as build-stage
RUN yarn build


# PROD STAGE
FROM nginx:1.15.7-alpine as prod-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:16 as builder
LABEL maintainer="Sam Bulatov<mephistorine@gmail.com>"

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:alpine

COPY ./misc/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./misc/ssl /etc/nginx/certificates
COPY --from=builder /dist /usr/share/nginx/html
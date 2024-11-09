FROM node:22 AS build

WORKDIR /app
RUN chown -R node:node ./

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./

USER node
RUN npm install

COPY --chown=node:node ./ ./

RUN npm run build

FROM nginx:1.27 AS run

WORKDIR /var/cache/nginx
RUN chown -R nginx:nginx ./

WORKDIR /var/run
RUN touch ./nginx.pid
RUN chown nginx:nginx ./nginx.pid

WORKDIR /usr/share/nginx/html
RUN chown -R nginx:nginx ./

RUN rm -rf ./*

COPY --from=build --chown=nginx:nginx /app/dist .

COPY --chown=nginx:nginx nginx/spa.conf /etc/nginx/conf.d/default.conf

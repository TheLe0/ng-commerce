FROM node:alpine as node

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/ng-commerce /usr/share/nginx/html
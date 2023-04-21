# Stage 1 - the builder
FROM node:16-alpine as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN npm install --force
RUN npm run build

# Stage 2 - the runner
FROM nginx:stable-alpine
COPY ./rootfs/ /
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

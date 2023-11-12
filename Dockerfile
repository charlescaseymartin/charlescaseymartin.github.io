FROM node:18-alpine

WORKDIR /portfolio
COPY package.json yarn.lock ./
RUN yarn
COPY . .

EXPOSE 3000
ENTRYPOINT ["yarn", "dev"]
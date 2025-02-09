FROM node:22-bookworm-slim 

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN yarn global add nodemon ts-node

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
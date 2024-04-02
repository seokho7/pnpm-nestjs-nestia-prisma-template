FROM node:20-alpine

RUN apk add g++ make py3-pip

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY prisma ./prisma/

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "start:prod"]

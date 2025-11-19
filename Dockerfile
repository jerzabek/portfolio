FROM node:24.10-alpine AS deps
WORKDIR /app

COPY .yarnrc.yml package.json yarn.lock ./
COPY .yarn/ ./.yarn/

RUN yarn install --frozen-lockfile

FROM node:24.10-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn prepare
RUN yarn build

FROM node:24.10-alpine AS runner
WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build ./build
COPY serve.json ./

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]

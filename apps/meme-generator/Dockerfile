FROM node:24-alpine
LABEL authors="kamazra4ka"

RUN corepack enable
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/meme-generator ./apps/meme-generator

RUN apk add --no-cache python3 make g++
RUN pnpm install --frozen-lockfile --filter @jstmemit/meme-generator...

CMD ["pnpm", "run", "meme-generator:start"]

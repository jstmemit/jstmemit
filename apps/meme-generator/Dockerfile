FROM node:24-alpine
LABEL authors="kamazra4ka"

RUN corepack enable
WORKDIR /app

RUN apk add --no-cache python3 make g++
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/meme-generator ./apps/meme-generator

RUN --mount=type=cache,target=/pnpm-store \
    apk add --no-cache python3 make g++ \
    && pnpm install --frozen-lockfile --store-dir /pnpm-store --filter @jstmemit/meme-generator... \
    && apk del python3 make g++

CMD ["pnpm", "run", "meme-generator:start"]

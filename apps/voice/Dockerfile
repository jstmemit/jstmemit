FROM node:24-alpine
LABEL authors="kamazra4ka"

RUN corepack enable
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/voice ./apps/voice

RUN pnpm install --frozen-lockfile --filter @jstmemit/voice...

CMD ["pnpm", "run", "voice:start"]

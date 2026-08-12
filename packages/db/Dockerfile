FROM node:24-alpine
LABEL authors="kamazra4ka"

RUN corepack enable
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml tsconfig.base.json ./
COPY packages ./packages

RUN apk add --no-cache python3 make g++
RUN pnpm install --frozen-lockfile --filter ./packages/db...

CMD ["pnpm", "run", "-w", "db:migrate"]

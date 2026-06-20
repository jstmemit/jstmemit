FROM node:24-alpine
LABEL authors="mimih"

RUN corepack enable
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/website ./apps/website

RUN pnpm install --frozen-lockfile --filter @jstmemit/website...
RUN pnpm run website:build

ENV HOST=0.0.0.0
ENV PORT=4321
CMD ["pnpm", "run", "website:run-build"]
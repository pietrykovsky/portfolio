# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.12.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# Production dependencies only — a separate stage so the layer is cached
# independently of the source and reused as-is by the final image.
FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Build stage — needs devDependencies as well.
FROM deps AS build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build

FROM base AS final
ENV NODE_ENV=production
USER node

COPY package.json .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY public ./public
# Read at runtime with fs.readFile from process.cwd() — the build does not
# bundle them, so they have to land in the image as plain files.
COPY messages ./messages
COPY src/templates ./src/templates

EXPOSE 3000
CMD ["npm", "start"]

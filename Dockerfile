# Build stage
FROM node:18-alpine3.19 as builder

ENV NODE_ENV build

WORKDIR /home/node

# Copy package.json and install dependencies
COPY package*.json /home/node/
RUN npm ci

# Copy the rest of the application and build
COPY . /home/node
RUN npm run build \
    && npm prune --production \
    && npx prisma generate

# Production stage
FROM node:18-alpine3.19

ENV NODE_ENV production

USER node
WORKDIR /home/node

# Copy built artifacts and dependencies from the build stage
COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/dist/ /home/node/dist/

CMD ["node", "dist/main.js"]
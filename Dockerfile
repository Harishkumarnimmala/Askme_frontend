# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy only the built files
COPY --from=build /app/build /app/build

# Expose port
EXPOSE 3000

# Set non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]

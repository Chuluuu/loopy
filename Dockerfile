# Stage 1: Build the Vite app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Ensure node_modules/.bin is added to the PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the rest of the application code
COPY . .
ENV VITE_API https://mdm.edimis.mn/api

# Build the Vite application

RUN npm run build
RUN ls -lh /app/build

# Stage 2: Serve the Vite app
FROM node:20-alpine 

# Install `serve` globally to serve the app in production
# RUN npm install -g serve

# Copy the built app from the previous stage
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html
RUN npm install -g serve

# Expose port 5000 to access the app
EXPOSE 3000
CMD ["serve", "-s", "/usr/share/nginx/html", "-l", "3000"]

# ENTRYPOINT ["nginx","-g","daemon off;"]
# Serve the app on port 5000
# CMD ["serve", "-s", "/app/test_built", "-l", "5000"]

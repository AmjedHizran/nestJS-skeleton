# ## Stage 1 - Builder
# FROM node:alpine as builder
# ADD . .

# RUN apk add --no-cache --virtual .gyp \
#         python \
#         make \
#         g++; \
#         npm install -g typescript; \
#         npm install --ignore-engines; \
#         npm install -g npm@7.20.5; \
#         tsc -p tsconfig-build.json; \
#         tsc;

# ## Stage 2 - Create docker image
# FROM node:alpine

# # Define work dir
# WORKDIR /app

# # Add the application dist to the container
# COPY --from=builder dist .
# COPY --from=builder node_modules ./node_modules
# COPY --from=builder package.json ./package.json

# EXPOSE 3000


# # Run the application
# CMD ["npm", "run", "start"]

FROM node:14-alpine

WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org

RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]
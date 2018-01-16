# Dockerfile to build app
FROM node:latest

WORKDIR /app
RUN npm install -g bower
EXPOSE 8000

RUN apt-get update && apt-get install -y \
    git \
&& rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/victorhundo/admin.git /app

COPY entrypoint.sh /
CMD [ "bash", "/entrypoint.sh" ]

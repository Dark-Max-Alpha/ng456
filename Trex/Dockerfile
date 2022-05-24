FROM node:latest

RUN git clone https://github.com/Dark-Max-Alpha/ng456 /root/ng456
WORKDIR /root/ng456/
RUN git clone https://github.com/Dark-Max-Alpha/ng456
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

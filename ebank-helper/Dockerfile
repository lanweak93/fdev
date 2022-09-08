FROM 10.191.60.105/mbpe-public-docker-local/library/fdev-helper:v1
MAINTAINER "T-luot1@spdbdev.com"

COPY tzdata-2019c-r0.apk /
RUN apk add --allow-untrusted tzdata-2019c-r0.apk && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 安装我们的脚本
COPY  ./src/ /opt/fdev-helper/
RUN chmod +x /opt/fdev-helper/*



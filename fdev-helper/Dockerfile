FROM 10.141.63.83/library/fdev-helper:base
MAINTAINER "T-luot1@spdbdev.com"

# 设置 kubelet 连接k8s 集群配置文件
COPY kubectl /usr/local/bin
COPY *.conf /etc/kubernetes/
COPY tzdata-2019c-r0.apk /
RUN apk add --allow-untrusted tzdata-2019c-r0.apk && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV KUBECONFIG=/etc/kubernetes/admin.conf

# 安装我们的脚本
COPY  ./src/ /opt/fdev-helper/
RUN chmod +x /opt/fdev-helper/*
RUN chmod +x /usr/local/bin/kubectl



💡 应用介绍

fdev-webhook是gitlab触发事件后产生消息的功能模块，可在gitlab上的Webhooks上看到此模块配置的webhook链接。当配置的触发事件发生后，
gitlab会通过链接触发api接口将消息给到fdev-webhook，此模块再生成对应的消息给到kafka，再由其他各模块通过kafka进行消费，进而处理gitlab的触发事件。

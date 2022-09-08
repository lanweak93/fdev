package com.auto.common;

import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by csii_wangj on 下午3:56.
 */
@Configuration
public class RedissionConfiguration {

    @Value("${spring.redis.cluster.nodes}")
    private String hostAndPorts;
    @Value("${spring.redis.password}")
    private String password;

    @Bean
    public RedissonClient initRedisson(){
        Config config = new Config();
        String[] nodes = hostAndPorts.split(",");
        for (String ipport : nodes){
            config.useClusterServers()
                    //可以用"rediss://"来启用SSL连接
                    .addNodeAddress("redis://"  + ipport).setPassword(password);
        }
        return Redisson.create(config);
    }
}

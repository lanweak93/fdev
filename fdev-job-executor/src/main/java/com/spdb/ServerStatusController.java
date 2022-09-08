package com.spdb;


import com.netflix.appinfo.ApplicationInfoManager;
import com.netflix.appinfo.InstanceInfo.InstanceStatus;
import com.netflix.discovery.EurekaClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;



@RestController
public class ServerStatusController {

    @Autowired
    EurekaClient eurekaClient;


    //将注册中心上服务状态设置为UP，zuul发现该容器状态为UP会重新向其转发。该场景适合将隔离的容器恢复
    @RequestMapping(value="/up")
    public String up(HttpServletRequest req) {
        if(validIp(req)){
            eurekaClient.getApplicationInfoManager().setInstanceStatus(InstanceStatus.UP);
            return "up_ok,status:"+getstatus();
        }else{
            return "up_faild,status:"+getstatus();
        }
    }


    private boolean validIp(HttpServletRequest req){
        if("127.0.0.1".equals(req.getRemoteAddr())){
            return true;
        }else{
            return false;
        }
    }


    // 输出为0，表示为Offline状态，输出为1表示为Online状态
    @RequestMapping("/getstatus")
    public String getstatus() {
//        InstanceInfo.InstanceStatus  instanceStatus= eurekaClient.getInstanceRemoteStatus();
//        String status = instanceStatus.name();
        String status = ApplicationInfoManager.getInstance().getInfo().getStatus().toString();
        String tmp="UNKNOW";
        if("DOWN".equals(status)){
            tmp="0";
        }else if("UP".equals(status)){
            tmp="1";
        }
        return tmp;
    }

    //将服务从注册中心注销。注册中心会立即将该服务从注册中心去掉，zuul发现后不会向其转发。该方式适合需要重启服务
    @RequestMapping("/down")
    public String down(HttpServletRequest req) {
        if(validIp(req)){
            eurekaClient.getApplicationInfoManager().setInstanceStatus(InstanceStatus.DOWN);
            return "down_ok,status:"+getstatus();

        }else{
            return "down_failed,status:"+getstatus();
        }
    }
    //将服务从注册中心注销。注册中心会立即将该服务从注册中心去掉，zuul发现后不会向其转发。该方式适合需要重启服务
    @RequestMapping("/delete")
    public String delete(HttpServletRequest req) {
        if(validIp(req)){
            eurekaClient.shutdown();
            return "delete_ok";

        }else{
            return "delete_failed";
        }
    }

}

module.exports = {
  "POST /fcomponent/api/baseImage/queryMetaData": {
    "tomcat_version": "tomcat版本",
    "jdk_version": "jdk版本"
  },
  "POST /fcomponent/api/baseImage/relasePackage": "",
  "POST /fcomponent/api/baseImage/packageTag": "",
  "POST /fcomponent/api/baseImage/recoverInvalidRecord": "",
  "POST /fcomponent/api/baseImage/updateBaseImage": {
    "id": "5ea7db3c673c3638545b70e2",
    "name": "base-image-test",
    "name_cn": "测试环境基础镜像",
    "description": "123456",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "gitlab_id": "51",
    "manager": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "type": "mirioservice",
    "target_env": "test",
    "wiki": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "meta_data_declare": {
      "jdk_version": "1.8-191",
      "tomcat_version": "8.5.43"
    }
  },
  "POST /fcomponent/api/baseImage/updateBaseImageRecord": {
    "id": "5ea8ea2c673c363e9015d918",
    "name": "base-image-test",
    "branch": "feature-dev-1",
    "image_tag": "20200429",
    "stage": "dev",
    "trial_apps": "",
    "update_user": "",
    "update_time": "2020-04-29 10:45:00",
    "release_log": "111",
    "meta_data": {
      "jdk_version": "1.8-191",
      "tomcat_version": "8.5.43"
    }
  },
  "POST /fcomponent/api/baseImage/addBaseImage": {
    "id": "5ea7db3c673c3638545b70e2",
    "name": "base-image-test",
    "name_cn": "测试环境基础镜像",
    "description": "111",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "gitlab_id": "51",
    "manager": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "type": "mirioservice",
    "target_env": "test",
    "wiki": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "meta_data_declare": {
      "jdk_version": "1.8-191",
      "tomcat_version": "8.5.43"
    }
  },
  "POST /fcomponent/api/baseImage/optimizeBaseImageIssue": {
    "id": "5ea8ec7f673c363e9015d919",
    "name": "base-image-test",
    "title": "dev-1",
    "desc": "1111",
    "branch": "feature-dev-1",
    "assignee": "5db688e8f8d61800136ffe11",
    "stage": "0",
    "create_date": "2020-04-29 10:54:53"
  },
  "POST /fcomponent/api/baseImage/changeStage": "",
  "POST /fcomponent/api/baseImage/queryIssueRecord": [{
    "id": "5eb3c803673c362994604920",
    "name": "base-image-test",
    "branch": "dev-20200508",
    "image_tag": "test-2005071633",
    "stage": "release",
    "trial_apps": ["166", "167"],
    "update_user": "5db688e8f8d61800136ffe11",
    "update_time": "2020-05-07 16:34:58",
    "release_log": "111222",
    "meta_data": "",
    "packagetype": "pipepackage",
    "pipid": "311",
    "name_en": "csii_wangfq",
    "name_cn": "王飞强"
  }],
  "POST /fcomponent/api/baseImage/queryBaseImageIssueDetail": {
    "id": "5eb368c0673c363b4059ac8a",
    "name": "base-image-test",
    "title": "auto-test",
    "desc": "1111",
    "branch": "dev-20200507",
    "assignee": "5db688e8f8d61800136ffe11",
    "stage": "3",
    "create_date": "2020-05-07 09:47:42",
    "name_en": "csii_wangfq",
    "name_cn": "王飞强"
  },
  "POST /fcomponent/api/baseImage/queryBaseImageIssue": [{
    "id": "5eb368c0673c363b4059ac8a",
    "name": "base-image-test",
    "title": "auto-test",
    "desc": "1111",
    "branch": "dev-20200507",
    "assignee": "5db688e8f8d61800136ffe11",
    "stage": "3",
    "create_date": "2020-05-07 09:47:42",
    "name_en": "csii_wangfq",
    "name_cn": "王飞强"
  }, {
    "id": "5eb3c65c673c36299460491b",
    "name": "base-image-test",
    "title": "auto-test",
    "desc": "2222",
    "branch": "dev-20200508",
    "assignee": "5db688e8f8d61800136ffe11",
    "stage": "3",
    "create_date": "2020-05-07 16:27:05",
    "name_en": "csii_wangfq",
    "name_cn": "王飞强"
  }, {
    "id": "5eb51da8355b0b00145a4249",
    "name": "base-image-test",
    "title": "auto-test",
    "desc": "1111",
    "branch": "dev-20200508-01",
    "assignee": "5db688e8f8d61800136ffe11",
    "stage": "1",
    "create_date": "2020-05-08 16:51:49",
    "name_en": "csii_wangfq",
    "name_cn": "王飞强"
  }],
  "POST /fcomponent/api/baseImage/queryBaseImageRecord": [{
    "branch": "dev-20200507",
    "release_log": "111222",
    "update_time": "2020-08-06 11:11:54",
    "update_user": "5db688e8f8d61800136ffe11",
    "stage": "release",
    "trial_apps": ["166", "167"],
    "name": "base-image-test",
    "meta_data": {
      "tomcat_version": "8.5.43",
      "jdk_version": "1.8_131"
    },
    "id": "5f2b74fa673c36256c53da51",
    "image_tag": "pro-2008061110",
    "packagetype": "pipepackage",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "release_log": "Update README.md",
    "update_time": "2020-08-06 10:56:49",
    "update_user": "5db00e5bf57ddb001047b499",
    "stage": "dev",
    "name": "base-image-test",
    "id": "5f2b71715ad351001f8e9430",
    "image_tag": "dev-2008061048",
    "branch": "dev-20200507",
    "name_cn": "叶文龙",
    "name_en": "csii_yewl"
  }, {
    "release_log": "Update .gitlab-ci.yml",
    "update_time": "2020-08-06 10:36:12",
    "update_user": "5de4d3c9ce93430013560881",
    "stage": "dev",
    "name": "base-image-test",
    "id": "5f2b6c9c5ad351001f8e942f",
    "image_tag": "dev-2008061027",
    "branch": "dev-20200507",
    "name_cn": "庞晓宇",
    "name_en": "pangxy1"
  }, {
    "release_log": "Update .gitlab-ci.yml",
    "update_time": "2020-08-05 17:25:29",
    "update_user": "5db00e5bf57ddb001047b499",
    "stage": "dev",
    "name": "base-image-test",
    "id": "5f2a7b095ad351001f8e942e",
    "image_tag": "dev-2008051716",
    "branch": "dev-auto-release",
    "name_cn": "叶文龙",
    "name_en": "csii_yewl"
  }, {
    "trial_apps_names": ["mspmk-web-mmmpk", "nbh-web-grouptest"],
    "branch": "dev-feature-0610",
    "release_log": "111444444433",
    "update_time": "2020-06-10 17:15:41",
    "update_user": "5db688e8f8d61800136ffe11",
    "stage": "invalid",
    "trial_apps": ["15", "16"],
    "name": "base-image-test",
    "meta_data": {
      "common-version": "1.0.1",
      "jdk-version": "1.8.1"
    },
    "id": "5ee0a4bd9b104a001403d6aa",
    "image_tag": "pro-2006101715",
    "packagetype": "pipepackage",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }],
  "POST /fcomponent/api/baseImage/queryBaseImageDetail": {
    "id": "5ea7db3c673c3638545b70e2",
    "name": "base-image-test",
    "name_cn": "测试环境基础镜像",
    "description": "123456",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "gitlab_id": "51",
    "manager": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "type": "mirioservice",
    "target_env": "test",
    "wiki": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "meta_data_declare": {
      "jdk_version": "1.8-191",
      "tomcat_version": "8.5.43"
    }
  },
  "POST /fcomponent/api/baseImage/queryBaseImage": [{
    "id": "5ea7db3c673c3638545b70e2",
    "name": "base-image-test",
    "name_cn": "测试环境基础镜像",
    "description": "111",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "gitlab_id": "51",
    "manager": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "type": "mirioservice",
    "target_env": "test",
    "wiki": "http://10.141.59.87:8090/ebank/devops/component/base-image-test",
    "meta_data_declare": {
      "jdk_version": "1.8-191",
      "tomcat_version": "8.5.43"
    }
  }],
  "POST /fcomponent/api/config/saveConfigTemplate": "",
  "POST /fcomponent/api/config/queryConfigTemplate": "# made fdev1",
  "POST /fcomponent/api/component/queryComponents": [{
    "id": "5dcd3c905ab750000c2858af",
    "name_en": "pe-redis-core",
    "name_cn": "jedis网银系统封装包",
    "desc": "网银分布式会话redis访问组件，对于网银系统访问redis做规范封装",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/pe-redis-core",
    "groupId": "com.csii.pe",
    "artifactId": "pe-redis-core",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5dcd3cc95ab750000c2858c4",
    "name_en": "druid",
    "name_cn": "alibaba德鲁伊连接池",
    "desc": "java数据库连接池，提供强大的监控和扩展功能",
    "gitlab_url": "",
    "groupId": "com.alibaba",
    "artifactId": "druid",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "1",
    "recommond_version": "1.1.9"
  }, {
    "id": "5dce00e5018a2b000c662e7b",
    "name_en": "spdb-maven-scanner-plugin",
    "name_cn": "代码扫描maven插件",
    "desc": "maven build 插件，设计为在执行mvn install 打包前执行该插件，执行扫描指定关键字是否在项目源代码中",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/spdb-maven-scanner-plugin",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.ci.scanner",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "http://10.129.40.170/ebank/CommonModules/spdb-maven-scanner-plugin/blob/master/README.md",
    "source": "0"
  }, {
    "id": "5dce0149018a2b000c662e80",
    "name_en": "serverStatusCheck",
    "name_cn": "应用健康检查组件",
    "desc": "通过实现SeverStatusCheckPolicy类增加判断逻辑，然后通过ApplicationListener监听容器启动并对相关组件运行状态进行判断，并将运行状态信息输出到健康监控日志文件中，然后通过日志监控等方法对各系统应用的启动状态进行监控。",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/serverStatusCheck",
    "groupId": "com.csii.pe",
    "artifactId": "serverstatuscheck",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5dce028a018a2b000c662e83",
    "name_en": "com.spdb.configuration",
    "name_cn": "配置刷新组件",
    "desc": "配置刷新组件,规范配置刷新方法",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/com.spdb.configuration",
    "groupId": "com.spdb.configuration",
    "artifactId": "com.spdb.configuration",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5dce03b7018a2b000c662e87",
    "name_en": "PE10-extlib",
    "name_cn": "PE10扩展组件",
    "desc": "PE10扩展组件父pom",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.parent",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "1",
    "root_dir": "com.csii.pe.parent",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5dce03fa018a2b000c662e95",
    "name_en": "com.csii.pe.communication.rest",
    "name_cn": "网银微服务restful通讯组件",
    "desc": "微服务应用与后台联机微服务通讯组件，使用ribbon实现负载均衡，并自实现请求、响应数据transformer\n\n（通讯报文格式：json）",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.communication.rest",
    "parentId": "5dce03b7018a2b000c662e87",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "2",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0",
    "parent_nameen": "PE10-extlib"
  }, {
    "id": "5dce0a92018a2b000c662ece",
    "name_en": "com.csii.pe.security.anti.attack",
    "name_cn": "防XXS攻击安全组件",
    "desc": "防攻击安全检查，用户请求参数检查，防XXS攻击",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.security.anti.attack",
    "parentId": "5dce03b7018a2b000c662e87",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "2",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0",
    "parent_nameen": "PE10-extlib"
  }, {
    "id": "5dce0b1b018a2b000c662eec",
    "name_en": "com.spdb.redislock",
    "name_cn": "redis分布式锁",
    "desc": "redis分布式锁组件，一般配合com.csii.pe.redis.core.guard使用",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/com.spdb.redislock",
    "groupId": "com.spdb.redislock",
    "artifactId": "com.spdb.redislock",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "李治中",
      "id": "5ccfed04954ad500064ebceb",
      "user_name_en": "csii_lizz"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "http://10.129.40.170/ebank/CommonModules/com.spdb.redislock/blob/master/README.md",
    "source": "0"
  }, {
    "id": "5dce0b6b018a2b000c662ef4",
    "name_en": "accesscontroller",
    "name_cn": "令牌桶限流",
    "desc": "About AccessContrl令牌桶流控,基于令牌桶，对指定要素进行限流,针对交易维度的交易速率控制,系统会以一个恒定的速度往令牌桶中放入令牌。如果请求需要被处理，\n则需要先从桶里获取一个令牌。当桶里没有令牌可取时，则拒绝该请求。从而达到控制交易请求速率的目的。",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/accesscontroller",
    "groupId": "com.spdb",
    "artifactId": "accesscontroller",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5dce0cf3018a2b000c662f0c",
    "name_en": "fastjson",
    "name_cn": "阿里巴巴json序列化",
    "desc": "fastjson是阿里巴巴的开源JSON解析库，它可以解析JSON格式的字符串，支持将Java Bean序列化为JSON字符串，也可以从JSON字符串反序列化到JavaBean",
    "gitlab_url": "",
    "groupId": "com.alibaba",
    "artifactId": "fastjson",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "1"
  }, {
    "id": "5dce0d86018a2b000c662fb8",
    "name_en": "ibatis-sqlmap-spdb",
    "name_cn": "ibatis数据库持久层框架",
    "desc": "基于SQL映射支持Java语言的持久层框架\n\n基于ibatis优化过缓存击穿",
    "gitlab_url": "",
    "groupId": "com.csii",
    "artifactId": "ibatis-sqlmap-spdb",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "",
    "wiki_url": "",
    "source": "1"
  }, {
    "id": "5dce0f15018a2b000c662fc8",
    "name_en": "com.csii.pe.service.guard.ext",
    "name_cn": "com.csii.pe.service.guard扩展包",
    "desc": "流水号工厂等",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.service.guard.ext",
    "parentId": "5dce03b7018a2b000c662e87",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "2",
    "root_dir": "com.csii.pe.parent/com.csii.pe.service.guard.ext",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0",
    "parent_nameen": "PE10-extlib"
  }, {
    "id": "5dce0f7e018a2b000c662fea",
    "name_en": "com.csii.pe.security.guard",
    "name_cn": "网银签名验签相关",
    "desc": "网银签名验签相关公共方法",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.security.guard",
    "parentId": "5dce03b7018a2b000c662e87",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "2",
    "root_dir": "com.csii.pe.parent/com.csii.pe.security.guard",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0",
    "parent_nameen": "PE10-extlib"
  }, {
    "id": "5dce0fbd018a2b000c663002",
    "name_en": "com.csii.pe.core.guard.ext",
    "name_cn": "pe.core.guard扩展包",
    "desc": "PE核心扩展包",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.core.guard.ext",
    "parentId": "5dce03b7018a2b000c662e87",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "2",
    "root_dir": "com.csii.pe.parent/com.csii.pe.core.guard.ext",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0",
    "parent_nameen": "PE10-extlib"
  }, {
    "id": "5dce1015018a2b000c663024",
    "name_en": "com.csii.pe.communication.ws",
    "name_cn": "网银webservice通讯组件",
    "desc": "网银webservice通讯组件",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/PE10-extlib",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.communication.ws",
    "parentId": "5dce03b7018a2b000c662e87",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "2",
    "root_dir": "com.csii.pe.parent/com.csii.pe.communication.ws",
    "jdk_version": "",
    "wiki_url": "",
    "source": "0",
    "parent_nameen": "PE10-extlib"
  }],
  "POST /fcomponent/api/component/addComponent": {
    "id": "5dd4b63e673c3627205419e0",
    "name_en": "pe-redis-core",
    "name_cn": "pe-redis-core",
    "desc": "开发测试",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/pe-redis-core",
    "groupId": "com.csii.pe",
    "artifactId": "pe-redis-core",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.7",
    "wiki_url": "http://10.136.35.116:8080/ebank/devops/testGroup/pe-redis-core",
    "source": "0"
  },
  "POST /fcomponent/api/component/updateComponent": {
    "id": "5dd4b63e673c3627205419e0",
    "name_en": "pe-redis-core",
    "name_cn": "pe-redis-core",
    "desc": "开发测试",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/pe-redis-core",
    "groupId": "com.csii.pe",
    "artifactId": "pe-redis-core",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.7",
    "wiki_url": "222",
    "source": "0"
  },
  "POST /fcomponent/api/component/updateComponentHistary": {
    "id": "5dd38af8673c361f5cdb50ff",
    "component_id": "5dd38aeb673c361f5cdb50fe",
    "version": "10212.0.1-RELEASE",
    "date": "2019-11-20 11:46:59",
    "update_user": "5daff62cf57ddb001047b484",
    "release_log": "bug fix",
    "jdk_version": "",
    "type": "1",
    "packagetype": "",
    "pipid": ""
  },
  "POST /fcomponent/api/component/changeStage": "",
  "POST /fcomponent/api/component/queryIssueRecord": [{
    "date": "2019-11-13 18:05:23",
    "component_id": "5dcbd5637cedb10013adbcc6",
    "pipid": "",
    "jdk_version": "1.7",
    "type": "3",
    "version": "10212.0.1-RC2",
    "release_log": "",
    "update_user": "",
    "id": "5dcbd5637cedb10013adbcc9",
    "packagetype": "",
    "name_cn": "admin",
    "name_en": "admin"
  }, {
    "date": "2019-11-13 18:05:23",
    "component_id": "5dcbd5637cedb10013adbcc6",
    "pipid": "",
    "jdk_version": "1.7",
    "type": "3",
    "version": "10212.0.1-RC1",
    "release_log": "",
    "update_user": "",
    "id": "5dcbd5637cedb10013adbcca",
    "packagetype": "",
    "name_cn": "admin",
    "name_en": "admin"
  }],
  "POST /fcomponent/api/component/queryComponentIssues": [{
    "component_id": "5dcbd5637cedb10013adbcc6",
    "due_date": "2019/11/14",
    "feature_branch": "10312.0.3-SNAPSHOT",
    "title": "新增优化",
    "target_version": "10312.0.3",
    "stage": "4",
    "assignee": "5daff4cbf57ddb001047b482",
    "id": "5dccccaae675130013c1f3dd",
    "name_cn": "汪军",
    "desc": "11",
    "name_en": "csii_wangj"
  }, {
    "component_id": "5dcbd5637cedb10013adbcc6",
    "due_date": "2019/11/14",
    "feature_branch": "10312.0.4-SNAPSHOT",
    "title": "测试",
    "target_version": "10312.0.4",
    "stage": "4",
    "assignee": "5db688e8f8d61800136ffe11",
    "id": "5dccf218e675130013c1f3ea",
    "name_cn": "王飞强",
    "desc": "111",
    "name_en": "csii_wangfq"
  }, {
    "component_id": "5dcbd5637cedb10013adbcc6",
    "due_date": "2019/11/28",
    "feature_branch": "10222.0.3-SNAPSHOT",
    "title": "阿瑟费",
    "target_version": "10222.0.3",
    "stage": "2",
    "assignee": "5daff62cf57ddb001047b484",
    "id": "5dce3c59a1680800120e4d4e",
    "name_cn": "冼绮静",
    "desc": "哈哈哈",
    "name_en": "csii_xianqj"
  }],
  "POST /fcomponent/api/component/queryComponentIssueDetail": {
    "component_id": "5dcbd5637cedb10013adbcc6",
    "due_date": "2019/11/14",
    "feature_branch": "10312.0.3-SNAPSHOT",
    "title": "新增优化",
    "target_version": "10312.0.3",
    "stage": "4",
    "manager_id": [{
      "id": "5daff4cbf57ddb001047b482",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "assignee": "5daff4cbf57ddb001047b482",
    "id": "5dccccaae675130013c1f3dd",
    "name_cn": "汪军",
    "desc": "11",
    "name_en": "csii_wangj"
  },
  "POST /fcomponent/api/component/package": "",
  "POST /fcomponent/api/component/queryComponentDetail": {
    "id": "5dcd3c905ab750000c2858af",
    "name_en": "pe-redis-core",
    "name_cn": "jedis网银系统封装包",
    "desc": "网银分布式会话redis访问组件，对于网银系统访问redis做规范封装",
    "gitlab_url": "http://10.129.40.170/ebank/CommonModules/pe-redis-core",
    "groupId": "com.csii.pe",
    "artifactId": "pe-redis-core",
    "parentId": "",
    "manager_id": [{
      "id": "5ce3973694d6d700078a5a32",
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0"
  },
  "POST /fcomponent/api/application/scanApplication": "",
  "POST /fcomponent/api/application/scanComponent": "",
  "POST /fcomponent/api/component/queryComponentHistory": [{
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b0",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.8-SNAPSHOT"
  }, {
    "date": "2019-11-15 10:32:30",
    "release_log": "懒加载数据相关方法默认使用当前redis服务器所在区域",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b1",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.7-RELEASE"
  }, {
    "date": "2019-11-15 10:32:22",
    "release_log": "新需求: 懒加载方法支持传入失效时间",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b2",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.6-RELEASE"
  }, {
    "date": "2019-11-15 14:02:04",
    "release_log": "bugfix: RedisDataProxy defaultExpireTime 原为静态变量，在非会话改造项目中设置此值之后会覆盖会话失效时间默认值，将static 修饰符去除",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b3",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.5-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b4",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.4-test-SNAPSHOT"
  }, {
    "date": "2019-11-15 10:32:00",
    "release_log": "手机组对于需单独设置失效时间的会话数据，redis组件包新增此类存取接口。\n此类数据以Redis String数据结构分散存储Redis中\nKey规范：系统缩写.key.globalsessionid\n如：mobwap.tokenlist.1BA0AC54233A11E8972533D028C2DF51",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b5",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.4-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b6",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.4-jdk7-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b7",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.4-SNAPSHOT"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b8",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.3-test-SNAPSHOT"
  }, {
    "date": "2019-11-15 10:31:38",
    "release_log": "获取懒加载数据方法getLazyInitData(String serverRegion, String key)不刷新失效时间",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858b9",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.3-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858ba",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.3-SNAPSHOT"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858bb",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.2-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858bc",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.2-SNAPSHOT"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858bd",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.1-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858be",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.1-SNAPSHOT"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858bf",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "0",
    "version": "1.0.0-RELEASE"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858c0",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "1.0.0-SNAPSHOT"
  }, {
    "date": "2019-11-14 19:37:53",
    "release_log": "",
    "component_id": "5dcd3c905ab750000c2858af",
    "update_user": "",
    "pipid": "",
    "id": "5dcd3c915ab750000c2858c1",
    "jdk_version": "1.7",
    "packagetype": "",
    "type": "3",
    "version": "0.0.1-SNAPSHOT"
  }],
  "POST /fcomponent/api/application/queryApplicatonsByComponent": [{
    "name_zh": "新增应用手机111",
    "update_time": "2020-06-16 15:37:08",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ea4f5873132150012ad34fd",
    "name_en": "mspmk-web-mmmpk",
    "spdb_managers": [{
      "user_name_cn": "陆耀毅",
      "user_name_en": "T-luyy",
      "id": "5dba955625e5eb0012d6c60d"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试组应用",
    "update_time": "2020-06-16 15:37:11",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ea4f6663132150012ad34ff",
    "name_en": "nbh-web-grouptest",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "王硕应用",
    "update_time": "2020-06-16 15:37:16",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "type": "1",
    "application_id": "5ea4fae63132150012ad3507",
    "name_en": "mspmk-web-wang",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "应用",
    "update_time": "2020-06-16 15:37:20",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "type": "1",
    "application_id": "5ea4fd993132150012ad350c",
    "name_en": "mspmk-out-ins",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "二段跳",
    "update_time": "2020-06-16 15:37:25",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "type": "1",
    "application_id": "5ea51b8c3132150012ad3512",
    "name_en": "nbh-ent-mspmktest-parent",
    "spdb_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "group": {
      "id": "5d3e93fe606eeb000a22d323",
      "name": "互联网应用-零售金融APP组-板块4-转账组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试应用米新",
    "update_time": "2020-06-16 15:37:30",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "type": "1",
    "application_id": "5ea523163132150012ad3516",
    "name_en": "ims-ent-ss",
    "spdb_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "group": {
      "id": "5d3e93fe606eeb000a22d323",
      "name": "互联网应用-零售金融APP组-板块4-转账组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试1",
    "update_time": "2020-06-16 15:37:33",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "type": "1",
    "application_id": "5ea5253e3132150012ad351a",
    "name_en": "msper-web-aaaa",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试11",
    "update_time": "2020-06-16 15:37:35",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "type": "1",
    "application_id": "5ea525a63132150012ad351c",
    "name_en": "msper-web-aa",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5d3e9411606eeb000a22d325",
      "name": "互联网应用-零售金融APP组-板块6-APP组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "fdev测试应用zgh0002",
    "update_time": "2020-06-16 15:37:39",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_zhough",
      "user_name_cn": "周港昊",
      "id": "5dc8ba45c09ec2001312c909"
    }],
    "type": "1",
    "application_id": "5ea673ab0a8a31001243d3e1",
    "name_en": "ims-product-zgh002test",
    "spdb_managers": [{
      "user_name_en": "csii_zhough",
      "user_name_cn": "周港昊",
      "id": "5dc8ba45c09ec2001312c909"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "fdev接口提供",
    "update_time": "2020-06-16 15:37:42",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "type": "1",
    "application_id": "5ea7bd9e0a8a31001243d3e7",
    "name_en": "fdev-online-esbdata",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试应用",
    "update_time": "2020-06-16 15:37:46",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }],
    "type": "1",
    "application_id": "5ea7cdd10a8a31001243d3ea",
    "name_en": "nbh-param-sso",
    "spdb_managers": [{
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855eec3288660012ece5fe",
      "name": "互联网应用-公司及PAD组-测试2",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce301c4",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "应用层级测试",
    "update_time": "2020-06-16 15:37:50",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ea8f02f0a8a31001243d3f2",
    "name_en": "qqq-www-eee",
    "spdb_managers": [{
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5ea8ec893d17580012577975",
      "name": "互联网应用-7级层级小组-7.1级层级小组",
      "count": 0,
      "current_count": "",
      "parent_id": "5ea8ec703d17580012577973",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "直通车应用",
    "update_time": "2020-06-16 15:38:01",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5eb4fe9654cdd10012f604b2",
    "name_en": "nbh-ent-zhitongche",
    "spdb_managers": [{
      "user_name_cn": "杨彭刘",
      "user_name_en": "yangpl1",
      "id": "5e4b46f09b669500121ef3c0"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "hxy测试应用",
    "update_time": "2020-06-16 15:38:03",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "type": "1",
    "application_id": "5eb506c454cdd10012f604b4",
    "name_en": "mspmk-param-hxy",
    "spdb_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试",
    "update_time": "2020-06-16 15:38:10",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "type": "1",
    "application_id": "5eb69aca299aed0012b4cf36",
    "name_en": "ims-online-test",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "应用部署测试01",
    "update_time": "2020-06-16 15:38:16",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5eb8fa19dd5b9500124f074d",
    "name_en": "abc-def-ghi",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5ea29a5bcf8ae900121b8f49",
      "name": "互联网应用-8745-层级测试",
      "count": 0,
      "current_count": "",
      "parent_id": "5e818bc494c5980012150185",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "zk-测试",
    "update_time": "2020-06-16 15:38:19",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "张康",
      "user_name_en": "T-zhangk",
      "id": "5e9905b2cf8ae900121b8ea2"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "type": "1",
    "application_id": "5eb90e44dd5b9500124f074f",
    "name_en": "ims-web-zktest",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "张康",
      "user_name_en": "T-zhangk",
      "id": "5e9905b2cf8ae900121b8ea2"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试骨架应用环境配置",
    "update_time": "2020-06-16 15:38:21",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5eba0e11dd5b9500124f0754",
    "name_en": "nbh-ent-testconfig",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "持续集成",
    "update_time": "2020-06-16 15:38:23",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5eba650ddd5b950012d28103",
    "name_en": "ims-ent-ppp",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试55",
    "update_time": "2020-06-16 15:38:27",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "type": "1",
    "application_id": "5eb69aca299aed0012b4cf33",
    "name_en": "ims-online-test1551",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "部署信息测试",
    "update_time": "2020-06-16 15:38:29",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "type": "1",
    "application_id": "5eba9633dd5b950012d28106",
    "name_en": "nbh-product-hxy",
    "spdb_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5d3e9405606eeb000a22d324",
      "name": "互联网应用-零售金融APP组-板块5-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "szy测试中文",
    "update_time": "2020-06-16 15:38:34",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "type": "1",
    "application_id": "5ebcd392dd5b950012d28173",
    "name_en": "ims-online-szy",
    "spdb_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "公共管理端",
    "update_time": "2020-06-16 15:38:42",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_huangfurh",
      "user_name_cn": "皇甫如浩",
      "id": "5db00eb0f57ddb001047b49a"
    }],
    "type": "1",
    "application_id": "5ebd26c3dd5b950012d281b7",
    "name_en": "mgmt-param-commonmgmt",
    "spdb_managers": [{
      "user_name_en": "wangzc4",
      "user_name_cn": "王作春",
      "id": "5e1ec2312ff73300122cfca7"
    }],
    "group": {
      "id": "5eb6212d9e9fe700126c73cf",
      "name": "互联网应用-物联网应用-应用1",
      "count": 0,
      "current_count": "",
      "parent_id": "5eb621179e9fe700126c73ce",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "部署信息测试应用",
    "update_time": "2020-06-16 15:38:44",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "type": "1",
    "application_id": "5ebe439f6fb6c00012a0a5c2",
    "name_en": "nbh-param-hxy",
    "spdb_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "我的应用051801",
    "update_time": "2020-06-16 15:38:48",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "type": "1",
    "application_id": "5ec1fae2d4e399001225956e",
    "name_en": "mspmk-web-one",
    "spdb_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "我的应用051802",
    "update_time": "2020-06-16 15:38:53",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "type": "1",
    "application_id": "5ec1fc9ed4e3990012259574",
    "name_en": "zzz-xxxx-cvv",
    "spdb_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "group": {
      "id": "5e81ccba94c598001215019c",
      "name": "测试应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "路由手动扫描测试应用-web",
    "update_time": "2020-06-16 15:38:55",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5ec23876d4e399001243bfc7",
    "name_en": "test-web-scantest",
    "spdb_managers": [{
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5d3e9411606eeb000a22d325",
      "name": "互联网应用-零售金融APP组-板块6-APP组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试应用0518新",
    "update_time": "2020-06-16 15:38:56",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ec24a1dd4e39900129bbf7c",
    "name_en": "ims-ent-ceshi",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "应用跑pip0519",
    "update_time": "2020-06-16 15:39:00",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ec34288d4e3990012a8b954",
    "name_en": "mspmk-web-runpip",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "任务推需求状态",
    "update_time": "2020-06-16 15:39:03",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ec34293d4e3990012a8b955",
    "name_en": "ims-ent-ooo",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "任务推需求状态2",
    "update_time": "2020-06-16 15:39:05",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ec34349d4e3990012a8b957",
    "name_en": "ims-user-uuu",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "发布的应用",
    "update_time": "2020-06-16 15:39:07",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ec34f25d4e399001248ae27",
    "name_en": "sys-yu-houzui",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "定时部署自动化环境1",
    "update_time": "2020-06-16 15:39:09",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ec39b76d4e3990012e32345",
    "name_en": "yui-op-qwe",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "实体新增应用",
    "update_time": "2020-06-16 15:39:10",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ec39bdbd4e3990012e32347",
    "name_en": "nbh-product-rr",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "定时部署自动化环境2",
    "update_time": "2020-06-16 15:39:12",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ec39c16d4e3990012e32349",
    "name_en": "mspmk-web-onenight",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "未绑定部署信息",
    "update_time": "2020-06-16 15:39:14",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ec3a568d4e3990012e3234d",
    "name_en": "ims-product-ll",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "个人网银管理设置微服务",
    "update_time": "2020-06-16 15:40:04",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "章晓宇",
      "user_name_en": "zhangxy44",
      "id": "5d24074ec0570f000a1b9329"
    }, {
      "user_name_cn": "吴晓慧",
      "user_name_en": "wuxh4",
      "id": "5d2406a8c0570f000a1b9328"
    }],
    "type": "1",
    "application_id": "5d4b967aa893d6000aa6500b",
    "name_en": "msper-web-settings",
    "spdb_managers": [{
      "user_name_cn": "章晓宇",
      "user_name_en": "zhangxy44",
      "id": "5d24074ec0570f000a1b9329"
    }, {
      "user_name_cn": "吴晓慧",
      "user_name_en": "wuxh4",
      "id": "5d2406a8c0570f000a1b9328"
    }],
    "group": {
      "id": "5d3e93f5606eeb000a22d322",
      "name": "互联网应用-零售金融APP组-板块3-互联组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "车上1",
    "update_time": "2020-06-16 15:40:09",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }, {
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5daff72cf57ddb001047b487"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "type": "1",
    "application_id": "5ec67c98a4718c0012c620fc",
    "name_en": "mspmk-web-privatefund",
    "spdb_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }, {
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5daff72cf57ddb001047b487"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "fresouce重构",
    "update_time": "2020-06-16 15:40:14",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_yangf",
      "user_name_cn": "杨飞",
      "id": "5db2911bf8d61800136ffdcf"
    }],
    "type": "1",
    "application_id": "5ec73892a4718c0012c62100",
    "name_en": "mgmt-web-fresource",
    "spdb_managers": [{
      "user_name_en": "csii_yangf",
      "user_name_cn": "杨飞",
      "id": "5db2911bf8d61800136ffdcf"
    }],
    "group": {
      "id": "5d3e9405606eeb000a22d324",
      "name": "互联网应用-零售金融APP组-板块5-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "新增应用1",
    "update_time": "2020-06-16 15:40:16",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ec767195f510200128db304",
    "name_en": "nbh-ent-yy",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "洪浩hh",
    "update_time": "2020-06-16 15:40:18",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ec77cdc5f510200128db32e",
    "name_en": "msper-hh-online",
    "spdb_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "骨架应用",
    "update_time": "2020-06-16 15:40:19",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ecb20bc5f510200128db337",
    "name_en": "ims-user-aaaa",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "交易扫描测试应用",
    "update_time": "2020-06-16 15:40:21",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5ecb81635f510200128db33c",
    "name_en": "mspmk-web-payfee",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5d3e9411606eeb000a22d325",
      "name": "互联网应用-零售金融APP组-板块6-APP组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "服务链路测试应用",
    "update_time": "2020-06-16 15:40:23",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5eccb4ba5f510200128db34c",
    "name_en": "ims-user-payee",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5d3e93fe606eeb000a22d323",
      "name": "互联网应用-零售金融APP组-板块4-转账组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3ebdc2606eeb000a22d335",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "骨架外部配置模板测试",
    "update_time": "2020-06-16 15:40:25",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }, {
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ecf236c5f510200128db375",
    "name_en": "nbh-online-hh",
    "spdb_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }, {
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试hh",
    "update_time": "2020-06-16 15:40:26",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ecf4ea15f510200128db377",
    "name_en": "msper-hho-online",
    "spdb_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "新增应用0426",
    "update_time": "2020-06-16 15:40:32",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ea4f9c33132150012ad3505",
    "name_en": "a-b-c",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5ea29a5bcf8ae900121b8f49",
      "name": "互联网应用-8745-层级测试",
      "count": 0,
      "current_count": "",
      "parent_id": "5e818bc494c5980012150185",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "网段测试应用",
    "update_time": "2020-06-16 15:40:34",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ecfe24e13b8c80012260e3d",
    "name_en": "nbh-online-testnetwork",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试实体配置",
    "update_time": "2020-06-16 15:40:37",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ed078de13b8c80012260e44",
    "name_en": "ims-web-testentity",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "新增测试sit",
    "update_time": "2020-06-16 15:40:39",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ed0cf6e13b8c80012f78648",
    "name_en": "mspay-online-testsit",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "服务链路测试应用111",
    "update_time": "2020-06-16 15:40:41",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5ed4b8ce5099640012844930",
    "name_en": "msper-web-remit",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e818bc494c5980012150185",
      "name": "互联网应用-5489-8745",
      "count": 0,
      "current_count": "",
      "parent_id": "5e818bba94c5980012150184",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试890",
    "update_time": "2020-06-16 15:40:43",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed5b48dba39a100128b4fe5",
    "name_en": "msper-hhh-ol",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e818bba94c5980012150184",
      "name": "5489",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "服务链路测试项目",
    "update_time": "2020-06-16 15:40:45",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5ed5b9e1ba39a100128b4fee",
    "name_en": "ims-product-finance",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5d3ebdc2606eeb000a22d335",
      "name": "互联网应用-零售金融APP组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "服务链路展示测试2",
    "update_time": "2020-06-16 15:40:47",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5ed5ba66ba39a100128b4ff0",
    "name_en": "ims-product-topspeed",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5ea29a5bcf8ae900121b8f49",
      "name": "互联网应用-8745-层级测试",
      "count": 0,
      "current_count": "",
      "parent_id": "5e818bc494c5980012150185",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "更改",
    "update_time": "2020-06-16 15:40:48",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed5c641e25746001242a030",
    "name_en": "msper-ll-ll",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试6",
    "update_time": "2020-06-16 15:40:51",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed5f036e25746001242a03f",
    "name_en": "msper-h-h",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e818bba94c5980012150184",
      "name": "5489",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "新的持续集成",
    "update_time": "2020-06-16 15:40:53",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5ed62420e25746001242a051",
    "name_en": "mspay-user-qqq",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "录入测试回退",
    "update_time": "2020-06-16 15:40:54",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ed709f1e25746001242a061",
    "name_en": "mspmk-web-testaddback",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e818bba94c5980012150184",
      "name": "5489",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试678",
    "update_time": "2020-06-16 15:40:56",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed70d50e25746001242a063",
    "name_en": "msper-h-hh",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "应用新增",
    "update_time": "2020-06-16 15:40:58",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "c-luojm",
      "user_name_cn": "罗家明",
      "id": "5e8ebe423288660012ece6d0"
    }],
    "type": "1",
    "application_id": "5ed7138ae25746001242a06b",
    "name_en": "mspmk-web-newtest",
    "spdb_managers": [{
      "user_name_en": "c-luojm",
      "user_name_cn": "罗家明",
      "id": "5e8ebe423288660012ece6d0"
    }],
    "group": {
      "id": "5e818bba94c5980012150184",
      "name": "5489",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "0",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "参数567",
    "update_time": "2020-06-16 15:40:59",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed73544e25746001242a077",
    "name_en": "msper-hh-hh",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "服务链路展示测试",
    "update_time": "2020-06-16 15:41:01",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "1",
    "application_id": "5ed748b0e25746001242a086",
    "name_en": "mspmk-web-sdddd",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5cb97dee3358ba00077075ff",
      "name": "互联网应用-移动组-统一收银台小组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1986ce30aw1",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "名称规范的应用",
    "update_time": "2020-06-16 15:41:06",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "type": "1",
    "application_id": "5ed76195b2797e0012058033",
    "name_en": "mspmk-web-guifan",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5ecb6d189a3d080012c89c58",
      "name": "互联网应用-板块5-公共组-公共子组",
      "count": 0,
      "current_count": "",
      "parent_id": "5d3e9405606eeb000a22d324",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "vue容器化",
    "update_time": "2020-06-16 15:41:08",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "type": "1",
    "application_id": "5ed772e1b2797e0012916c19",
    "name_en": "aaa-user-configtest",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "全球",
    "update_time": "2020-06-16 15:41:09",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed8b9e5cf821100121c82cc",
    "name_en": "msper-hk-hk",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "刚刚",
    "update_time": "2020-06-16 15:41:11",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed8bbc6cf821100121c82ce",
    "name_en": "msper-hk-kl",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "扣扣88",
    "update_time": "2020-06-16 15:41:13",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "type": "1",
    "application_id": "5ed8c38ecf821100121c82d4",
    "name_en": "msper-ff-gg",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "卡点测试",
    "update_time": "2020-06-16 15:41:14",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "type": "1",
    "application_id": "5ed9ec6a0fe74a0012f2cf2d",
    "name_en": "msper-param-hxy",
    "spdb_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "第三方公司的",
    "update_time": "2020-06-16 15:41:16",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5eddd6660fe74a0012f2cf64",
    "name_en": "mspay-product-eee",
    "spdb_managers": [{
      "user_name_en": "c-qujy6",
      "user_name_cn": "曲继业",
      "id": "5e1586b84290880012b8d191"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "任务阶段显示SIT",
    "update_time": "2020-06-16 15:41:18",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5eddd7a10fe74a0012f2cf68",
    "name_en": "ims-product-qqqq",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "涉及环境部署",
    "update_time": "2020-06-16 15:41:19",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5edde1fc0fe74a0012f2cf6c",
    "name_en": "ims-user-zhl",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "fdev测试应用--司建高",
    "update_time": "2020-06-16 15:41:21",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "司建高",
      "user_name_en": "T-sijg",
      "id": "5de76931ce934300135608b3"
    }],
    "type": "1",
    "application_id": "5eddfecf0fe74a0012f2cf74",
    "name_en": "fdev-web-release",
    "spdb_managers": [{
      "user_name_cn": "司建高",
      "user_name_en": "T-sijg",
      "id": "5de76931ce934300135608b3"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "不涉及",
    "update_time": "2020-06-16 15:41:23",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "type": "1",
    "application_id": "5ede1ab10fe74a0012f2cf7c",
    "name_en": "hh-hh-hxy",
    "spdb_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "涉及",
    "update_time": "2020-06-16 15:41:25",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "type": "1",
    "application_id": "5ededfe60fe74a0012f2cf7d",
    "name_en": "mspmk-ent-hxy",
    "spdb_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "录入已有应用（不涉及）",
    "update_time": "2020-06-16 15:41:27",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5edee5790fe74a0012f2cf7f",
    "name_en": "mspay-product-mmm",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "不涉及环境部署",
    "update_time": "2020-06-16 15:41:29",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5edf39aa0fe74a0012f2cf8e",
    "name_en": "ims-product-bbb",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "涉及但未绑定部署信息",
    "update_time": "2020-06-16 15:41:31",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "1",
    "application_id": "5edf3fe90fe74a0012f2cf90",
    "name_en": "ims-product-ooo",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1986ce30aw1",
      "name": "互联网应用-移动组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "批量替换",
    "update_time": "2020-06-16 15:41:33",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "luol10",
      "user_name_cn": "骆雷",
      "id": "5ed70a38849b0d00123a9565"
    }],
    "type": "1",
    "application_id": "5ee0493a0fe74a0012f2cfa2",
    "name_en": "nbh-product-configreader",
    "spdb_managers": [{
      "user_name_en": "luol10",
      "user_name_cn": "骆雷",
      "id": "5ed70a38849b0d00123a9565"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试环境配置模版",
    "update_time": "2020-06-16 15:41:41",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee1dd591ea55c00124bf81e",
    "name_en": "mspmk-ent-testconfig",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试编码",
    "update_time": "2020-06-16 15:41:46",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee1de911ea55c00124bf820",
    "name_en": "mspmk-param-testcode",
    "spdb_managers": [{
      "user_name_en": "wangzc4",
      "user_name_cn": "王作春",
      "id": "5e1ec2312ff73300122cfca7"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online编码",
    "update_time": "2020-06-16 15:41:52",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee1df751ea55c00124bf824",
    "name_en": "nbh-ent-onlinecode",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "杨章焱专用应用",
    "update_time": "2020-06-16 15:41:56",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_yanyu",
      "user_name_cn": "杨章焱",
      "id": "5daffeebf57ddb001047b499"
    }],
    "type": "1",
    "application_id": "5ee1eb061ea55c00124bf826",
    "name_en": "ims-ent-yanyu",
    "spdb_managers": [{
      "user_name_en": "csii_yanyu",
      "user_name_cn": "杨章焱",
      "id": "5daffeebf57ddb001047b499"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试手机骨架配置模版",
    "update_time": "2020-06-16 15:42:05",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee33df98580be0012098d8d",
    "name_en": "mspay-ent-testmspmk",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架",
    "update_time": "2020-06-16 15:42:10",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee33ef58580be0012098d8f",
    "name_en": "nbh-ent-configss",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "测试online",
    "update_time": "2020-06-16 15:42:11",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee340288580be0012098d91",
    "name_en": "ipay-ent-tsetonline",
    "spdb_managers": [{
      "user_name_en": "T-fengwy",
      "user_name_cn": "丰文勇",
      "id": "5db661ebf8d61800136ffe08"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online测试编码",
    "update_time": "2020-06-16 15:42:13",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "type": "1",
    "application_id": "5ee340b48580be0012098d93",
    "name_en": "mspmk-user-onlinegbk",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "基础应用联机tool项目",
    "update_time": "2020-06-16 16:42:47",
    "isLatest": "0",
    "dev_managers": [{
      "user_name_en": "csii_huangfurh",
      "user_name_cn": "皇甫如浩",
      "id": "5db00eb0f57ddb001047b49a"
    }],
    "type": "1",
    "application_id": "5ee70f638580be0012098d9a",
    "name_en": "ims-fun-appdevtool",
    "spdb_managers": [{
      "user_name_en": "csii_huangfurh",
      "user_name_cn": "皇甫如浩",
      "id": "5db00eb0f57ddb001047b49a"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "fullName": ""
    },
    "component_version": "10.0.1-RELEASE"
  }],
  "POST /fcomponent/api/application/queryComponentsByApplicaton": [{
    "component_id": "5dcd3c905ab750000c2858af",
    "update_time": "2019-11-15 18:19:36",
    "isLatest": "1",
    "id": "5dcd3cbd5ab750000c2858c3",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "jedis网银系统封装包",
    "component_version": "1.0.5-RELEASE",
    "name_en": "pe-redis-core"
  }, {
    "component_id": "5dcd3cc95ab750000c2858c4",
    "update_time": "2019-11-15 13:34:37",
    "isLatest": "1",
    "id": "5dcd3ce35ab750000c285906",
    "type": "1",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "alibaba德鲁伊连接池",
    "component_version": "1.1.9",
    "name_en": "druid"
  }, {
    "component_id": "5dce03fa018a2b000c662e95",
    "update_time": "2019-11-15 18:04:00",
    "isLatest": "0",
    "id": "5dce0428018a2b000c662ea2",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "网银微服务restful通讯组件",
    "component_version": "10.1.0-RELEASE",
    "name_en": "com.csii.pe.communication.rest"
  }, {
    "component_id": "5dce0a92018a2b000c662ece",
    "update_time": "2019-11-15 10:17:47",
    "isLatest": "0",
    "id": "5dce0acb018a2b000c662ee8",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "防XXS攻击安全组件",
    "component_version": "10.0.1-RELEASE",
    "name_en": "com.csii.pe.security.anti.attack"
  }, {
    "component_id": "5dce0cf3018a2b000c662f0c",
    "update_time": "2019-11-15 10:28:27",
    "isLatest": "1",
    "id": "5dce0d4b018a2b000c662fb6",
    "type": "",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "阿里巴巴json序列化",
    "component_version": "1.2.41",
    "name_en": "fastjson"
  }, {
    "component_id": "5dce0d86018a2b000c662fb8",
    "update_time": "2019-11-15 10:31:11",
    "isLatest": "1",
    "id": "5dce0def018a2b000c662fbd",
    "type": "",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "ibatis数据库持久层框架",
    "component_version": "2.3.4.726",
    "name_en": "ibatis-sqlmap-spdb"
  }, {
    "component_id": "5dce0f15018a2b000c662fc8",
    "update_time": "2019-11-15 10:38:37",
    "isLatest": "0",
    "id": "5dce0fad018a2b000c663001",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "com.csii.pe.service.guard扩展包",
    "component_version": "10.0.6-RELEASE",
    "name_en": "com.csii.pe.service.guard.ext"
  }, {
    "component_id": "5dce0f7e018a2b000c662fea",
    "update_time": "2019-11-15 10:41:01",
    "isLatest": "0",
    "id": "5dce103d018a2b000c663040",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "网银签名验签相关",
    "component_version": "10.0.4-RELEASE",
    "name_en": "com.csii.pe.security.guard"
  }, {
    "component_id": "5dce0fbd018a2b000c663002",
    "update_time": "2019-11-15 10:41:40",
    "isLatest": "1",
    "id": "5dce1064018a2b000c663044",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "pe.core.guard扩展包",
    "component_version": "10.0.4-RELEASE",
    "name_en": "com.csii.pe.core.guard.ext"
  }, {
    "component_id": "5dce1015018a2b000c663024",
    "update_time": "2019-11-15 10:43:41",
    "isLatest": "1",
    "id": "5dce10dd018a2b000c66304b",
    "type": "0",
    "application_id": "5cd13ab6c11d45000612548a",
    "name_cn": "网银webservice通讯组件",
    "component_version": "10.0.1-RELEASE",
    "name_en": "com.csii.pe.communication.ws"
  }],
  "POST /fcomponent/api/mail/mailContent": {
    "email_content": "各位老师好:\n\n    组件pe-redis-core测试已更新至1.2.6-RELEASE，更新日志如下:\n    1\n\n    历史版本详见:\n    <a href=\"http://10.134.13.25:9093/fdev/#/componentManage/server/list/5ea28674a9218600148bdc6e\"  style=\"text-decoration:none; color:blue;\">http://10.134.13.25:9093/fdev/#/componentManage/server/list/5ea28674a9218600148bdc6e</a>\n\n    如果有问题，请联系王飞强。"
  },
  "POST /fcomponent/api/archetype/queryArchetypes": [{
    "id": "5df896521dcf5400150c73cb",
    "name_en": "vue-archetype",
    "name_cn": "通用vue项目骨架（应用模块使用，勿动！！！）",
    "desc": "（应用模块使用，勿动！！！）",
    "gitlab_url": "",
    "groupId": "com.spdb",
    "artifactId": "vue-archetype",
    "manager_id": [{
      "user_name_cn": "周明",
      "id": "5daffeebf57ddb001047b493",
      "user_name_en": "csii_zhoum"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "group": "5c81c56cd3e2a1126ce3004b",
    "type": "vue",
    "wiki_url": "",
    "encoding": "UTF-8",
    "group_name": "互联网应用-公共组"
  }, {
    "id": "5e095506227d650014994da6",
    "name_en": "fdev-prototype",
    "name_cn": "fdev骨架",
    "desc": "FDEV骨架",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/fdev-prototype",
    "groupId": "com.spdb",
    "artifactId": "fdev-archetype",
    "manager_id": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }],
    "group": "5ea8ec893d17580012577975",
    "type": "maven-single-module(maven单模块)",
    "wiki_url": "",
    "encoding": "UTF-8",
    "recommond_version": "1.0.1-RELEASE",
    "group_name": "互联网应用-7级层级小组-7.1级层级小组"
  }, {
    "id": "5df876c8baf7050014c944e8",
    "name_en": "pe-springcloud-online",
    "name_cn": "online骨架（应用模块使用，勿动！！！）",
    "desc": "（应用模块使用，勿动！！！）",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/pe-springcloud-online",
    "groupId": "com.spdb",
    "artifactId": "ms-online-archetype",
    "manager_id": [{
      "user_name_cn": "龚锋",
      "id": "5dbaa7ea25e5eb0012d6c611",
      "user_name_en": "csii_gongf"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "type": "maven-single-module(maven单模块)",
    "wiki_url": "",
    "encoding": "UTF-8",
    "recommond_version": "10.0.4-RELEASE",
    "group_name": "板块7-账户组"
  }, {
    "id": "5df891c71dcf540014cb1dcd",
    "name_en": "mspmk-web-demo-parent",
    "name_cn": "手机WEB骨架（应用模块使用，勿动！！！）",
    "desc": "（应用模块使用，勿动！！！）",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/mspmk-web-demo-parent",
    "groupId": "com.spdb",
    "artifactId": "mspmk-web-archetype",
    "manager_id": [{
      "user_name_cn": "龚锋",
      "id": "5dbaa7ea25e5eb0012d6c611",
      "user_name_en": "csii_gongf"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "group": "5cb97dee3358ba00077075ff",
    "type": "maven-multi-module(maven多模块)",
    "wiki_url": "",
    "encoding": "GBK",
    "recommond_version": "10.0.7-RELEASE",
    "group_name": "统一收银台小组"
  }, {
    "id": "5df894421dcf540014edf9d7",
    "name_en": "pe-springcloud-parent",
    "name_cn": "公共WEB骨架（应用模块使用，勿动！！！）",
    "desc": "（应用模块使用，勿动！！！）",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/pe-springcloud-parent",
    "groupId": "com.spdb",
    "artifactId": "ms-web-archetype",
    "manager_id": [{
      "user_name_cn": "龚锋",
      "id": "5dbaa7ea25e5eb0012d6c611",
      "user_name_en": "csii_gongf"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "group": "5c81c56cd3e2a1126ce3004b",
    "type": "maven-multi-module(maven多模块)",
    "wiki_url": "",
    "encoding": "GBK",
    "recommond_version": "10.0.3-RELEASE",
    "group_name": "互联网应用-公共组"
  }],
  "POST /fcomponent/api/archetype/queryMyArchetypes": [{
    "id": "5e13f4b0b22ea50014c66ae3",
    "name_en": "yingying",
    "name_cn": "应用",
    "desc": "十多个地方",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/mspmk-web-sdddd-parent",
    "groupId": "57567",
    "artifactId": "567568",
    "manager_id": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }],
    "group": "5c81c56cd3e2a1126ce3004b",
    "type": "公共骨架",
    "wiki_url": "",
    "encoding": "GBK",
    "group_name": "公共组"
  }, {
    "id": "5e1ec29c79a18900148f662e",
    "name_en": "gujia0115",
    "name_cn": "骨架0115",
    "desc": "没看过",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/msper-web-test02test-parent",
    "groupId": "com.csii.pe",
    "artifactId": "msper-web-test02test-parent",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "id": "5daff485f57ddb001047b481",
      "user_name_en": "csii_wuf"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }],
    "group": "5c81c56cd3e2a1126ce3004b",
    "type": "个人骨架",
    "wiki_url": "",
    "encoding": "UTF-8",
    "group_name": "公共组"
  }, {
    "id": "5e1fd5f079a18900145e52f7",
    "name_en": "test-prototype",
    "name_cn": "test-prototype好",
    "desc": "test微服务原型",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroupss/fdev-prototype",
    "groupId": "com.spdb",
    "artifactId": "test-archetype",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "吴瑾",
      "user_name_en": "csii_wuj",
      "id": "5daff39df57ddb001047b47f"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "type": "online骨架",
    "wiki_url": "",
    "encoding": "GBK",
    "group_name": "板块7-账户组"
  }],
  "POST /fcomponent/api/mpassarchetype/queryMyMpassArchetypes": [{
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/quasar-project",
    "group_name": "支付组",
    "gitlab_id": "311",
    "id": "5f07da04673c36555426b8c8",
    "name_cn": "vue骨架",
    "name_en": "quasar-project",
    "group": "123asdasb3241ad13adada13",
    "desc": "12"
  }, {
    "manager": [{
      "user_name_cn": "admin",
      "id": "5c41838ea3178a4a841e6c94",
      "user_name_en": "admin"
    }, {
      "user_name_cn": "李志鹏",
      "id": "5e65aaf9fd798a0012b76096",
      "user_name_en": "c-lizp"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/testgroups/msper-web-goldgoldgold-parent",
    "group_name": "2组",
    "gitlab_id": "21",
    "id": "5f1aa2a661e6f3001fd029f2",
    "name_cn": "方法",
    "name_en": "ff",
    "group": "5f082a0b9dae080012cf90aa",
    "desc": "发发发"
  }],
  "POST /fcomponent/api/archetype/queryArchetypeDetail": {
    "id": "5df876c8baf7050014c944e8",
    "name_en": "pe-springcloud-online",
    "name_cn": "online骨架（应用模块使用，勿动！！！）",
    "desc": "（应用模块使用，勿动！！！）",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroupss/pe-springcloud-online",
    "groupId": "com.spdb",
    "artifactId": "ms-online-archetype",
    "manager_id": [{
      "user_name_cn": "龚锋",
      "id": "5dbaa7ea25e5eb0012d6c611",
      "user_name_en": "csii_gongf"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "type": "maven-single-module(maven单模块)",
    "wiki_url": "",
    "encoding": "UTF-8",
    "recommond_version": "10.0.4-RELEASE",
    "group_name": "板块7-账户组"
  },
  "POST /fcomponent/api/archetype/updateArchetype": {
    "id": "5e1fd5f079a18900145e52f7",
    "name_en": "test-prototype",
    "name_cn": "test-prototype",
    "desc": "test微服务原型",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroupss/fdev-prototype",
    "groupId": "com.spdb",
    "artifactId": "test-archetype",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "吴瑾",
      "user_name_en": "csii_wuj",
      "id": "5daff39df57ddb001047b47f"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "type": "4",
    "wiki_url": "",
    "encoding": "UTF-8"
  },
  "POST /fcomponent/api/archetype/addArchetype": {
    "id": "5e1fd5f079a18900145e52f7",
    "name_en": "test-prototype",
    "name_cn": "test-prototype",
    "desc": "test微服务原型",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroupss/fdev-prototype",
    "groupId": "com.spdb",
    "artifactId": "test-archetype",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "吴瑾",
      "user_name_en": "csii_wuj",
      "id": "5daff39df57ddb001047b47f"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "type": "4",
    "wiki_url": "",
    "encoding": "UTF-8"
  },
  "POST /fcomponent/api/archetype/queryArchetypeHistory": [{
    "date": "2020-01-10 16:58:57",
    "archetype_id": "5df876c8baf7050014c944e8",
    "pipid": "5470",
    "type": "1",
    "version": "10.0.3-RELEASE",
    "release_log": "3122",
    "update_user": "5db688e8f8d61800136ffe11",
    "id": "5e183c9204a3920014270f65",
    "packagetype": "pipepackage",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-01-10 16:54:38",
    "archetype_id": "5df876c8baf7050014c944e8",
    "pipid": "5466",
    "type": "0",
    "version": "10.0.2-RELEASE",
    "release_log": "3333",
    "update_user": "5db688e8f8d61800136ffe11",
    "id": "5e183b7904a3920014270f56",
    "packagetype": "pipepackage",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-01-07 15:24:04",
    "archetype_id": "5df876c8baf7050014c944e8",
    "pipid": "5295",
    "type": "0",
    "version": "10.0.1-RELEASE",
    "release_log": "11112222",
    "update_user": "5db688e8f8d61800136ffe11",
    "id": "5e142f19b22ea50014c66aee",
    "packagetype": "pipepackage",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }],
  "POST /fcomponent/api/mpassarchetype/queryMpassArchetypeHistory": [{
    "release_log": "4142",
    "date": "2020-08-14 15:34:25",
    "update_user": "5f06778b2449f60012c2321b",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f363e81d929fc003577f41e",
    "tag": "feature-dev1-2007201325",
    "name_cn": "党张颖",
    "name_en": "c-dangzy"
  }, {
    "release_log": "测试拉取TAG",
    "date": "2020-08-14 15:26:51",
    "update_user": "5f0c0ce2b26c680012142ed8",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f363cbbd929fc003577f41a",
    "tag": "test_2007271420",
    "name_cn": "郑阳",
    "name_en": "c-zhengy1"
  }, {
    "release_log": "1",
    "date": "2020-08-12 14:16:48",
    "update_user": "5f06778b2449f60012c2321b",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f3389502b6e3e0035bd6b0c",
    "tag": "teest-2008121416",
    "name_cn": "党张颖",
    "name_en": "c-dangzy"
  }, {
    "release_log": "1",
    "date": "2020-08-12 09:42:22",
    "update_user": "5f0c0ce2b26c680012142ed8",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f3348fe50379700356da4bb",
    "tag": "teest-2008120942",
    "name_cn": "郑阳",
    "name_en": "c-zhengy1"
  }, {
    "release_log": "asas",
    "date": "2020-08-11 17:33:56",
    "update_user": "5daff62cf57ddb001047b484",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f326604c421f0003513166e",
    "tag": "feature-dev1-2007201111",
    "name_cn": "冼绮静",
    "name_en": "csii_xianqj"
  }, {
    "release_log": "wsss",
    "date": "2020-08-11 17:13:24",
    "update_user": "5daff62cf57ddb001047b484",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f326134c421f0003513166d",
    "tag": "feature-dev1-2008111713",
    "name_cn": "冼绮静",
    "name_en": "csii_xianqj"
  }, {
    "release_log": "诉讼",
    "date": "2020-08-11 16:46:03",
    "update_user": "5daff62cf57ddb001047b484",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f325acbc421f0003513166c",
    "tag": "feature-dev1-2008111646",
    "name_cn": "冼绮静",
    "name_en": "csii_xianqj"
  }, {
    "release_log": "测试拉取tag1111",
    "date": "2020-07-28 09:46:32",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1f83789f7337001f430a2c",
    "tag": "teest-2007280946",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "拉取tag2222222",
    "date": "2020-07-27 17:29:19",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e9e6f77af5f001fc2e065",
    "tag": "teest-2007271729",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "测试222222",
    "date": "2020-07-27 14:35:03",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e7597961c85001f3245a9",
    "tag": "feature-dev1-2007271435",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "测试拉取tag",
    "date": "2020-07-27 14:32:11",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e74eb961c85001f3245a8",
    "tag": "feature-dev1-2007271432",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "拉取tag",
    "date": "2020-07-27 14:28:53",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e7425961c85001f3245a5",
    "tag": "teest-2007271428",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "拉取tag",
    "date": "2020-07-27 14:26:25",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e7391961c85001f3245a3",
    "tag": "teest-2007271426",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "拉取tag 测试test",
    "date": "2020-07-27 14:19:25",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e71ed961c85001f32459b",
    "tag": "teest-2007271419",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "测试拉取tag",
    "date": "2020-07-27 14:00:52",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f1bf18f61e6f3001fd029f3",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e6d94961c85001f324592",
    "tag": "teest-2007271400",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "d'd'd",
    "date": "2020-07-20 13:33:02",
    "update_user": "5db688e8f8d61800136ffe11",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f152c8e673c364168159ca5",
    "tag": "feature-dev1-2007201333",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-07-20 13:24:05",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f152a75673c364168159ca4",
    "tag": "feature-dev1-2007201324"
  }],
  "POST /fcomponent/api/archetype/queryArchetypeIssues": [{
    "due_date": "2019/12/18",
    "archetype_id": "5e1fd5f079a18900145e52f7",
    "feature_branch": "1.2.1-DEV",
    "title": "ddd",
    "target_version": "1.2.1",
    "stage": "0",
    "assignee": "5daff62cf57ddb001047b484",
    "id": "5e1fd7ce79a18900145e52f8",
    "name_cn": "冼绮静",
    "desc": "111",
    "name_en": "csii_xianqj"
  }],
  "POST /fcomponent/api/archetype/optimizeArchetype": "",
  "POST /fcomponent/api/archetype/changeStage": "",
  "POST /fcomponent/api/archetype/package": "",
  "POST /fcomponent/api/archetype/queryArchetypeIssueRecord": [{
    "date": "2019-12-30 10:13:09",
    "archetype_id": "5e095506227d650014994da6",
    "pipid": "4913",
    "type": "0",
    "version": "1.0.1-RELEASE",
    "release_log": "2112",
    "update_user": "5db688e8f8d61800136ffe11",
    "id": "5e095cfd227d650014994db6",
    "packagetype": "pipepackage",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }],
  "POST /fcomponent/api/archetype/queryArchetypeIssueDetail": {
    "due_date": "2019/12/18",
    "archetype_id": "5e1fd5f079a18900145e52f7",
    "feature_branch": "1.2.1-DEV",
    "title": "ddd",
    "target_version": "1.2.1",
    "stage": "0",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "吴瑾",
      "user_name_en": "csii_wuj",
      "id": "5daff39df57ddb001047b47f"
    }],
    "assignee": "5daff62cf57ddb001047b484",
    "id": "5e1fd7ce79a18900145e52f8",
    "name_cn": "冼绮静",
    "desc": "111",
    "name_en": "csii_xianqj"
  },
  "POST /fcomponent/api/archetype/updateArchetypeHistory": {
    "id": "5e05a716e72c4a0014d471e1",
    "archetype_id": "5df876c8baf7050014c944e8",
    "version": "20191217033516",
    "date": "2019-12-17 11:33:22",
    "update_user": "",
    "release_log": "",
    "type": "0",
    "packagetype": "",
    "pipid": ""
  },
  "POST /fcomponent/api/archetype/queryComponentByArchetype": [{
    "component_id": "5def092f14c5780015e21666",
    "update_time": "2019-12-18 16:55:31",
    "isLatest": "",
    "archetype_version": "1.2.5-SNAPSHOT",
    "archetype_id": "5df876c8baf7050014c944e8",
    "id": "5df9e9831a9b4a001480bd91",
    "type": "0",
    "name_cn": "pe-redis-core测试",
    "component_version": "1.0.7-RELEASE",
    "name_en": "pe-redis-core"
  }, {
    "component_id": "5def09eb14c5780015e21707",
    "update_time": "2019-12-18 16:55:31",
    "isLatest": "",
    "archetype_version": "1.2.5-SNAPSHOT",
    "archetype_id": "5df876c8baf7050014c944e8",
    "id": "5df9e9831a9b4a001480bd92",
    "type": "0",
    "name_cn": "com.csii.pe.communication测试",
    "component_version": "10.0.1-RELEASE",
    "name_en": "com.csii.pe.communication"
  }, {
    "component_id": "5def0a7a14c5780015e2178a",
    "update_time": "2019-12-18 16:55:32",
    "isLatest": "",
    "archetype_version": "1.2.5-SNAPSHOT",
    "archetype_id": "5df876c8baf7050014c944e8",
    "id": "5df9e9841a9b4a001480bd93",
    "type": "",
    "name_cn": "druid德鲁伊",
    "component_version": "1.1.9",
    "name_en": "druid"
  }, {
    "component_id": "5df05df5d31a2d0014fe1d0a",
    "update_time": "2019-12-18 16:55:32",
    "isLatest": "",
    "archetype_version": "1.2.5-SNAPSHOT",
    "archetype_id": "5df876c8baf7050014c944e8",
    "id": "5df9e9841a9b4a001480bd94",
    "type": "0",
    "name_cn": "com.csii.pe.security.guard测试",
    "component_version": "10.0.1-RELEASE",
    "name_en": "com.csii.pe.security.guard"
  }, {
    "component_id": "5df05f36d31a2d0014fe1d9b",
    "update_time": "2019-12-18 16:55:32",
    "isLatest": "",
    "archetype_version": "1.2.5-SNAPSHOT",
    "archetype_id": "5df876c8baf7050014c944e8",
    "id": "5df9e9841a9b4a001480bd95",
    "type": "0",
    "name_cn": "com.csii.pe.core.guard.ext测试",
    "component_version": "10.0.6-RELEASE",
    "name_en": "com.csii.pe.core.guard.ext"
  }],
  "POST /fcomponent/api/archetype/queryApplicatonsByArchetype": [{
    "name_zh": "前端-asda",
    "update_time": "2019-12-18 09:44:41",
    "archetype_version": "20190813202928",
    "archetype_id": "5df896521dcf5400150c73cb",
    "id": "5df896541dcf5400150c73d0",
    "application_id": "5db016805c31e1000f69d8b0",
    "name_en": "msper-ent-aaa"
  }, {
    "name_zh": "App测试",
    "update_time": "2019-12-18 09:45:55",
    "archetype_version": "20190813202928",
    "archetype_id": "5df896521dcf5400150c73cb",
    "id": "5df896771dcf5400150c73d1",
    "application_id": "5dd2362ea5c3a900128b346d",
    "name_en": "app-test-apptester"
  }, {
    "name_zh": "ECS组件",
    "update_time": "2019-12-18 09:46:03",
    "archetype_version": "20190813202928",
    "archetype_id": "5df896521dcf5400150c73cb",
    "id": "5df8967b1dcf5400150c73d2",
    "application_id": "5dd5edfa6f30000013fe61d8",
    "name_en": "ims-web-osscomponent"
  }, {
    "name_zh": "手机财富首页",
    "update_time": "2019-12-18 09:46:23",
    "archetype_version": "20190813202928",
    "archetype_id": "5df896521dcf5400150c73cb",
    "id": "5df896841dcf5400150c73d3",
    "application_id": "5ddf2d7c2cdae90013a1575f",
    "name_en": "ims-web-releasell"
  }, {
    "name_zh": "新建应用zzm",
    "update_time": "2019-12-18 09:46:44",
    "archetype_version": "20190813202928",
    "archetype_id": "5df896521dcf5400150c73cb",
    "id": "5df8968c1dcf5400150c73d4",
    "application_id": "5dea0e29c86e080012ac8bca",
    "name_en": "msper-web-app"
  }],
  "POST /fcomponent/api/archetype/scanArchetype": "",
  "POST /fcomponent/api/component/queryReleaseLog": {
    "id": "5def12fa14c5780015e2186b",
    "component_id": "5def09eb14c5780015e21707",
    "version": "10.0.2-SNAPSHOT",
    "date": "2019-12-10 11:38:12",
    "update_user": "5db688e8f8d61800136ffe11",
    "release_log": "11",
    "jdk_version": "1.8",
    "type": "3",
    "packagetype": "pipepackage",
    "pipid": "3504"
  },
  "POST /fcomponent/api/archetype/queryReleaseLog": {
    "id": "5e095c26227d650014994db2",
    "archetype_id": "5e095506227d650014994da6",
    "version": "1.0.1-SNAPSHOT",
    "date": "2019-12-30 10:11:45",
    "update_user": "5db688e8f8d61800136ffe11",
    "release_log": "222",
    "type": "3",
    "packagetype": "pipepackage",
    "pipid": "4911"
  },
  "POST /fcomponent/api/archetype/queryArchetypeTypes": [{
    "label": "个人骨架",
    "value": "1"
  }, {
    "label": "手机骨架",
    "value": "2"
  }, {
    "label": "公共骨架",
    "value": "3"
  }, {
    "label": "fdev骨架",
    "value": "4"
  }, {
    "label": "online骨架",
    "value": "5"
  }],
  "POST /fcomponent/api/component/queryMyComponents": [{
    "id": "5df05df5d31a2d0014fe1d0a",
    "name_en": "com.csii.pe.security.guard",
    "name_cn": "com.csii.pe.security.guard测试",
    "desc": "安全控件",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/pe10-extlib-test",
    "groupId": "com.csii.pe",
    "artifactId": "com.csii.pe.security.guard",
    "parentId": "5def09ac14c5780015e216d4",
    "manager_id": [{
      "user_name_cn": "杨飞",
      "id": "5db2911bf8d61800136ffdcf",
      "user_name_en": "csii_yangf"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "type": "2",
    "root_dir": "com.csii.pe.parent/com.csii.pe.security.guard",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0",
    "recommond_version": "10.0.4-RELEASE",
    "parent_nameen": "com.csii.pe.parent"
  }, {
    "id": "5e1d2cfae239fd0014c30aea",
    "name_en": "xinzeng",
    "name_cn": "新增组件",
    "desc": "组件配合用户修改",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/xinzeng",
    "groupId": "110",
    "artifactId": "112",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5e1d2d48e239fd0014c30aeb",
    "name_en": "xinzeng1",
    "name_cn": "新增组件1",
    "desc": "组件配合用户修改",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/xinzeng1",
    "groupId": "1100",
    "artifactId": "1122",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5e1e832079a1890014386090",
    "name_en": "zujianxinzeng",
    "name_cn": "组件新增",
    "desc": "额外热若若若若若若若若若若",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/zujianxinzeng",
    "groupId": "1103",
    "artifactId": "1101",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "周明",
      "id": "5daffeebf57ddb001047b493",
      "user_name_en": "csii_zhoum"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王雨琪",
      "id": "5db64a98f8d61800136ffdfd",
      "user_name_en": "wangyq23"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0"
  }, {
    "id": "5e1ebf5579a18900148f662d",
    "name_en": "zujian2201",
    "name_cn": "组价012",
    "desc": "发",
    "gitlab_url": "http://10.136.35.116:8080/ebank/devops/testGroup/zujian2201",
    "groupId": "com.csii.pe",
    "artifactId": "msper-web-test02test-parent",
    "parentId": "",
    "manager_id": [{
      "user_name_cn": "吴芳",
      "id": "5daff485f57ddb001047b481",
      "user_name_en": "csii_wuf"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }],
    "type": "0",
    "root_dir": "",
    "jdk_version": "1.8",
    "wiki_url": "",
    "source": "0"
  }],
  "POST /fcomponent/api/mpasscomponent/queryMyMpassComponents": [{
    "root_dir": "",
    "manager": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "mbank",
    "group_name": "互联网应用",
    "source": "0",
    "type": "1",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/service-component-media",
    "npm_name": "service-component-media",
    "gitlab_id": "406",
    "id": "5f200017e011f1001f0b3f30",
    "name_cn": "服务组件媒体",
    "name_en": "service-component-media",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "testtest01"
  }, {
    "root_dir": "",
    "manager": [{
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "mbank",
    "group_name": "互联网应用",
    "source": "0",
    "type": "0",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/router",
    "npm_name": "service-component-router",
    "gitlab_id": "470",
    "id": "5f28c949b2214f001fec9dfc",
    "name_cn": "路由组件",
    "name_en": "router",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "1111"
  }, {
    "manager": [{
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492",
      "user_name_en": "csii_hexy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "babel",
    "group_name": "互联网应用",
    "npm_name": "helper-plugin-utils",
    "gitlab_id": "569",
    "id": "5f3a3780af15f2003533f0ec",
    "source": "1",
    "type": "0",
    "name_cn": "插件工具包",
    "name_en": "helper-plugin-utils",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "333123334ss"
  }, {
    "root_dir": "",
    "manager": [{
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "",
    "group_name": "零售金融组",
    "npm_name": "babel-code-frame",
    "id": "5f3a4041af15f2003533f159",
    "source": "1",
    "type": "1",
    "name_cn": "代码框架",
    "name_en": "babel-code-frame",
    "group": "5f055798139e1d001256c8bc",
    "desc": "333"
  }, {
    "root_dir": "",
    "manager": [{
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "mbank-vue",
    "group_name": "互联网应用",
    "source": "1",
    "type": "0",
    "gitlab_url": "",
    "npm_name": "service-components-plugins",
    "id": "5f3b99fcb2a6740035b089cf",
    "name_cn": "服务插件",
    "name_en": "service-components-plugins",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "插件录入"
  }, {
    "root_dir": "",
    "manager": [{
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "soda",
    "recommond_version": "1.7.1",
    "group_name": "互联网应用",
    "source": "1",
    "type": "0",
    "gitlab_url": "",
    "npm_name": "friendly-errors-webpack-plugin",
    "id": "5f3b9b51b2a6740035b089dc",
    "name_cn": "webpack插件",
    "name_en": "friendly-errors-webpack-plugin",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "webpack插件"
  }, {
    "root_dir": "mbank-jsbridge",
    "manager": [{
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "",
    "group_name": "互联网应用",
    "source": "0",
    "type": "0",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/mbank-shared-utils",
    "npm_name": "mbank-jsbridge",
    "gitlab_id": "295",
    "id": "5f3bb4e4b2a6740035b089ff",
    "name_cn": "桥接",
    "name_en": "mbank-jsbridge",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "eee"
  }, {
    "root_dir": "",
    "manager": [{
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "babel",
    "group_name": "互联网应用",
    "source": "1",
    "type": "0",
    "gitlab_url": "",
    "npm_name": "helper-call-delegate",
    "id": "5f45f59a092f0e0035656641",
    "create_date": "2020-08-26 13:39:38",
    "name_cn": "helper-call-delegate组件",
    "name_en": "helper-call-delegate",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "helper-call-delegate组件"
  }, {
    "root_dir": "",
    "manager": [{
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "npm_group": "babel",
    "group_name": "互联网应用",
    "source": "1",
    "type": "0",
    "gitlab_url": "",
    "npm_name": "generator",
    "id": "5f4721e9dac0fb00351068cd",
    "create_date": "2020-08-27 11:00:57",
    "name_cn": "生成器",
    "name_en": "generator",
    "group": "5c81c4d0d3e2a1126ce30049",
    "desc": "dd"
  }],
  "POST /fcomponent/api/archetype/queryFirstVersion": "10.0.4",
  "POST /fcomponent/api/component/queryFirstVersion": "2.0.3",
  "POST /fcomponent/api/component/queryDependencyTree": "\ncom.csii.pe:pe-redis-core:jar:1.0.4-RELEASE\n+- junit:junit:jar:4.9:test\n|  \\- org.hamcrest:hamcrest-core:jar:1.1:test\n+- com.csii.pe.channel.http:commons-pool2:jar:2.2:compile\n+- redis.clients:jedis:jar:2.9.1:compile\n|  +- org.slf4j:slf4j-api:jar:1.7.22:compile\n|  \\- org.apache.commons:commons-pool2:jar:2.4.3:compile\n+- com.esotericsoftware:kryo:jar:4.0.0:compile\n|  +- com.esotericsoftware:reflectasm:jar:1.11.3:compile\n|  |  \\- org.ow2.asm:asm:jar:5.0.4:compile\n|  +- com.esotericsoftware:minlog:jar:1.3.0:compile\n|  \\- org.objenesis:objenesis:jar:2.2:compile\n+- javax.servlet:servlet-api:jar:2.3:provided\n+- org.slf4j:jcl-over-slf4j:jar:1.7.5:provided\n+- de.javakaffee:kryo-serializers:jar:0.41:compile\n+- com.fasterxml.uuid:java-uuid-generator:jar:3.1.4:compile\n\\- com.csii.pe:pe-http:jar:10.0.1:provided\n   +- com.csii.pe:pe-core:jar:10.0.1:provided\n   |  +- org.springframework:spring-orm:jar:4.3.4.RELEASE:provided\n   |  +- commons-dbcp:commons-dbcp:jar:1.4:provided\n   |  |  \\- commons-pool:commons-pool:jar:1.5.4:provided\n   |  +- ognl:ognl:jar:2.6.5:provided\n   |  +- org.springframework:spring-webmvc:jar:4.3.4.RELEASE:provided\n   |  |  +- org.springframework:spring-aop:jar:4.3.4.RELEASE:provided\n   |  |  +- org.springframework:spring-beans:jar:4.3.4.RELEASE:provided\n   |  |  +- org.springframework:spring-context:jar:4.3.4.RELEASE:provided\n   |  |  +- org.springframework:spring-core:jar:4.3.4.RELEASE:provided\n   |  |  |  \\- commons-logging:commons-logging:jar:1.2:provided\n   |  |  +- org.springframework:spring-expression:jar:4.3.4.RELEASE:provided\n   |  |  \\- org.springframework:spring-web:jar:4.3.4.RELEASE:provided\n   |  +- com.csii.pe:pe-spring-ibatis:jar:10.0.1:provided\n   |  |  +- org.apache.ibatis:ibatis-sqlmap:jar:2.3.4.726:provided\n   |  |  \\- org.springframework:spring-jdbc:jar:4.3.4.RELEASE:provided\n   |  |     \\- org.springframework:spring-tx:jar:4.3.4.RELEASE:provided\n   |  +- cglib:cglib-nodep:jar:3.2.5:provided\n   |  \\- javassist:javassist:jar:3.11.0.GA:provided\n   +- com.fasterxml.jackson.core:jackson-core:jar:2.8.8:provided\n   +- com.fasterxml.jackson.core:jackson-databind:jar:2.8.8:provided\n   |  \\- com.fasterxml.jackson.core:jackson-annotations:jar:2.8.0:provided\n   +- com.csii.pe:pe-transform-core:jar:10.0.1:provided\n   |  \\- com.csii.pe:pe-service-automation:jar:10.0.1:provided\n   +- org.apache.poi:poi:jar:3.16:provided\n   |  +- commons-codec:commons-codec:jar:1.10:provided\n   |  \\- org.apache.commons:commons-collections4:jar:4.1:provided\n   +- javax.servlet.jsp.jstl:javax.servlet.jsp.jstl-api:jar:1.2.1:provided\n   +- org.apache.tomcat:jsp-api:jar:6.0.26:provided\n   |  \\- org.apache.tomcat:el-api:jar:6.0.26:provided\n   \\- taglibs:standard:jar:1.1.2:provided\n\n",
  "POST /fcomponent/api/component/destroyComponentIssue": "",
  "POST /fcomponent/api/archetype/destroyArchetypeIssue": "",
  "POST /fcomponent/api/baseImage/destroyBaseImageIssue": "",
  "POST /fcomponent/api/application/queryFrameByComponent": [{
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-05-12 10:17:41",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.1-SNAPSHOT",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-05-12 10:19:57",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.1-RELEASE",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-05-27 14:00:10",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.2-SNAPSHOT",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-05-27 14:22:07",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.2-RELEASE",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-06-03 11:12:12",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.3-SNAPSHOT",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-06-03 12:07:13",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.3-RELEASE",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架，测试使用",
    "update_time": "2020-06-10 17:17:34",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.1-SNAPSHOT",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "type": "1",
    "name_en": "mspmk-demo-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架，测试使用",
    "update_time": "2020-06-10 17:25:37",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.1-RELEASE",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "type": "1",
    "name_en": "mspmk-demo-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架，测试使用",
    "update_time": "2020-06-11 14:23:27",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.2-SNAPSHOT",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "type": "1",
    "name_en": "mspmk-demo-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架，测试使用",
    "update_time": "2020-06-11 14:26:08",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.2-RELEASE",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "type": "1",
    "name_en": "mspmk-demo-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架，测试使用",
    "update_time": "2020-06-12 16:24:07",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.3-SNAPSHOT",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "type": "1",
    "name_en": "mspmk-demo-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "手机骨架，测试使用",
    "update_time": "2020-06-12 16:27:13",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.3-RELEASE",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "type": "1",
    "name_en": "mspmk-demo-test",
    "component_version": "10.0.1-RELEASE"
  }, {
    "name_zh": "online骨架，测试使用",
    "update_time": "2020-06-17 19:27:09",
    "archetype": true,
    "isLatest": "",
    "archetype_version": "1.0.4-SNAPSHOT",
    "archetype_id": "5eba051dff184a0014269624",
    "type": "1",
    "name_en": "online-prototype-test",
    "component_version": "10.0.1-RELEASE"
  }],
  "POST /fcomponent/api/mpasscomponent/queryMpassComponents": [{
    "root_dir": "mbank-jsbridge",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group_name": "板块7-账户组",
    "source": "0",
    "type": "0",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/mbank-shared-utils",
    "npm_name": "mbank-jsbridge",
    "gitlab_id": "295",
    "id": "5f04679a673c364588bc29ad",
    "name_cn": "mbank-jsbridge",
    "name_en": "mbank-jsbridge",
    "group": "5d3e9418606eeb000a22d326",
    "desc": "开发测试"
  }],
  "POST /fcomponent/api/mpasscomponent/addMpassComponent": "",
  "POST /fcomponent/api/mpasscomponent/updateMpassComponent": {
    "id": "5f04679a673c364588bc29ad",
    "name_en": "mbank-jsbridge",
    "name_cn": "mbank-jsbridge",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "npm_name": "mbank-jsbridge",
    "npm_group": "",
    "source": "0",
    "type": "0",
    "group": "5d3e9418606eeb000a22d326",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/mbank-shared-utils",
    "gitlab_id": "295",
    "root_dir": "mbank-jsbridge",
    "desc": "开发测试"
  },
  "POST /fcomponent/api/application/queryMpassComponentsByApplicaton": [{
    "component_id": "5f04679a673c364588bc29ad",
    "update_time": "2020-07-08 17:37:03",
    "id": "5f0593c9673c364a401daec4",
    "type": "0",
    "application_id": "5ea51b313132150012ad3511",
    "name_cn": "mbank-jsbridge",
    "component_version": "0.8.0",
    "name_en": "mbank-jsbridge"
  }],
  "POST /fcomponent/api/application/queryApplicationByMpassComponent": [{
    "name_zh": "实体组应用",
    "update_time": "2020-07-08 17:37:03",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "type": "0",
    "application_id": "5ea51b313132150012ad3511",
    "name_en": "ims-ent-shitizu",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "0.8.0"
  }, {
    "name_zh": "前端VUE项目路由扫描",
    "update_time": "2020-07-08 17:40:17",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "type": "0",
    "application_id": "5ea545f63132150012ad3524",
    "name_en": "msent-vue-pxyr",
    "spdb_managers": [{
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "fullName": ""
    },
    "component_version": "0.8.0"
  }],
  "POST /fcomponent/api/application/scanMpassComponentByApplication": "",
  "POST /fcomponent/api/application/scanApplicationByMpassComponent": "",
  "POST /fcomponent/api/mpasscomponent/queryMpassComponentDetail": {
    "root_dir": "mbank-jsbridge",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group_name": "板块7-账户组",
    "source": "0",
    "type": "0",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/mbank-shared-utils",
    "npm_name": "mbank-jsbridge",
    "gitlab_id": "295",
    "id": "5f04679a673c364588bc29ad",
    "name_cn": "mbank-jsbridge",
    "name_en": "mbank-jsbridge",
    "group": "5d3e9418606eeb000a22d326",
    "desc": "开发测试"
  },
  "POST /fcomponent/api/mpasscomponent/queryMpassComponentHistary": [{
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c1b673c362ac467ed7c",
    "type": "0",
    "version": "0.1.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c1e673c362ac467ed7d",
    "type": "0",
    "version": "0.1.1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c22673c362ac467ed7e",
    "type": "0",
    "version": "0.1.2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c25673c362ac467ed7f",
    "type": "0",
    "version": "0.1.3"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c28673c362ac467ed80",
    "type": "0",
    "version": "0.1.4"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c2b673c362ac467ed81",
    "type": "0",
    "version": "0.1.5"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c2f673c362ac467ed82",
    "type": "0",
    "version": "0.1.6"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c32673c362ac467ed83",
    "type": "0",
    "version": "0.1.7"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c35673c362ac467ed84",
    "type": "0",
    "version": "0.1.8"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c39673c362ac467ed85",
    "type": "0",
    "version": "0.1.9"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c3c673c362ac467ed86",
    "type": "0",
    "version": "0.1.10"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c3f673c362ac467ed87",
    "type": "0",
    "version": "0.1.11"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c43673c362ac467ed88",
    "type": "0",
    "version": "0.1.12"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c46673c362ac467ed89",
    "type": "0",
    "version": "0.1.13"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c49673c362ac467ed8a",
    "type": "0",
    "version": "0.1.14"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c4d673c362ac467ed8b",
    "type": "0",
    "version": "0.1.15"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c51673c362ac467ed8c",
    "type": "0",
    "version": "0.1.16"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c54673c362ac467ed8d",
    "type": "0",
    "version": "0.1.17-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c58673c362ac467ed8e",
    "type": "0",
    "version": "0.1.17"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c5c673c362ac467ed8f",
    "type": "0",
    "version": "0.1.18"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c60673c362ac467ed90",
    "type": "0",
    "version": "0.1.19"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c63673c362ac467ed91",
    "type": "0",
    "version": "0.1.20-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c66673c362ac467ed92",
    "type": "0",
    "version": "0.1.20"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c6a673c362ac467ed93",
    "type": "0",
    "version": "0.1.21-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c6e673c362ac467ed94",
    "type": "0",
    "version": "0.1.21"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c72673c362ac467ed95",
    "type": "0",
    "version": "0.2.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c75673c362ac467ed96",
    "type": "0",
    "version": "0.2.1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c78673c362ac467ed97",
    "type": "0",
    "version": "0.2.2-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c7c673c362ac467ed98",
    "type": "0",
    "version": "0.3.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c7f673c362ac467ed99",
    "type": "0",
    "version": "0.3.1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c82673c362ac467ed9a",
    "type": "0",
    "version": "0.3.2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c85673c362ac467ed9b",
    "type": "0",
    "version": "0.4.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c89673c362ac467ed9c",
    "type": "0",
    "version": "0.4.1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c8c673c362ac467ed9d",
    "type": "0",
    "version": "0.4.2-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c8f673c362ac467ed9e",
    "type": "0",
    "version": "0.5.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c92673c362ac467ed9f",
    "type": "0",
    "version": "0.5.1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c95673c362ac467eda0",
    "type": "0",
    "version": "0.5.2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c99673c362ac467eda1",
    "type": "0",
    "version": "0.5.3-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c9c673c362ac467eda2",
    "type": "0",
    "version": "0.5.3"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046c9f673c362ac467eda3",
    "type": "0",
    "version": "0.5.4"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ca3673c362ac467eda4",
    "type": "0",
    "version": "0.5.5"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ca6673c362ac467eda5",
    "type": "0",
    "version": "0.5.6-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ca9673c362ac467eda6",
    "type": "0",
    "version": "0.6.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cad673c362ac467eda7",
    "type": "0",
    "version": "0.6.1-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cb0673c362ac467eda8",
    "type": "0",
    "version": "0.6.2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cb3673c362ac467eda9",
    "type": "0",
    "version": "0.6.3"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cb6673c362ac467edaa",
    "type": "0",
    "version": "0.6.4"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cba673c362ac467edab",
    "type": "0",
    "version": "0.6.5"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cbd673c362ac467edac",
    "type": "0",
    "version": "0.6.6-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cc0673c362ac467edad",
    "type": "0",
    "version": "0.6.7-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cc4673c362ac467edae",
    "type": "0",
    "version": "0.6.8-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cc7673c362ac467edaf",
    "type": "0",
    "version": "0.6.9-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ccb673c362ac467edb0",
    "type": "0",
    "version": "0.6.10-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cce673c362ac467edb1",
    "type": "0",
    "version": "0.6.11-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cd3673c362ac467edb2",
    "type": "0",
    "version": "0.6.12-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cd7673c362ac467edb3",
    "type": "0",
    "version": "0.6.13-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cda673c362ac467edb4",
    "type": "0",
    "version": "0.7.0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cde673c362ac467edb5",
    "type": "0",
    "version": "0.7.1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ce1673c362ac467edb6",
    "type": "0",
    "version": "0.7.2-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ce5673c362ac467edb7",
    "type": "0",
    "version": "0.7.2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ce8673c362ac467edb8",
    "type": "0",
    "version": "0.7.3-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046ceb673c362ac467edb9",
    "type": "0",
    "version": "0.7.3"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cef673c362ac467edba",
    "type": "0",
    "version": "0.7.4"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cf2673c362ac467edbb",
    "type": "0",
    "version": "0.7.5-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cf6673c362ac467edbc",
    "type": "0",
    "version": "0.7.5"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cf9673c362ac467edbd",
    "type": "0",
    "version": "0.7.6-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046cfc673c362ac467edbe",
    "type": "0",
    "version": "0.7.6"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d00673c362ac467edbf",
    "type": "0",
    "version": "0.7.7-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d03673c362ac467edc0",
    "type": "3",
    "version": "0.7.7-alpha1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d06673c362ac467edc1",
    "type": "3",
    "version": "0.7.7-alpha2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d0a673c362ac467edc2",
    "type": "3",
    "version": "0.7.7-alpha3"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d0f673c362ac467edc3",
    "type": "3",
    "version": "0.7.7-beta1"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d14673c362ac467edc4",
    "type": "3",
    "version": "0.7.7-beta2"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d18673c362ac467edc5",
    "type": "0",
    "version": "0.7.7"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d1c673c362ac467edc6",
    "type": "0",
    "version": "0.7.8-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d21673c362ac467edc7",
    "type": "0",
    "version": "0.7.9-0"
  }, {
    "component_id": "5f04679a673c364588bc29ad",
    "id": "5f046d25673c362ac467edc8",
    "type": "3",
    "version": "0.8.0-alpha2"
  }],
  "POST /fcomponent/api/mpasscomponent/scanMpassComponentHistory": "",
  "POST /fcomponent/api/mpasscomponent/updateMpassComponentHistary": {
    "id": "5f046e31673c362ac467ee12",
    "component_id": "5f04679a673c364588bc29ad",
    "version": "1.4.1",
    "date": "",
    "update_user": "",
    "release_log": "",
    "jdk_version": "",
    "type": "1",
    "packagetype": "",
    "pipid": ""
  },
  "POST /fcomponent/api/mpasscomponent/queryMpassReleaseIssue": [{
    "id": "5f06c366673c3604389a23ad",
    "component_id": "5f04679a673c364588bc29ad",
    "title": "1111",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "issue_type": "0",
    "feature_branch": "release20200709",
    "predict_version": "1.6.1",
    "due_date": "2020/06/17",
    "create_date": "2020-07-09 15:12:34",
    "desc": ""
  }, {
    "id": "5f06c222673c3604389a23ac",
    "component_id": "5f04679a673c364588bc29ad",
    "title": "1111",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "issue_type": "1",
    "feature_branch": "release20200709_fix",
    "predict_version": "1.5.2",
    "due_date": "2020/06/17",
    "create_date": "2020-07-09 15:07:03",
    "desc": ""
  }],
  "POST /fcomponent/api/mpasscomponent/queryMpassDevIssue": [{
    "component_id": "5f28c949b2214f001fec9dfc",
    "issue_id": "5f72de363d5e110035ee1427",
    "stage": "0",
    "due_date": "2020/09/29",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f72dbf63d5e110035ee1426",
    "assignee": "5db688e8f8d61800136ffe11",
    "feature_branch": "feature-1.1.0-transfer",
    "create_date": "2020-09-29 15:02:13",
    "name_cn": "王飞强",
    "desc": "111",
    "name_en": "csii_wangfq"
  }, {
    "component_id": "5f28c949b2214f001fec9dfc",
    "issue_id": "5f72de363d5e110035ee1427",
    "stage": "0",
    "due_date": "2020/09/28",
    "assigneeMap": {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    },
    "id": "5f7197543006a2003567a2ea",
    "assignee": "5daff409f57ddb001047b480",
    "feature_branch": "ttt",
    "create_date": "2020-09-28 15:57:07",
    "name_cn": "周新丽",
    "desc": "hhh",
    "name_en": "T-zhouxl"
  }, {
    "component_id": "5f28c949b2214f001fec9dfc",
    "issue_id": "5f72de363d5e110035ee1427",
    "stage": "0",
    "due_date": "2020/09/23",
    "assigneeMap": {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    },
    "id": "5f5720a93712a3003569349d",
    "assignee": "5daff409f57ddb001047b480",
    "feature_branch": "feature_compack",
    "create_date": "2020-09-08 14:11:52",
    "name_cn": "周新丽",
    "desc": "111",
    "name_en": "T-zhouxl"
  }],
  "POST /fcomponent/api/mpasscomponent/defaultBranchAndVersion": {
    "predict_version": "1.2.1",
    "feature_branch": "release20200709_fix"
  },
  "POST /fcomponent/api/mpasscomponent/addMpassReleaseIssue": {
    "id": "5f06c222673c3604389a23ac",
    "component_id": "5f04679a673c364588bc29ad",
    "title": "1111",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "issue_type": "1",
    "feature_branch": "release20200709_fix",
    "predict_version": "1.5.2",
    "due_date": "2020/06/17",
    "create_date": "2020-07-09 15:07:03",
    "desc": ""
  },
  "POST /fcomponent/api/mpasscomponent/addMpassDevIssue": {
    "id": "5f0bf09d673c3619b46c0ac1",
    "component_id": "5f04679a673c364588bc29ad",
    "issue_id": "5f06c366673c3604389a23ad",
    "assignee": "5daff485f57ddb001047b481",
    "feature_branch": "feature-ccc",
    "due_date": "2020/06/17",
    "stage": "0",
    "create_date": "2020-07-13 13:26:52"
  },
  "POST /fcomponent/api/mpasscomponent/queryMpassDevIssueDetail": {
    "id": "5f0d7e75673c3621a0c5f069",
    "component_id": "5f04679a673c364588bc29ad",
    "issue_id": "5f0d7cf5673c3621a0c5f068",
    "assignee": "5daff485f57ddb001047b481",
    "feature_branch": "feature-bbb",
    "due_date": "2020/07/17",
    "stage": "0",
    "create_date": "2020-07-14 17:44:20"
  },
  "POST /fcomponent/api/mpasscomponent/queryMpassIssueRecord": [{
    "date": "2020-08-19 15:27:54",
    "release_log": "confer发布",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cd47a48e96600369c5220",
    "type": "0",
    "packagetype": "pipepackage",
    "version": "1.3.2",
    "branch": "release1.3.0",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 21:31:37",
    "release_log": "333",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bd839cdab760035554b14",
    "type": "0",
    "packagetype": "pipepackage",
    "version": "1.3.1",
    "branch": "release1.3.0",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:45:06",
    "release_log": "niii",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bcd52cdab760035554b12",
    "type": "0",
    "packagetype": "pipepackage",
    "version": "1.3.0",
    "branch": "release1.3.0",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-09-30 15:38:08",
    "release_log": "Merge branch 'feature_clean' into 'release1.3.0'\n\nfeature_clean\n\nSee merge request ebank/devops/component/router!57",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5daff72cf57ddb001047b487",
    "issue_id": "5f3bc730cdab760035554b06",
    "assigneeMap": {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    },
    "id": "5f7435e03d5e110035ee1a34",
    "type": "3",
    "version": "1.3.0-alpha.5",
    "branch": "feature_clean",
    "name_cn": "米玉苹",
    "name_en": "csii_miyp"
  }, {
    "date": "2020-08-19 14:37:08",
    "release_log": "rc",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cc89448e96600369c5214",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-rc.5",
    "branch": "feature_confer",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-19 14:33:51",
    "release_log": "okkk",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cc7cf48e96600369c5213",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-beta.5",
    "branch": "feature_clean",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-19 14:30:13",
    "release_log": "gc",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cc6f548e96600369c5212",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-beta.4",
    "branch": "feature_confer",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-19 14:29:34",
    "release_log": "Merge branch 'feature_confer' into 'release1.3.0'\n\nfeature_confer\n\nSee merge request ebank/devops/component/router!44",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db00e5bf57ddb001047b499",
    "id": "5f3cc6ce48e96600369c5211",
    "type": "3",
    "version": "1.3.0-alpha.4",
    "branch": "feature_confer"
  }, {
    "date": "2020-08-19 13:26:15",
    "release_log": "33ddc",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cb7f748e96600369c520d",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-rc.4",
    "branch": "feature_clean",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-19 13:26:07",
    "release_log": "rc",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cb7ef48e96600369c520c",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-rc.3",
    "branch": "feature_base",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-19 13:25:21",
    "release_log": "Merge branch 'feature_base' into 'release1.3.0'\n\nfeature_base\n\nSee merge request ebank/devops/component/router!43",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db00e5bf57ddb001047b499",
    "id": "5f3cb7c148e96600369c520b",
    "type": "3",
    "version": "1.3.0-alpha.3",
    "branch": "feature_base"
  }, {
    "date": "2020-08-19 13:24:00",
    "release_log": "33322",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3cb77048e96600369c520a",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-beta.3",
    "branch": "feature_clean",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-19 13:23:14",
    "release_log": "Merge branch 'feature_clean' into 'release1.3.0'\n\nfeature_clean\n\nSee merge request ebank/devops/component/router!42",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db00e5bf57ddb001047b499",
    "id": "5f3cb74248e96600369c5209",
    "type": "3",
    "version": "1.3.0-alpha.2",
    "branch": "feature_clean"
  }, {
    "date": "2020-08-18 20:32:15",
    "release_log": "3333",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bca4fcdab760035554b10",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-beta.2",
    "branch": "feature_base",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:32:07",
    "release_log": "32w33",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bca47cdab760035554b0f",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-rc.2",
    "branch": "feature_clean",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:31:57",
    "release_log": "32w",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bca3dcdab760035554b0e",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-rc.1",
    "branch": "feature_clean",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:31:47",
    "release_log": "111",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bca33cdab760035554b0d",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-rc.0",
    "branch": "feature_base",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:29:20",
    "release_log": "3333333",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bc9a0cdab760035554b0c",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-beta.1",
    "branch": "feature_base",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:29:12",
    "release_log": "333",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db688e8f8d61800136ffe11",
    "assigneeMap": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    },
    "id": "5f3bc998cdab760035554b0b",
    "type": "3",
    "packagetype": "pipepackage",
    "version": "1.3.0-beta.0",
    "branch": "feature_clean",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "date": "2020-08-18 20:27:19",
    "release_log": "Merge branch 'feature_base' into 'release1.3.0'\n\nfeature_base\n\nSee merge request ebank/devops/component/router!39",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db00e5bf57ddb001047b499",
    "id": "5f3bc927cdab760035554b0a",
    "type": "3",
    "version": "1.3.0-alpha.1",
    "branch": "feature_base"
  }, {
    "date": "2020-08-18 20:25:15",
    "release_log": "Merge branch 'feature_clean' into 'release1.3.0'\n\nfeature_clean\n\nSee merge request ebank/devops/component/router!38",
    "component_id": "5f28c949b2214f001fec9dfc",
    "update_user": "5db00e5bf57ddb001047b499",
    "id": "5f3bc8accdab760035554b09",
    "type": "3",
    "version": "1.3.0-alpha.0",
    "branch": "feature_clean"
  }],
  "POST /fcomponent/api/mpasscomponent/devPackage": "",
  "POST /fcomponent/api/mpasscomponent/changeStage": "",
  "POST /fcomponent/api/mpasscomponent/releasePackage": "",
  "POST /fcomponent/api/mpassarchetype/queryMpassArchetypes": [{
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/quasar-project",
    "group_name": "板块7-账户组",
    "gitlab_id": "311",
    "id": "5f07da04673c36555426b8c8",
    "name_cn": "vue骨架",
    "name_en": "quasar-project",
    "group": "5d3e9418606eeb000a22d326",
    "desc": "aaa"
  }],
  "POST /fcomponent/api/mpassarchetype/addMpassArchetype": {
    "id": "5f07da04673c36555426b8c8",
    "name_en": "quasar-project",
    "name_cn": "vue骨架",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/quasar-project",
    "gitlab_id": "311",
    "desc": "aaa"
  },
  "POST /fcomponent/api/mpassarchetype/updateMpassArchetype": {
    "id": "5f07da04673c36555426b8c8",
    "name_en": "quasar-project",
    "name_cn": "vue骨架",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": "5d3e9418606eeb000a22d326",
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/quasar-project",
    "gitlab_id": "311",
    "desc": "aaaddd"
  },
  "POST /fcomponent/api/mpassarchetype/queryMpassArchetypeDetail": {
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "gitlab_url": "http://10.141.59.87:8090/ebank/devops/component/quasar-project",
    "group_name": "板块7-账户组",
    "gitlab_id": "311",
    "id": "5f07da04673c36555426b8c8",
    "name_cn": "vue骨架",
    "name_en": "quasar-project",
    "group": "5d3e9418606eeb000a22d326",
    "desc": "aaaddd"
  },
  "POST /fcomponent/api/mpassarchetype/queryMpassArchetyepIssue": [{
    "id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "title": "11",
    "desc": "233",
    "assignee": "5daff485f57ddb001047b481",
    "feature_branch": "feature-dev1",
    "target_version": "",
    "stage": "",
    "create_date": "2020-07-10 13:54:06",
    "due_date": "2020/06/17"
  }],
  "POST /fcomponent/api/mpassarchetype/addMpassArchetyepIssue": {
    "id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "title": "11",
    "desc": "233",
    "assignee": "5daff485f57ddb001047b481",
    "feature_branch": "feature-dev1",
    "target_version": "",
    "stage": "",
    "create_date": "2020-07-10 13:54:06",
    "due_date": "2020/06/17"
  },
  "POST /fcomponent/api/mpassarchetype/queryMpassArchetyepIssueDetail": {
    "id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "title": "11",
    "desc": "233",
    "assignee": "5db688e8f8d61800136ffe11",
    "feature_branch": "feature-dev1",
    "target_version": "",
    "stage": "2",
    "create_date": "2020-07-10 13:54:06",
    "due_date": "2020/06/17",
    "name_en": "csii_wangfq",
    "name_cn": "王飞强"
  },
  "POST /fcomponent/api/mpassarchetype/package": "",
  "POST /fcomponent/api/mpassarchetype/queryIssueTag": [{
    "date": "2020-07-20 13:24:05",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f152a75673c364168159ca4",
    "tag": "feature-dev1-2007201324"
  }, {
    "release_log": "d'd'd",
    "date": "2020-07-20 13:33:02",
    "update_user": "5db688e8f8d61800136ffe11",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f152c8e673c364168159ca5",
    "tag": "feature-dev1-2007201333",
    "name_cn": "王飞强",
    "name_en": "csii_wangfq"
  }, {
    "release_log": "测试拉取tag",
    "date": "2020-07-27 14:32:11",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e74eb961c85001f3245a8",
    "tag": "feature-dev1-2007271432",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }, {
    "release_log": "测试222222",
    "date": "2020-07-27 14:35:03",
    "update_user": "5e65aaf9fd798a0012b76096",
    "issue_id": "5f080299673c365788ad26d2",
    "archetype_id": "5f07da04673c36555426b8c8",
    "id": "5f1e7597961c85001f3245a9",
    "tag": "feature-dev1-2007271435",
    "name_cn": "李志鹏",
    "name_en": "c-lizp"
  }],
  "POST /fcomponent/api/mpassarchetype/changeStage": "",
  "POST /fcomponent/api/mpasscomponent/updateMpassReleaseIssue": {
    "id": "5f3bc730cdab760035554b06",
    "component_id": "5f28c949b2214f001fec9dfc",
    "title": "测试111",
    "manager": [{
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "issue_type": "0",
    "feature_branch": "release1.3.0",
    "predict_version": "1.3.0",
    "due_date": "2020/08/18",
    "create_date": "2020-08-18 20:18:55",
    "desc": "111"
  },
  "POST /fcomponent/api/mpasscomponent/destroyIssue": "",
  "POST /fcomponent/api/mpasscomponent/updateMpassDevIssue": {
    "id": "5f4f016f486c17003534dd92",
    "component_id": "5f200017e011f1001f0b3f30",
    "issue_id": "5f4f0076486c17003534dd90",
    "assignee": "5db688e8f8d61800136ffe11",
    "feature_branch": "feature_cp",
    "due_date": "2020/09/02",
    "stage": "3",
    "create_date": "2020-09-02 10:20:30",
    "desc": "mpass_dev_release"
  },
  "POST /fcomponent/api/mpasscomponent/queryMpassReleaseIssueDetail": {
    "id": "5f0d7cf5673c3621a0c5f068",
    "component_id": "5f04679a673c364588bc29ad",
    "title": "1111",
    "manager": [{
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "issue_type": "0",
    "feature_branch": "release20200714",
    "predict_version": "1.6.0",
    "due_date": "2020/06/17",
    "create_date": "2020-07-14 17:37:55",
    "desc": ""
  },
  "POST /fcomponent/api/application/queryApplicationByImage": [{
    "name_zh": "新增应用手机111",
    "update_time": "2020-09-11 17:02:15",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea4f5873132150012ad34fd",
    "name_en": "mspmk-web-mmmpk",
    "spdb_managers": [{
      "user_name_cn": "李彩芹",
      "user_name_en": "csii_licq",
      "id": "5e0187b27bfe210012f4ee15"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }, {
      "user_name_cn": "张康",
      "user_name_en": "T-zhangk",
      "id": "5e9905b2cf8ae900121b8ea2"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "sortNum": "1-4"
    }
  }, {
    "name_zh": "测试组应用",
    "update_time": "2020-09-11 17:02:25",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }, {
      "user_name_cn": "张康",
      "user_name_en": "T-zhangk",
      "id": "5e9905b2cf8ae900121b8ea2"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea4f6663132150012ad34ff",
    "name_en": "nbh-web-grouptest",
    "spdb_managers": [{
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "王硕应用",
    "update_time": "2020-09-11 17:02:42",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "李正阳",
      "user_name_en": "T-lizy",
      "id": "5daff841f57ddb001047b48a"
    }, {
      "user_name_cn": "张康",
      "user_name_en": "T-zhangk",
      "id": "5e9905b2cf8ae900121b8ea2"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea4fae63132150012ad3507",
    "name_en": "mspmk-web-wang",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "司建高的个人微服务应用",
    "update_time": "2020-09-11 17:02:49",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "李彩芹",
      "user_name_en": "csii_licq",
      "id": "5e0187b27bfe210012f4ee15"
    }, {
      "user_name_cn": "杨彭刘",
      "user_name_en": "yangpl1",
      "id": "5e4b46f09b669500121ef3c0"
    }, {
      "user_name_cn": "司建高",
      "user_name_en": "T-sijg",
      "id": "5de76931ce934300135608b3"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea4fccb3132150012ad3509",
    "name_en": "msper-web-goldgoldgold",
    "spdb_managers": [{
      "user_name_cn": "李彩芹",
      "user_name_en": "csii_licq",
      "id": "5e0187b27bfe210012f4ee15"
    }, {
      "user_name_cn": "杨彭刘",
      "user_name_en": "yangpl1",
      "id": "5e4b46f09b669500121ef3c0"
    }, {
      "user_name_cn": "司建高",
      "user_name_en": "T-sijg",
      "id": "5de76931ce934300135608b3"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "二段跳",
    "update_time": "2020-09-11 17:03:00",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5daff72cf57ddb001047b487"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea51b8c3132150012ad3512",
    "name_en": "nbh-ent-mspmktest-parent",
    "spdb_managers": [{
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5daff72cf57ddb001047b487"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试应用米新",
    "update_time": "2020-09-11 17:03:09",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea523163132150012ad3516",
    "name_en": "ims-ent-ss",
    "spdb_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试1",
    "update_time": "2020-09-11 17:03:15",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea5253e3132150012ad351a",
    "name_en": "msper-web-aaaa",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试11",
    "update_time": "2020-09-11 17:03:19",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea525a63132150012ad351c",
    "name_en": "msper-web-aa",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "新增应用",
    "update_time": "2020-09-11 17:03:36",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea66dc40a8a31001243d3dd",
    "name_en": "ims-user-yyy",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "fdev测试应用zgh0002",
    "update_time": "2020-09-11 17:03:42",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周港昊",
      "user_name_en": "csii_zhough",
      "id": "5dc8ba45c09ec2001312c909"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea673ab0a8a31001243d3e1",
    "name_en": "ims-product-zgh002test",
    "spdb_managers": [{
      "user_name_cn": "周港昊",
      "user_name_en": "csii_zhough",
      "id": "5dc8ba45c09ec2001312c909"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试fdev应用",
    "update_time": "2020-09-11 17:03:46",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }, {
      "user_name_en": "csii_huangfurh",
      "user_name_cn": "皇甫如浩",
      "id": "5db00eb0f57ddb001047b49a"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea7a1480a8a31001243d3e4",
    "name_en": "fdev-interface",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_en": "csii_huangfurh",
      "user_name_cn": "皇甫如浩",
      "id": "5db00eb0f57ddb001047b49a"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "fdev接口提供",
    "update_time": "2020-09-11 17:03:51",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea7bd9e0a8a31001243d3e7",
    "name_en": "fdev-online-esbdata",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "fdev调用方",
    "update_time": "2020-09-11 17:03:53",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea7bef80a8a31001243d3e9",
    "name_en": "fdev-env-config",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试应用",
    "update_time": "2020-09-11 17:03:58",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea7cdd10a8a31001243d3ea",
    "name_en": "nbh-param-sso",
    "spdb_managers": [{
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试接口统计",
    "update_time": "2020-09-11 17:04:01",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea8e4620a8a31001243d3ef",
    "name_en": "fdev-webhook",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "应用层级测试",
    "update_time": "2020-09-11 17:04:10",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea8f02f0a8a31001243d3f2",
    "name_en": "qqq-www-eee",
    "spdb_managers": [{
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "重要",
    "update_time": "2020-09-11 17:04:12",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea90fcf0a8a31001243d3f4",
    "name_en": "ims-user-oo",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "关键",
    "update_time": "2020-09-11 17:04:14",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea911000a8a31001243d3f6",
    "name_en": "oo-ll-uu",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "行内负责人",
    "update_time": "2020-09-11 17:04:16",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea912020a8a31001243d3f8",
    "name_en": "oo-oo-oo",
    "spdb_managers": [{
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "对对对",
    "update_time": "2020-09-11 17:04:18",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_xianqj",
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea912940a8a31001243d3fa",
    "name_en": "tt-tt-tt",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "该架飞机",
    "update_time": "2020-09-11 17:04:20",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea917260a8a31001243d3fc",
    "name_en": "msfts-param-pp",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "直通车应用",
    "update_time": "2020-09-11 17:04:34",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eb4fe9654cdd10012f604b2",
    "name_en": "nbh-ent-zhitongche",
    "spdb_managers": [{
      "user_name_cn": "杨彭刘",
      "user_name_en": "yangpl1",
      "id": "5e4b46f09b669500121ef3c0"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "hxy测试应用",
    "update_time": "2020-09-11 17:04:37",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eb506c454cdd10012f604b4",
    "name_en": "mspmk-param-hxy",
    "spdb_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试",
    "update_time": "2020-09-11 17:04:53",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eb69aca299aed0012b4cf36",
    "name_en": "ims-online-test",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "应用部署测试01",
    "update_time": "2020-09-11 17:05:03",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eb8fa19dd5b9500124f074d",
    "name_en": "abc-def-ghi",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试骨架应用环境配置",
    "update_time": "2020-09-11 17:05:12",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eba0e11dd5b9500124f0754",
    "name_en": "nbh-ent-testconfig",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试55",
    "update_time": "2020-09-11 17:05:22",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eb69aca299aed0012b4cf33",
    "name_en": "ims-online-test1551",
    "spdb_managers": [{
      "user_name_en": "csii_shenzy",
      "user_name_cn": "沈政远",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "部署信息测试",
    "update_time": "2020-09-11 17:05:26",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eba9633dd5b950012d28106",
    "name_en": "nbh-product-hxy",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试未知错误应用",
    "update_time": "2020-09-11 17:05:29",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ebb5a95dd5b950012d28127",
    "name_en": "spdb-cli-mobcli",
    "spdb_managers": [{
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "szy测试中文",
    "update_time": "2020-09-11 17:05:37",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ebcd392dd5b950012d28173",
    "name_en": "ims-online-szy",
    "spdb_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "公共管理端",
    "update_time": "2020-09-11 17:05:51",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_huangfurh",
      "user_name_cn": "皇甫如浩",
      "id": "5db00eb0f57ddb001047b49a"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ebd26c3dd5b950012d281b7",
    "name_en": "mgmt-param-commonmgmt",
    "spdb_managers": [{
      "user_name_en": "wangzc4",
      "user_name_cn": "王作春",
      "id": "5e1ec2312ff73300122cfca7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "部署信息测试应用",
    "update_time": "2020-09-11 17:05:55",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ebe439f6fb6c00012a0a5c2",
    "name_en": "nbh-param-hxy",
    "spdb_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }, {
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "我的应用051801",
    "update_time": "2020-09-11 17:06:03",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec1fae2d4e399001225956e",
    "name_en": "mspmk-web-one",
    "spdb_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "我的应用051802",
    "update_time": "2020-09-11 17:06:12",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec1fc9ed4e3990012259574",
    "name_en": "zzz-xxxx-cvv",
    "spdb_managers": [{
      "user_name_en": "csii_maq",
      "user_name_cn": "马倩",
      "id": "5e788e8f94c59800121500fb"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "路由手动扫描测试应用-web",
    "update_time": "2020-09-11 17:06:16",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec23876d4e399001243bfc7",
    "name_en": "test-web-scantest",
    "spdb_managers": [{
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试应用0518新",
    "update_time": "2020-09-11 17:06:22",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec24a1dd4e39900129bbf7c",
    "name_en": "ims-ent-ceshi",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "应用跑pip0519",
    "update_time": "2020-09-11 17:06:31",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec34288d4e3990012a8b954",
    "name_en": "mspmk-web-runpip",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "任务推需求状态",
    "update_time": "2020-09-11 17:06:34",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec34293d4e3990012a8b955",
    "name_en": "ims-ent-ooo",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "任务推需求状态2",
    "update_time": "2020-09-11 17:06:38",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec34349d4e3990012a8b957",
    "name_en": "ims-user-uuu",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "发布的应用",
    "update_time": "2020-09-11 17:06:41",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec34f25d4e399001248ae27",
    "name_en": "sys-yu-houzui",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "实体新增应用",
    "update_time": "2020-09-11 17:06:46",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec39bdbd4e3990012e32347",
    "name_en": "nbh-product-rr",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "定时部署自动化环境2",
    "update_time": "2020-09-11 17:06:50",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec39c16d4e3990012e32349",
    "name_en": "mspmk-web-onenight",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "李阳",
      "user_name_en": "cliy2",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "未绑定部署信息",
    "update_time": "2020-09-11 17:06:53",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec3a568d4e3990012e3234d",
    "name_en": "ims-product-ll",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "车上1",
    "update_time": "2020-09-11 17:07:27",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }, {
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5daff72cf57ddb001047b487"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec67c98a4718c0012c620fc",
    "name_en": "mspmk-web-privatefund",
    "spdb_managers": [{
      "user_name_cn": "沈政远",
      "user_name_en": "csii_shenzy",
      "id": "5db11c97f8d61800136ffd81"
    }, {
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5daff72cf57ddb001047b487"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5daff62cf57ddb001047b484"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "新增应用1",
    "update_time": "2020-09-11 17:07:43",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec767195f510200128db304",
    "name_en": "nbh-ent-yy",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "洪浩hh",
    "update_time": "2020-09-11 17:07:46",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ec77cdc5f510200128db32e",
    "name_en": "msper-hh-online",
    "spdb_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "骨架应用",
    "update_time": "2020-09-11 17:07:49",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ecb20bc5f510200128db337",
    "name_en": "ims-user-aaaa",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "交易扫描测试应用",
    "update_time": "2020-09-11 17:07:53",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ecb81635f510200128db33c",
    "name_en": "mspmk-web-payfee",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "服务链路测试应用",
    "update_time": "2020-09-11 17:07:56",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eccb4ba5f510200128db34c",
    "name_en": "ims-user-payee",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "骨架外部配置模板测试",
    "update_time": "2020-09-11 17:08:00",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }, {
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ecf236c5f510200128db375",
    "name_en": "nbh-online-hh",
    "spdb_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }, {
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试hh",
    "update_time": "2020-09-11 17:08:03",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ecf4ea15f510200128db377",
    "name_en": "msper-hho-online",
    "spdb_managers": [{
      "user_name_cn": "洪浩",
      "user_name_en": "T-hongh1",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "新增应用0426",
    "update_time": "2020-09-11 17:08:13",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ea4f9c33132150012ad3505",
    "name_en": "a-b-c",
    "spdb_managers": [{
      "user_name_en": "cliy2",
      "user_name_cn": "李阳",
      "id": "5e82f4bb94c59800121501b4"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "网段测试应用",
    "update_time": "2020-09-11 17:08:17",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ecfe24e13b8c80012260e3d",
    "name_en": "nbh-online-testnetwork",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "是非得失",
    "update_time": "2020-09-11 17:08:19",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ecfe37b13b8c80012260e3e",
    "name_en": "ims-ent-aaa",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试实体配置",
    "update_time": "2020-09-11 17:08:25",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed078de13b8c80012260e44",
    "name_en": "ims-web-testentity",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "新增测试sit",
    "update_time": "2020-09-11 17:08:28",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed0cf6e13b8c80012f78648",
    "name_en": "mspay-online-testsit",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "服务链路测试应用111",
    "update_time": "2020-09-11 17:08:35",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed4b8ce5099640012844930",
    "name_en": "msper-web-remit",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试890",
    "update_time": "2020-09-11 17:08:38",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed5b48dba39a100128b4fe5",
    "name_en": "msper-hhh-ol",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "服务链路测试项目",
    "update_time": "2020-09-11 17:08:42",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed5b9e1ba39a100128b4fee",
    "name_en": "ims-product-finance",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_cn": "汪家社",
      "user_name_en": "csii_wangjs",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "服务链路展示测试2",
    "update_time": "2020-09-11 17:08:45",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed5ba66ba39a100128b4ff0",
    "name_en": "ims-product-topspeed",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "更改",
    "update_time": "2020-09-11 17:08:48",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed5c641e25746001242a030",
    "name_en": "msper-ll-ll",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试6",
    "update_time": "2020-09-11 17:08:52",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed5f036e25746001242a03f",
    "name_en": "msper-h-h",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "新的持续集成",
    "update_time": "2020-09-11 17:08:57",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed62420e25746001242a051",
    "name_en": "mspay-user-qqq",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "录入测试回退",
    "update_time": "2020-09-11 17:09:00",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed709f1e25746001242a061",
    "name_en": "mspmk-web-testaddback",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试678",
    "update_time": "2020-09-11 17:09:03",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed70d50e25746001242a063",
    "name_en": "msper-h-hh",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "应用新增",
    "update_time": "2020-09-11 17:09:06",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-luojm",
      "user_name_cn": "罗家明",
      "id": "5e8ebe423288660012ece6d0"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed7138ae25746001242a06b",
    "name_en": "mspmk-web-newtest",
    "spdb_managers": [{
      "user_name_en": "c-luojm",
      "user_name_cn": "罗家明",
      "id": "5e8ebe423288660012ece6d0"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "参数567",
    "update_time": "2020-09-11 17:09:12",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed73544e25746001242a077",
    "name_en": "msper-hh-hh",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "服务链路展示测试",
    "update_time": "2020-09-11 17:09:15",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed748b0e25746001242a086",
    "name_en": "mspmk-web-sdddd",
    "spdb_managers": [{
      "user_name_en": "csii_wangjs",
      "user_name_cn": "汪家社",
      "id": "5e9d6288cf8ae900121b8ec7"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "全球",
    "update_time": "2020-09-11 17:09:26",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed8b9e5cf821100121c82cc",
    "name_en": "msper-hk-hk",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "刚刚",
    "update_time": "2020-09-11 17:09:29",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed8bbc6cf821100121c82ce",
    "name_en": "msper-hk-kl",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "扣扣88",
    "update_time": "2020-09-11 17:09:32",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed8c38ecf821100121c82d4",
    "name_en": "msper-ff-gg",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "卡点测试",
    "update_time": "2020-09-11 17:09:44",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ed9ec6a0fe74a0012f2cf2d",
    "name_en": "msper-param-hxy",
    "spdb_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "第三方公司的",
    "update_time": "2020-09-11 17:10:34",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eddd6660fe74a0012f2cf64",
    "name_en": "mspay-product-eee",
    "spdb_managers": [{
      "user_name_en": "c-qujy6",
      "user_name_cn": "曲继业",
      "id": "5e1586b84290880012b8d191"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "任务阶段显示SIT",
    "update_time": "2020-09-11 17:10:37",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eddd7a10fe74a0012f2cf68",
    "name_en": "ims-product-qqqq",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "涉及环境部署",
    "update_time": "2020-09-11 17:10:40",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5edde1fc0fe74a0012f2cf6c",
    "name_en": "ims-user-zhl",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "fdev测试应用--司建高",
    "update_time": "2020-09-11 17:10:51",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "司建高",
      "user_name_en": "T-sijg",
      "id": "5de76931ce934300135608b3"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5eddfecf0fe74a0012f2cf74",
    "name_en": "fdev-web-release",
    "spdb_managers": [{
      "user_name_cn": "司建高",
      "user_name_en": "T-sijg",
      "id": "5de76931ce934300135608b3"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "不涉及",
    "update_time": "2020-09-11 17:10:56",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ede1ab10fe74a0012f2cf7c",
    "name_en": "hh-hh-hxy",
    "spdb_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "涉及",
    "update_time": "2020-09-11 17:11:00",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ededfe60fe74a0012f2cf7d",
    "name_en": "mspmk-ent-hxy",
    "spdb_managers": [{
      "user_name_cn": "何兴亚",
      "user_name_en": "csii_hexy",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "录入已有应用（不涉及）",
    "update_time": "2020-09-11 17:11:03",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5edee5790fe74a0012f2cf7f",
    "name_en": "mspay-product-mmm",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "hf测试vue2",
    "update_time": "2020-09-11 17:11:08",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5edeebd70fe74a0012f2cf85",
    "name_en": "hf-mq-hfvue",
    "spdb_managers": [{
      "user_name_cn": "言方",
      "user_name_en": "csii_huangf",
      "id": "5daffb02f57ddb001047b48d"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "不涉及环境部署",
    "update_time": "2020-09-11 17:11:14",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5edf39aa0fe74a0012f2cf8e",
    "name_en": "ims-product-bbb",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "批量替换",
    "update_time": "2020-09-11 17:11:19",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "luol10",
      "user_name_cn": "骆雷",
      "id": "5ed70a38849b0d00123a9565"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee0493a0fe74a0012f2cfa2",
    "name_en": "nbh-product-configreader",
    "spdb_managers": [{
      "user_name_en": "luol10",
      "user_name_cn": "骆雷",
      "id": "5ed70a38849b0d00123a9565"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试骨架乱码",
    "update_time": "2020-09-11 17:11:27",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee0a7fe2442d20012ca372a",
    "name_en": "nbh-jnl-configcode",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试环境配置模版",
    "update_time": "2020-09-11 17:11:36",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee1dd591ea55c00124bf81e",
    "name_en": "mspmk-ent-testconfig",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "ccc编码",
    "update_time": "2020-09-11 17:11:53",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee1def91ea55c00124bf822",
    "name_en": "msper-param-cccode",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "online编码",
    "update_time": "2020-09-11 17:11:57",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee1df751ea55c00124bf824",
    "name_en": "nbh-ent-onlinecode",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试uuuuuuu",
    "update_time": "2020-09-11 17:12:14",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee326f78580be0012098d87",
    "name_en": "msper-hh-kkkkk",
    "spdb_managers": [{
      "user_name_en": "T-hongh1",
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试online",
    "update_time": "2020-09-11 17:12:35",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee340288580be0012098d91",
    "name_en": "ipay-ent-tsetonline",
    "spdb_managers": [{
      "user_name_en": "T-fengwy",
      "user_name_cn": "丰文勇",
      "id": "5db661ebf8d61800136ffe08"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "online测试编码",
    "update_time": "2020-09-11 17:12:38",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ee340b48580be0012098d93",
    "name_en": "mspmk-user-onlinegbk",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "挂载投产窗口按钮测试",
    "update_time": "2020-09-11 17:12:54",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_xianqj",
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5ef996557264be0012c38a78",
    "name_en": "ipay-online-asd",
    "spdb_managers": [{
      "user_name_en": "csii_xianqj",
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "录入已有应用-小组",
    "update_time": "2020-09-11 17:13:09",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5efb077f4d45360012954bde",
    "name_en": "mspmk-out-ins",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "自动化部署3",
    "update_time": "2020-09-11 17:13:19",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5efc20a24d45360012954bff",
    "name_en": "mspay-user-tt",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "测试111",
    "update_time": "2020-09-11 17:13:22",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5efd6eea393b510012582047",
    "name_en": "ims-user-test",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "录入已有应用",
    "update_time": "2020-09-11 17:13:32",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f045026393b5100125820fb",
    "name_en": "ims-ent-shanchu",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5e855f033288660012ece5ff",
      "name": "互联网应用-公共组-效能",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-2"
    }
  }, {
    "name_zh": "普通应用",
    "update_time": "2020-09-11 17:13:47",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f06aeb5393b510012582138",
    "name_en": "nbh-jnl-seds",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7a099a94c5980012150113"
    }, {
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "sortNum": "1"
    }
  }, {
    "name_zh": "录入新增20200713",
    "update_time": "2020-09-11 17:13:59",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-dangzy",
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f0c1d0d06412700125e1c39",
    "name_en": "mspmk-web-gerenshouji",
    "spdb_managers": [{
      "user_name_en": "c-dangzy",
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "sortNum": "1-4"
    }
  }, {
    "name_zh": "测试应用819",
    "update_time": "2020-09-11 17:14:09",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "童浩",
      "user_name_en": "c-tongh",
      "id": "5f0568d4139e1d001256c8cc"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1642c297531a0012e63224",
    "name_en": "ims-dev-free",
    "spdb_managers": [{
      "user_name_cn": "童浩",
      "user_name_en": "c-tongh",
      "id": "5f0568d4139e1d001256c8cc"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "sortNum": "1-4"
    }
  }, {
    "name_zh": "测试0101010112",
    "update_time": "2020-09-11 17:14:31",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-lils",
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1a47132a305c99a464d709",
    "name_en": "mspmk-web-onesdqss",
    "spdb_managers": [{
      "user_name_en": "c-lils",
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    }],
    "group": {
      "id": "5ea29a5bcf8ae900121b8f49",
      "name": "互联网应用-公共组-效能444",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-3"
    }
  }, {
    "name_zh": "tesst测试",
    "update_time": "2020-09-11 17:14:39",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "骆雷",
      "user_name_en": "luol10",
      "id": "5ed70a38849b0d00123a9565"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1aa5b2d02b84001250e4d1",
    "name_en": "ims-user-ces",
    "spdb_managers": [{
      "user_name_cn": "骆雷",
      "user_name_en": "luol10",
      "id": "5ed70a38849b0d00123a9565"
    }],
    "group": {
      "id": "5f0557e9139e1d001256c8c0",
      "name": "互联网应用-零售金融组-板块5-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5f055798139e1d001256c8bc",
      "status": "1",
      "sortNum": "1-1-5"
    }
  }, {
    "name_zh": "测试01010101112",
    "update_time": "2020-09-11 17:14:41",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-lils",
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1aa9392a305c255cc3a71f",
    "name_en": "mspmk-web-onesdqsas",
    "spdb_managers": [{
      "user_name_en": "c-lils",
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    }],
    "group": {
      "id": "5ea29a5bcf8ae900121b8f49",
      "name": "互联网应用-公共组-效能444",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-3"
    }
  }, {
    "name_zh": "测试010101021112",
    "update_time": "2020-09-11 17:14:43",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-lils",
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1aa9d42a305caa741238d9",
    "name_en": "mspmk-web-onesadqsas",
    "spdb_managers": [{
      "user_name_en": "c-lils",
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    }],
    "group": {
      "id": "5ea29a5bcf8ae900121b8f49",
      "name": "互联网应用-公共组-效能444",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-3"
    }
  }, {
    "name_zh": "测试一",
    "update_time": "2020-09-11 17:14:50",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "郑阳",
      "user_name_en": "c-zhengy1",
      "id": "5f0c0ce2b26c680012142ed8"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1e3a33d02b84001250e4e0",
    "name_en": "test-t-test",
    "spdb_managers": [{
      "user_name_cn": "高鹏",
      "user_name_en": "c-gaop2",
      "id": "5f0d2377b26c680012142f08"
    }, {
      "user_name_cn": "郑阳",
      "user_name_en": "c-zhengy1",
      "id": "5f0c0ce2b26c680012142ed8"
    }],
    "group": {
      "id": "5f0bfd96b26c680012142ec8",
      "name": "互联网应用-排序1２-测试",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5f0bfd59b26c680012142ec6",
      "status": "1",
      "sortNum": "6-2"
    }
  }, {
    "name_zh": "录入应用ebankgit",
    "update_time": "2020-09-11 17:15:01",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1e90dba056d00012d9543c",
    "name_en": "nbh-ent-testebankgit",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    }],
    "group": {
      "id": "5e855eec3288660012ece5fe",
      "name": "互联网应用-公共组-应用测试",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c56cd3e2a1126ce3004b",
      "status": "1",
      "sortNum": "1-4-1"
    }
  }, {
    "name_zh": "测试-lip03",
    "update_time": "2020-09-11 17:15:05",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-lip2",
      "user_name_cn": "李飘",
      "id": "5f080d159dae080012cf90a2"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1e9ecaa056d00012d95445",
    "name_en": "ims-online-liptest",
    "spdb_managers": [{
      "user_name_en": "c-lip2",
      "user_name_cn": "李飘",
      "id": "5f080d159dae080012cf90a2"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "sortNum": "1-4"
    }
  }, {
    "name_zh": "测试-lip06",
    "update_time": "2020-09-11 17:15:14",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-lip2",
      "user_name_cn": "李飘",
      "id": "5f080d159dae080012cf90a2"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f1fbcb0a056d00012d95454",
    "name_en": "msemk-cli-liptest",
    "spdb_managers": [{
      "user_name_en": "c-lip2",
      "user_name_cn": "李飘",
      "id": "5f080d159dae080012cf90a2"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "sortNum": "1-4"
    }
  }, {
    "name_zh": "陆耀毅vue应用",
    "update_time": "2020-09-11 17:15:27",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "t-luyy",
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d"
    }, {
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f45f44a97fc560012198b53",
    "name_en": "msfts-ent-vue",
    "spdb_managers": [{
      "user_name_en": "t-luyy",
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d"
    }, {
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c56cd3e2a1126ce3004b",
      "name": "互联网应用-公共组",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "5c81c4d0d3e2a1126ce30049",
      "status": "1",
      "sortNum": "1-4"
    }
  }, {
    "name_zh": "挡板1",
    "update_time": "2020-09-11 17:15:31",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "牛立露",
      "user_name_en": "c-niull",
      "id": "5f3b7d779d34ff0012b65cd4"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f46275797fc560012198b57",
    "name_en": "ee-rr-tt",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "sortNum": "1"
    }
  }, {
    "name_zh": "扫描-改",
    "update_time": "2020-09-11 17:18:00",
    "stage": "release",
    "dev_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f584a1622ae610012c6e2ba",
    "name_en": "mspmk-product-ssd",
    "spdb_managers": [{
      "user_name_cn": "王硕",
      "user_name_en": "c-wangs1",
      "id": "5e7a099a94c5980012150113"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "sortNum": "1"
    }
  }, {
    "name_zh": "交易测试",
    "update_time": "2020-09-11 17:18:41",
    "stage": "release",
    "dev_managers": [{
      "user_name_en": "c-zhengy1",
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    }, {
      "user_name_en": "c-bucc",
      "user_name_cn": "卜晨朝",
      "id": "5f44dd9594790200124d0e9a"
    }, {
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "image_tag": "1.8.0_131_20190326",
    "application_id": "5f59d3bc22ae610012c6e2c3",
    "name_en": "mspmk-web-privately",
    "spdb_managers": [{
      "user_name_en": "csii_hexy",
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    }],
    "group": {
      "id": "5c81c4d0d3e2a1126ce30049",
      "name": "互联网应用",
      "fullName": "",
      "count": 0,
      "current_count": "",
      "parent_id": "",
      "status": "1",
      "sortNum": "1"
    }
  }],
  "POST /fcomponent/api/application/scanImage": "",
  "POST /fcomponent/api/application/queryFrameByImage": [{
    "name_zh": "手机骨架，测试骨架功能使用，应用新增勿选",
    "update_time": "2020-09-15 11:15:33",
    "archetype": true,
    "stage": "release",
    "archetype_version": "1.0.6-DEV",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "image_tag": "1.8.0_131_20190326",
    "name_en": "mspmk-demo-test"
  }, {
    "name_zh": "手机骨架，测试骨架功能使用，应用新增勿选",
    "update_time": "2020-09-15 13:38:20",
    "archetype": true,
    "stage": "release",
    "archetype_version": "1.0.5-DEV",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "image_tag": "1.8.0_131_20190326",
    "name_en": "mspmk-demo-test"
  }, {
    "name_zh": "手机骨架，测试骨架功能使用，应用新增勿选",
    "update_time": "2020-09-15 13:39:38",
    "archetype": true,
    "stage": "release",
    "archetype_version": "1.0.5-SNAPSHOT",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "image_tag": "1.8.0_131_20190326",
    "name_en": "mspmk-demo-test"
  }, {
    "name_zh": "手机骨架，测试骨架功能使用，应用新增勿选",
    "update_time": "2020-09-15 13:41:11",
    "archetype": true,
    "stage": "release",
    "archetype_version": "1.0.5-RELEASE",
    "archetype_id": "5ee0a4489b104a001403d6a4",
    "image_tag": "1.8.0_131_20190326",
    "name_en": "mspmk-demo-test"
  }],
  "POST /fcomponent/api/mpasscomponent/queryTransgerReleaseIssue": [{
    "id": "5f5867ff3712a3003569385a",
    "component_id": "5f28c949b2214f001fec9dfc",
    "title": "测试废弃",
    "manager": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "issue_type": "0",
    "feature_branch": "release1.5.0",
    "predict_version": "1.5.0",
    "due_date": "2020/09/09",
    "create_date": "2020-09-09 13:28:30",
    "desc": "32323"
  }, {
    "id": "5f33a8512b6e3e0035bd6b27",
    "component_id": "5f28c949b2214f001fec9dfc",
    "title": "we",
    "manager": [{
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f",
      "user_name_en": "T-hongh1"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "issue_type": "0",
    "feature_branch": "release1.1.0",
    "predict_version": "1.1.0",
    "due_date": "2020/08/13",
    "create_date": "2020-08-12 16:29:04",
    "desc": "wew"
  }, {
    "id": "5f339fee2b6e3e0035bd6b1a",
    "component_id": "5f28c949b2214f001fec9dfc",
    "title": "诉讼",
    "manager": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }],
    "issue_type": "1",
    "feature_branch": "release1.0.1_fix",
    "predict_version": "1.0.1",
    "due_date": "2020/08/13",
    "create_date": "2020-08-12 15:53:16",
    "desc": "阿萨"
  }],
  "POST /fcomponent/api/mpasscomponent/devIssueTransger": "",
  "POST /fcomponent/api/dashboard/queryNumByType": [{
    "components": 22,
    "archetypes": 11,
    "baseImage": 6,
    "mpassArchetypes": 9,
    "mpassComponents": 14
  }],
  "POST /fcomponent/api/dashboard/queryDataByType": {
    "components": {
      "2020-09-18": 5,
      "2020-10-09": 9,
      "2020-09-11": 5,
      "2020-10-02": 8,
      "2020-09-04": 4,
      "2020-09-25": 6
    },
    "archetypes": {
      "2020-09-18": 1,
      "2020-10-09": 2,
      "2020-09-11": 0,
      "2020-10-02": 2,
      "2020-09-04": 0,
      "2020-09-25": 1
    },
    "baseImage": {
      "2020-09-18": 2,
      "2020-10-09": 4,
      "2020-09-11": 2,
      "2020-10-02": 4,
      "2020-09-04": 2,
      "2020-09-25": 3
    },
    "mpassArchetypes": {
      "2020-09-18": 4,
      "2020-10-09": 5,
      "2020-09-11": 3,
      "2020-10-02": 5,
      "2020-09-04": 3,
      "2020-09-25": 4
    },
    "mpassComponents": {
      "2020-09-18": 5,
      "2020-10-09": 7,
      "2020-09-11": 4,
      "2020-10-02": 6,
      "2020-09-04": 3,
      "2020-09-25": 5
    }
  },
  "POST /fcomponent/api/dashboard/queryIssueData": {
    "components": {
      "total": 14,
      "release": 3,
      "alpha": 11
    },
    "archetypes": {
      "total": 2,
      "release": 1,
      "alpha": 1
    },
    "baseImage": {
      "total": 2,
      "release": 1,
      "alpha": 1
    },
    "mpassArchetypes": {
      "total": 1,
      "release": 1,
      "alpha": 0
    },
    "mpassComponents": {
      "total": 11,
      "release": 1,
      "alpha": 10
    }
  },
  "POST /fcomponent/api/dashboard/queryQrmntsData": [{
    "predict_version": "",
    "rqrmnts_id": "5f6ab5c2683cf3003579fb78",
    "recommond_version": "10.1.2",
    "due_date": "2020/09/24",
    "feature_branch": "com.csii.pe.core.guard.ext-10.1.2-SNAPSHOT",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "0",
    "rqrmnts_name": "lils测试",
    "stage": "rc",
    "name": "com.csii.pe.core.guard.ext",
    "id": "5df05f36d31a2d0014fe1d9b",
    "rqrmnts_admin": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "司建高",
      "id": "5de76931ce934300135608b3",
      "user_name_en": "T-sijg"
    }, {
      "user_name_cn": "吴瑾",
      "id": "5daff39df57ddb001047b47f",
      "user_name_en": "csii_wuj"
    }, {
      "user_name_cn": "何坤",
      "id": "5dba49fd25e5eb0012d6c5f9",
      "user_name_en": "csii_hek"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "测试用"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6febec1180ad0035e10b45",
    "recommond_version": "10.1.3",
    "due_date": "2020/09/28",
    "feature_branch": "com.csii.pe.core.guard.ext-10.1.3-SNAPSHOT",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "0",
    "rqrmnts_name": "测试dev",
    "stage": "alpha",
    "name": "com.csii.pe.core.guard.ext",
    "id": "5df05f36d31a2d0014fe1d9b",
    "rqrmnts_admin": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "司建高",
      "id": "5de76931ce934300135608b3",
      "user_name_en": "T-sijg"
    }, {
      "user_name_cn": "吴瑾",
      "id": "5daff39df57ddb001047b47f",
      "user_name_en": "csii_wuj"
    }, {
      "user_name_cn": "何坤",
      "id": "5dba49fd25e5eb0012d6c5f9",
      "user_name_en": "csii_hek"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "1121"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6fefd71180ad0035e10b46",
    "recommond_version": "10.1.4",
    "due_date": "2020/09/28",
    "feature_branch": "com.csii.pe.core.guard.ext-10.1.4-SNAPSHOT",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "0",
    "rqrmnts_name": "测试RC",
    "stage": "rc",
    "name": "com.csii.pe.core.guard.ext",
    "id": "5df05f36d31a2d0014fe1d9b",
    "rqrmnts_admin": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "司建高",
      "id": "5de76931ce934300135608b3",
      "user_name_en": "T-sijg"
    }, {
      "user_name_cn": "吴瑾",
      "id": "5daff39df57ddb001047b47f",
      "user_name_en": "csii_wuj"
    }, {
      "user_name_cn": "何坤",
      "id": "5dba49fd25e5eb0012d6c5f9",
      "user_name_en": "csii_hek"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "12345354"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f701eee1180ad0035e10b49",
    "recommond_version": "10.1.5",
    "due_date": "2020/09/28",
    "feature_branch": "com.csii.pe.core.guard.ext-10.1.5-SNAPSHOT",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "0",
    "rqrmnts_name": "测试",
    "stage": "开发中",
    "name": "com.csii.pe.core.guard.ext",
    "id": "5df05f36d31a2d0014fe1d9b",
    "rqrmnts_admin": [{
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "司建高",
      "id": "5de76931ce934300135608b3",
      "user_name_en": "T-sijg"
    }, {
      "user_name_cn": "吴瑾",
      "id": "5daff39df57ddb001047b47f",
      "user_name_en": "csii_wuj"
    }, {
      "user_name_cn": "何坤",
      "id": "5dba49fd25e5eb0012d6c5f9",
      "user_name_en": "csii_hek"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "456789"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f73f02c3d5e110035ee1a24",
    "recommond_version": "10.1.6",
    "due_date": "2020/09/30",
    "feature_branch": "com.csii.pe.security.guard-10.1.6-SNAPSHOT",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "0",
    "rqrmnts_name": "测试专家",
    "stage": "已发布",
    "name": "com.csii.pe.security.guard",
    "id": "5df05df5d31a2d0014fe1d0a",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "杨飞",
      "id": "5db2911bf8d61800136ffdcf",
      "user_name_en": "csii_yangf"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "11111"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f7417e13d5e110035ee1a2b",
    "recommond_version": "10.1.7",
    "due_date": "2020/09/30",
    "feature_branch": "com.csii.pe.security.guard-10.1.7-SNAPSHOT",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "0",
    "rqrmnts_name": "测试01",
    "stage": "rc",
    "name": "com.csii.pe.security.guard",
    "id": "5df05df5d31a2d0014fe1d0a",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "杨飞",
      "id": "5db2911bf8d61800136ffdcf",
      "user_name_en": "csii_yangf"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1212"
  }, {
    "predict_version": "1.1.0",
    "rqrmnts_id": "5f33a8512b6e3e0035bd6b27",
    "recommond_version": "",
    "due_date": "2020/09/22",
    "feature_branch": "feature_lls",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "1",
    "rqrmnts_name": "we",
    "stage": "开发中",
    "name": "router",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "12332"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6adaf1fb5e980035ee1b51",
    "recommond_version": "10.0.7",
    "due_date": "2020/09/24",
    "feature_branch": "10.0.7-DEV",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "2",
    "rqrmnts_name": "lissss测试",
    "stage": "已发布",
    "name": "fdev-prototype",
    "id": "5e095506227d650014994da6",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "测试test"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6bfa2bfb5e980035ee21ac",
    "recommond_version": "10.7.6",
    "due_date": "2020/09/25",
    "feature_branch": "10.7.6-DEV",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "2",
    "rqrmnts_name": "李测试",
    "stage": "alpha",
    "name": "fdev-prototype",
    "id": "5e095506227d650014994da6",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "dsadadsa"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f645c08e384dc0035e6ccd8",
    "recommond_version": "",
    "due_date": "2020/09/18",
    "feature_branch": "dsada",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "3",
    "rqrmnts_name": "dasdsa",
    "stage": "拉取tag",
    "name": "quasar-project",
    "id": "5f07da04673c36555426b8c8",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "sdaada"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f71a73c3d5e110035ee0e23",
    "recommond_version": "",
    "due_date": "2020/09/28",
    "feature_branch": "",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "4",
    "rqrmnts_name": "李测试",
    "stage": "rc",
    "name": "ebank-containerization-test",
    "id": "5ecc73c87edfa80014e5824d",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d",
      "user_name_en": "T-luyy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1324"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72da8f3d5e110035ee1425",
    "recommond_version": "",
    "due_date": "2020/09/29",
    "feature_branch": "",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "type": "4",
    "rqrmnts_name": "fdsfsfs",
    "stage": "开发中",
    "name": "base-image-test",
    "id": "5ea7db3c673c3638545b70e2",
    "rqrmnts_admin": [{
      "user_name_cn": "丰文勇",
      "id": "5db661ebf8d61800136ffe08",
      "user_name_en": "T-fengwy"
    }, {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d",
      "user_name_en": "T-luyy"
    }, {
      "user_name_cn": "王作春",
      "id": "5e1ec2312ff73300122cfca7",
      "user_name_en": "wangzc4"
    }, {
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f",
      "user_name_en": "T-hongh1"
    }, {
      "user_name_cn": "曲继业",
      "id": "5e1586b84290880012b8d191",
      "user_name_en": "c-qujy6"
    }],
    "desc": "dsadada"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f55a3ea486c17003534effc",
    "recommond_version": "1.6.8",
    "due_date": "2020/09/07",
    "feature_branch": "1.6.8-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "废弃01",
    "stage": "开发中",
    "name": "dd",
    "id": "5f460f31092f0e00356566c6",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f62bd0bdd3d4f0035160622",
    "recommond_version": "10.1.2",
    "due_date": "2020/09/17",
    "feature_branch": "10.1.2-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "测试091701",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f62c104dd3d4f0035160629",
    "recommond_version": "10.1.3",
    "due_date": "2020/09/17",
    "feature_branch": "10.1.3-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "测试091802",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "0"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f62c552dd3d4f003516062b",
    "recommond_version": "10.1.4",
    "due_date": "2020/09/17",
    "feature_branch": "10.1.4-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "test091701",
    "stage": "已发布",
    "name": "pe-redis-core",
    "id": "5ea28674a9218600148bdc6e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6ab1d5683cf3003579fb73",
    "recommond_version": "10.2.5",
    "due_date": "2020/09/23",
    "feature_branch": "10.2.5-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "test0923",
    "stage": "已发布",
    "name": "pe-redis-core",
    "id": "5ea28674a9218600148bdc6e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "11"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6ab8df683cf3003579fb7a",
    "recommond_version": "10.1.5",
    "due_date": "2020/09/23",
    "feature_branch": "10.1.5-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "aaa",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1111"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6adb29fb5e980035ee1b52",
    "recommond_version": "10.2.6",
    "due_date": "2020/09/23",
    "feature_branch": "10.2.6-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "test092301",
    "stage": "已发布",
    "name": "pe-redis-core",
    "id": "5ea28674a9218600148bdc6e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6ae51efb5e980035ee1b69",
    "recommond_version": "10.1.6",
    "due_date": "2020/09/23",
    "feature_branch": "10.1.6-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "bbb",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6af04bfb5e980035ee1b8f",
    "recommond_version": "10.1.7",
    "due_date": "2020/09/23",
    "feature_branch": "10.1.7-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "ccc",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6af47bfb5e980035ee1b94",
    "recommond_version": "10.1.8",
    "due_date": "2020/09/23",
    "feature_branch": "10.1.8-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "ddd",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6af828fb5e980035ee1ba3",
    "recommond_version": "10.2.0",
    "due_date": "2020/09/23",
    "feature_branch": "10.2.0-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "fff",
    "stage": "已发布",
    "name": "test_token",
    "id": "5f1e6a90961c85001f32458f",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72f1613d5e110035ee1433",
    "recommond_version": "1.3.2",
    "due_date": "2020/09/30",
    "feature_branch": "1.3.2-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "www",
    "stage": "开发中",
    "name": "test092901",
    "id": "5f72a4ce3d5e110035ee141c",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f80096bc1be0f003598faf1",
    "recommond_version": "10.1.6",
    "due_date": "2020/10/09",
    "feature_branch": "com.csii.pe.security.netsign-10.1.6-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "测试-1009-1",
    "stage": "alpha",
    "name": "com.csii.pe.security.netsign",
    "id": "5f17f62b0509f3001faa6f45",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f800a55c1be0f003598faf3",
    "recommond_version": "10.2.7",
    "due_date": "2020/10/09",
    "feature_branch": "10.2.7-SNAPSHOT",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "0",
    "rqrmnts_name": "测试-1009-2",
    "stage": "已发布",
    "name": "pe-redis-core",
    "id": "5ea28674a9218600148bdc6e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }, {
      "user_name_cn": "冼绮静",
      "id": "5daff62cf57ddb001047b484",
      "user_name_en": "csii_xianqj"
    }],
    "desc": "1"
  }, {
    "predict_version": "1.3.1",
    "rqrmnts_id": "5f3390542b6e3e0035bd6b13",
    "recommond_version": "",
    "due_date": "2020/09/10",
    "feature_branch": "feature_desc01",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增优化01",
    "stage": "rc",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "1.0.1",
    "rqrmnts_id": "5f36457ed929fc003577f422",
    "recommond_version": "",
    "due_date": "2020/08/14",
    "feature_branch": "feature-aaa",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增优化02",
    "stage": "rc",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "33"
  }, {
    "predict_version": "0.0.2",
    "rqrmnts_id": "5f45f8c5092f0e0035656692",
    "recommond_version": "",
    "due_date": "2020/08/26",
    "feature_branch": "feature-0826",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增投产窗口",
    "stage": "rc",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "aaaa"
  }, {
    "predict_version": "10.3.5",
    "rqrmnts_id": "5f558f09486c17003534eff8",
    "recommond_version": "",
    "due_date": "2020/09/07",
    "feature_branch": "feature-001",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "测试222",
    "stage": "开发中",
    "name": "aaa",
    "id": "5f460e3f092f0e00356566c5",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "s"
  }, {
    "predict_version": "0.0.2",
    "rqrmnts_id": "5f45f8c5092f0e0035656692",
    "recommond_version": "",
    "due_date": "2020/09/07",
    "feature_branch": "feature-0907",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增投产窗口",
    "stage": "beta",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "1.11.11",
    "rqrmnts_id": "5f200067e011f1001f0b3f31",
    "recommond_version": "",
    "due_date": "2020/09/30",
    "feature_branch": "222",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增打开pdf",
    "stage": "开发中",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "2222"
  }, {
    "predict_version": "0.0.2",
    "rqrmnts_id": "5f45f8c5092f0e0035656692",
    "recommond_version": "",
    "due_date": "2020/09/10",
    "feature_branch": "feature-091001",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增投产窗口",
    "stage": "rc",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "0.0.2",
    "rqrmnts_id": "5f45f8c5092f0e0035656692",
    "recommond_version": "",
    "due_date": "2020/09/10",
    "feature_branch": "feature-091002",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增投产窗口",
    "stage": "beta",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "1.2.4",
    "rqrmnts_id": "5f5996999421710035661790",
    "recommond_version": "",
    "due_date": "2020/09/23",
    "feature_branch": "feature-1111",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "有开发分支废弃",
    "stage": "开发中",
    "name": "ceshi0910",
    "id": "5f599612942171003566178e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "10.3.5",
    "rqrmnts_id": "5f558f09486c17003534eff8",
    "recommond_version": "",
    "due_date": "2020/09/24",
    "feature_branch": "feature-002",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "测试222",
    "stage": "开发中",
    "name": "aaa",
    "id": "5f460e3f092f0e00356566c5",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "1.21.0",
    "rqrmnts_id": "5f587b0b634a840035cde085",
    "recommond_version": "",
    "due_date": "2020/09/29",
    "feature_branch": "feature-test-0929",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "听听看",
    "stage": "alpha",
    "name": "mbank-jsbridge",
    "id": "5f3bb4e4b2a6740035b089ff",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "1.2.5",
    "rqrmnts_id": "5f72f0bb3d5e110035ee1431",
    "recommond_version": "",
    "due_date": "2020/09/30",
    "feature_branch": "dddd",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "111",
    "stage": "开发中",
    "name": "test-0929",
    "id": "5f728c293d5e110035ee1411",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "0.0.2",
    "rqrmnts_id": "5f45f8c5092f0e0035656692",
    "recommond_version": "",
    "due_date": "2020/10/09",
    "feature_branch": "feature-1009-1",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "1",
    "rqrmnts_name": "新增投产窗口",
    "stage": "rc",
    "name": "service-component-media",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f62cbb3dd3d4f0035160709",
    "recommond_version": "10.0.8",
    "due_date": "2020/09/17",
    "feature_branch": "10.0.8-DEV",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "2",
    "rqrmnts_name": "cs091701",
    "stage": "已发布",
    "name": "online-prototype-test",
    "id": "5eba051dff184a0014269624",
    "rqrmnts_admin": [{
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d",
      "user_name_en": "t-luyy"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f647b48e384dc0035e6ccd9",
    "recommond_version": "1.2.4",
    "due_date": "2020/09/18",
    "feature_branch": "1.2.4-DEV",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "2",
    "rqrmnts_name": "445",
    "stage": "开发中",
    "name": "test",
    "id": "5f616a252352840035296565",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6aecfbfb5e980035ee1b81",
    "recommond_version": "10.1.8",
    "due_date": "2020/09/23",
    "feature_branch": "10.1.8-DEV",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "2",
    "rqrmnts_name": "aaa",
    "stage": "已发布",
    "name": "online-prototype-test",
    "id": "5eba051dff184a0014269624",
    "rqrmnts_admin": [{
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d",
      "user_name_en": "t-luyy"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6af66efb5e980035ee1b99",
    "recommond_version": "10.1.9",
    "due_date": "2020/09/23",
    "feature_branch": "10.1.9-DEV",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "2",
    "rqrmnts_name": "bbbb",
    "stage": "已发布",
    "name": "online-prototype-test",
    "id": "5eba051dff184a0014269624",
    "rqrmnts_admin": [{
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d",
      "user_name_en": "t-luyy"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f6bfaa2fb5e980035ee21b5",
    "recommond_version": "10.1.10",
    "due_date": "2020/09/24",
    "feature_branch": "10.1.10-DEV",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "2",
    "rqrmnts_name": "cccc",
    "stage": "release",
    "name": "online-prototype-test",
    "id": "5eba051dff184a0014269624",
    "rqrmnts_admin": [{
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d",
      "user_name_en": "t-luyy"
    }, {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72f2193d5e110035ee1436",
    "recommond_version": "1.2.6",
    "due_date": "2020/09/30",
    "feature_branch": "1.2.6-DEV",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "2",
    "rqrmnts_name": "1243535",
    "stage": "开发中",
    "name": "test",
    "id": "5f616a252352840035296565",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }, {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f460b1d092f0e00356566c1",
    "recommond_version": "",
    "due_date": "2020/08/26",
    "feature_branch": "01",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "11",
    "stage": "开发中",
    "name": "dd",
    "id": "5f46097d092f0e00356566bf",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "需求描述"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f460b44092f0e00356566c2",
    "recommond_version": "",
    "due_date": "2020/08/26",
    "feature_branch": "02",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "22",
    "stage": "开发中",
    "name": "dd",
    "id": "5f46097d092f0e00356566bf",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "需求描述"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f4758fa1a7ccb0035e1e08c",
    "recommond_version": "",
    "due_date": "2020/08/27",
    "feature_branch": "sdfsf",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "测试",
    "stage": "拉取tag",
    "name": "dd",
    "id": "5f46097d092f0e00356566bf",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "sf"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f4759511a7ccb0035e1e08e",
    "recommond_version": "",
    "due_date": "2020/08/27",
    "feature_branch": "sf",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "测试01",
    "stage": "release",
    "name": "dd",
    "id": "5f46097d092f0e00356566bf",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "62"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72e6713d5e110035ee142c",
    "recommond_version": "",
    "due_date": "2020/09/29",
    "feature_branch": "dzy",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "测试版本数dzy",
    "stage": "拉取tag",
    "name": "quasar-project",
    "id": "5f07da04673c36555426b8c8",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72e6d83d5e110035ee142d",
    "recommond_version": "",
    "due_date": "2020/09/29",
    "feature_branch": "aa",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "测试",
    "stage": "拉取tag",
    "name": "quasar-project",
    "id": "5f07da04673c36555426b8c8",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5daff485f57ddb001047b481"
    }, {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487",
      "user_name_en": "csii_miyp"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5daff409f57ddb001047b480"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72f1cf3d5e110035ee1435",
    "recommond_version": "",
    "due_date": "2020/09/29",
    "feature_branch": "1212",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "3",
    "rqrmnts_name": "122",
    "stage": "开发中",
    "name": "test0926-1",
    "id": "5f72a5983d5e110035ee141e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }, {
    "predict_version": "",
    "rqrmnts_id": "5f72ef283d5e110035ee1430",
    "recommond_version": "",
    "due_date": "2020/09/29",
    "feature_branch": "",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "type": "4",
    "rqrmnts_name": "测试1",
    "stage": "新增",
    "name": "test0929-a",
    "id": "5f72a6ae3d5e110035ee141f",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "desc": "1"
  }],
  "POST /fcomponent/api/dashboard/queryIssueDelay": [{
    "delay_date": "73",
    "stage": "公测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f200067e011f1001f0b3f31",
    "rqrmnts_name": "新增打开pdf",
    "develop": {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    },
    "feature_branch": "feature_pdf",
    "due_date": "2020/07/28",
    "type": "1"
  }, {
    "delay_date": "86",
    "stage": "公测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f200067e011f1001f0b3f31",
    "rqrmnts_name": "新增打开pdf",
    "develop": {
      "user_name_cn": "杨禛祥",
      "id": "5ea8e9d83d1758001257796c"
    },
    "feature_branch": "feature_openImg",
    "due_date": "2020/07/15",
    "type": "1"
  }, {
    "delay_date": "72",
    "stage": "公测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f212e9f26a398001fe4466d",
    "rqrmnts_name": "新增优化",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_upload",
    "due_date": "2020/07/29",
    "type": "1"
  }, {
    "delay_date": "72",
    "stage": "公测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f212e9f26a398001fe4466d",
    "rqrmnts_name": "新增优化",
    "develop": {
      "user_name_cn": "洪浩",
      "id": "5e0d83e793284200126ce61f"
    },
    "feature_branch": "feature_image",
    "due_date": "2020/07/29",
    "type": "1"
  }, {
    "delay_date": "72",
    "stage": "公测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f212e9f26a398001fe4466d",
    "rqrmnts_name": "新增优化",
    "develop": {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15"
    },
    "feature_branch": "feature_desc",
    "due_date": "2020/07/29",
    "type": "1"
  }, {
    "delay_date": "",
    "stage": "内测阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f28cda1b2214f001fec9dfd",
    "rqrmnts_name": "参数",
    "develop": {
      "user_name_cn": "米玉苹",
      "id": "5daff72cf57ddb001047b487"
    },
    "feature_branch": "feature-aaa",
    "due_date": "2020/08/13",
    "type": "1"
  }, {
    "delay_date": "56",
    "stage": "公测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f365be17f6c5900354395ba",
    "rqrmnts_name": "新增优化03",
    "develop": {
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    },
    "feature_branch": "feature-0814001",
    "due_date": "2020/08/14",
    "type": "1"
  }, {
    "delay_date": "56",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f3390542b6e3e0035bd6b13",
    "rqrmnts_name": "新增优化01",
    "develop": {
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    },
    "feature_branch": "feature-nnn",
    "due_date": "2020/08/14",
    "type": "1"
  }, {
    "delay_date": "",
    "stage": "内测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f212e9f26a398001fe4466d",
    "rqrmnts_name": "新增优化",
    "develop": {
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    },
    "feature_branch": "feature_a",
    "due_date": "2020/08/21",
    "type": "1"
  }, {
    "delay_date": "52",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f39eb0b7f6c5900354395c1",
    "rqrmnts_name": "11",
    "develop": {
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    },
    "feature_branch": "feature081801",
    "due_date": "2020/08/18",
    "type": "1"
  }, {
    "delay_date": "",
    "stage": "内测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f39eb0b7f6c5900354395c1",
    "rqrmnts_name": "11",
    "develop": {
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    },
    "feature_branch": "feature081802",
    "due_date": "2020/08/18",
    "type": "1"
  }, {
    "delay_date": "52",
    "stage": "新增阶段",
    "name": "桥接",
    "id": "5f3bb4e4b2a6740035b089ff",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f3bb980cdab760035554af8",
    "rqrmnts_name": "测试优化",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_kafka",
    "due_date": "2020/08/18",
    "type": "1"
  }, {
    "delay_date": "35",
    "stage": "新增阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f339fee2b6e3e0035bd6b1a",
    "rqrmnts_name": "诉讼",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_0904_test2",
    "due_date": "2020/09/04",
    "type": "1"
  }, {
    "delay_date": "32",
    "stage": "新增阶段",
    "name": "测试组件录入",
    "id": "5f460e3f092f0e00356566c5",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "rqrmnts_id": "5f558f09486c17003534eff8",
    "rqrmnts_name": "测试222",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "feature_branch": "feature-001",
    "due_date": "2020/09/07",
    "type": "1"
  }, {
    "delay_date": "16",
    "stage": "新增阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f72de363d5e110035ee1427",
    "rqrmnts_name": "窗口迁移测试",
    "develop": {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    },
    "feature_branch": "feature_compack",
    "due_date": "2020/09/23",
    "type": "1"
  }, {
    "delay_date": "9",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f200067e011f1001f0b3f31",
    "rqrmnts_name": "新增打开pdf",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "feature_branch": "222",
    "due_date": "2020/09/30",
    "type": "1"
  }, {
    "delay_date": "23",
    "stage": "内测阶段",
    "name": "前端组件",
    "id": "5f61684f2352840035296564",
    "rqrmnts_admin": [{
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8",
      "user_name_en": "c-zhengy1"
    }],
    "rqrmnts_id": "5f616eee2352840035296638",
    "rqrmnts_name": "前端组件",
    "develop": {
      "user_name_cn": "郑阳",
      "id": "5f0c0ce2b26c680012142ed8"
    },
    "feature_branch": "46",
    "due_date": "2020/09/16",
    "type": "1"
  }, {
    "delay_date": "17",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f59d4790d002b0035b16d71",
    "rqrmnts_name": "测试废弃",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_notify",
    "due_date": "2020/09/22",
    "type": "1"
  }, {
    "delay_date": "17",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f59d4790d002b0035b16d71",
    "rqrmnts_name": "测试废弃",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_notify_lo",
    "due_date": "2020/09/22",
    "type": "1"
  }, {
    "delay_date": "17",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f59d4790d002b0035b16d71",
    "rqrmnts_name": "测试废弃",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_sendmail",
    "due_date": "2020/09/22",
    "type": "1"
  }, {
    "delay_date": "17",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f59d4790d002b0035b16d71",
    "rqrmnts_name": "测试废弃",
    "develop": {
      "user_name_cn": "李正阳",
      "id": "5daff841f57ddb001047b48a"
    },
    "feature_branch": "feature_compack",
    "due_date": "2020/09/22",
    "type": "1"
  }, {
    "delay_date": "",
    "stage": "内测阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f5867ff3712a3003569385a",
    "rqrmnts_name": "测试废弃",
    "develop": {
      "user_name_cn": "何兴亚",
      "id": "5daffe36f57ddb001047b492"
    },
    "feature_branch": "feature_comp",
    "due_date": "2020/09/22",
    "type": "1"
  }, {
    "delay_date": "17",
    "stage": "新增阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f33a8512b6e3e0035bd6b27",
    "rqrmnts_name": "we",
    "develop": {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a"
    },
    "feature_branch": "feature_lls",
    "due_date": "2020/09/22",
    "type": "1"
  }, {
    "delay_date": "",
    "stage": "内测阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f59d4790d002b0035b16d71",
    "rqrmnts_name": "测试废弃",
    "develop": {
      "user_name_cn": "陆耀毅",
      "id": "5dba955625e5eb0012d6c60d"
    },
    "feature_branch": "feature-0923",
    "due_date": "2020/09/23",
    "type": "1"
  }, {
    "delay_date": "16",
    "stage": "新增阶段",
    "name": "测试0910-废弃",
    "id": "5f599612942171003566178e",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "rqrmnts_id": "5f5996999421710035661790",
    "rqrmnts_name": "有开发分支废弃",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "feature_branch": "feature-1111",
    "due_date": "2020/09/23",
    "type": "1"
  }, {
    "delay_date": "15",
    "stage": "新增阶段",
    "name": "测试组件录入",
    "id": "5f460e3f092f0e00356566c5",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "rqrmnts_id": "5f558f09486c17003534eff8",
    "rqrmnts_name": "测试222",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "feature_branch": "feature-002",
    "due_date": "2020/09/24",
    "type": "1"
  }, {
    "delay_date": "9",
    "stage": "新增阶段",
    "name": "服务组件媒体",
    "id": "5f200017e011f1001f0b3f30",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "李力顺",
      "id": "5f05330a811650bb80edd69a",
      "user_name_en": "c-lils"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f58b58e04894b00358c8541",
    "rqrmnts_name": "11",
    "develop": {
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15"
    },
    "feature_branch": "test",
    "due_date": "2020/09/30",
    "type": "1"
  }, {
    "delay_date": "11",
    "stage": "新增阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f72de363d5e110035ee1427",
    "rqrmnts_name": "窗口迁移测试",
    "develop": {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480"
    },
    "feature_branch": "ttt",
    "due_date": "2020/09/28",
    "type": "1"
  }, {
    "delay_date": "11",
    "stage": "新增阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f51f3a4486c17003534e4e8",
    "rqrmnts_name": "测试删除",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature_mpp",
    "due_date": "2020/09/28",
    "type": "1"
  }, {
    "delay_date": "10",
    "stage": "内测阶段",
    "name": "桥接",
    "id": "5f3bb4e4b2a6740035b089ff",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }, {
      "user_name_cn": "叶文龙",
      "id": "5db00e5bf57ddb001047b499",
      "user_name_en": "csii_yewl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f587b0b634a840035cde085",
    "rqrmnts_name": "听听看",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "feature_branch": "feature-test-0929",
    "due_date": "2020/09/29",
    "type": "1"
  }, {
    "delay_date": "10",
    "stage": "新增阶段",
    "name": "路由组件",
    "id": "5f28c949b2214f001fec9dfc",
    "rqrmnts_admin": [{
      "user_name_cn": "李彩芹",
      "id": "5e0187b27bfe210012f4ee15",
      "user_name_en": "csii_licq"
    }, {
      "user_name_cn": "周新丽",
      "id": "5daff409f57ddb001047b480",
      "user_name_en": "T-zhouxl"
    }, {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11",
      "user_name_en": "csii_wangfq"
    }],
    "rqrmnts_id": "5f72de363d5e110035ee1427",
    "rqrmnts_name": "窗口迁移测试",
    "develop": {
      "user_name_cn": "王飞强",
      "id": "5db688e8f8d61800136ffe11"
    },
    "feature_branch": "feature-1.1.0-transfer",
    "due_date": "2020/09/29",
    "type": "1"
  }, {
    "delay_date": "9",
    "stage": "新增阶段",
    "name": "测试0929",
    "id": "5f728c293d5e110035ee1411",
    "rqrmnts_admin": [{
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b",
      "user_name_en": "c-dangzy"
    }],
    "rqrmnts_id": "5f72f0bb3d5e110035ee1431",
    "rqrmnts_name": "111",
    "develop": {
      "user_name_cn": "党张颖",
      "id": "5f06778b2449f60012c2321b"
    },
    "feature_branch": "dddd",
    "due_date": "2020/09/30",
    "type": "1"
  }],
  "POST /fcomponent/api/dashboard/allIsuue": [{
    "id": "5def09ac14c5780015e216d4",
    "type": "0",
    "name_cn": "com.csii.pe.parent测试",
    "name_en": "com.csii.pe.parent"
  }, {
    "id": "5def09eb14c5780015e21707",
    "type": "0",
    "name_cn": "com.csii.pe.communication测试0",
    "name_en": "com.csii.pe.communication"
  }, {
    "id": "5def0a7a14c5780015e2178a",
    "type": "0",
    "name_cn": "druid德鲁伊",
    "name_en": "druid"
  }, {
    "id": "5df05df5d31a2d0014fe1d0a",
    "type": "0",
    "name_cn": "com.csii.pe.security.guard测试",
    "name_en": "com.csii.pe.security.guard"
  }, {
    "id": "5df05f36d31a2d0014fe1d9b",
    "type": "0",
    "name_cn": "com.csii.pe.core.guard.ext测试",
    "name_en": "com.csii.pe.core.guard.ext"
  }, {
    "id": "5ea28674a9218600148bdc6e",
    "type": "0",
    "name_cn": "pe-redis-core测试",
    "name_en": "pe-redis-core"
  }, {
    "id": "5f17f62b0509f3001faa6f45",
    "type": "0",
    "name_cn": "com.csii.pe.security.netsign测试",
    "name_en": "com.csii.pe.security.netsign"
  }, {
    "id": "5f1e6a90961c85001f32458f",
    "type": "0",
    "name_cn": "测",
    "name_en": "test_token"
  }, {
    "id": "5f1e733b961c85001f3245a1",
    "type": "0",
    "name_cn": "新增测试组件",
    "name_en": "test-component"
  }, {
    "id": "5f1f9508e011f1001f0b3c4c",
    "type": "0",
    "name_cn": "测试",
    "name_en": "token"
  }, {
    "id": "5f2a0a575ad351001f8e9427",
    "type": "0",
    "name_cn": "新增发布测试",
    "name_en": "auto-deploy-test"
  }, {
    "id": "5f339b512b6e3e0035bd6b18",
    "type": "0",
    "name_cn": "测试1",
    "name_en": "test1"
  }, {
    "id": "5f352bf3d929fc003577f3fe",
    "type": "0",
    "name_cn": "基础架构管理",
    "name_en": "jcjggl"
  }, {
    "id": "5f352f90d929fc003577f3ff",
    "type": "0",
    "name_cn": "基础架构管理1",
    "name_en": "jcjggl1"
  }, {
    "id": "5f3530a9d929fc003577f400",
    "type": "0",
    "name_cn": "基础架构管理2",
    "name_en": "jcjggl2"
  }, {
    "id": "5f3530dbd929fc003577f401",
    "type": "0",
    "name_cn": "基础架构管理3",
    "name_en": "jcjggl3"
  }, {
    "id": "5f353110d929fc003577f402",
    "type": "0",
    "name_cn": "基础架构管理4",
    "name_en": "jcjggl4"
  }, {
    "id": "5f3a60f0af15f2003533f1c8",
    "type": "0",
    "name_cn": "我",
    "name_en": "ee"
  }, {
    "id": "5f460f31092f0e00356566c6",
    "type": "0",
    "name_cn": "测试组建新增",
    "name_en": "dd"
  }, {
    "id": "5f460f8e092f0e00356566c7",
    "type": "0",
    "name_cn": "测试组件录入",
    "name_en": "ddd"
  }, {
    "id": "5f681961e384dc0035e6de8c",
    "type": "0",
    "name_cn": "测试时间",
    "name_en": "testComponent"
  }, {
    "id": "5f72a4ce3d5e110035ee141c",
    "type": "0",
    "name_cn": "测试092901",
    "name_en": "test092901"
  }, {
    "id": "5f200017e011f1001f0b3f30",
    "type": "1",
    "name_cn": "服务组件媒体",
    "name_en": "service-component-media"
  }, {
    "id": "5f28c949b2214f001fec9dfc",
    "type": "1",
    "name_cn": "路由组件",
    "name_en": "router"
  }, {
    "id": "5f3a3780af15f2003533f0ec",
    "type": "1",
    "name_cn": "插件工具包",
    "name_en": "helper-plugin-utils"
  }, {
    "id": "5f3a4041af15f2003533f159",
    "type": "1",
    "name_cn": "代码框架",
    "name_en": "babel-code-frame"
  }, {
    "id": "5f3b99fcb2a6740035b089cf",
    "type": "1",
    "name_cn": "服务插件",
    "name_en": "service-components-plugins"
  }, {
    "id": "5f3b9b51b2a6740035b089dc",
    "type": "1",
    "name_cn": "webpack插件",
    "name_en": "friendly-errors-webpack-plugin"
  }, {
    "id": "5f3bb4e4b2a6740035b089ff",
    "type": "1",
    "name_cn": "桥接",
    "name_en": "mbank-jsbridge"
  }, {
    "id": "5f45f59a092f0e0035656641",
    "type": "1",
    "name_cn": "helper-call-delegate组件",
    "name_en": "helper-call-delegate"
  }, {
    "id": "5f460e3f092f0e00356566c5",
    "type": "1",
    "name_cn": "测试组件录入",
    "name_en": "aaa"
  }, {
    "id": "5f4721e9dac0fb00351068cd",
    "type": "1",
    "name_cn": "生成器",
    "name_en": "generator"
  }, {
    "id": "5f599612942171003566178e",
    "type": "1",
    "name_cn": "测试0910-废弃",
    "name_en": "ceshi0910"
  }, {
    "id": "5f61684f2352840035296564",
    "type": "1",
    "name_cn": "前端组件",
    "name_en": "ce"
  }, {
    "id": "5f728c293d5e110035ee1411",
    "type": "1",
    "name_cn": "测试0929",
    "name_en": "test-0929"
  }, {
    "id": "5f7ffb61c1be0f003598fae0",
    "type": "1",
    "name_cn": "测试1009",
    "name_en": "test-1009"
  }, {
    "id": "5df876c8baf7050014c944e8",
    "type": "2",
    "name_cn": "online骨架（应用模块新增应用时使用，勿动！！！）",
    "name_en": "pe-springcloud-online"
  }, {
    "id": "5df891c71dcf540014cb1dcd",
    "type": "2",
    "name_cn": "手机WEB骨架（应用模块新增应用时使用，勿动！！！）",
    "name_en": "mspmk-web-demo-parent"
  }, {
    "id": "5df894421dcf540014edf9d7",
    "type": "2",
    "name_cn": "公共WEB骨架（应用模块新增应用时使用，勿动！！！）",
    "name_en": "pe-springcloud-parent"
  }, {
    "id": "5df896521dcf5400150c73cb",
    "type": "2",
    "name_cn": "通用vue项目骨架（应用模块新增应用时使用，勿动！！！）",
    "name_en": "vue-archetype"
  }, {
    "id": "5e095506227d650014994da6",
    "type": "2",
    "name_cn": "fdev骨架，测试骨架功能使用，应用新增勿选",
    "name_en": "fdev-prototype"
  }, {
    "id": "5eba051dff184a0014269624",
    "type": "2",
    "name_cn": "online骨架，，测试骨架功能使用，应用新增勿选",
    "name_en": "online-prototype-test"
  }, {
    "id": "5ee0a4489b104a001403d6a4",
    "type": "2",
    "name_cn": "手机骨架，测试骨架功能使用，应用新增勿选",
    "name_en": "mspmk-demo-test"
  }, {
    "id": "5f462caa092f0e00356566cf",
    "type": "2",
    "name_cn": "个人骨架（应用模块新增应用时使用，勿动！！！）",
    "name_en": "msper-web-archetype"
  }, {
    "id": "5f462da9092f0e00356566ef",
    "type": "2",
    "name_cn": "管理端骨架（应用模块新增应用时使用，勿动！！！）",
    "name_en": "mgmt-web-demo"
  }, {
    "id": "5f616a252352840035296565",
    "type": "2",
    "name_cn": "后端骨架",
    "name_en": "test"
  }, {
    "id": "5f72a5493d5e110035ee141d",
    "type": "2",
    "name_cn": "测试0926001",
    "name_en": "test0926001"
  }, {
    "id": "5f07da04673c36555426b8c8",
    "type": "3",
    "name_cn": "vue骨架",
    "name_en": "quasar-project"
  }, {
    "id": "5f1aa2a661e6f3001fd029f2",
    "type": "3",
    "name_cn": "方法",
    "name_en": "ff"
  }, {
    "id": "5f363484d929fc003577f412",
    "type": "3",
    "name_cn": "测试",
    "name_en": "test"
  }, {
    "id": "5f3a1d3f4e28350035fca459",
    "type": "3",
    "name_cn": "测试12",
    "name_en": "test1"
  }, {
    "id": "5f46097d092f0e00356566bf",
    "type": "3",
    "name_cn": "测试0826",
    "name_en": "dd"
  }, {
    "id": "5f461f2a092f0e00356566cc",
    "type": "3",
    "name_cn": "测试082601",
    "name_en": "ddd"
  }, {
    "id": "5f46215e092f0e00356566ce",
    "type": "3",
    "name_cn": "测试082600",
    "name_en": "test0826"
  }, {
    "id": "5f6166fa2352840035296563",
    "type": "3",
    "name_cn": "前端骨架",
    "name_en": "ce"
  }, {
    "id": "5f72a5983d5e110035ee141e",
    "type": "3",
    "name_cn": "测试0926-1",
    "name_en": "test0926-1"
  }, {
    "id": "5ea7db3c673c3638545b70e2",
    "type": "4",
    "name_cn": "组件模块测试镜像流程使用",
    "name_en": "base-image-test"
  }, {
    "id": "5ecc73c87edfa80014e5824d",
    "type": "4",
    "name_cn": "组件模块测试镜像流程使用",
    "name_en": "ebank-containerization-test"
  }, {
    "id": "5efe92639b82ff000eac9cf3",
    "type": "4",
    "name_cn": "网银微服务-生产环境-基础镜像（open jdk）勿动！！！！！！！",
    "name_en": "ebank-centos-openjdk"
  }, {
    "id": "5efe92639b82ff000eac9ccc",
    "type": "4",
    "name_cn": "网银微服务-生产环境-基础镜像jre勿动！！！！！！！",
    "name_en": "ebank-centos-jre"
  }, {
    "id": "5f683b9ee384dc0035e6de8d",
    "type": "4",
    "name_cn": "测试添加",
    "name_en": "testadd"
  }, {
    "id": "5f72a6ae3d5e110035ee141f",
    "type": "4",
    "name_cn": "测试0929-a",
    "name_en": "test0929-a"
  }]
}

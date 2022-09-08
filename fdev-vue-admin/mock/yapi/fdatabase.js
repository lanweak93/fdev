module.exports = {
  "POST /fdatabase/api/database/queryDetail": {
    "database_name": "dbmbank",
    "columns": [{
      "columnType": "VARCHAR(10)",
      "column": "ID"
    }, {
      "columnType": "VARCHAR(10)",
      "column": "BUSI_ID"
    }, {
      "columnType": "VARCHAR(50)",
      "column": "FST_AREA"
    }, {
      "columnType": "VARCHAR(50)",
      "column": "SEC_AREA"
    }, {
      "columnType": "TEXT",
      "column": "BO_INFO"
    }, {
      "columnType": "DECIMAL(10,6)",
      "column": "POS_X"
    }, {
      "columnType": "DECIMAL(10,6)",
      "column": "POS_Y"
    }, {
      "columnType": "VARCHAR(200)",
      "column": "SHOP_NAME"
    }, {
      "columnType": "VARCHAR(255)",
      "column": "SHOP_ADDR"
    }, {
      "columnType": "VARCHAR(50)",
      "column": "SHOP_PHONE"
    }],
    "tbNum": 9,
    "index": [{
      "indexColumn": ["POS_X", "POS_Y"],
      "indexName": "XIE1CBS_BUSI_POS",
      "tableName": "CBS_BUSI_POS"
    }, {
      "indexColumn": ["FST_AREA", "SEC_AREA"],
      "indexName": "XIE2CBS_BUSI_POS",
      "tableName": "CBS_BUSI_POS"
    }],
    "table_name": "CBS_BUSI_POS",
    "database_type": "informix",
    "autoflag": "0",
    "serialVersionUID": -3454544698799042000,
    "uniqueIndex": [],
    "createTime": "2020/09/29 17:44:39",
    "appid": "5dd39f8b54aa4e000d29bb27",
    "appinfo": {
      "id": "5dd39f8b54aa4e000d29bb27",
      "appName_en": "spdb-netbank-mgmt",
      "appName_cn": "电子银行管理端",
      "spdb_managers": [{
        "user_name_cn": "胡芸",
        "user_name_en": "huy48",
        "id": "5ed610e0a67d75000cd3b6b9"
      }]
    },
    "tableid": "5f7302078116504b54df4e85",
    "_id": {
      "timestamp": 1601372679,
      "machineIdentifier": 8459856,
      "processIdentifier": 19284,
      "counter": 14634629,
      "date": 1601372679000,
      "time": 1601372679000,
      "timeSecond": 1601372679
    },
    "id": "5f73153c8116504b54df5bc5",
    "status": "0",
    "primaryKey": ["ID"]
  },
  "POST /fdatabase/api/database/queryManager": [{
    "user_name_cn": "林伟华",
    "user_name_en": "T-linhw",
    "id": "5da9853cb169af001211b2a7"
  }, {
    "user_name_en": "T-sijg",
    "user_name_cn": "司建高",
    "id": "5e8eca18de8f0f001576be9a"
  }, {
    "user_name_en": "c-wangs1",
    "user_name_cn": "王硕",
    "id": "5e7c2a3175267a001509ba06"
  }, {
    "user_name_en": "csii_wuf",
    "user_name_cn": "吴芳",
    "id": "5cd0e24c954ad500064ebcef"
  }, {
    "user_name_cn": "张康",
    "user_name_en": "T-zhangk",
    "id": "5eaa6737ca8b6600154545df"
  }, {
    "user_name_cn": "汪军",
    "user_name_en": "csii_wangj",
    "id": "5ce3973694d6d700078a5a32"
  }, {
    "user_name_cn": "冼绮静",
    "user_name_en": "csii_xianqj",
    "id": "5d889ccf37a9d60010b3d0b9"
  }, {
    "user_name_cn": "周新丽",
    "user_name_en": "T-zhouxl",
    "id": "5d2573a6c0570f000a1b9332"
  }, {
    "user_name_en": "csii_hek",
    "user_name_cn": "何坤",
    "id": "5ce78b222a045e0007d56716"
  }, {
    "user_name_en": "c-dangzy",
    "user_name_cn": "党张颖",
    "id": "5f06affaecdf860015e9ebb8"
  }, {
    "user_name_en": "T-luot1",
    "user_name_cn": "罗涛",
    "id": "5ce3b20e42f41700067ebe11"
  }, {
    "user_name_cn": "王飞强",
    "user_name_en": "csii_wangfq",
    "id": "5dcd301ac404b30016e97b42"
  }, {
    "user_name_en": "c-chenhw",
    "user_name_cn": "陈昊巍",
    "id": "5f34e38f338de200158f32e2"
  }, {
    "user_name_en": "csii_miyp",
    "user_name_cn": "米玉苹",
    "id": "5d889e8137a9d60010b3d0ba"
  }, {
    "user_name_cn": "陆耀毅",
    "user_name_en": "T-luyy",
    "id": "5e4b3e487ea4630015d9fc96"
  }, {
    "user_name_en": "pangxy1",
    "user_name_cn": "庞晓宇",
    "id": "5d9d42a23c7646001087f51a"
  }, {
    "user_name_cn": "周明",
    "user_name_en": "csii_zhoum",
    "id": "5ceb48c52a045e0007d56730"
  }, {
    "user_name_en": "c-liy2",
    "user_name_cn": "李阳",
    "id": "5e82f4819a1d7b00151a503c"
  }, {
    "user_name_en": "csii_yangf",
    "user_name_cn": "杨飞",
    "id": "5d89735e37a9d60010b3d0ca"
  }, {
    "user_name_cn": "童浩",
    "user_name_en": "c-tongh",
    "id": "5f08121decdf860015e9ec0f"
  }],
  "POST /fdatabase/api/database/queryName": [{
    "id": "5f15554581165042e8a5eaa4",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "ibs_ptab_blackip",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5eae8",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ctab_uaprof",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5eb17",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_splog1",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5eb44",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_channel_module_resources",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5eb68",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "ibs_ptab_blackcustomer",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5eba5",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_channel_config",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ebc5",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "ibs_ptab_blackdelinfo",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ebe0",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "payment_participator",
    "appid": "5f15574081165042e8a5f5d9"
  }, {
    "id": "5f15554581165042e8a5ec12",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_channel_product_module",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ec3f",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_seqno",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ec55",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_h5rsacheck",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ec5d",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ctab_cssdef",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ec97",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "ibs_ptab_blacklist",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ecd8",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_user",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554581165042e8a5ecdd",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_cardshield_confirm",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554681165042e8a5ed2e",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ptab_margin_config",
    "appid": "5f15594481165042e8a5f5e6"
  }, {
    "id": "5f15554681165042e8a5ed92",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "mbs_ctab_cssmapping",
    "appid": "5f15594481165042e8a5f5e6"
  }],
  "POST /fdatabase/api/database/queryDbType": ["mysql", "oracle", "informix"],
  "POST /fdatabase/api/database/queryAppName": [{
    "id": "5f34a38a57e7fa0015f2f848",
    "appName_en": "mspmk-web-ph",
    "appName_cn": "20191121测试应用",
    "spdb_managers": [{
      "user_name_cn": "林伟华",
      "user_name_en": "T-linhw",
      "id": "5da9853cb169af001211b2a7"
    }, {
      "user_name_cn": "王飞强",
      "user_name_en": "csii_wangfq",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a39857e7fa0015f2f854",
    "appName_en": "mspmk-web-hxytest",
    "appName_cn": "编辑测试",
    "spdb_managers": [{
      "user_name_en": "csii_yangf",
      "user_name_cn": "杨飞",
      "id": "5d89735e37a9d60010b3d0ca"
    }]
  }, {
    "id": "5f34a3b657e7fa0015f2f860",
    "appName_en": "mspmk-web-wf121902test",
    "appName_cn": "应用自动化测试",
    "spdb_managers": [{
      "user_name_en": "csii_wuf",
      "user_name_cn": "吴芳",
      "id": "5cd0e24c954ad500064ebcef"
    }]
  }, {
    "id": "5f34a3ce57e7fa0015f2f86c",
    "appName_en": "mspay-web-chinese",
    "appName_cn": "进行的操作",
    "spdb_managers": [{
      "user_name_cn": "周新丽",
      "user_name_en": "T-zhouxl",
      "id": "5d2573a6c0570f000a1b9332"
    }, {
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5cd0e24c954ad500064ebcef"
    }, {
      "user_name_cn": "周明",
      "user_name_en": "csii_zhoum",
      "id": "5ceb48c52a045e0007d56730"
    }]
  }, {
    "id": "5f34a3d957e7fa0015f2f878",
    "appName_en": "mspmk-web-dfddd",
    "appName_cn": "应用1234",
    "spdb_managers": [{
      "user_name_cn": "汪军",
      "user_name_en": "csii_wangj",
      "id": "5ce3973694d6d700078a5a32"
    }, {
      "user_name_cn": "冼绮静",
      "user_name_en": "csii_xianqj",
      "id": "5d889ccf37a9d60010b3d0b9"
    }, {
      "user_name_cn": "陆耀毅",
      "user_name_en": "T-luyy",
      "id": "5e4b3e487ea4630015d9fc96"
    }, {
      "user_name_cn": "吴芳",
      "user_name_en": "csii_wuf",
      "id": "5cd0e24c954ad500064ebcef"
    }]
  }, {
    "id": "5f34a3e957e7fa0015f2f884",
    "appName_en": "ims-web-adadda",
    "appName_cn": "新增营业",
    "spdb_managers": [{
      "user_name_en": "csii_yangf",
      "user_name_cn": "杨飞",
      "id": "5d89735e37a9d60010b3d0ca"
    }]
  }, {
    "id": "5f34a42757e7fa0015f2f890",
    "appName_en": "mspmk-web-comdemo",
    "appName_cn": "测试应用",
    "spdb_managers": [{
      "user_name_en": "csii_wangj",
      "user_name_cn": "汪军",
      "id": "5ce3973694d6d700078a5a32"
    }]
  }, {
    "id": "5f34a42b57e7fa0015f2f89c",
    "appName_en": "mspmk-web-cnss",
    "appName_cn": "录入已有应用测试",
    "spdb_managers": [{
      "user_name_en": "csii_hek",
      "user_name_cn": "何坤",
      "id": "5ce78b222a045e0007d56716"
    }]
  }, {
    "id": "5f34a44157e7fa0015f2f8a8",
    "appName_en": "mspmk-web-addtest",
    "appName_cn": "新增录入",
    "spdb_managers": [{
      "user_name_en": "csii_hek",
      "user_name_cn": "何坤",
      "id": "5ce78b222a045e0007d56716"
    }]
  }, {
    "id": "5f34a44557e7fa0015f2f8b4",
    "appName_en": "msper-web-reladdmspmk",
    "appName_cn": "rel新增mspmk应用",
    "spdb_managers": [{
      "user_name_en": "csii_hek",
      "user_name_cn": "何坤",
      "id": "5ce78b222a045e0007d56716"
    }]
  }, {
    "id": "5f34a45157e7fa0015f2f8c0",
    "appName_en": "mspmk-web-cheshi",
    "appName_cn": "投产验证专用",
    "spdb_managers": [{
      "user_name_en": "pangxy1",
      "user_name_cn": "庞晓宇",
      "id": "5d9d42a23c7646001087f51a"
    }]
  }, {
    "id": "5f34a45557e7fa0015f2f8cc",
    "appName_en": "mspmk-web-che1shi",
    "appName_cn": "测试验证",
    "spdb_managers": [{
      "user_name_en": "pangxy1",
      "user_name_cn": "庞晓宇",
      "id": "5d9d42a23c7646001087f51a"
    }]
  }, {
    "id": "5f34a45e57e7fa0015f2f8d8",
    "appName_en": "mspmk-web-ciaddmspmk",
    "appName_cn": "ci新增mspmk应用",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a46a57e7fa0015f2f8e4",
    "appName_en": "mspmk-web-contt",
    "appName_cn": "rel录入删除",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a47157e7fa0015f2f8f0",
    "appName_en": "mspmk-web-ghh",
    "appName_cn": "应用9999",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7c2a3175267a001509ba06"
    }]
  }, {
    "id": "5f34a47957e7fa0015f2f8fc",
    "appName_en": "mspmk-cli-ttt",
    "appName_cn": "应用88",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7c2a3175267a001509ba06"
    }]
  }, {
    "id": "5f34a48757e7fa0015f2f908",
    "appName_en": "mspmk-ccc-bbb",
    "appName_cn": "例1",
    "spdb_managers": [{
      "user_name_en": "c-liy2",
      "user_name_cn": "李阳",
      "id": "5e82f4819a1d7b00151a503c"
    }]
  }, {
    "id": "5f34a48f57e7fa0015f2f914",
    "appName_en": "aaa-sss-ddd",
    "appName_cn": "测试不同应用",
    "spdb_managers": [{
      "user_name_en": "c-liy2",
      "user_name_cn": "李阳",
      "id": "5e82f4819a1d7b00151a503c"
    }]
  }, {
    "id": "5f34a49957e7fa0015f2f920",
    "appName_en": "aaa-sss-wqw",
    "appName_cn": "应用匹配实体1",
    "spdb_managers": [{
      "user_name_en": "c-liy2",
      "user_name_cn": "李阳",
      "id": "5e82f4819a1d7b00151a503c"
    }]
  }, {
    "id": "5f34a4ac57e7fa0015f2f92c",
    "appName_en": "sys-wew-qaq",
    "appName_cn": "定时部署自动化环境1",
    "spdb_managers": [{
      "user_name_en": "c-liy2",
      "user_name_cn": "李阳",
      "id": "5e82f4819a1d7b00151a503c"
    }]
  }, {
    "id": "5f34a4bd57e7fa0015f2f938",
    "appName_en": "h-u-h",
    "appName_cn": "王硕91验证",
    "spdb_managers": [{
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7c2a3175267a001509ba06"
    }]
  }, {
    "id": "5f34a4db57e7fa0015f2f944",
    "appName_en": "mspmk-web-yangzneg",
    "appName_cn": "验证222",
    "spdb_managers": [{
      "user_name_en": "pangxy1",
      "user_name_cn": "庞晓宇",
      "id": "5d9d42a23c7646001087f51a"
    }]
  }, {
    "id": "5f34a4e257e7fa0015f2f950",
    "appName_en": "ipay-cli-iii",
    "appName_cn": "非国有合同工",
    "spdb_managers": [{
      "user_name_en": "T-zhouxl",
      "user_name_cn": "周新丽",
      "id": "5d2573a6c0570f000a1b9332"
    }]
  }, {
    "id": "5f34a4ea57e7fa0015f2f95c",
    "appName_en": "nbh-jnl-aaa",
    "appName_cn": "测试手机乱码",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a4ed57e7fa0015f2f968",
    "appName_en": "ipay-web-testmspmk",
    "appName_cn": "手机骨架应用",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a4f057e7fa0015f2f974",
    "appName_en": "mspmk-web-kkconfig",
    "appName_cn": "测试手机骨架",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a4f657e7fa0015f2f980",
    "appName_en": "mspmk-ent-mspmk",
    "appName_cn": "骨架mspmk新增",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a50157e7fa0015f2f98c",
    "appName_en": "mspmk-online-rel",
    "appName_cn": "新增测试",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a51757e7fa0015f2f998",
    "appName_en": "mspmk-cli-dddd",
    "appName_cn": "点点滴滴",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a52657e7fa0015f2f9a4",
    "appName_en": "nbh-jnl-testsign",
    "appName_cn": "测试新增标识位",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a53057e7fa0015f2f9b0",
    "appName_en": "ipay-param-dsds",
    "appName_cn": "微服务",
    "spdb_managers": [{
      "user_name_en": "T-sijg",
      "user_name_cn": "司建高",
      "id": "5e8eca18de8f0f001576be9a"
    }, {
      "user_name_en": "c-wangs1",
      "user_name_cn": "王硕",
      "id": "5e7c2a3175267a001509ba06"
    }, {
      "user_name_en": "csii_miyp",
      "user_name_cn": "米玉苹",
      "id": "5d889e8137a9d60010b3d0ba"
    }]
  }, {
    "id": "5f34a53257e7fa0015f2f9bc",
    "appName_en": "test-dev-t123h",
    "appName_cn": "童浩测试用",
    "spdb_managers": [{
      "user_name_cn": "童浩",
      "user_name_en": "c-tongh",
      "id": "5f08121decdf860015e9ec0f"
    }]
  }, {
    "id": "5f34a53557e7fa0015f2f9c8",
    "appName_en": "mspmk-web-yyy",
    "appName_cn": "党张颖测试",
    "spdb_managers": [{
      "user_name_en": "c-dangzy",
      "user_name_cn": "党张颖",
      "id": "5f06affaecdf860015e9ebb8"
    }]
  }, {
    "id": "5f34a53e57e7fa0015f2f9d4",
    "appName_en": "mspay-ent-testaccess",
    "appName_cn": "测试权限",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a54457e7fa0015f2f9e0",
    "appName_en": "mspay-jnl-notify",
    "appName_cn": "测试通知模块",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a54757e7fa0015f2f9ec",
    "appName_en": "ims-ent-test",
    "appName_cn": "测试notify功能",
    "spdb_managers": [{
      "user_name_en": "T-luot1",
      "user_name_cn": "罗涛",
      "id": "5ce3b20e42f41700067ebe11"
    }]
  }, {
    "id": "5f34a54a57e7fa0015f2f9f8",
    "appName_en": "mspmk-jnl-tokenapp",
    "appName_cn": "token改造应用",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a56057e7fa0015f2fa04",
    "appName_en": "mspmk-web-yanzengpxy",
    "appName_cn": "手机验证应用",
    "spdb_managers": [{
      "user_name_en": "pangxy1",
      "user_name_cn": "庞晓宇",
      "id": "5d9d42a23c7646001087f51a"
    }]
  }, {
    "id": "5f34a56457e7fa0015f2fa10",
    "appName_en": "ims-jnl-newarchetype",
    "appName_cn": "更换骨架新增应用",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a56957e7fa0015f2fa1c",
    "appName_en": "mspmk-online-msss",
    "appName_cn": "手机骨架测试应用",
    "spdb_managers": [{
      "user_name_en": "csii_wangfq",
      "user_name_cn": "王飞强",
      "id": "5dcd301ac404b30016e97b42"
    }]
  }, {
    "id": "5f34a56d57e7fa0015f2fa28",
    "appName_en": "mspmk-web-wwww",
    "appName_cn": "测111",
    "spdb_managers": [{
      "user_name_en": "csii_hek",
      "user_name_cn": "何坤",
      "id": "5ce78b222a045e0007d56716"
    }]
  }, {
    "id": "5f34a57057e7fa0015f2fa34",
    "appName_en": "ims-zk-testproject",
    "appName_cn": "zk测试专用",
    "spdb_managers": [{
      "user_name_en": "T-zhangk",
      "user_name_cn": "张康",
      "id": "5eaa6737ca8b6600154545df"
    }]
  }, {
    "id": "5f34a57c57e7fa0015f2fa40",
    "appName_en": "ims-param-sds",
    "appName_cn": "米测试应用sonar",
    "spdb_managers": [{
      "user_name_cn": "米玉苹",
      "user_name_en": "csii_miyp",
      "id": "5d889e8137a9d60010b3d0ba"
    }]
  }],
  "POST /fdatabase/api/database/add": {
    "id": "5f11524b8116503b84903588",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "ibs_ptab_blackip666",
    "appid": "5f0e9c91811650b23899b0d6"
  },
  "POST /fdatabase/api/database/update": {
    "id": "5f11524b8116503b84903588",
    "database_type": "informix",
    "database_name": "dbmbank",
    "table_name": "ibs_ptab_blackip666",
    "appid": "5f0e9c91811650b23899b0d6"
  },
  "POST /fdatabase/api/database/delete": null,
  "POST /fdatabase/api/database/queryInfo": {
    "total": 584,
    "dbs": [{
      "_id": {
        "timestamp": 1597285258,
        "machineIdentifier": 5761018,
        "processIdentifier": 21,
        "counter": 15923277,
        "time": 1597285258000,
        "date": 1597285258000,
        "timeSecond": 1597285258
      },
      "id": "5f34a38a57e7fa0015f2f84d",
      "database_type": "oracle",
      "database_name": "dboracle",
      "table_name": "mbs_ctab_uaprof",
      "appid": "5f34a38a57e7fa0015f2f848",
      "tbNum": 1,
      "autoflag": "0",
      "status": "0",
      "appinfo": {
        "id": "5f34a38a57e7fa0015f2f848",
        "appName_en": "mspmk-web-ph",
        "appName_cn": "20191121测试应用",
        "spdb_managers": [{
          "user_name_cn": "林伟华",
          "user_name_en": "T-linhw",
          "id": "5da9853cb169af001211b2a7"
        }, {
          "user_name_cn": "王飞强",
          "user_name_en": "csii_wangfq",
          "id": "5dcd301ac404b30016e97b42"
        }]
      }
    }, {
      "_id": {
        "timestamp": 1597285258,
        "machineIdentifier": 5761018,
        "processIdentifier": 21,
        "counter": 15923278,
        "time": 1597285258000,
        "date": 1597285258000,
        "timeSecond": 1597285258
      },
      "id": "5f34a38a57e7fa0015f2f84e",
      "database_type": "oracle",
      "database_name": "dboracle",
      "table_name": "ibs_ptab_blackip",
      "appid": "5f34a38a57e7fa0015f2f848",
      "tbNum": 1,
      "autoflag": "0",
      "status": "0",
      "appinfo": {
        "id": "5f34a38a57e7fa0015f2f848",
        "appName_en": "mspmk-web-ph",
        "appName_cn": "20191121测试应用",
        "spdb_managers": [{
          "user_name_cn": "林伟华",
          "user_name_en": "T-linhw",
          "id": "5da9853cb169af001211b2a7"
        }, {
          "user_name_cn": "王飞强",
          "user_name_en": "csii_wangfq",
          "id": "5dcd301ac404b30016e97b42"
        }]
      }
    }, {
      "_id": {
        "timestamp": 1597285258,
        "machineIdentifier": 5761018,
        "processIdentifier": 21,
        "counter": 15923279,
        "time": 1597285258000,
        "date": 1597285258000,
        "timeSecond": 1597285258
      },
      "id": "5f34a38a57e7fa0015f2f84f",
      "database_type": "informix",
      "database_name": "test1",
      "table_name": "mbs_ptab_splog1",
      "appid": "5f34a38a57e7fa0015f2f848",
      "tbNum": 1,
      "autoflag": "0",
      "status": "0",
      "appinfo": {
        "id": "5f34a38a57e7fa0015f2f848",
        "appName_en": "mspmk-web-ph",
        "appName_cn": "20191121测试应用",
        "spdb_managers": [{
          "user_name_cn": "林伟华",
          "user_name_en": "T-linhw",
          "id": "5da9853cb169af001211b2a7"
        }, {
          "user_name_cn": "王飞强",
          "user_name_en": "csii_wangfq",
          "id": "5dcd301ac404b30016e97b42"
        }]
      }
    }, {
      "_id": {
        "timestamp": 1597285258,
        "machineIdentifier": 5761018,
        "processIdentifier": 21,
        "counter": 15923280,
        "time": 1597285258000,
        "date": 1597285258000,
        "timeSecond": 1597285258
      },
      "id": "5f34a38a57e7fa0015f2f850",
      "database_type": "mysql",
      "database_name": "dbmysql",
      "table_name": "mbs_ptab_splog1",
      "appid": "5f34a38a57e7fa0015f2f848",
      "tbNum": 1,
      "autoflag": "0",
      "status": "0",
      "appinfo": {
        "id": "5f34a38a57e7fa0015f2f848",
        "appName_en": "mspmk-web-ph",
        "appName_cn": "20191121测试应用",
        "spdb_managers": [{
          "user_name_cn": "林伟华",
          "user_name_en": "T-linhw",
          "id": "5da9853cb169af001211b2a7"
        }, {
          "user_name_cn": "王飞强",
          "user_name_en": "csii_wangfq",
          "id": "5dcd301ac404b30016e97b42"
        }]
      }
    }, {
      "_id": {
        "timestamp": 1597285258,
        "machineIdentifier": 5761018,
        "processIdentifier": 21,
        "counter": 15923281,
        "time": 1597285258000,
        "date": 1597285258000,
        "timeSecond": 1597285258
      },
      "id": "5f34a38a57e7fa0015f2f851",
      "database_type": "mysql",
      "database_name": "test1",
      "table_name": "mbs_ptab_splog1",
      "appid": "5f34a38a57e7fa0015f2f848",
      "tbNum": 1,
      "autoflag": "0",
      "status": "0",
      "appinfo": {
        "id": "5f34a38a57e7fa0015f2f848",
        "appName_en": "mspmk-web-ph",
        "appName_cn": "20191121测试应用",
        "spdb_managers": [{
          "user_name_cn": "林伟华",
          "user_name_en": "T-linhw",
          "id": "5da9853cb169af001211b2a7"
        }, {
          "user_name_cn": "王飞强",
          "user_name_en": "csii_wangfq",
          "id": "5dcd301ac404b30016e97b42"
        }]
      }
    }]
  },
  "POST /fdatabase/api/database/queryDbName": ["dbmbank"],
  "POST /fdatabase/api/file/upload": "",
  "POST /fdatabase/api/database/Confirm": null
}

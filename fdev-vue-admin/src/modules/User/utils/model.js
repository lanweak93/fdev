import { formatOption } from '@/utils/utils';

export function createUserModel() {
  return {
    name: '',
    eName: '',
    email: '',
    gitlabAccount: '',
    git_user_id: '',
    telephone: '',
    group: '',
    role: [],
    is_party_member: '', //党员
    section: '', //条线
    work_num: '', //工号
    company: '',
    isLeave: '',
    tagSelected: [],
    email_pre: '',
    email_append: '',
    area_id: '',
    create_date: '',
    leave_date: '',
    remark: '',
    start_time: '',
    education: '',
    rank_id: '',
    function_id: '',
    kf_approval: false,
    phone_type: '',
    phone_mac: '',
    net_move: false,
    vm_ip: '',
    vm_name: '',
    vm_user_name: '',
    is_kfApproval: false,
    is_vmApproval: false,
    is_spdb_mac: '',
    git_token: ''
  };
}

export function formatUser(user) {
  return {
    ...user,
    id: user.id,
    name: user.user_name_cn,
    eName: user.user_name_en,
    email: user.email,
    redmineAccount: user.redmine_user,
    svnAccount: user.svn_user,
    gitlabAccount: user.git_user,
    gitToken: user.git_token,
    telephone: user.telephone,
    group: user.group,
    role: formatOption(user.role),
    auth: user.permission,
    company: user.company,
    isLeave: user.status,
    tagSelected: formatOption(user.user_label)
  };
}
export const is_party_memberMap = {
  '0': '中共党员',
  '1': '共青团员',
  '2': '群众',
  '': '-'
};
export const websiteList = [
  {
    name: '工时填报管理平台(Redmine)',
    url: 'http://10.134.13.25:8080/redmine/login',
    icon: 'http://10.134.13.25:8080/redmine/favicon.ico'
  },
  {
    name: '开发协作服务(fdev)',
    url: 'http://10.134.13.25:8080/fdev/#/login',
    icon: 'http://10.134.13.25:8080/fdev/img/icons/favicon-32x32.png'
  },
  {
    name: 'nexus2',
    url: 'http://10.112.13.156:8081/nexus/#welcome',
    icon: 'http://10.112.13.156:8081/nexus/favicon.png'
  },
  {
    name: 'nexus3',
    url: 'http://10.112.13.156:8082/nexus/#welcome',
    icon:
      'http://10.112.13.156:8082/nexus/static/rapture/resources/favicon.ico?_v=3.1.0-04'
  },
  {
    name: 'gitlab',
    url: 'http://10.129.40.170/users/sign_in',
    icon:
      'http://10.129.40.170/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png'
  },
  {
    name: '缺陷管理工具(JIRA)',
    url: 'http://10.114.19.235:8080/login.jsp',
    icon:
      'http://10.114.19.235:8080/s/10ipnm/710001/6411e0087192541a09d88223fb51a6a0/_/images/fav-jsw.png'
  },
  {
    name: 'Firefly',
    url: 'http://10.112.9.84:8084/firefly/user/login.html',
    icon: 'http://10.112.9.84:8084/favicon.ico'
  },
  {
    name: '代码质量扫描工具(sonarqube)',
    url: 'http://10.134.13.25:9000/projects',
    icon: 'http://10.134.13.25:9000/favicon.ico'
  },
  {
    name: '投产小工具',
    url: 'http://10.129.32.153:9052/newtools/index.html',
    icon: 'http://10.129.32.153:9052/newtools/favicon.ico'
  },
  {
    name: '接口管理工具(yapi)',
    url: 'http://10.129.17.73:9999/',
    icon: 'http://10.129.17.73:9999/image/favicon.png'
  },
  {
    name: 'fdev kibana',
    url: 'http://10.134.13.25:8080/app/kibana',
    icon: 'http://10.134.13.25:8080/ui/favicons/favicon.ico'
  },
  {
    name: '企业服务总线(esb对外小工具)',
    url: 'http://10.134.6.54:9001/',
    icon: ''
  },
  {
    name: 'appservice',
    url: 'http://10.134.13.25:8080/appservice/login',
    icon: ''
  },
  {
    name: '玉衡测试管理平台(ftms)',
    url: 'http://10.134.13.25:8080/tui/',
    icon: ''
  },
  {
    name: 'butterfly',
    url: 'http://10.112.9.83:7080/butterfly/client',
    icon: ''
  },
  {
    name: 'ukey申请平台',
    url: 'http://10.134.13.25:8080/apply/',
    icon: ''
  },
  {
    name: 'svn管理工具',
    url: 'http://10.134.13.25:8080/svnmanager/',
    icon: ''
  },
  {
    name: 'esb接口申请工具',
    url: 'http://10.134.15.225:8888/serviceGovOut/WebIndex.html',
    icon: ''
  }
];

export const handbook = [
  {
    name: '应用接入环境配置模块简单步骤',
    url: 'http://10.136.35.139/shares/iLdKLvbCFJ5MQBZF',
    icon: ''
  },
  {
    name: '准备自动化发布介质',
    url: 'http://10.136.35.139/shares/xXhWjkP66Wi9k1N2',
    icon: ''
  },
  {
    name: '接口申请调用与审批',
    url: 'http://10.136.35.139/shares/aGecC21uQrLotEns',
    icon: ''
  },
  {
    name: 'fdev接入客户端说明',
    url: 'http://10.136.35.139/shares/eTXkcJMd92QinUmg',
    icon: ''
  }
];

export const educationOptions = ['专科', '本科', '研究生', '博士'];

export const isLeaveOptions = [
  { label: '全部', value: 'total' },
  { label: '在职', value: '0' },
  { label: '离职', value: '1' }
];
export const is_party_memberOptions = [
  { label: '全部', value: 'total' },
  { label: '中共党员', value: '0' },
  { label: '共青团员', value: '1' },
  { label: '群众', value: '2' }
];

export const isSpdbMacOptions = [
  { label: '是', value: '1' },
  { label: '否', value: '0' }
];

export const isSpdbMac = {
  '0': '否',
  '1': '是'
};

export function createTodoColumns() {
  return [
    { name: 'module', label: '所属模块', field: 'module', align: 'left' },
    {
      name: 'description',
      label: '待办描述',
      field: 'description'
    },
    {
      name: 'user_list',
      label: '待办负责人',
      field: 'user_list'
    },
    {
      name: 'createTime',
      label: '创建时间',
      field: 'createTime',
      sortable: true
    },
    {
      name: 'status',
      label: '状态',
      field: field => (field.status === '0' ? '未操作' : '已操作'),
      sortable: true
    },
    {
      name: 'executor',
      label: '经办人',
      field: 'executor'
    },
    {
      name: 'executeTime',
      label: '执行时间',
      field: 'executeTime'
    },
    {
      name: 'btn',
      field: 'btn',
      label: '操作'
    }
  ];
}

export const createMemory = function() {
  return {
    tableFunction: null
  };
};
export const moreSearchMap = {
  tableFunction: 'updateTableFunction'
};
export function findAuthority(user) {
  let res = 'user';
  for (let i = 0; i < user.role.length; i++) {
    const { name } = user.role[i];
    if (name === '超级管理员') return 'admin';
    if (name === '小组管理员') res = 'group_admin';
  }
  return res;
}

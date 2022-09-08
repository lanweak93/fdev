const mockjs = require('mockjs');

const queryApprovalList = {
  total: 3,
  list: [
    {
      applicant: { user_name_cn: '冼绮静' },
      type: 'kf_approval',
      user: {
        user_name_cn: '汪家社',
        group: { name: '公共组' },
        company: { name: '科蓝' }
      },
      is_spdb: '厂商',
      vm_user_name: 'c-lisl110',
      phone_type: 'huawei',
      phone_mac: '"415454453454"',
      status: 'passed',
      create_time: '2020-07-15'
    },
    {
      applicant: { user_name_cn: '汪军' },
      type: 'kf_approval',
      user: {
        user_name_cn: '吴瑾',
        group: { name: '公共组' },
        company: { name: '浦发' }
      },
      is_spdb: '行内',
      vm_user_name: 'c-lisl110',
      phone_type: 'huawei',
      phone_mac: '"415454453454"',
      status: 'passed',
      create_time: '2020-07-15'
    },
    {
      applicant: { user_name_cn: '汪军' },
      type: 'kf_approval',
      user: {
        user_name_cn: '吴瑾',
        group: { name: '公共组' },
        company: { name: '浦发' }
      },
      is_spdb: '行内',
      vm_user_name: 'c-lisl110',
      phone_type: 'huawei',
      phone_mac: '"415454453454"',
      status: 'passed',
      create_time: '2020-07-15'
    }
  ]
};

module.exports = {
  'POST /fuser/api/approval/queryApprovalList': queryApprovalList
};

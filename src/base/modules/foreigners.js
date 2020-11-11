/*import api from '@/api/index.js'
import store from '@/store'*/

/**
 * APP采集系统管理后台
 */

// 采集信息列表 搜索条件
const znCollectlistIntranet = {
    // 查询项
    cx: [
        {
            cm: '照片类型',
            type: 'select',
            dm: 'collectionItem',
            optype: true
            // must: true
        },
        {
            cm: '国家地区',
            type: 'select',
            dm: 'countryCode'
        },
        {
            cm: '证件号码',
            type: 'input',
            dm: 'passportNumber'
        },
        {
            cm: '采集人姓名',
            type: 'input',
            dm: 'userName_str'
        },
        {
            cm: '采集地址',
            type: 'input',
            dm: 'znAddress_str',

        },
        // {
        //     cm: '校正状态',
        //     type: 'select',
        //     dm: 'check_status',
        //     optype: true
        // },
        // {
        //     cm: '对比状态',
        //     type: 'select',
        //     dm: 'compare_status',
        //     optype: true
        // },
        {
            cm: '是否有效',
            type: 'select',
            dm: 'isDelete',
            optype: true
        },
        {
            cm: '采集日期',
            type: 'datePicker',
            dm: 'addTime'
        },
        {
            cm: '所属分局',
            type: 'select',
            dm: 'subBureauCode'
        },
        {
            cm: '所属派出所',
            type: 'select',
            dm: 'policeStationCode'
        },
        // {
        //     cm: '是否本人任务',
        //     type: 'select',
        //     dm: 'taskStatus',
        //     optype: true
        // },
        {
            cm: '数据状态',
            type: 'select',
            dm: 'checkStatus',
            optype:true,
        },
    ],
    // 列表项
    lb: [
        {
            cm: '照片',
            dm: 'imgpath',
            img:true,
        },
        {
            cm: '照片类型',
            dm: 'collectionItemName'
        },
        {
            cm: '国家地区',
            dm: 'countryCodeName'
        },
        {
            cm: '证件类型',
            dm: 'passportType'
        },
        {
            cm: '证件号码',
            dm: 'passportNumber'
        },
        {
            cm: '姓名',
            dm: 'nameHome'
        },
        {
            cm: '性别',
            dm: 'sexName'
        },
        {
            cm: '出生日期',
            dm: 'birthday'
        },
        {
            cm: '居住地址',
            dm: 'znAddress'
        },
        {
            cm: '操作状态',
            dm: 'option'
        },
        {
            cm: '本户境外人数',
            dm: 'abroad'
        },
        {
            cm: '已登记人数',
            dm: 'register'
        },
        {
            cm: '出生地',
            dm: 'birthAddress'
        },
        {
            cm: '采集人姓名',
            dm: 'userName'
        },
        {
            cm: '采集人所属分局',
            dm: 'subBureau'
        },
        {
            cm: '采集人所属派出所',
            dm: 'policeStation'
        },
        {
            cm: '采集人手机号',
            dm: 'mobile'
        },
        {
            cm: '采集时间',
            dm: 'addtime'
        },
        // {
        //     cm: '校正状态',
        //     dm: 'checkStatus'
        // },
        // {
        //     cm: '对比状态',
        //     dm: 'compareStatus'
        // },
        // {
        //     cm: '对比结果',
        //     dm: 'compareResult'
        // },
        {
            cm: '是否有效',
            dm: 'isDeleteName'
        }
    ],
    lzData:[
        {
            cm: '序号',
            type:'index',
            typeindex:true,
        },
        {
            cm: '证件号码',
            dm: 'zjhm'
        },
        {
            cm: '姓名',
            dm: 'nameHome'
        },
        {
            cm: '性别',
            dm: 'xbName'
        },
        {
            cm: '出生日期',
            dm: 'csrq'
        },
        {
            cm: '证件有效期',
            dm: 'yxqz'
        },
        {
            cm: '国家地区',
            dm: 'gjdq'
        },
        {
            cm: '住宿地址',
            dm: 'lsdwdz'
        },{
            cm: '入表时间',
            dm: 'lrrq'
        },
    ],
    lbBtn: [
        {
            "button_name": "详情",
            "button_type": 'ck',
           
        },
        {
            "button_name": "编辑",
            "button_type": 'edit',
            "user_ctrl":'1',
        },       
    ],
    jbxxEdit:{
        'a':[
          {
              title:'采集信息编辑区',
              type:'line',
              col:24
          },
          {
              cm: '照片类型',
              type: 'select',
              dm: 'collectionItem',
              optype: true
             // weight:true
          },
          {
              cm: '国家地区',
              type: 'select',
              dm: 'countryCode',
              must:true,
              //weight:true
          },
          {
              cm: '证件号码',
              type: 'input',
              must:true,
              dm: 'passportNumber',
             // weight:true
          },
          {
              cm: '姓名',
              type: 'input',
              dm: 'nameHome'
          },
        
          {
              cm: '性别',
              type: 'select',
              dm: 'sex',
              optype: true
              
          },
          {
              cm: '出生日期',
              type: 'datePicker',
              dm: 'birthday'
          },
          {
            cm: '证件有效期',
            type: 'datePicker',
            dm: 'termValidity'
          },
        
          {
              cm: '出生地点',
              type: 'input',
              dm: 'birthAddress'
          },
          {
              cm: '居住地址',
              type: 'input',
              dm: 'znAddress',
              col:24
          },
          
        ],
      },
    plBtn: [
        {
            "button_name": "新建",
            "button_type": "xj",
            "user_ctrl": 1,
            "serial": "201",
            "type": "success"
        },
        {
            "button_name": "修改",
            "button_type": "xg",
            "user_ctrl": 1,
            "serial": "201",
            "type": "success"
        },
        {
            "button_name": "删除",
            "button_type": "sc",
            "user_ctrl": 1,
            "serial": "201",
            "type": "success"
        },
        {
            "button_name": "全部密码重置",
            "button_type": "plmmcz",
            "serial": "201",
            "type": "primary"
        },
        {
            "button_name": "全部生成随机密码",
            "button_type": "plscsjmm",
            "serial": "201",
            "type": "primary"
        }
    ],
    // 【单位列表】
    dwtb: [
        {
            cm: '单位名称',
            dm: 'xtyhbmmc'
        },
        // {
        //     cm: '单位类型',
        //     dm: 'xtyhbmcj'
        // },
    ],
    xj: [
        {
            cm: '姓名',
            type: 'input',
            dm: 'xm' //必填
        },
        {
            cm: '电话号码',
            type: 'input',
            dm: 'yddh'//必填
        },
        {
            cm: '警号',
            type: 'input',
            dm: 'jingHao'
        },
        {
            cm: '证件号码',
            type: 'input',
            dm: 'sfzh'//必填
        },
        {
            cm: '所属单位',
            type: 'select',
            dm: 'bmbh',//必填
        },
        // {
        //     cm: '市局单位',
        //     type: 'select',
        //     dm: 'sjBmbh',
        // },
        // {
        //     cm: '分局单位',
        //     type: 'select',
        //     dm: 'fjBmbh',
        // },
        // {
        //     cm: '派出所单位',
        //     type: 'select',
        //     dm: 'pcsBmbh',
        // },
        {
            cm: '密码',
            type: 'input',
            dm: 'xtmm'//必填
        },
        // {
        //     cm: '用户类型',
        //     type: 'select',
        //     dm: 'userType',
        //     optype: true
        // },
    ],
    xg: [
        {
            cm: '姓名',
            type: 'input',
            dm: 'xm'
        },
        {
            cm: '电话号码',
            type: 'input',
            dm: 'yddh'
        },
        {
            cm: '警号',
            type: 'input',
            dm: 'jingHao'
        },
        {
            cm: '证件号码',
            type: 'input',
            dm: 'sfzh'
        },
        {
            cm: '所属单位',
            type: 'select',
            dm: 'bmbh'
        }
    ],
    plmmcz: [
        {
            cm: '密码',
            type: 'password',
            dm: 'xtmm'
        },
        {
            cm: '确认密码',
            type: 'password',
            dm: 'qrxtmm'
        },
    ],
    lqsjnum:[
        {
            cm:'随机数量',
            type:'select',
            dm:'sjnum',
            must: true,
            optype: true,
          
        }

    ],
}

const cjapp={
    cx:[
        {
            cm: '手机号',
            type: 'input',
            dm: 'mobile'
        },
        {
            cm: '姓名',
            type: 'input',
            dm: 'realname'
        },
        {
            cm: '工作单位',
            type: 'input',
            dm: 'job'
        },
        {
            cm: '所属分局',
            type: 'select',
            dm: 'subBureauCode'
        },
        {
            cm: '所属派出所',
            type: 'select',
            dm: 'policeStationCode'
        },
    ],
    facx:[],
    lb:[
        {
            cm: '手机号',
            dm: 'mobile'
        },
        {
            cm: '姓名',
            dm: 'realname'
        },
        {
            cm: '身份证号',
            dm: 'idcard'
        }
        ,
        {
            cm: '工作单位',
            dm: 'job'
        }
        ,
        {
            cm: '所属分局',
            dm: 'subBureauName'
        }
        ,
        {
            cm: '所属派出所',
            dm: 'policeStationName'
        }
        ,
        {
            cm: '责任区',
            dm: 'areaName'
        }
        ,
        {
            cm: '添加时间',
            dm: 'addtime'
        }
    ],
    lbTab: [],//分类tab
    lbBtn: [
        {
            "button_name": "启用",
            "button_type": 'qy',
            "switch" :true,
        },
        {
            "button_name": "详情",
            "button_type": 'ck',
           
        },
        {
            "button_name": "编辑",
            "button_type": 'edit',
           
        },
        {
            "button_name": "删除",
            "button_type": 'del',
            
        },
    ],
    labelData:[
        {
            cm: '手机号',
            type: 'input',
            dm: 'mobile',
            must: true,
        },
        {
            cm: '姓名',
            type: 'input',
            dm: 'realname',
            must: true,
        },
        {
            cm: '身份证号',
            type: 'input',
            dm: 'idcard'
        },
        {
            cm: '工作单位',
            type: 'input',
            dm: 'job'
        },
        {
            cm: '所属分局',
            type: 'select',
            dm: 'subBureauCode',
            must: true,
        },
        {
            cm: '所属派出所',
            type: 'select',
            dm: 'policeStationCode'
        },
        {
            cm: '所属区域',
            type: 'select',
            dm: 'areaCode'
        },
        
    ]

}
const cjyylb={
    cx:[
        {
            cm: '标题',
            type: 'input',
            dm: 'audioName'
        },
       
        {
            cm: '是否有效',
            type: 'select',
            dm: 'isDelete',
            optype:true,
        }
       
    ],
    facx:[],
    lb:[
        {
            cm: '标题',
            dm: 'audioName'
        },
        {
            cm: '英文地址',
            dm: 'englishPath',
            
        },
        {
            cm: '日文地址',
            dm: 'japanesePath',
           
        }
        ,
        {
            cm: '韩文地址',
            dm: 'koreanPath',
            
        }
        ,
        {
            cm: '前台语音按钮',
            dm: 'audioTypeName'
        }
        
        ,
        {
            cm: '是否有效',
            dm: 'isDeleteName'
        }
        ,
        {
            cm: '添加人姓名',
            dm: 'addUsername'
        },
        {
            cm: '添加时间',
            dm: 'addTime'
        },
        {
            cm: '排序',
            dm: 'audioSort'
        }
    ],
    lbTab: [],//分类tab
    lbBtn: [
        {
            "button_name": "详情",
            "button_type": 'ck',
           
        },
        {
            "button_name": "编辑",
            "button_type": 'edit',
            "user_ctrl":'1',
            "status":true,
           
        },
        {
            "button_name": "无效数据",
            "button_type": 'del',
            "user_ctrl":'1',
            "status":true,
            
        },
    ],
    labelData:[
        {
            cm: '标题',
            type: 'textarea',
            dm: 'audioName',
            col: 24,
            must: true,
        },
      
        {
            cm: '英文地址',
            type: 'inputupload',
            dm: 'englishPath',
          
        },
        {
            cm: '日文地址',
            type: 'inputupload',
            dm: 'japanesePath',
           
        }
        ,
        {
            cm: '韩文地址',
            type: 'inputupload',
            dm: 'koreanPath',
           
        },
        {
            cm: '语音按钮',
            type: 'select',
            dm: 'audioType',
            must: true,
            optype:true,
        },
        {
            cm: '排序',
            type: 'input',
            dm: 'audioSort'
        },
  
    ]
}

// 获取单位列表
/*function getDeptTreeByBmbh() {
    return new Promise((resolve) => {
        api.post(
            api.aport1 + "/dept/getDeptTreeByBmbh",
            { bmbh: store.state.user.bmbh },
            // { bmbh: this.$store.state.user.bmbh },
            r => {
                resolve(r)
            }
        );

    })
}*/

export default {
    znCollectlistIntranet,
    cjapp,
    cjyylb
}
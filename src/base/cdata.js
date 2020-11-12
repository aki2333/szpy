
//引入子组件
import qxgl from './modules/qxgl.js'
import zxhc from './modules/zxhc.js'
import lzsb from './modules/lzsb.js'
import pzgl from './modules/pzgl.js'
import czxx from './modules/czxx.js'
import ryhx from './modules/ryhx.js'
import foreigners from './modules/foreigners.js'
import api from '@/api/index.js'
import store from '@/store'

// 【菜单】
const menu = [

    {
        "menu_name": "业务管理",
        "menu_url": "ywgl",
        "menu_icon": "ywgl_1",
        "serial": "0002",
        "childrenMenu": [
            {
                "menu_name": "业务管理",
                "menu_icon": "yhgngl",
                "menu_url": "ywglgn",
                "parent_id": "0001",
                "serial": "000101",
                "childrenMenu": [
                    {
                        "menu_name": "核查走访管理",
                        "menu_url": "Specialcheck",
                        "parent_id": "000101",
                        "serial": "1645e567-c09c-4ce0-8814-f9b1510df5fc",
                        "childrenMenuButton": []
                    }
                ]
            }
        ]
    },
    {
        "menu_name": "运维支撑",
        "menu_url": "ywzc",
        "menu_icon": "ywzc_1",
        "serial": "0004",
        "childrenMenu": [
            {
                "menu_name": "权限管理",
                "menu_icon": "yhgngl",
                "menu_url": "yhgngl",
                "parent_id": "0001",
                "serial": "000101",
                "childrenMenu": [
                    {
                        "menu_name": "用户管理",
                        "menu_url": "UserManagement",
                        "parent_id": "000101",
                        "serial": "1645e567-c09c-4ce0-8814-f9b1510df5fc",
                        "childrenMenuButton": []
                    },
                    {
                        "menu_name": "角色管理",
                        "menu_url": "RoleManagement",
                        "parent_id": "000101",
                        "serial": "1745e567-c09c-4ce0-8814-f9b1510df5fc",
                        "childrenMenuButton": [],
                    },
                    {
                        "menu_name": "单位管理",
                        "menu_url": "UnitManagement",
                        "parent_id": "000101",
                        "serial": "1845e567-c09c-4ce0-8814-f9b1510df5fc",
                        "childrenMenuButton": [],
                    },
                    {
                        "menu_name": "模板管理",
                        "menu_url": "TemplateManagement",
                        "parent_id": "000101",
                        "serial": "1945e567-c09c-4ce0-8814-f9b1510df5fc",
                        "childrenMenuButton": [],
                    },
                    {
                        "menu_name": "菜单管理",
                        "menu_url": "MenuManagement",
                        "parent_id": "000101",
                        "serial": "1945e567-c09c-4ce0-8814-f9b1510df5fc",
                        "childrenMenuButton": [],
                    }
                ]
            }
        ]
    }
]
// 【下拉选项】
const options = {
    bmbh: [
        {
            dm: "dw1",
            mc: "单位一"
        }
    ],
    status: [
        {
            dm: 'true',
            mc: "已添加"
        },
        {
            dm: 'false',
            mc: "未添加"
        }
    ],
    zt: [
        {
            dm: '1',
            mc: "有效"
        },
        {
            dm: '0',
            mc: "无效"
        }
    ],
    sfyx:[
        {
            dm:'0',
            mc:'未分配'
        },
        {
            dm:'1',
            mc:'已分配'
        },
    ],
    sbzt: [
        {
            dm: '0',
            mc: "待上报"
        },
        {
            dm: '1',
            mc: "上报成功"
        },
        {
            dm: '2',
            mc: "上报失败"
        }
    ],
    userType: [
        {
            dm: '0',
            mc: "系统用户"
        },
        {
            dm: '1',
            mc: "外部用户"
        }
    ],
    button_type: [
        {
            dm: '1',
            mc: '系统按钮'
        },
        {
            dm: '2',
            mc: '表格按钮'
        },
        {
            dm: '3',
            mc: '操作按钮'
        }
    ],
    menu_type: [
        {
            dm: 'P',
            mc: "菜单"
        },
        {
            dm: 'B',
            mc: "按钮"
        }
    ],
    dwjb:[
        {
            dm:'1',
            mc:'市局'
        },
        {
            dm:'2',
            mc:'分局'
        },
        {
            dm:'3',
            mc:'派出所'
        },
    ],
    czpzlx:[
        {
            dm:'1',
            mc:'待下发'
        },
        {
            dm:'2',
            mc:'待上报'
        },
    ],
    timeUnit:[
        {
            dm:'year',
            mc:'年',
        },
        {
            dm:'quarter',
            mc:'季度',
        },
        {
            dm:'month',
            mc:'月',
        },
        {
            dm:'day',
            mc:'天',
        },
    ],
    turnoutarea: [],
    checklist:[
        {
            mc:'英文姓名',
            dm:'a'
        },
        {
            mc:'中文姓名',
            dm:'b'
        },
        {
            mc:'性别',
            dm:'c'
        },
        {
            mc:'出生日期',
            dm:'d'
        },
        {
            mc:'国家地区',
            dm:'e'
        },
        {
            mc:'证件种类',
            dm:'f'
        },
        {
            mc:'证件号码',
            dm:'g'
        },
        {
            mc:'签证(注)有效期',
            dm:'h'
        },
        {
            mc:'签证(注)种类',
            dm:'i'
        },
        {
            mc:'其他',
            dm:'j'
        },
    ],
    //下发状态
    issuedate_status:[
        {
            mc:'未下发',
            dm:'0'
        },
        {
            mc:'已下发',
            dm:'1'
        },
        {
            mc:'已走访',
            dm:'2'
        },
        {
            mc:'已归档',
            dm:'3'
        },
    ],
    //出入境状态
    entry_exit_status:[
        {
            mc:'出境',
            dm:'1'
        },
        {
            mc:'入境',
            dm:'2'
        },
    ],
    exit_entry_status:[
        {
            mc:'出境',
            dm:'1'
        },
        {
            mc:'入境',
            dm:'2'
        },
    ],
   //常住人员类型
   resident_type:[
        {
            mc:'省厅下发',
            dm:'0'
        },
        {
            mc:'实有常住',
            dm:''
        },
        {
            mc:'非办证常住',
            dm:'1'
        },
   ],
   //常住有效状态
   valid_state:[
        {
            mc:'无效',
            dm:'0'
        },
        {
            mc:'有效',
            dm:'1'
        },
   ],
   isDelete:[
        {
            mc:'无效数据',
            dm:'0'
        },
        {
            mc:'有效数据',
            dm:'1'
        },
   ],
   //数据查询
   checkStatus:[
       {
            mc:'全部待接收',
            dm:'1'
       },
       {
            mc:'全部待处理',
            dm:'2'
        },
        {
            mc:'全部已处理',
            dm:'3'
        },
   ],
   //前台语音控制
   audioType:[
    {
        mc:'本户境外人员数',
        dm:'1'
    },
    {
        mc:'已办理住宿登记人数',
        dm:'2'
    },
    {
        mc:'采集项',
        dm:'3'
    },
    {
        mc:'其它',
        dm:'4'
    },
   ],
   inhabi_police_station:[],//居住地所在派出所
   workplace_police_station:[],//单位所在地派出所
   customCountry:[],//自定义国家

    // 照片类型
    collectionItem:[
        {dm: 1, mc: "入境证件资料页"}, {dm: 2, mc: "住宿登记单"}, {dm: 0, mc: "未采集材料"}
    ],
    // 校正状态
    check_status:[
        {dm: "0", mc: "待校正"}, {dm: "1", mc: "已校正"}
    ],
    // 对比状态
    compare_status:[
        {dm: "0", mc: "待对比"}, {dm: "1", mc: "已对比"}
    ],
    taskStatus:[
        {dm: "0", mc: "所有"}, {dm: "1", mc: "本人"}
    ],
    sex:[
        {dm: "M", mc: "男"}, {dm: "F", mc: "女"}
    ],
   
    sjnum:[{dm: "10", mc: "10"}, {dm: "20", mc: "20"},{dm: "30", mc: "30"}]
}
const tabImg_1 = require("../assets/images/main/tab_2.png");
const tabImgActive_1 = require("../assets/images/main/tab_2_pre.png");
const tabImg_2 = require("../assets/images/main/tab_1.png");
const tabImgActive_2 = require("../assets/images/main/tab_1_pre.png");

function zrqReciData(list) {
    return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getZrqListByZrqDmList', { zrqList: list }, r => {
            options.turnoutarea = r
            resolve(r)
        })
    })
}
function aGetArea(){
    return new Promise((resolve) =>{
      api.post(api.aport1 + '/dept/getAllSubUnit',{bmbh:store.state.user.bmbh},r=>{
        options.inhabi_police_station = r
        options.workplace_police_station = r
        resolve(r)
      })
    })
  }
  function JoinZrq(join){
    return new Promise((resolve) =>{
        api.post(api.aport1 + '/zrq/getSubZrqDmMc',{bmbh:join},r=>{
            // options.turnoutarea = r
            resolve(r)
        })
    })
  }
  function jzdZrq(){
    return new Promise((resolve) =>{
        api.post(api.aport1 + '/zrq/getSubZrqDmMc',{tableName:'dm_zrqb'},r=>{
            options.turnoutarea = r
            resolve(r)
        })
    })
  }
  function czpzlxFuc(dwjb){
      return new Promise((resolve) => {
        if(dwjb == '1'){
            options.czpzlx=[
                {
                    dm:'1',
                    mc:'待下发'
                },
            ]
        }else{
            options.czpzlx=[
                {
                    dm:'1',
                    mc:'待下发'
                },
                {
                    dm:'2',
                    mc:'待上报'
                },
            ]
        }
        resolve(options.czpzlx)
      })
  }
  function cusCountry(){
    return new Promise((resolve) => {
        api.post(api.aport4 + '/country/getCustomDmMc',{},r=>{
            options.customCountry = r
            resolve(r)
        })
    })
  }
export default {
    menu,
    options,
    qxgl,
    zxhc,
    lzsb,
    pzgl,
    czxx,
    ryhx,
    api,
    store,
    tabImg_1,
    tabImgActive_1,
    tabImg_2,
    tabImgActive_2,
    zrqReciData,
    aGetArea,
    JoinZrq,
    jzdZrq,
    czpzlxFuc,
    cusCountry,
    foreigners
}
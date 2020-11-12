import Vue from 'vue'
import Vuex from 'vuex'
// import cdata from '@/base/cdata.js'
import api from '@/api/index.js'
import fnc from '@/base/fnc.js'
let breadData = JSON.parse(sessionStorage.getItem('bread'))
let user = JSON.parse(sessionStorage.getItem('user'))
let menu = JSON.parse(sessionStorage.getItem('menu'))
let menuC = JSON.parse(sessionStorage.getItem('menuC'))
let token = sessionStorage.getItem('token')
let sfzhTurn = sessionStorage.getItem('sfzhTurn')
let aurl = sessionStorage.getItem('aurl')
let itstate = sessionStorage.getItem('itstate')
let isHome = sessionStorage.getItem('isHome')
let isFirst = sessionStorage.getItem('isFirst')
let isHttp = sessionStorage.getItem('isHttp')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: token || '',
    turnPage:'',
    itstate:itstate||false,
    isHome:isHome||false,
    isFirst:isFirst||false,
    isHttp:isHttp||false,
    sfzhTurn:sfzhTurn||'',
    menuTo:{},
    user: user || {},
    menu: menu || [],
    menuC:menuC|| [],
    leftMenu: [],
    chilrenNav: [],
    plBtn: [],
    breadcrumb: breadData || [],
    nationality: [],
    gender: [],
    sex: [],
    grade: [],
    passportType: [],//证件种类
    suboffice: [],//所属分局
    subBureauCode:[],
    policestation: [],//派出所
    policeStationCode:[],
    xzqh: [],
    shzt: [],//审核状态
    rylb: [],
    zfzl: [],
    zsxz: [],
    visaType: [],
    rjka: [],
    rjsy: [],//停留事由
    qfjg: [],
    turnoutarea: [],//责任区
    areaCode:[],
    // 【非大众】
    datatype: [],//下发类别
    backstatus: [],//数据状态
    bmbh: [],
    sjBmbh: [],
    ssfj: [],
    sspcs: [],
    aurl: aurl || '',
    sjly:[],//数据来源
    leftWid:'auto',
    ywlb:[],//业务类别
    //【常住信息维护】
    birthplace:[],//出生地
    visa_type:[],//签证种类
    paper_type:[],//证件种类
    degree_code:[],//身份
    reside_reason:[],//停留事由
    entry_reason:[],//入境事由
    inhabi_state:[],//居住状态类型
    working_state:[],//工作状态类型
    inhabi_residence:[],//居住地所在区县
    workplace_residence:[],//单位所在区县
    assignment_org:[],//签发地
    entry_port:[],//入境口岸
    exit_entry_status:[],//出入境状态
    crjzt:[],
    zy:[],//职业
    jwrygx:[],//与境外人员关系
    inhabi_police_station:[],//居住地所在派出所
    workplace_police_station:[],//单位所在地派出所
    personnel_area_type:[],//境外人员类别

    jzd_ssfj:[],
    gzd_ssfj:[],
    countryCode:[], // APP采集系统管理后台 国家地区
  },
  mutations: {
    getFirst(state,data){
      state.isFirst = data;
      window.sessionStorage.setItem("isFirst", data)
    },
    getHttp(state,data){
      state.isHttp = data;
      window.sessionStorage.setItem("isHttp", data)
    },
    getLeftWid(state,data){
      state.leftWid = data
    },
    getUser(state, data) {
      state.user = data;
      window.sessionStorage.setItem("user", JSON.stringify(data));
    },
    getMenu(state, data) {
      state.menu = data;
      window.sessionStorage.setItem("menu", JSON.stringify(data));
    },
    getMenuC(state,data){//三级菜单集合
      state.menuC = data;
      window.sessionStorage.setItem("menuC",JSON.stringify(data));
    },
    getLeftMenu(state, data) {
      state.leftMenu = data;
    },
    getMenuTo(state,data){
      state.menuTo = data;
    },
    getChilrenNav(state, data) {
      state.chilrenNav = data;
    },
    getBread(state, data) {
      state.breadcrumb = data;
      window.sessionStorage.setItem("bread", JSON.stringify(data));
    },
    getPlBtn(state, data) {
      //把data中的值给state中的plBtn变量
      state.plBtn = data;
      window.sessionStorage.setItem("plBtn", JSON.stringify(data));
    },
    getToken(state, data) {
      state.token = data;
      window.sessionStorage.setItem("token", data)
    },
    getSfzhT(state, data) {
      state.sfzhTurn = data;
      window.sessionStorage.setItem("sfzhTurn", data)
    },
    getUrl(state, data) {
      state.aurl = data;
      window.sessionStorage.setItem("aurl", data)
    },
    getItS(state,data){
      state.itstate = data;
      window.sessionStorage.setItem("itstate", data)
    },
    getHome(state,data){
      state.isHome = data;
      window.sessionStorage.setItem("isHome", data)
    },
    getPage(state,data){
      state.turnPage = data;
    },
    getNation(state, data) {
      state.nationality = data;
      state.birthplace = data;
    },
    getGender(state, data) {
      state.gender = data;
    },
    getSex(state, data) {
      state.sex = data;
    },
    getGrade(state, data) {
      state.grade = data;
    },
    getPassport(state, data) {
      state.passportType = data;
      state.paper_type = data;
    },
    getDM(state, data) {
      if (data.type == 'qzzl') {
        state.visaType = data.data
        state.visa_type = data.data
      } else if (data.type == 'lz_zfzl') {
        state.zfzl = data.data
      } else if (data.type == 'lz_zsxz') {
        state.zsxz = data.data
      } else if (data.type == 'rydylb') {
        state.rylb = data.data
      } else if (data.type == "xzqh") {
        state.xzqh = data.data
        state.inhabi_residence = data.data
        state.workplace_residence = data.data
      } else if (data.type == "pcs") {
        state.policestation = data.data
      } else if (data.type == "bjjgka") {
        state.rjka = data.data
      } else if (data.type == "wgr_sqsy") {
        state.rjsy = data.data
        state.entry_reason = data.data//入境事由
        state.reside_reason = data.data
      } else if (data.type == "spqfd") {
        state.qfjg = data.data
      } else {
        state[data.type] = data.data;
      }
    },
    getDMPro(state,data){
      if(data.type == 'dm_jwrysf'){
        state.degree_code = data.data
      }else if(data.type == 'dm_jzztlx'){
        state.inhabi_state = data.data
      }else if(data.type == 'dm_gzztlx'){
        state.working_state = data.data
      }else if(data.type == 'dm_spqfdb'){
        state.assignment_org = data.data
      }else if(data.type == 'dm_bjjgkab'){
        state.entry_port = data.data
      }else if(data.type == 'dm_crjbs'){
        state.exit_entry_status = data.data
        state.crjzt = data.data
      }else if(data.type == 'dm_pcswlb'){
        state.inhabi_police_station = data.data//居住地所在派出所
        state.workplace_police_station = data.data//单位所在地派出所
      }else if(data.type == 'dm_rydylbb'){
        state.personnel_area_type = data.data//境外人员类别
      }else if(data.type == 'dm_zyb'){
        state.zy = data.data
      }else if(data.type == 'dm_jwrygxb'){
        state.jwrygx = data.data
      }
    },
    getXzqh(state,data){//只包含苏州
      state.xzqh = data
    },
    getSuboffice(state, data) {
      state.suboffice = data;
    },
    getPolice(state, data) {
      state.policestation = data;
    },
    getZrq(state, data) {
      state.turnoutarea = data;
    },
    getzrq(state, data) {
      state.turnoutarea = data;
      state.areaCode=data;
    },
    getDatatype(state, data) {
      state.datatype = data;
    },
    getYwlb(state,data){
      state.ywlb = data;
    },
    getBackstatus(state, data) {
      state.backstatus = data;
    },
    getBmbh(state, data) {
      state.bmbh = data
    },
    getSjBmbh(state, data) {
      state.sjBmbh = data
    },
    getssfj(state, data) {
      state.ssfj = data
      state.suboffice = data
      state.jzd_ssfj = data
      state.gzd_ssfj = data
      state.subBureauCode = data
    },
    getsspcs(state, data) {
      state.sspcs = data
      state.policestation = data
      state.policeStationCode=data
    },
    getpcsPro(state, data){
      if(data.ptype == 'jzd'){
        state.inhabi_police_station = data.data
      }else if(data.ptype == 'gzd'){
        state.workplace_police_station = data.data
      }
    },
    getCountryCode(state, data) {
      state.countryCode = data
    }
  },
  actions: {
    aGetHttp(context, payload){
      return new Promise((resolve) => {
        context.commit('getHttp', payload)
        resolve(payload)
      })
    },
    aGetFirst(context, payload){
      return new Promise((resolve) => {
        context.commit('getFirst', payload)
        resolve(payload)
      })
    },
    aGetToken(context, payload) {
      return new Promise((resolve) => {
        context.commit('getToken', payload)
        resolve(payload)
      })
    },
    aGetSfzhT(context, payload) {
      return new Promise((resolve) => {
        context.commit('getSfzhT', payload)
        resolve(payload)
      })
    },
    aGetUrl(context, payload) {
      return new Promise((resolve) => {
        context.commit('getUrl', payload)
        resolve(payload)
      })
    },
    //由第三方登入标志
    aGetItS(context, payload){
      return new Promise((resolve) => {
        context.commit('getItS', payload)
        resolve(payload)
      })
    },
    aGetHome(context, payload){
      return new Promise((resolve) => {
        context.commit('getHome', payload)
        resolve(payload)
      })
    },
    //由第三方登入标志
    aGetPage(context, payload){
      return new Promise((resolve) => {
        context.commit('getPage', payload)
        resolve(payload)
      })
    },
    aGetUser(context, payload) {
      return new Promise((resolve) => {
        context.commit('getUser', payload)
        resolve(payload)
      })
    },
    aGetMenu(context, payload) {
      return new Promise((resolve) => {
        context.commit('getMenu', payload)
        resolve(payload)
      })
    },
    aGetMenuC(context,payload){
      return new Promise((resolve) => {
        context.commit('getMenuC',payload)
        resolve(payload)
      })
    },
    aGetLeftMenu(context, payload) {
      return new Promise((resolve) => {
        context.commit('getLeftMenu', payload)
        resolve(payload)
      })
    },
    aGetBread(context, payload) {
      return new Promise((resolve) => {
        context.commit('getBread', payload)
        resolve(payload)
      })
    },
    aGetPlBtn(context, payload) {
      return new Promise((resolve) => {
        context.commit('getPlBtn', payload)
        resolve(payload)
      })
    },
    aGetXzqh(context,payload){
      return new Promise((resolve) => {
        api.post(api.aport3 + "/api/dm/getDmByJson",{ tab: 'dm_xzqhb'}, r =>{
          context.commit('getXzqh',fnc.sortByKey(r, 'dm'))
          resolve(payload)
        })
      })
    },
    aGetNation(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: 'dm_gjdqb_all' }, r => {
          context.commit('getNation', fnc.sortByKey(r.list,'dm'))
          resolve(payload)
        })
      })
    },
    aGetGender(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: 'dm_xbb_all' }, r => {
          context.commit('getGender', fnc.sortByKey(r.list,'dm'))
          resolve(payload)
        })
      })
    },
    aGetSex(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: 'dm_xbb_all' }, r => {
          context.commit('getSex', fnc.sortByKey(r.list,'dm'))
          resolve(payload)
        })
      })
    },
    aGetGrade(context, payload) {
      console.log("payload", context)
      return new Promise((resolve) => {
        api.post(api.aport1 + '/templateController/getGrade', { template_grade: payload }, r => {
          context.commit('getGrade', r)
          resolve(r)
        })
      })
    },
    aGetDM(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: 'dm_' + payload + 'b_all' }, r => {
          context.commit('getDM', { type: payload, data: fnc.sortByKey(r.list,'dm') })
          resolve(r)
        })
      })
    },
    aGetPassport(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: 'dm_zjzlb_all' }, r => {
          context.commit('getPassport', fnc.sortByKey(r.list,'dm'))
          resolve(payload)
        })
      })
    },
    aGetDMPro(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: payload + '_all' }, r => {
          context.commit('getDMPro', { type: payload, data: fnc.sortByKey(r.list,'dm') })
          resolve(payload)
        })
      })
    },
    aGetSuboffice(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getDmList', { tableName: 'dm_pcsb', lvl: '2', dmNameRightLike: payload }, r => {
          context.commit('getSuboffice', fnc.sortByKey(r, 'dm'))
          resolve(payload)
        })
      })
    },
    aGetPolice(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getDmList', { tableName: 'dm_pcsb', lvl: '3', dmNameRightLike: payload }, r => {
          context.commit('getPolice', fnc.sortByKey(r, 'dm'))
          resolve(payload)
        })
      })
    },
    aGetZrq(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getDmList', { tableName: 'dm_zrqb', dmNameRightLike: payload }, r => {
          context.commit('getZrq', fnc.sortByKey(r, 'dm'))
          resolve(payload)
        })
      })
    },
    aGetDatatype(context) {
      return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getDmList', { tableName: 'dm_issue_data' }, r => {
          context.commit('getDatatype', fnc.sortByKey(r, 'dm'))
          resolve(fnc.sortByKey(r, 'dm'))
        })
      })
    },
    agetYwlb(context){
      return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getDmList', { tableName: 'dm_issue_data' }, r => {
          let arr=fnc.sortByKey(r, 'dm');
          let arrReal = [arr[0],arr[1]]
          context.commit('getYwlb', arrReal)
          resolve(arrReal)
        })
      })
    },
    aGetBackstatus(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport2 + '/dm/getDmList', { tableName: 'dm_zfztb', sjly: payload }, r => {
          context.commit('getBackstatus', r)
          resolve(r)
        })
      })
    },
    aGetBmbh(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/dept/getAllSubDept', payload, r => {
          context.commit('getBmbh', fnc.sortByKey(r, 'dm'))
          resolve(r)
        })
      })
    },
    aGetssdw(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/dept/getSubDeptBmMc', payload, r => {
          if (payload.type == "ssfj") {
            context.commit('getssfj', fnc.sortByKey(r, 'dm'))
          } else if (payload.type == "sspcs") {
            if(payload.ptype){
              context.commit('getpcsPro', {data:fnc.sortByKey(r, 'dm'),ptype:payload.ptype})
            }else{
              context.commit('getsspcs', fnc.sortByKey(r, 'dm'))
            }
          } else if (payload.type == "zrq") {
            context.commit('getzrq', fnc.sortByKey(r, 'dm'))
          }
          resolve(r)
        })
      })
    },
   
    aGetCountryCode(context, payload) {
      return new Promise((resolve) => {
        api.post(api.aport1 + '/DmController/getDMAllInfo', { tableName: 'dm_gjdqb_all' }, r => {
          context.commit('getCountryCode', fnc.sortByKey(r.list,'dm'))
          resolve(payload)
        })
      })
    },
  },
  modules: {
  }
})

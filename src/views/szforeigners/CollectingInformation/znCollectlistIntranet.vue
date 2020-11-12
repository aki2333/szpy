<template>
  <div class="page">
    <Inquire :cxData="cxData"
      :pd="cx.pd"
      :cxPara="cx"
      @cxFnc="cxFnc" 
      @lcFnc="lcFnc">
    </Inquire>
    <div class="t-tab-top">
      <div class="tab-top-item hand" :class="(tabPage=='0')?'tabImgActive_1':'tabImg_1'" @click="tabTopClick('0');tabPage='0'">数据查询</div>
      <!-- <div class="tab-top-item hand" :class="(cx.pd.compareStatus=='0' && cx.pd.checkStatus=='2')?'tabImgActive_2':'tabImg_2'" @click="tabTopClick('0','2')">全部待处理</div>
      <div class="tab-top-item hand" :class="(cx.pd.compareStatus=='0' && cx.pd.checkStatus=='3')?'tabImgActive_2':'tabImg_2'" style="margin-left:-18px" @click="tabTopClick('0','3')">全部已处理</div> -->
      <div class="tab-top-item hand" :class="(tabPage=='1')?'tabImgActive_2':'tabImg_2'" style="margin-left:-18px" @click="tabTopClick('1');tabPage='1'">待接收</div>
      <div class="tab-top-item hand" :class="(tabPage=='2')?'tabImgActive_2':'tabImg_2'" style="margin-left:-18px" @click="tabTopClick('1');tabPage='2'">待处理</div>
      <div class="tab-top-item hand" :class="(tabPage=='3')?'tabImgActive_2':'tabImg_2'" style="margin-left:-18px" @click="tabTopClick('1');tabPage='3'">已处理</div>
    </div>
    <div class="page-box">
      <el-row :gutter="20">
        <el-col :span="24">
          <Table
            lbType="yhtb"
            :lbData="lbData"
            :isSelect="true"
            :isEdit="isEdit"
            :lbBtn="lbBtn"
            :plBtn="plBtn"
            :disPlBtn="disPlBtn"
            :tableData="tableData"
            :clearSort="clearSort"
            :expData="cx"
            :czWidth="'130'"
            :expUrl="$api.aport1+'/userController/exportUserInfo'"
            @pageSizeFnc="pageSizeFnc"
            @pageNumFnc="pageNumFnc"
            @SelectionChange="SelectionChange"
            @rowClick="rowClick"
            @plFnc="plFnc"
            @blFnc="blFnc"
            @sortChange="sortChange"
            @transSaveFnc="transSaveFnc"
          ></Table>
        </el-col>
       
      </el-row>
  
    </div>

    <!-- 弹窗 -->
    <Dialog :isShowDialog="isShowDialog" :title="dialogTitle" @hideDialog="isShowDialog=false">
      <Form
        v-if="isShowDialog && hct==0"
        :cxData="labelData"
        :dialogType="dialogType"
        :dialogData="dialogData"
        @dialogCancel="isShowDialog=false"
        @dialogSave="dialogSave"
      ></Form>
       <Edit 
        v-else-if='isShowDialog'
        :jbxxdiaData="dialogData"
        :dialogType="dialogType"
        :seachData="seachData"
        @dialogSave="dialogSave"
        @dialogDis="dialogDis"
        @dialogCancel="isShowDialog=false">
      </Edit>
    </Dialog>
  
  </div>
</template>
<script>
import Inquire from "@/components/Inquire.vue";
import Dialog from "@/components/Dialog.vue";
import Table from "@/components/Table.vue";
import Edit from "./CollectionEdit.vue";
import Form from "@/components/Form.vue";
export default {
  components: {
    Inquire,
    Table,
    Dialog,
    Form,
    Edit
  },
  data() {
    return {
      tabImgActive_1: require("../../../assets/images/main/tab_2_pre.png"),
      tabPage:'0',
      // 【展示数据】
      isSelect: true,
      isEdit: true,
      cxData: this.$cdata.foreigners.znCollectlistIntranet.cx,
      lbData: this.$cdata.foreigners.znCollectlistIntranet.lb,
      lbBtn: this.$cdata.foreigners.znCollectlistIntranet.lbBtn,
      plBtn: this.$store.state.plBtn,
      hct:0,
      // 【业务数据】
      cx: {
        pd: { userType: "0", valid: "1",compareStatus:'0', checkStatus:'1'},
        pageSize: 10,
        pageNum: 1,
        queryParams: null,
        user: this.$store.state.user
        // order: "",
        // direction: ''
      },
      disPlBtn: false,
      tableData: {
        list: [],
        total: 0,
        pageSize: 10,
        pageNum: 1
      },
      clearSort:0,
      selection: [],
    
      treeData1: [],
      treeProps1: {
        label: "menu_name",
        children: "childrenMenu"
      },
      defaultChecked1: [],
      // 弹窗数据,
      currentRow: {},
      isShowDialog: false,
      dialogTitle: "",
      dialogType: "",
      dialogData: {},
      dialogImgData:{},
      labelData: [],
      userRoleData: [],
      multipleArr: [],
      multipleSelection:[],
      seachData:{}

    };
  },
  mounted() {
    this.cx.queryParams = this.cx.pd;
    this.tabTopClick('0');
    this.getTable();
    // this.begin();

    // 加载 国家地区 下拉选
    this.$store
      .dispatch("aGetCountryCode", { })
      .then(() => {});
  },

  methods: {
     //下拉框联动
    lcFnc(data) {
      if (data.key.dm == "subBureauCode") {
        if (data.data == "") {
          data.obj.policeStationCode = "";
        }
        if (data.obj.policeStationCode) {
          data.obj.policeStationCode = "";
        }
        this.$store.dispatch("aGetssdw", { bmbh: data.data, type: "sspcs" });
      }
    },
    tabTopClick(m){
       this.cx.pd.compareStatus = m;
      //  this.cx.pd.checkStatus=n;
       this.cx.pageNum = 1;
       this.plBtn = this.$store.state.plBtn;
       if(this.cx.pd.compareStatus=='0' && this.cx.pd.checkStatus=='1') {
         this.plBtn = this.plBtn.filter(item => ['jc','qxqb','qxxz'].indexOf(item.py) == -1);
       } else if(this.cx.pd.compareStatus=='0' && this.cx.pd.checkStatus=='2'){
         this.plBtn = this.plBtn.filter(item => ['lqqb','lqsj','lqxz','jc','qxqb','qxxz'].indexOf(item.py) == -1);
       }else if(this.cx.pd.compareStatus=='0' && this.cx.pd.checkStatus=='3'){
         this.plBtn = this.plBtn.filter(item => ['lqqb','lqsj','lqxz','qxqb','qxxz'].indexOf(item.py) == -1);
       }else if(this.cx.pd.compareStatus=='1' && this.cx.pd.checkStatus=='1'){
         this.plBtn = this.plBtn.filter(item => ['lqqb','lqsj','lqxz','jc','qxqb','qxxz'].indexOf(item.py) == -1);
       }else if(this.cx.pd.compareStatus=='1' && this.cx.pd.checkStatus=='2'){
         this.plBtn = this.plBtn.filter(item => ['lqqb','lqsj','lqxz','jc'].indexOf(item.py) == -1);
       }else if(this.cx.pd.compareStatus=='1' && this.cx.pd.checkStatus=='3'){
         this.plBtn = this.plBtn.filter(item => ['lqqb','lqsj','lqxz','qxqb','qxxz'].indexOf(item.py) == -1);
       }
       this.getTable(true);
    },
    btnClick(py) {
      if (py == "bc") {
        this.saveUserRoleInfo();
      } else if (py == "qc") {
        this.cancel();
      }
    },
    //简表数据 子组件通知父组件改表格数据
    transSaveFnc(data){
      this.lbData = data
    },
    // 获取查询参数
    cxFnc(data) {
      this.cx.pd = data;
      this.cx.queryParams = data;
      this.cx.pageNum = 1;
      // this.disPlBtn = data.userType == 0 ? true : false;
      this.getTable(true);
    },
    // 获取分页等信息
    pageSizeFnc(data) {
      this.cx.pageSize = data;
      this.getTable();
    },
    pageNumFnc(data) {
      this.cx.pageNum = data;
      this.getTable();
    },
       //表格复选框选择
    SelectionChange(data) {
       
        this.multipleSelection = data;
        this.multipleArr = [];
         for (var i = 0; i < this.multipleSelection.length; i++) {
           this.multipleArr = this.multipleArr.concat([
              this.multipleSelection[i].collectId
            ]);
         }

        
    },
    sortChange(data){
      this.cx.order = data.prop;
      this.cx.direction = data.direction
      this.getTable();
    },
    // 查询用户列表
    getTable(flag) {
      if(this.cx.pageSize!=this.tableData.pageSize){
        this.cx.pageSize=this.tableData.pageSize
      }
      if(flag){this.clearSort = new Date().getTime();delete this.cx.order;delete this.cx.direction }
      this.$api.post(
        this.$api.aport5 + "/znCollectlistIntranet/listData",
        this.cx,
        r => {
       
          this.tableData.list = r.records;
          this.tableData.total = r.total;
                 // pageSize: 10,
                 // pageNum: 1

        }
      );
    },

   
    // 点击表格行
    rowClick() {
     
    },
    // 批量操作
    plFnc(data) {
  
      this.dialogTitle = data.menu_name;
      this.dialogType = data.py;
    
      if(data.py=='lqqb'){ //领取全部
          let p={
            'user':this.$store.state.user,
            'params':this.cx.pd,
            'otherParams':{
              'number':this.tableData.total
            }
          };
           this.$api.post(
           this.$api.aport5 + "/znCollectlistIntranet/collectTask",
            p,
            r => {
                this.$message({
                      message: "领取"+r.data+"条",
                      duration: 8000,
                      showClose: true,
                      type: "success"
                    });
                  this.getTable();
            }
          );

      }else if(data.py=='lqxz'){ //领取选中
        if (this.multipleArr.length == 0) {
          this.$message({
            message: "请先选择数据！",
            duration: 13000,
            showClose: true,
            type: "warning"
          });
          return false;
        }
        let p={
            'user':this.$store.state.user,
            'params':this.multipleArr,
            
          };
           this.$api.post(
           this.$api.aport5 + "/znCollectlistIntranet/collectTaskByIdArr",
            p,
            r => {
               this.$message({
                      message: "领取"+r.data+"条",
                      duration: 8000,
                      showClose: true,
                      type: "success"
                    });
               this.getTable();
            }
          );

      }else if(data.py=='lqsj'){ //领取随机


          if(this.tableData.total==0){
             this.$message({
                      message: '没有待接收的数据！',
                      duration: 8000,
                      showClose: true,
                      type: "error"
            });
            return;
          }
          this.hct=0;
          this.labelData = this.$cdata.foreigners.znCollectlistIntranet.lqsjnum;
          this.isShowDialog = true;


      }else if(data.py=='jc'){//纠错
        if (this.multipleArr.length == 0) {
          this.$message({
            message: "请先选择数据！",
            duration: 13000,
            showClose: true,
            type: "warning"
          });
          return false;
        }
        if(this.multipleArr.length>1){
           this.$message({
            message: "只能选择一条数据！",
            duration: 13000,
            showClose: true,
            type: "warning"
          });
          return false;
         }

         this.hct=2;

         this.isShowDialog = true;
         this.dialogData = this.multipleSelection[0];

      }else if(data.py=='qxqb'){ //取消全部
        let p={
            'user':this.$store.state.user,
            'params':this.cx.pd,
            'otherParams':{
              'number':this.tableData.total
            }
          };
           this.$api.post(
           this.$api.aport5 + "/znCollectlistIntranet/cancelTask",
            p,
            r => {
                this.$message({
                      message: "取消"+r.data+"条",
                      duration: 8000,
                      showClose: true,
                      type: "success"
                    });
                  this.getTable();
            }
          );

      }else if(data.py=='qxxz'){//取消选中
           if (this.multipleArr.length == 0) {
          this.$message({
            message: "请先选择数据！",
            duration: 13000,
            showClose: true,
            type: "warning"
          });
          return false;
        }
        let p={
            'user':this.$store.state.user,
            'params':this.multipleArr,
            
          };
           this.$api.post(
           this.$api.aport5 + "/znCollectlistIntranet/cancelTaskByIdArr",
            p,
            r => {
               this.$message({
                      message: "取消"+r.data+"条",
                      duration: 8000,
                      showClose: true,
                      type: "success"
                    });
               this.getTable();
            }
          );
      }
     
    },
    // 表格内操作
    blFnc(data) {
     
      this.dialogTitle = data.btn.button_name;
      this.dialogType = data.btn.button_type;

      this.cx.pageS=data.index
    
      if (data.double) {

       if(data.data.compareStatus=='1' && data.data.checkStatus=='2')
       {
         
         this.seachData=this.cx;
         this.hct=1;
         this.dialogData = data.data;
         this.dialogType="edit"
         this.dialogTitle="编辑"

        }else{
           this.hct=1;
           this.dialogData = data.data;
           this.dialogType="ck"
           this.dialogTitle="详情"
        }
      
      }
      if (data.btn.button_type == "ck") {
        this.hct=1;
        this.dialogData = data.data;
      } else if (data.btn.button_type == "edit") {
        
         this.seachData=this.cx;
         this.hct=1;
         this.dialogData = data.data;
      }
       this.isShowDialog = true;
    },
    //无效数据 
    dialogDis(data){
    
      var obj=Object.assign({}, data.data);
      obj.isDelete=0;
       var url='/znCollectlistIntranet/save';
      if(this.hct==2){
        url='/znCollectlistIntranet/modifyError';
      }
       let p={
            'user':this.$store.state.user,
            'params':obj
          
          }
           this.$api.post(
           this.$api.aport5 + url,
            p,
            r => {
               
               if(r.data){
                    this.$message({
                      message: "操作成功!",
                      duration: 8000,
                      showClose: true,
                      type: "success"
                    });
                   this.getTable();
               }else{
                 this.$message({
                      message: "操作失败!",
                      duration: 8000,
                      showClose: true,
                      type: "error"
                    });
               }
             
            }
          );
    },
    dialogSave(data) {
    let p={};var url='';
  
     if(this.hct==0){
      p={
            'user':this.$store.state.user,
            'params':data.data,
            'otherParams':{
              'number':data.data.sjnum
            }
          }
       url='/znCollectlistIntranet/collectTask';
     }else if(this.hct==1){
        p={
            'user':this.$store.state.user,
            'params':data.data,
          }
        url='/znCollectlistIntranet/save';
     }else if(this.hct==2){
       p={
            'user':this.$store.state.user,
            'params':data.data,
          }
       url='/znCollectlistIntranet/modifyError';
     }
        
           this.$api.post(
           this.$api.aport5 + url,
            p,r => {
                 if(r.data){
                    this.$message({
                      message: "操作成功!",
                      duration: 8000,
                      showClose: true,
                      type: "success"
                    });
                    this.getTable();
                    if(this.hct==0){
                      this.isShowDialog=false;
                    }
                   }else{
                  this.$message({
                      message: "操作失败!",
                      duration: 8000,
                      showClose: true,
                      type: "error"
                    });
               }
            }
          );
    },
   
  
  }
};
</script>       
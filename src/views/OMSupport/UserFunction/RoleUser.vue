<template>
  <div>
    <div class="tc-cx">
      <Inquire cxType="noCbtn" :cxData="$cdata.qxgl.jsgl.yhcx" :pd="cx.pd" :cxPara="cx" @cxFnc="cxFnc"></Inquire>
    </div>
    <el-row type="flex" class="page-inner-box">
      <el-col :span="24">
        <Table
          :lbData="$cdata.qxgl.jsgl.yhlb"
          :isSelect="false"
          :lbBtn="$cdata.qxgl.jsgl.yhlbBtn"
          :plBtn="$cdata.qxgl.jsgl.plBtn"
          :isTab="true"
          :page="tabPage"
          :lbTab="$cdata.qxgl.jsgl.yhlbTab"
          :clearSort="clearSort"
          :expData="cx"
          :expUrl="$api.aport1+'/role/exportRoleUser'"
          @blFnc="blFnc"
          @pageSizeFnc="pageSizeFnc"
          @pageNumFnc="pageNumFnc"
          @tabFnc="tabFnc"
          @sortChange="sortChange"
          :tableData="tableData"
        ></Table>
      </el-col>
    </el-row>
    <div class="page-btn-box">
      <!-- <el-button size="mini" type="primary" round @click="save">保存</el-button> -->
      <el-button size="mini" type="info" round @click="cancel">取消</el-button>
    </div>
  </div>
</template>
<script>
import Table from "@/components/Table.vue";
import Inquire from "@/components/Inquire.vue";

export default {
  components: { Inquire, Table },
  props: {
    dialogType: {
      type: String,
      default: ""
    },
    dialogData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // 【业务数据】
      cx: {
        pd: {
          status: "1",
          quanJu: "true",
          roleType: this.dialogData.role_type,
          roleId: this.dialogData.serial,
          xm: "",
          loginName: "",
          jinghao: "",
          bmbh: this.dialogData.bmbh,
          bmmc: this.dialogData.bmmc
        },
        pageSize: 10,
        pageNum: 1,
        // order: "serial",
        // direction: 1
      },
      tabPage: "",
      tableData: {
        list: [],
        total: 0,
        pageSize: 10,
        pageNum: 1
      },
      clearSort:0,
    };
  },
  mounted() {
    console.log("角色用户", this.dialogType, this.dialogData);
    this.begin();
  },
  methods: {
    cxFnc(data) {
      console.log(data);
      this.cx.pd = data;
      this.getTable(true);
    },
    sortChange(data){
      this.cx.order = data.prop;
      this.cx.direction = data.direction
      this.getTable();
    },
    // 查询用户列表
    getTable(flag) {
      if(flag){this.clearSort = new Date().getTime();delete this.cx.order;delete this.cx.direction }
      this.$api.post(this.$api.aport1 + "/role/getRoleUser", this.cx, r => {
        this.tableData = r;
        this.tableData.list.forEach(item => {
          item.status = this.cx.pd.status;
        });
        // console.log(this.tableData);
      });
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
    // 表格内操作
    blFnc(data) {
      console.log("点击表格按钮-", data);
      // data.btn按钮信息
      // data.data行内信息
      if (data.btn.button_type == "tj") {
        let _data = {
          roleId: this.dialogData.serial,
          userId: [data.data.wybs],
          loginUserId: this.$store.state.user.userId
        };
        this.addRoleUser(_data);
      } else if(data.btn.button_type == "sc"){
        let _data = {
          roleId: this.dialogData.serial,
          userId: [data.data.wybs],
          loginUserId: this.$store.state.user.userId
        };
        this.delRoleUser(_data);
      }
    },
    // 添加
    addRoleUser(data) {
      this.$api.post(this.$api.aport1 + "/role/addRoleUser", data, r => {
        this.$message({
          message: r,
          showClose: true,
          duration:8000,
          type: "success"
        });
        this.getTable();
      });
    },
    // 删除
    delRoleUser(data) {
      this.$confirm("是否确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$api.post(this.$api.aport1 + "/role/delRoleUser", data, r => {
          this.$message({
            message: r,
            showClose: true,
            duration:8000,
            type: "success"
          });
          this.getTable();
        });
      });
    },
    tabFnc(data) {
      console.log("tab切换", data);
      this.cx.pd.status = data;
      this.tabPage = data;
      this.cx.pageNum = 1;
      this.cx.pageSize = 10;
      this.getTable(true);
    },
    cancel() {
      this.$emit("dialogCancel");
    },
    // 开始
    begin() {
      this.getTable();
      //this.$store.dispatch("aGetBmbh", { bmbh: this.$store.state.user.bmbh });
    }
  }
};
</script>
<style scoped>
</style>
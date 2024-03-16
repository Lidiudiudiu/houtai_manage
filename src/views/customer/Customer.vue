<template>
  <div>
    <el-button @click="exportExl">导出</el-button>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="客户姓名"
      >
      <template slot-scope="{row}">{{ row.name }}</template>
    </el-table-column>
    <el-table-column
      label="电话"
      >
      <template slot-scope="{row}">{{ row.phone }}</template>
    </el-table-column>
    <el-table-column
      label="性别"
      >
      <template slot-scope="{row}">{{ row.sex=="0"?"男":(row.sex=="1"?"女":" ") }}</template>
    </el-table-column>
    <el-table-column
      prop="inputUserName"
      label="录入人">
    </el-table-column>
     <el-table-column
      label="录入时间"
      >
      <template slot-scope="{row}">{{ row.entryTime && new Date(row.entryTime).toLocaleDateString().replaceAll("/","-") }}</template>
    </el-table-column>
    <el-table-column
      label="操作"
      >
    </el-table-column>
  </el-table>
  <el-pagination style="display: flex;justify-content: flex-end; padding: 20px 20px 0 0;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
import { GetCustomerListApi,CustomerExportApi } from '@/request/api';
import { saveAs } from 'file-saver';
export default {
    data() {
        return {
        tableData:[],
         multipleSelection: [],
         pageNum: 1, //当前页数
         pageSize:10, //每页条数
         total:null
        }
    },
    async created(){
      this.getTableData();
    },
    methods:{
      async exportExl(){
        const res = await CustomerExportApi(
         {
            pageNum:1,
            pageSize:10
          },
          {
            headers:{
              'Content-Type':"application/x-www-form-urlencoded"
            },
            responseType:'blob'
          },
        );
        
        if(!res) return;
        console.log("导出exexl表",res);
        saveAs(
          new Blob([res]),
          `客户档案_${new Date().getTime()}.xlsx`
        );
      },

      handleSizeChange(val){
        this.pageSize = val;
        this.getTableData();
      },

      handleCurrentChange(val){
        this.pageNum = val;
        this.getTableData();
      },

     async getTableData(){
        const GetCustomerListApiRes = await GetCustomerListApi(
          {
              pageNum:this.pageNum,
              pageSize:this.pageSize
          }
        );
        if(!GetCustomerListApiRes) return;
        console.log("客户列表展示：",GetCustomerListApiRes);
        this.tableData = GetCustomerListApiRes.rows;
        this.total = GetCustomerListApiRes.total
      },
      handleSelectionChange(){
        
      }
    }
}
</script>

<style>

</style>s
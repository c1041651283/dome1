<template>
  <div id="components-table-demo-size">
    <div id="char">
      <v-chart :forceFit="true" :height="height" :data="charData" :scale="scale">
        <v-tooltip />
        <v-axis />
        <v-line position="name*age" />
        <v-point position="name*age" shape="circle" />
      </v-chart>
    </div>
    <div id="table">
      <a-table
          :columns="columns"
          :data-source="tableData"
          :rowClassName="(record, index) => index % 2 === 1 ? 'odd' : 'even'"
          :loading = "loading"
          :scroll="{ y: 500}"
          :pagination = "pagination"
          @change="handleCurrentChange"
          :current.sync="currentPage">
      </a-table>
    </div>
  </div>
</template>
<script>

const scale = [{
  dataKey: 'name',
  min: 0,
},{
  dataKey: 'age',
  min: 0,
  max: 100,
}];


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 150,
  },
];

import { getTableData, getCharData } from '@/api/table';

export default {
  data() {
    return {
      scale,
      currentPage:1,
      height: 400,
      tableData:[],
      charData:[],
      columns,
      loading:true,
      pagination:{
        pageSize:20,
        itemRender: (current, type, originalElement) => {
          if (type === 'prev') {
            return <a>前</a>;
          } else if (type === 'next') {
            return <a>后</a>;
          }
          return originalElement;
        }
      }
    };
  },
  mounted() {
    this.getTable(),
    this.getChar()
  },
  methods:{
    handleCurrentChange(currentPage){
      this.currentPage = currentPage.curren;
      this.getChar();
    },
    getTable(){
      getTableData().then(res => {
        this.loading = false;
        this.tableData = res;
      })
    },
    getChar(){
      let para = {
        limit: this.pagination.pageSize,
        page: this.currentPage,
      }
      getCharData(para).then(res =>{
        this.loading = false;
        this.charData = res;
      })
    }
  }
};
</script>
<style>
.even {
  background: white;
}
.odd{
  background: gray;
}
</style>

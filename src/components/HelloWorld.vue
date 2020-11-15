<template>
  <div id="components-table-demo-size">
    <div id="userLine">
    </div>
    <div id="data">
      <a-table
          :columns="columns"
          :data-source="tableData"
          :rowClassName="(record, index) => index % 2 === 1 ? 'odd' : 'even'"
          :loading = "loading"
          :scroll="{ y: 500}"
          :pagination = "pagination">
      </a-table>
    </div>

  </div>
</template>
<script>
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

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

import { getTableData } from '@/api/table';
import { Line } from '@antv/g2plot';

export default {
  data() {
    return {
      tableData:[],
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
    this.getTable()
  },
  methods:{
    getTable(){
      getTableData().then(res => {
        this.loading = false;
        this.tableData = res;
      })
      this.initComponent();
    },
    initComponent(){
      const line = new Line('userLine', {
        data,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
          value: {
            max: 15,
          },
        },
      });
      line.render();
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

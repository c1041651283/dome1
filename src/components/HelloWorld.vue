<template>
  <div class="page">
    <div>
      <a-table
          :columns="columns"
          :data-source="tableData"
          :showHeader="showHeader"
          :pagination="pagination"
          :loading="loading"
      >
        <template slot="title">
          <div class="left-title">ユーザー情報</div>
          <div class="right-title">
            <span v-if="flag">
              <a @click="() => edit()">变更</a>
            </span>
            <span v-else>
              <a @click="() => save()">保存</a>
              <a @click="() => cancel()">取消</a>
            </span>
          </div>
          <div class="clear"></div>
        </template>
        <template v-for="col in ['content']" :slot="col" slot-scope="text, record">
          <div :key="col">
            <template v-if="flag">
              {{ text }}
            </template>
            <a-input
                v-else
                style="margin: -5px 0"
                :value="text"
                @change="(e) => handleChange(e.target.value, record.key, col)"
            />
          </div>
        </template>
      </a-table>
    </div>
    <div style="padding-left: 500px">
      <a>パスワードを変更></a>
    </div>
  </div>
</template>
<script>

import { getProfileData,setProfileData } from '../api/table'

const columns = [
  {
    title: "info",
    dataIndex: "info",
    width: "150px",
    align: 'center',
    scopedSlots: { customRender: "info" },
  },
  {
    title: "content",
    dataIndex: "content",
    width: "150px",
    align: 'center',
    scopedSlots: { customRender: "content" },
  },
];
export default {
  data() {
    return {
      loading:true,
      showHeader: false,
      flag: true,
      columns,
      pagination: false,
      tableData: [],
      cacheData: [],
    };
  },
  created() {

  },
  mounted() {
    this.getData()
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.tableData];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.tableData = newData;
      }
    },
    edit() {
      const newData = [...this.tableData];
      this.tableData = newData;
      this.flag = false;
    },
    save() {
      const newData = [...this.tableData];
      this.loading=true;
      this.tableData = newData;
      this.cacheData = newData.map(item => ({...item}));
      this.flag = true;
      this.submitForm(this.tableData);
    },
    cancel() {
      // const newData = [...this.tableData];
      this.tableData = this.cacheData;
      this.flag = true;
    },
    getData(){
      getProfileData().then((res) => {
        this.tableData = res;
        this.loading = false;
      });
    },
    submitForm(userForm){
      setProfileData(userForm).then((res) => {
        this.tableData = res;
        this.loading=false;
      });
    },
  },
};
</script>
<style>
.page {
  width: 80%;
  margin: 0 auto;
}
.right-title {
  float: right;
}
.left-title {
  float: left;
}
.clear{
  clear:both;
}
</style>
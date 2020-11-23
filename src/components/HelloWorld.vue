<template>
  <div class="page">
    <div>
      <a-table
          :columns="columns"
          :data-source="data"
          :showHeader="showHeader"
          :pagination="pagination"
          bordered
      >
        <template slot="title">
          <div class="right-title">ユーザー情報</div>
          <div class="left-title">
            <span v-if="flag">
              <a @click="() => edit()">变更</a>
            </span>
            <span v-else>
              <a @click="() => save()">保存</a>
              <a @confirm="() => cancel()">取消</a>
            </span>
          </div>
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
    <div>
      <a>パスワードを変更></a>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "info",
    dataIndex: "info",
    width: "150px",
    scopedSlots: { customRender: "info" },
  },
  {
    title: "content",
    dataIndex: "content",
    width: "150px",
    scopedSlots: { customRender: "content" },
  },
];
const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i.toString(),
    info: `Edrward ${i}`,
    content: 32,
  });
}
export default {
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      showHeader: false,
      flag: true,
      data,
      columns,
      pagination: false,
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit() {
      const newData = [...this.data];
      this.data = newData;
      this.flag = false;
    },
    save() {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      this.data = newData;
      this.flag = true;
      this.cacheData = newCacheData;
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        Object.assign(
            target,
            this.cacheData.filter((item) => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
      this.flag = true;
    },
  },
};
</script>
<style>
.page {
  width: 800px;
  margin: 0 auto;
}
/*.right-title {*/
/*  float: right;*/
/*}*/
/*.left-title {*/
/*  float: left;*/
/*}*/
</style>
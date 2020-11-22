<template>
  <div class="page">
    <div>
      <a-table :columns="columns" :data-source="data">
        <template slot="title">
          <div class="right-title">
            列表
          </div>
          <div style="float: right">
            <a @click="showModal">变更</a>
          </div>
        </template>
      </a-table>
    </div>
    <div>
      <a-modal
          title="Title"
          :visible="visible"
          :confirm-loading="confirmLoading"
          :centered = "centered"
          @ok="handleOk"
          @cancel="handleCancel"
      >
        <a-form-model layout='vertical' :form="form">
          <a-form-model-item label="用户名">
            <a-input/>
          </a-form-model-item>
          <a-form-model-item label="用户名">
            <a-input/>
          </a-form-model-item>
          <a-form-model-item label="用户名">
            <a-input/>
          </a-form-model-item>
          <a-form-model-item label="用户名">
            <a-input/>
          </a-form-model-item>
          <a-form-model-item label="用户名">
            <a-input/>
          </a-form-model-item>
          <a-form-model-item label="用户名">
            <a-input/>
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </div>
    <div>
      <a>修改密码</a>
    </div>
  </div>

</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Cash Assets',
    dataIndex: 'money',
  },
];

const data = [
  {
    key: '1',
    name: 'Jim Green',
    money: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
  },
];

export default {
  beforeCreate() {
    //创建表单
    this.form = this.$form.createForm(this, { name: 'form_in_modal' });
  },
  data() {
    return {
      centered:true,
      data,
      columns,
      visible: false,
      confirmLoading: false,
    };
  },
  methods:{
    showModal() {
      this.visible = true;
    },
    handleOk() {
      const form = this.form;
      window.console.log('form 表单内容: ', form.value);
      form.resetFields();
      this.visible = false;
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  }
};
</script>
<style>
.page{
  width: 800px;
  margin: 0 auto;
}
.right-title{
  float: left;
  margin-left: 20px;
  font-size: 20px;
}
</style>

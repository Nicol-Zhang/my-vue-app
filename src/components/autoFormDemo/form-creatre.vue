<template>
  <form-create
      v-model="fApi"
      :rule="rule"
      :option="option"
      :value.sync="value"
  ></form-create>
</template>

<script>
export default {
  name: "form-create",
  data(){
    return{
      fApi: {},

      //表单数据
      value: {},

      //表单生成规则
      rule: [
        {
          type: "input",
          field: "goods_name",
          title: "商品名称",
        },
        {
          type: "radio",
          title: "是否包邮",
          field: "is_postage",
          value: "0",
          options: [
            { value: "0", label: "不包邮", disabled: false },
            { value: "1", label: "包邮", disabled: true },
          ],
        },
        {
          type: "select",
          field: "cate_id",
          title: "产品分类",
          value: "104",
          options: [
            { value: "104", label: "生态蔬菜", disabled: false },
            { value: "105", label: "新鲜水果", disabled: false },
          ],
        },
      ],

      //组件参数配置
      option: {
        //表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData));
        },
      },
    }
  },

}
</script>

<style scoped>

</style>
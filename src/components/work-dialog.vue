<template>
  <el-dialog
      v-model="visible"
      :title="title"
      :befor-close="handleClose"
  >
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="任务名称">
          <el-input v-model="newWork.work_id"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="所在站点">
          <el-input v-model="newWork.sitestation"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-button type="success" @click="addWork(0)">新建物料</el-button>
      </el-col>
    </el-row>
    <el-table  :data="newWork.materials">
      <el-table-column label="物料名称">
        <template #default="scope">
          <el-input v-model="scope.row.materialName"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="库位">
        <template #default="scope">
          <el-input v-model="scope.row.location"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="delWork(scope.$index)" text>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px">
      <el-button type="info" @click="visible=false">取消</el-button>
      <el-button @click="confirmWork" type="success" >完成</el-button>
    </div>

  </el-dialog>
</template>

<script>
export default {
  name: "work-dialog",
  data(){
    return{
      visible: false,
      taskType: "",
      newWork:{
        work_id: "",
        sitestation: "",
        materials:[
          {
            materialName: null,
            loation: null
          }
        ]
      },
      materialList:[],
      locationList:[],
      action: 1,
    }
  },
  emits:['confirmWork'],
  methods:{
    addWork(index){
      let temp = {
        materialName: null,
        loation: null
      }
      this.newWork.materials.push(temp);
    },
    delWork(index){
      this.newWork.materials.splice(index, 1)
    },
    confirmWork(){
      this.$emit("confirmWork", this.newWork, this.action);
    },
    handleClose(){
      this.action = 1
    }
  }
}
</script>

<style scoped>

</style>
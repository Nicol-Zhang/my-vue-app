<template>
  <el-dialog
      v-model="visible"
      :befor-close="handleClose"
  >
    <el-form :label-width="80">
      <el-form-item label="任务类型">
        <el-input v-model="newTaskType.task_id"></el-input>
      </el-form-item>
      <el-form-item label="起点">
        <el-select v-model="newTaskType.source_id">
          <el-option
              v-for="item in mapList"
              :label="item"
              :value="item"
              :key="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="终点">
        <el-select v-model="newTaskType.id">
          <el-option
              v-for="item in mapList"
              :label="item"
              :value="item"
              :key="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="停靠方式">
        <el-select v-model="newTaskType.docking_mode"></el-select>
      </el-form-item>
      <el-form-item label="X">
        <el-input v-model="newTaskType.x"></el-input>
      </el-form-item>
      <el-form-item label="Y">
        <el-input v-model="newTaskType.y"></el-input>
      </el-form-item>
      <el-form-item label="angle">
        <el-input v-model="newTaskType.angle"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="visible=false;newTaskType=null" type="info">取消</el-button>
    <el-button @click="addNewType" type="primary">完成</el-button>
  </el-dialog>
</template>

<script>
import {getMapData} from "../api";
import {ElMessage} from "element-plus";

export default {
  name: "edit-task",
  data(){
    return{
      visible:false,
      mapList:[],
      editIndex: -1,
      newTaskType:  {},
    }
  },
  mounted() {
    getMapData().then(res=>{
      this.mapList = res.mapList;
    })
  },
  emits:['saveEdit','visible','addNewType'],
  methods:{
    addNewType(){
      this.$emit('addNewType', this.newTaskType, this.editIndex);
      ElMessage({
        type: "success",
        message: "保存成功"
      })
    },
    handleClose(){
      this.newTaskType={
        "task_id": " ",
        "source_id": " ",
        "id": " ",
        "works": [],
        "docking_mode": 0,
        "x": 0.0,
        "y": 0.0,
        "angle": 0.0,
      };
      this.editIndex=-1;
    }
  }
}
</script>

<style scoped>
.el-input, .el-select{
  width:50%
}
.el-form{
  margin-left: 30%;
}
</style>
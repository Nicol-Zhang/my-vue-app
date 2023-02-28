<template>
  <div id="tasks-content">
    <div>
      <el-input  class="search-bar" v-model="searchData"
                 style="width: 200px"
                 placeholder="请输入搜索内容"
      >
      </el-input>
      <el-button class="search-bar" type="primary" @click="search">搜索</el-button>
      <el-button @click="editTaskType(-1)" class="search-bar add-btn" type="primary">新建任务类型</el-button>
    </div>
    <el-table
        ref="multipleTable"
        :data="tasksData.splice((queryForm.pageNum-1)* queryForm.pageSize,queryForm.pageNum* queryForm.pageSize )"
        style="width: 100%; margin-top: 10px">
      <el-table-column label="任务信息" width="100" type="expand" >
        <template #default="props">
          <el-collapse accordion>
            <el-collapse-item v-for="(item, index) in props.row.works">
              <template #title>
                <div class="task-content">
                  <span>任务名称:{{item.work_id}}</span>
                  <span>当前站点:{{item.sitestation}}</span>
                </div>
                <el-button @click="editWorks(index, props.$index)" text>
                  <svg x="1677311112452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2786" width="20" height="20"><path d="M358.165868 554.624796c-0.533143 0.680499-1.066285 1.391696-1.303692 2.251274l-41.104163 150.700257c-2.400676 8.772804 0.059352 18.226107 6.550183 24.892947 4.860704 4.742001 11.261485 7.350408 18.077727 7.350408 2.252297 0 4.504594-0.267083 6.727215-0.860601l149.630902-40.808428c0.23843 0 0.357134 0.207731 0.534166 0.207731 1.718131 0 3.408633-0.62217 4.683672-1.927909l400.113747-400.054395c11.883655-11.897981 18.404162-28.109198 18.404162-45.74281 0-19.989263-8.476045-39.963177-23.324218-54.767348l-37.786605-37.844933c-14.81645-14.848173-34.822087-23.338544-54.797024-23.338544-17.631566 0-33.842783 6.520507-45.75816 18.388812L358.758362 553.232077C358.344946 553.615816 358.462626 554.179658 358.165868 554.624796M862.924953 257.19778l-39.742143 39.71349-64.428382-65.451688 39.180348-39.179324c6.193049-6.222725 18.194384-5.318122 25.308409 1.822508l37.813211 37.845956c3.943822 3.941775 6.195096 9.18622 6.195096 14.372336C867.223862 250.574942 865.710392 254.42769 862.924953 257.19778M429.322487 560.907896l288.712541-288.728914 64.459081 65.49569L494.314711 625.838721 429.322487 560.907896zM376.718409 677.970032l20.863167-76.580143 55.656601 55.657624L376.718409 677.970032z" fill="#1296db" p-id="2787"></path><path d="M888.265084 415.735539c-15.144932 0-27.562752 12.313443-27.620058 27.665083l0 372.98283c0 19.559475-15.885805 35.444257-35.475979 35.444257L194.220958 851.827709c-19.559475 0-35.504632-15.883759-35.504632-35.444257L158.716326 207.602222c0-19.575848 15.945157-35.474956 35.504632-35.474956l406.367171 0c15.231913 0 27.592428-12.371772 27.592428-27.606755 0-15.202237-12.360516-27.590382-27.592428-27.590382L190.013123 116.930129c-47.684022 0-86.49291 38.779212-86.49291 86.49291L103.520213 820.59231c0 47.713698 38.808888 86.47756 86.49291 86.47756l639.334083 0c47.715745 0 86.509283-38.763862 86.509283-86.47756L915.856489 443.222567C915.794068 428.048983 903.408993 415.735539 888.265084 415.735539" fill="#1296db" p-id="2788"></path></svg>
                </el-button>
                <el-button @click="delWorks(index, props.$index)" text>
                  <svg x="1677466489108" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2977" width="20" height="20"><path d="M861.184 192.512q30.72 0 50.688 10.24t31.744 25.6 16.384 33.28 4.608 33.28q0 7.168-0.512 11.264t-0.512 7.168l0 6.144-67.584 0 0 537.6q0 20.48-8.192 39.424t-23.552 33.28-37.376 23.04-50.688 8.704l-456.704 0q-26.624 0-50.176-8.192t-40.448-23.04-26.624-35.84-9.728-47.616l0-527.36-63.488 0q-1.024-1.024-1.024-5.12-1.024-5.12-1.024-31.744 0-13.312 6.144-29.696t18.432-30.208 31.744-23.04 46.08-9.216l91.136 0 0-62.464q0-26.624 18.432-45.568t45.056-18.944l320.512 0q35.84 0 49.664 18.944t13.824 45.568l0 63.488q21.504 1.024 46.08 1.024l47.104 0zM384 192.512l320.512 0 0-64.512-320.512 0 0 64.512zM352.256 840.704q32.768 0 32.768-41.984l0-475.136-63.488 0 0 475.136q0 21.504 6.656 31.744t24.064 10.24zM545.792 839.68q17.408 0 23.552-9.728t6.144-31.232l0-475.136-63.488 0 0 475.136q0 40.96 33.792 40.96zM738.304 837.632q18.432 0 24.576-9.728t6.144-31.232l0-473.088-64.512 0 0 473.088q0 40.96 33.792 40.96z" p-id="2978" fill="#f26f5e"></path></svg>                </el-button>
              </template>
              <el-table style="margin-left: 30px" :data="item.materials">
                <el-table-column prop="materialName" label="物料名称" width="150"/>
                <el-table-column prop="location" label="库位" width="150"/>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <el-table-column prop="task_id" label="任务类型" width="150"/>
      <el-table-column label="站点信息">
        <el-table-column prop="source_id" label="起点" width="120" />
        <el-table-column prop="id" label="终点" width="120" />
        <el-table-column prop="docking_mode" label="停靠方式" width="120" />
        <el-table-column label="坐标">
          <el-table-column prop="x" label="x" width="60" />
          <el-table-column prop="y" label="y" width="60" />
          <el-table-column prop="angle" label="角度" width="60" />
        </el-table-column>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template v-slot="scope">
          <el-button class="edit-btn" @click="addNewWork(scope.$index)" type="primary" text>新建</el-button>
          <el-button class="edit-btn" @click="editTaskType(scope.$index)" type="primary" text>编辑</el-button>
          <el-button class="edit-btn" @click="delTask(scope.row)" type="primary" text>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination
          v-model:current-page="queryForm.pageNum"
          v-model:page-size="queryForm.pageSize"
          :total="total"
          layout="total, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
  <edit-task @addNewType="addNewType" ref="dialog"></edit-task>
  <work-dialog @confirmWork="confirmWork" ref="workDialog"></work-dialog>
</template>
<script>
import EditTask from "./edit-task.vue"
import WorkDialog from "./work-dialog.vue"
import {ElMessageBox} from "element-plus";
import {getTasksData} from "../api";
export default {
  name:"HelloWorld",
  components:{
    WorkDialog,
    EditTask
  },
  data(){
    return{
      queryForm:{
        pageNum: 1,
        pageSize: 4,
      },
      total: 0,
      tasksData:[],//任务数据
      worksEditingIndex: null,//正在编辑的work指针
      worksEditingTypeIndex: null,//正在编辑的work所属task_id的index
      searchData: null
    }
  },
  mounted() {
    //获取任务列表
    getTasksData().then(res=>{
      this.tasksData = res.tasksData;
      this.total = res.tasksData.length;
    })
  },
  methods:{
    handleSizeChange(pageSize){
      this.queryForm.pageNum = 1;
      this.queryForm.pageSize = pageSize;
    },
    handleCurrentChange(pageNum){
      this.queryForm.pageNum = pageNum
    },
    /**
     * @desc: 编辑work
     * @param: index work指针
     * @param: typeIndex work所在任务类型指针
     */
    editWorks(index, typeIndex){
      this.$refs.workDialog.visible=true;
      this.$refs.workDialog.newWork=this.tasksData[typeIndex].works[index];
      this.$refs.workDialog.title=this.tasksData[typeIndex].task_id
      this.worksEditingIndex = typeIndex;
      this.worksEditingTypeIndex = index;
    },
    /**
     * @desc: 删除work
     * @param: index work指针
     * @param: typeIndex work所在任务类型指针
     */
    delWorks(index, typeIndex){
      ElMessageBox.confirm(
          "确认删除任务"+ this.tasksData[typeIndex].works[index].work_id+"吗?",
          {
            confirmButtonText: "确认",
            cancelButtonText: "取消"
          }
      ).then(()=>{
        this.tasksData[typeIndex].works.splice(index,1);
      })
    },
    /**
     * @desc: 确认编辑的work，该方法传递到子组件work-dialog.vue
     * @param: work 编辑内容
     */
    confirmWork(work, act){
      if (act===0){
        this.tasksData[this.worksEditingTypeIndex].works.push(work);
      }else{
        this.tasksData[this.worksEditingTypeIndex].works[this.worksEditingIndex] = work;
      }
      this.worksEditingIndex = null;
    },
    addNewWork(index){
      this.$refs.workDialog.visible = true;
      this.worksEditingTypeIndex = index;
      this.$refs.workDialog.action = 0
    },
    /**
     * @desc: 删除任务类型
     * @param: index 待删除的任务类型指针
     */
    delTask(index){
      ElMessageBox.confirm(
          "确认删除吗?",
          {
            confirmButtonText: "确认",
            cancelButtonText: "取消"
          }
      ).then(()=>{
        this.tasksData.splice(index,1)
      })
    },
    /**
     * @desc: 编辑任务类型
     * @param: index 待编辑的任务类型指针，index=-1插入新任务类型
     * @param: task 编辑内容
     */
    addNewType(task,index){
      console.log(index)
      if (index===-1){
        this.tasksData.push(task);
      }else{
        this.tasksData.splice(index, 1, task);
      }
    },
    /**
     * @desc: 确认编辑任务类型，该方法传递到子组件edit-task.vue
     * @param: index 待编辑的任务类型指针，index=-1插入新任务类型
     */
    editTaskType(index){
      this.$refs.dialog.visible = true;
      this.$refs.dialog.editIndex = index;
      if (index!==-1){
        this.$refs.dialog.newTaskType = this.tasksData[index];
      }
    },
    /* search(){
             getTasksData().then(res => {
               let filterList = Object.keys(res.tasksData[0])
               if(this.searchData){
                 this.tasksData = res.tasksData.filter(v=>{
                   return filterList.some(key=>{
                     return v[key].indexOf(this.searchData)>-1
                   })
                 })
               }else{
                 this.tasksData=res
               }
             })
     }*/
  }
}
</script>

<style scoped>
.add-btn{

}
.edit-btn{
  width: 40px;
  display: inline;
}
.task-content{
  margin-left: 30px;
}
.task-content span{
  display:block;
  float: left;
  margin-right: 20px;
  width: 150px;
  color: #73767a;
  font-weight: bold;
  font-size: 14px;
}
.search-bar{
  display: inline;
  left: 0;
  float: left;
  /*margin: 0 85% 10px 0;*/
}
</style>

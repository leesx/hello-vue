<template>
    <div>
        <h1 @click="clickMsg">{{msg}}</h1>
        <el-button type="primary" :disabled="isDisabled">主要按钮</el-button>
        <el-button
                type="primary"
                @click="openFullScreen"
                v-loading.fullscreen.lock="fullscreenLoading">
            指令方式
        </el-button>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
        <el-button type="text" @click="open2">点击打开 Message Box</el-button>

        <div>
            <p>
                <!--<button @click="tab(1)">1</button><button @click="tab(2)">2</button><button @click="tab(3)">3</button>-->
                <button :class="{active: index+1 === curTab}" v-for="(item,index) in Array(3)" @click="tab(index+1)">{{index+1}}</button>
            </p>
            <div v-show="curTab == 1">tab1</div>
            <div v-show="curTab == 2">tab2</div>
            <div v-show="curTab == 3">tab3</div>
        </div>

        <el-table
                stripe
                border
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>

</template>
<script>
    export default{
        data() {
            return {
                curTab:1,
                isDisabled:true,
                fullscreenLoading: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        props: {
            msg: { type: String, default: '载入中，请稍候～～' }
        },
        methods:{
            tab(index){
                this.curTab = index;
            },
            clickMsg () {
                console.log(this)
                alert(this.msg)
            },
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.isDisabled = false;
                }, 2000);
            },
            open() {
                this.$alert('这是一段内容666666', '标题名称hello', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            open2() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style>
    .active{
        color:#f00;
        font-size: 16px;
    }
</style>
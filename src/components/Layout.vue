<template>
    <el-container>
        <el-header>
            <div class="logo">
                <img src="./../assets/logo.png">
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <AsideMenu />
            </el-aside>
            <el-main>
                <HelloWorld />
                <Test msg="加载中...." />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import HelloWorld from '@/components/HelloWorld';
    import AsideMenu from '@/components/AsideMenu';
    import Test from '@/components/Test/test';
    export default {
        name: 'Layout',
        components:{
            HelloWorld,
            AsideMenu,
            Test,
        },
        data () {
            return {
                msg: 'layout'
            }
        }
    }
</script>
<style scoped>
    .logo{
        box-sizing: border-box;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border:2px solid #2c3e50;
    }
    .logo img{
        max-height: 100%;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
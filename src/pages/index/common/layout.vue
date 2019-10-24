<template>
    <el-container>
        <el-aside width="200px">
            <aside-com></aside-com>
        </el-aside>
        <el-container>
            <el-header>
                <header-com/>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import HeaderCom from './header.vue';
import AsideCom from './aside.vue';
export default {
  components: {
    HeaderCom,
    AsideCom
  }
};
</script>

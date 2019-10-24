<template>
    <div>
        <div class="menu-logo">主体管理系统</div>
        <el-menu class="m-menu" text-color="#fff" :router="true">
            <el-menu-item v-for="item in menus" :key="item.path" :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [
        {
          title: '导航一',
          icon: 'el-icon-menu',
          path: '/home'
        },
        {
          title: '导航二',
          icon: 'el-icon-document',
          path: '/nav2'
        },
        {
          title: '导航三',
          icon: 'el-icon-setting',
          path: '/nav3'
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import 'mis@assets/vars.scss';
.menu-logo {
  height: 60px;
  line-height: 60px;
  width: 200px;
}
.m-menu {
  background-color: $colorNav;
}
.el-menu-item.is-active,
.el-menu-item:hover {
  color: $colorWhite;
  background-color: $colorBlue;
}
</style>

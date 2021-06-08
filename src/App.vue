<template>
  <div id="app">
    <el-container>
      <el-aside width="238px">
        <div class="menu">
          <el-menu
              default-active="/home"
              class="emenu"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              style="width: 220px;height: 100vh"
              router
              :unique-opened="true">
            <el-menu-item index="/home">
              <i class="el-icon-house"></i>首页
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-caret-top"></i>
                <span style="color: yellow">三角形问题</span>
              </template>
              <el-menu-item index="/triangle"><i class="el-icon-reading"></i>问题分析</el-menu-item>
              <el-menu-item index="/triangleDe"><i class="el-icon-magic-stick"></i>系统设计</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>销售管理问题</span>
              </template>
              <el-menu-item index="/sellingManage"><i class="el-icon-reading"></i>问题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-shopping-cart-2"></i>
                <span style="color: yellow">电脑销售问题</span>
              </template>
              <el-menu-item index="/computerSelling"><i class="el-icon-reading"></i>问题分析</el-menu-item>
              <el-menu-item index="/computerSellingDe"><i class="el-icon-magic-stick"></i>系统设计</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-finance"></i>
                <span>电商平台问题</span>
              </template>
              <el-menu-item index="/e_commerce"><i class="el-icon-reading"></i>问题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span style="color: yellow">项目部署与分析</span>
              </template>
              <el-menu-item index="/projectAna"><i class="el-icon-reading"></i>问题分析</el-menu-item>
              <el-menu-item index="/projectAnaDe"><i class="el-icon-magic-stick"></i>系统设计</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span style="color: yellow">电信收费问题</span>
              </template>
              <el-menu-item index="/telCharge"><i class="el-icon-reading"></i>问题分析</el-menu-item>
              <el-menu-item index="/telChargeDe"><i class="el-icon-magic-stick"></i>系统设计</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>实时C/S系统问题</span>
              </template>
              <el-menu-item index="/cs_system"><i class="el-icon-reading"></i>问题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span style="color: yellow">万年历问题</span>
              </template>
              <el-menu-item index="/calendar"><i class="el-icon-reading"></i>问题分析</el-menu-item>
              <el-menu-item index="/calendarDe"><i class="el-icon-magic-stick"></i>系统设计</el-menu-item>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <i class="el-icon-money"></i>
                <span style="color: yellow">ATM问题</span>
              </template>
              <el-menu-item index="/atm"><i class="el-icon-reading"></i>问题分析</el-menu-item>
              <el-menu-item index="/atmDe"><i class="el-icon-magic-stick"></i>系统设计</el-menu-item>
            </el-submenu>
            <el-submenu index="10">
              <template slot="title">
                <i class="el-icon-monitor"></i>
                <span>ERP系统问题</span>
              </template>
              <el-menu-item index="/atm"><i class="el-icon-reading"></i>问题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="11">
              <template slot="title">
                <i class="el-icon-folder-opened"></i>
                <span>实时Web系统问题</span>
              </template>
              <el-menu-item index="/atm"><i class="el-icon-reading"></i>问题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="12">
              <template slot="title">
                <i class="el-icon-cpu"></i>
                <span>C语言程序图问题</span>
              </template>
              <el-menu-item index="/atm"><i class="el-icon-reading"></i>问题分析</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <router-view style="z-index: 0"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0;
  overflow-x: hidden;
}
.el-main {
  position: absolute;
  left: 240px;
  right: 0;
  top: 0px;
  bottom: 0;
  overflow-y: scroll;
}
</style>

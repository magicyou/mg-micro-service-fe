<template>
 <div class="container" id="main-app">
<aside :style="'width:'+ (collapsed ? 80 : 250) +'px'">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-selected-keys="['Home']"
      :default-open-keys="['Home']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item v-for="(item, index) in menus" :key="item.index" @click="skip(item.path)">
        <a-icon :type="item.icon" />
           <span> {{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </aside>
  <content>
      <!-- 主应用渲染区域，用于挂在应用路由触发的组件 -->
      <router-view v-show="$route.name" />
      <!-- 子应用渲染区域，用于挂挂载子应用节点 -->
      <section  v-show="!$route.name" id="frame"></section>
  </content>
 </div>
</template>

<script>
import { Button, Menu, Icon  } from 'ant-design-vue';

import { VesselList } from '@/api/common/index';

export default {
    name: 'app',
    components: {
      AIcon: Icon,
      AButton: Button,
      AMenu: Menu,
      AMenuItem: Menu.Item,
      ASubMenu: Menu.SubMenu,

   
	},
	data() {
		return {
            collapsed: false,
           menus: [
                {
                    key: "Home",
                    title: "主页",
                    icon: 'home',
                    path: "/",
                },
                {
                    key: "VueMicroApp",
                    title: "访问记录",
                     icon: 'user',
                    path: "/vue",
                },
                {
                    key: "VueMicroAppList",
                    title: "vue2 页",
                    icon: 'area-chart',
                    path: "/vue2",
                },
            ]
		}
	},
	mounted() {
        // this.loadPageData();
    },
	methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
        /**
         * 路由跳转
         * @author Bruce Lee
         * @date 2020-08-02
         * @param {any} path
         * @returns {any}
         */
        skip (path) {
            this.$router.push(path)
        },
        /**
         * 初始数据加载
         * @author Bruce Lee
         * @date 2020-06-10
         * @returns {any}
         */
        async loadPageData() {
            this.getVesselList();
        },

        /**
         * 获取船舶列表
         * @author Bruce Lee
         * @date 2020-06-05
         * @returns {any}
         */
        getVesselList() {
            this.isLoadingVesselList = true;
            return VesselList().then((res) => {
                console.log('res:',res);
                if (res.code === 200) {
                    let data = res.data || [];
                    this.vesselList = data;
                }
            }).finally(() => {
                this.isLoadingVesselList = false;
            });
        },


	}
}
</script>
<style lang="scss" scoped>
.container{
    position: absolute;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
     background-color: RGBA(3, 15, 66, 1);
}
aside{
    width: 256px;
    background: #15224d;
    height: 100vh;
}
content{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: RGBA(3, 15, 66, 1);
}
</style>

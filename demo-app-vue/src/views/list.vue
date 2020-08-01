<template>
 <div>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Title"
        sub-title="This is a subtitle"
        @back="() => null"
    />
 </div>
</template>

<script>
import { Button, Menu, Icon, PageHeader   } from 'ant-design-vue';

export default {
    name: 'report',
    components: {
      APageHeader: PageHeader,
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
                    path: "/",
                },
                {
                    key: "VueMicroApp",
                    title: "Vue 主页",
                    path: "/vue",
                },
                {
                    key: "VueMicroAppList",
                    title: "Vue 列表页",
                    path: "/vue/list",
                },
            ]
		}
	},
	mounted() {
    },
	methods: {
       

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
}
aside{
    width: 256px;
   background: pink;
}
content{
    flex: 1;
    background:powderblue;
}
</style>

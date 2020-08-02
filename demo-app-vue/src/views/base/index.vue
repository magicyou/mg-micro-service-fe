<template>
	<div class="wrapper">
		<div class="wrapper-header">
			<a-menu v-model="current" mode="horizontal" @select="menuSelect">
				<a-menu-item key="dashboard">
					<icon-font type="iconyibiaopan" />仪表盘
				</a-menu-item>
				<a-menu-item key="userPortrait">
					<icon-font type="iconuser-portrait" />用户画像
				</a-menu-item>
				<a-sub-menu disabled>
					<span slot="title" class="submenu-title-wrapper">
						<icon-font type="iconrizhi" />来访记录
					</span>
					<a-menu-item-group title="Item 1">
						<a-menu-item key="setting:1">Option 1</a-menu-item>
						<a-menu-item key="setting:2">Option 2</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group title="Item 2">
						<a-menu-item key="setting:3">Option 3</a-menu-item>
						<a-menu-item key="setting:4">Option 4</a-menu-item>
					</a-menu-item-group>
				</a-sub-menu>
                <a-sub-menu disabled>
					<span slot="title" class="submenu-title-wrapper">
						<icon-font type="iconjiantou-copy-copy" />更多
					</span>
					<a-menu-item-group title="Item 1">
						<a-menu-item key="setting:1">Option 1</a-menu-item>
						<a-menu-item key="setting:2">Option 2</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group title="Item 2">
						<a-menu-item key="setting:3">Option 3</a-menu-item>
						<a-menu-item key="setting:4">Option 4</a-menu-item>
					</a-menu-item-group>
				</a-sub-menu>
			</a-menu>
		</div>

		<!-- 主内容区 -->
		<div class="wrapper-content">
			<router-view />
		</div>
	</div>
</template>

<script>
import {
	Button,
	Menu,
	Icon,
} from 'ant-design-vue'

export default {
	name: 'report',
	components: {
		AIcon: Icon,
		AButton: Button,
		AMenu: Menu,
		AMenuItem: Menu.Item,
		ASubMenu: Menu.SubMenu,
	},
	data() {
		return {
			current: ['dashboard'],
		}
	},
	mounted() {
		this.skip('dashboard')
		// this.skip('userPortrait')
	},
	methods: {
		/**
		 * 路由跳转
		 * @author Bruce Lee
		 * @date 2020-08-02
		 * @param {any} path
		 * @returns {any}
		 */
		skip(routerName) {
			this.$router.replace({ name: routerName })
		},
		menuSelect({ item, key, selectedKeys }) {
            this.$router.replace({ name: selectedKeys })
        },
	},
}
</script>
<style lang="scss" scoped>
.wrapper{
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .wrapper-header{
        height: 48px;
    }
    .wrapper-content{
        flex: 1;
        overflow-y: auto;
    }
}
</style>


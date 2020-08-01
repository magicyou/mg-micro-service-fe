<template>
	<div class="normal-panel">
        <!-- <img src="../assets/svg/normalBorder.svg" alt="" class="bg-img"> -->
		<p class="txt-header">
			<span>{{ title }}</span>
		</p>
		<div>
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NormalPanel',
	data() {
		return {
			activeNames: [0]
		}
	},

	props: {
		title: {
			default: '',
			type: String
		}
	},
	created() {},
	methods: {}
}
</script>

<style lang="scss" scoped>
.normal-panel {
    // background-image: url('../assets/images/normalBorder.png');
    background-image: url('../assets/svg/orderType01.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: RGBA(3, 15, 66, 1);
    box-sizing: border-box;
    position: relative;

    // .bg-img{
    //     position: absolute;
    //     width: 560px;
    //     height: 300px;
    //     top: 0;
    //     left:0;
    // }
}
</style>

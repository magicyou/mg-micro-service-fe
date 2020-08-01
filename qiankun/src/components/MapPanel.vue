<template>
	<div class="map-panel " :class="type == 1 ? 'bg-type01' : 'bg-type02'">
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
        },
        type: {
            default: 1,
			type: Number
        }
	},
	created() {},
	methods: {}
}
</script>

<style lang="scss" scoped>
.map-panel {
     background-image: url('../assets/svg/borderMapType01.svg');
    background-position-y: -5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: RGBA(3, 15, 66, 1);
    box-sizing: border-box;
    position: relative;

    // &.bg-type01{
    //      background-image: url('../assets/svg/orderType01.svg');
    // }

    // &.bg-type02{
    //      background-image: url('../assets/svg/orderType02.svg');
    // }

    // .bg-img{
    //     position: absolute;
    //     width: 560px;
    //     height: 300px;
    //     top: 0;
    //     left:0;
    // }
}
</style>

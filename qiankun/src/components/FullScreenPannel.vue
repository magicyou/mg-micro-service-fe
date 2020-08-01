<template>
	<div class="full-screen-pannel">
        <slot></slot>
	</div>
</template>

<script>
export default {
	name: 'FullScreenPannel',
	data() {
		return {
            activeNames: [0],
            size: {
                width: 1920,
                height: 1080,
            }
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
    mounted() {

    },
	methods: {
        getClassNameByType(type = 1) {
            let className = 'bg-type01';
            switch (type) {
                case 1: 
                    className = 'bg-type01';
                    break;
                case 2: 
                    className = 'bg-type02';
                    break;
                case 3: 
                    className = 'bg-type03';
                    break;
            }
            return className;
        }
    }
}
</script>

<style lang="scss" scoped>
    .full-screen-pannel{
        background-image: url('../assets/svg/fullBorder.svg');
        background-size: 1900px 1050px;
        background-repeat: no-repeat;
        background-position: 10px 10px;
        background-color: RGBA(3, 15, 66, 1);
        box-sizing: border-box;
        display: flex;
        padding: 0px 50px 40px;
    }
</style>

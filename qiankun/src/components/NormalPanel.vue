<template>
	<div class="normal-panel " :class="getClassNameByType(type)">
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
        },
        type: {
            default: 1,
			type: Number
        }
	},
	created() {},
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
.normal-panel {
    background-image: url('../assets/svg/borderType01.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: RGBA(3, 15, 66, 1);
    box-sizing: border-box;
    position: relative;

    &.bg-type01{
         background-image: url('../assets/svg/borderType01.svg');
    }
    &.bg-type02{
         background-image: url('../assets/svg/borderType02.svg');
    }
    &.bg-type03{
         background-image: url('../assets/svg/borderType03.svg');
    }
}
</style>

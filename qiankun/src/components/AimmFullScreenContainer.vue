<template>
	<div id="aimm-full-screen-container" class="aimm-full-screen-container">
        <div id="aimm-full-screen-container-inner" class="aimm-full-screen-container-inner" :style="'width: '+ size.width +'px; height: '+ size.height +'px'">
            <slot></slot>
        </div>
	</div>
</template>

<script>
export default {
	name: 'AimmFullScreenContainer',
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
            var width = this.size.width;
            var height = this.size.height;
            var domContainer = document.querySelector('#aimm-full-screen-container');
            var domContainerInner = document.querySelector('#aimm-full-screen-container-inner');
            var w = document.documentElement.clientWidth;
            var scale = w/width;
            domContainerInner.style.transform = 'scale('+scale+')';
            domContainer.style.height = scale * height + 'px';
            window.addEventListener('resize', () => {
                var w = document.documentElement.clientWidth;
                console.log('w:',w);    
                var scale = w/width;
                domContainerInner.style.transform = 'scale('+scale+')';
                domContainer.style.height = scale * height + 'px';
            });
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
.aimm-full-screen-container{
    overflow: hidden;
    .aimm-full-screen-container-inner{
        transform-origin: 0 0 0;
    }
}
</style>

<template>
	<div>
       <dv-full-screen-container class="dv-full-screen-container" :width="1920">
            <div class="container-inner">
                            <img src="../../assets/test.webp" alt="">

            </div>
        </dv-full-screen-container>
    </div>
</template>

<script>
import NormalPanel from '@/components/NormalPanel';
import { VesselList } from '@/api/common/index';

export default {
    name: 'report',
    components: {
        NormalPanel,
	},
	data() {
		return {
            vesselList: [],
            option: {
                    title: {
                    text: '剩余油量表',
                    style: {
                    fill: '#fff'
                    }
                },
                series: [
                    {
                    type: 'gauge',
                    data: [ { name: 'itemA', value: 55 } ],
                    center: ['50%', '55%'],
                    axisLabel: {
                        formatter: '{value}%',
                        style: {
                        fill: '#fff'
                        }
                    },
                    axisTick: {
                        style: {
                        stroke: '#fff'
                        }
                    },
                    animationCurve: 'easeInOutBack'
                    }
                ]
            }
		}
	},
	mounted() {
        this.loadPageData();
    },
	methods: {
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
<style lang="scss">
#dv-full-screen-container {
    position: absolute !important;
}
.dv-full-screen-container{
    background-size: 100%;
    background-color: RGBA(3, 15, 66, 1);
    box-sizing: border-box;
    display: flex;
}
.container-inner{
    flex: 1;
    display: flex;
    flex-direction: row;
    img{
        flex: 1
    }
}
.wrapper-aside{
    width: 747px;
    background: cadetblue;
    display: flex;
    flex-direction: column;

    .normal-panel{
        height: 400px;

        &+.normal-panel{
            margin-top: 13px;
        }
    }
}
</style>

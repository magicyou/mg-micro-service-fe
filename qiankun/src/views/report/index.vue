<template>
    <div class="wrapper">
		<a-row :gutter="[16,16]">
            <a-col :span="16" >
                 <a-card :bordered="false">
                     <a-col :span="12">
                    <a-card :bordered="false" :headStyle="{'color':'#fff'}">
                        <a-statistic
                            title="新增用户"
                            :value="899"
                            :precision="0"
                            :value-style="{ color: '#fff' }"
                            style="margin-right: 50px"
                        >
                            <template #prefix>
                                <a-icon type="arrow-up" />
                            </template>
                        </a-statistic>
                    </a-card>
                </a-col>
                <a-col :span="12" >
                    <a-card :bordered="false">
                        <a-statistic
                            title="较昨日增长"
                            :value="9.3"
                            :precision="2"
                            suffix="%"
                            class="demo-class"
                            :value-style="{ color: '#cf1322' }"
                        >
                            <template #prefix>
                                <a-icon type="arrow-down" />
                            </template>
                        </a-statistic>
                    </a-card>
                </a-col>
                <a-col :span="12" >
                    <a-card :bordered="false" :headStyle="{'color':'#fff'}">
                        <a-statistic
                            title="新增用户"
                            :value="899"
                            :precision="0"
                            :value-style="{ color: '#fff' }"
                            style="margin-right: 50px"
                        >
                            <template #prefix>
                                <a-icon type="arrow-up" />
                            </template>
                        </a-statistic>
                    </a-card>
                </a-col>
                <a-col :span="12" >
                    <a-card :bordered="false">
                        <a-statistic
                            title="较昨日增长"
                            :value="9.3"
                            :precision="2"
                            suffix="%"
                            class="demo-class"
                            :value-style="{ color: '#cf1322' }"
                        >
                            <template #prefix>
                                <a-icon type="arrow-down" />
                            </template>
                        </a-statistic>
                    </a-card>
                </a-col>
                 </a-card>
			</a-col>
            <a-col :span="8" >
                <a-card :bordered="false">
                     <div class="card-header"><span class="iconfont iconrenwunannv"></span>系统信息</div>
                     <a-table 
                     :columns="columns" 
                     :data-source="data" 
                     :showHeader="false" 
                     :pagination="false" 
                     bordered>
                    </a-table>
                </a-card>
            </a-col>

            <a-col :span="24">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconrenwunannv"></span>流量统计</div>
					<div style="height: 300px;width:100%" ref="chartsAge"></div>
				</a-card>
			</a-col>

			
		</a-row>
    </div>
</template>

<script>
import {
	Button,
	Menu,
	Icon,
	Row,
	Col,
	Statistic,
	Card,
	Table,
	Divider,
} from 'ant-design-vue'

import { VesselList } from '@/api/common/index';

export default {
    name: 'report',
    components: {
      AIcon: Icon,
      AButton: Button,
      AMenu: Menu,
      AMenuItem: Menu.Item,
      ASubMenu: Menu.SubMenu,
      ARow: Row,
		ACol: Col,
		AStatistic: Statistic,
		ACard: Card,
        AIcon: Icon,
        ATable: Table,
	},
	data() {
		return {
            columns: [
                {
					dataIndex: 'title',
					key: '0',
					width: 100,
					title: '序号',
				},
				{
					dataIndex: 'desc',
					key: '1',
					title: 'Name',
				}
			],
            data: [
				{
					title: '操作系统',
					desc: '	CentOS Linux release 7.6.1810 (Core)',
				},
				{
					title: 'CPU',
					desc: '	Intel(R) Xeon(R) CPU E5-26xx v',
                },
                {
					title: 'CPU',
					desc: '	Intel(R) Xeon(R) CPU E5-26xx v',
                },
                {
					title: 'CPU',
					desc: '	Intel(R) Xeon(R) CPU E5-26xx v',
				},
			],
		}
	},
	mounted() {
        this.initChartsAge();
    },
	methods: {
        renderEcharts(domId, options) {
            this.$nextTick(
				() => {
					setTimeout(() => {
						var myChart = echarts.init(this.$refs[domId])
						// 使用刚指定的配置项和数据显示图表。
						myChart.setOption(options)
						window.addEventListener('resize', function () {
							myChart.resize()
						})
					}, 1000)
				},
				(err) => {
					console.log('err:', err)
				}
			)
        },
        initChartsAge() {
			const initSeries = (name, data, baseColor, emphasisColor) => {
				return {
					name: name,
					type: 'line',
					color: baseColor,
					symbol: 'circle',
					showSymbol: true,
					smooth: true,
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: baseColor,
							},
							{
								offset: 1,
								color: 'rgba(4, 31, 92, 0)',
							},
						]),
					},
					label: {
						show: false,
					},
					emphasis: {
						label: {
							show: true,
							color: 'rgba(255,255,255,1)',
							position: 'top',
							backgroundColor: emphasisColor,
							borderColor: emphasisColor,
							borderWidth: 1,
							borderRadius: 4,
							fontSize: 14,
							width: 36,
							height: 24,
							lineHeight: 24,
							align: 'center',
							rich: {
								a: {
									color: '#999',
									lineHeight: 22,
									align: 'center',
								},
							},
						},
					},
					data: data,
				}
			}
			let options = {
				grid: {
					left: '5%',
					right: '5%',
					top: 30,
					bottom: 60,
				},
				tooltip: {
					trigger: 'axis',
					backgroundColor: 'rgba(0,52,124,0.8)',
					borderColor: 'rgba(0,73,172,1)',
					borderWidth: 1,
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999',
						},
					},
					textStyle: {
						color: '#fff',
						fontSize: 12,
					},
				},
				legend: {
					show: false,
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: ['0', '1', '2', '3', '4', '5', '6', '7',8,9,10,11,12,13,14,15,16,17,18,19,20],
						axisPointer: {
							type: 'shadow',
						},
						axisTick: {
							show: false,
						},
						axisLabel: {
							color: '#fff',
							fontSize: 12,
							margin: 10,
						},
						axisLine: {
							lineStyle: {
								color: '#fff',
								width: 1,
							},
						},
						splitLine: {
							show: false,
						},
					},
				],
				yAxis: [
					{
						type: 'value',
						axisTick: {
							show: false,
						},
						axisLabel: {
							color: '#fff',
							fontSize: 12,
							margin: 10,
							formatter: '{value}',
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: 'fff',
								width: 2,
							},
						},
						splitLine: {
							show: false,
						},
					},
				],
				animationDuration: 2000,
				series: [
					initSeries(
						'Lng',
						[12, 203, 341, 32, 16, 44, 32, 16,12, 203, 341, 32, 16, 44, 32, 16,12, 203, 341, 32, 16, 44, 32, 16],
						'#EECA58',
						'#F77A59'
					),
				],
			}
			this.renderEcharts('chartsAge', options);
        },

	}
}
</script>
<style lang="scss" scoped>
.wrapper {
	padding: 10px;
	box-sizing: border-box;
}
.ant-card {
	background: #15224d;
	border-radius: 8px;
	color: #fff !important;

    .ant-card {
        background: rgba(0, 21, 41, .35);
        border-radius: 8px;
        color: #fff !important;
    }
}

</style>
<style lang="less">
.ant-statistic-title {
		color: #ffffff !important;
	}
.card-header{
    margin-bottom: 12px;
}
.ant-table-tbody{
    color: #fff;
}
</style>


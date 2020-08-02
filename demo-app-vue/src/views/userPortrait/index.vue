<template>
	<div class="wrapper">
		<a-row :gutter="[16,16]">
            <a-col :span="8">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconrenwunannv"></span>男女比例</div>
					<div style="height: 300px;width:100%" ref="chartsSex"></div>
				</a-card>
			</a-col>
            <a-col :span="16">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconrenwunannv"></span>各年龄段分布</div>
					<div style="height: 300px;width:100%" ref="chartsAge"></div>
				</a-card>
			</a-col>
            <a-col :span="8">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconfangkeguanli"></span>新老访客比例</div>
					<div style="height: 300px;width:100%" ref="chartsVister"></div>
				</a-card>
			</a-col>
            <a-col :span="16">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconshijian"></span>各时间段访客分布</div>
					<div style="height: 300px;width:100%" ref="chartsVisterDistribution"></div>
				</a-card>
			</a-col>

			<a-col :span="14">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconjiaoyinzujifangke"></span>近七天浏览</div>
					<div style="height: 300px;width:100%" ref="chartsCloseDay7Vister"></div>
				</a-card>
			</a-col>
			<a-col :span="10">
				<a-card :bordered="false">
                    <div class="card-header"><span class="iconfont iconfenbu"></span>地区分布</div>
					<div style="height: 300px;width:100%" ref="chartsAddressTop"></div>
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

export default {
	name: 'report',
	components: {
		ARow: Row,
		ACol: Col,
		AStatistic: Statistic,
		ACard: Card,
		AIcon: Icon,
		AButton: Button,
		AMenu: Menu,
		AMenuItem: Menu.Item,
		ASubMenu: Menu.SubMenu,
		ATable: Table,
		ADivider: Divider,
	},
	data() {
		return {
		}
	},
	mounted() {
		// this.initEcharsLine()
		this.initChartsSex()
		this.initChartsAge()
		this.initChartsVister()
		this.initChartsVisterDistribution()
		this.initChartsCloseDay7Vister()
		this.initChartsAddressTop()
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
		initChartsSex() {
			let data = [
				{ name: '男', value: 18 },
				{ name: '女', value: 24 },
				{ name: '未知', value: 58 },
			]
			console.log('initEchars:')
			let options = {
				color: [
					// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#19BACB', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#27EFA0', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#EECA58', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#F77A59', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#046EE7', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#0693FF', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					'rgba(6, 147, 255, 1)',
					'rgba(229, 169, 4, 1)',
					'rgba(241, 119, 38, 1)',
					'rgba(217, 49, 126, 1)',
					'rgba(168, 46, 220, 1)',
					'rgba(104, 73, 255, 1)',
					'rgba(219, 97, 77, 1)',
					'rgba(217, 133, 70, 1)',
					'rgba(73, 114, 206, 1)',
				],
				grid: {
					left: '5%',
					right: '10%',
					top: 50,
					bottom: 40,
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999',
						},
					},
				},
				legend: {
					show: false,
				},
				series: [
					{
						name: 'Flag',
						type: 'pie',
						roseType: 'radius',
						radius: ['25%', '40%'],
						center: ['50%', '50%'],
						avoidLabelOverlap: true,
						label: {
							normal: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize: 12,
								},
								formatter: ' {per|{d}%} \n {b|{b}}',
								width: 150,
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center',
									},
									b: {
										lineHeight: 20,
										fontSize: 12,
										color: '#fff',
									},
									per: {
										color: 'rgba(59, 242, 236, 1)',
										fontSize: 16,
									},
								},
							},
						},
						labelLine: {
							show: true,
							length: 10,
							length2: 10,
						},
						data: data,
					},
				],
			}
			this.renderEcharts('chartsSex', options);
        },
        initChartsAge() {
			console.log('initEchars:')
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
						data: ['小于18', '18-25', '25-30', '30-35', '35-40', '40-45', '45-50', '大于50'],
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
						[12, 203, 341, 32, 16, 44, 32, 16],
						'#EECA58',
						'#F77A59'
					),
				],
			}
			this.renderEcharts('chartsAge', options);
        },
        initChartsVister() {
			let data = [
				{ name: '新访客', value: 10 },
				{ name: '老访客', value: 90 },
			]
			console.log('initEchars:')
			let options = {
				color: [
					// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#19BACB', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#27EFA0', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#EECA58', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#F77A59', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#046EE7', // 0% 处的颜色
							},
							{
								offset: 1,
								color: '#0693FF', // 100% 处的颜色
							},
						],
						global: false, // 缺省为 false
					},
					'rgba(6, 147, 255, 1)',
					'rgba(229, 169, 4, 1)',
					'rgba(241, 119, 38, 1)',
					'rgba(217, 49, 126, 1)',
					'rgba(168, 46, 220, 1)',
					'rgba(104, 73, 255, 1)',
					'rgba(219, 97, 77, 1)',
					'rgba(217, 133, 70, 1)',
					'rgba(73, 114, 206, 1)',
				],
				grid: {
					left: '5%',
					right: '10%',
					top: 50,
					bottom: 40,
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999',
						},
					},
				},
				legend: {
					show: false,
				},
				series: [
					{
						name: 'Flag',
						type: 'pie',
						roseType: 'radius',
						radius: ['25%', '40%'],
						center: ['50%', '50%'],
						avoidLabelOverlap: true,
						label: {
							normal: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize: 12,
								},
								formatter: ' {per|{d}%} \n {b|{b}}',
								width: 150,
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center',
									},
									b: {
										lineHeight: 20,
										fontSize: 12,
										color: '#fff',
									},
									per: {
										color: 'rgba(59, 242, 236, 1)',
										fontSize: 16,
									},
								},
							},
						},
						labelLine: {
							show: true,
							length: 10,
							length2: 10,
						},
						data: data,
					},
				],
			}
			this.renderEcharts('chartsVister', options);
        },
        initChartsVisterDistribution() {
			const initSeries = (name, data, baseColor, emphasisColor) => {
				return {
					name: name,
					type: 'line',
					color: baseColor,
					symbol: 'circle',
					showSymbol: true,
					smooth: false,
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
						data: ['07:00-08:00', '08:00-09:00', '09:00-10:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00'],
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
						[12, 23, 44, 32, 16, 44, 32, 16],
						'#12BCB1',
						'rgba(67, 218, 234, 1)'
					),
				],
			}
			this.renderEcharts('chartsVisterDistribution', options);
        },
		initChartsCloseDay7Vister() {
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
						data: ['07-07', '07-06', '07-05', '07-04', '07-03', '07-02',, '07-01'],
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
						'Oil Tanker',
						[12, 13, 24, 54, 46, 56, 32, 16],
						'#1559C9',
						'rgba(43, 182, 251, 1)'
					),
				],
            }
            this.renderEcharts('chartsCloseDay7Vister', options);
        },
        initChartsAddressTop() {
			  let options = {
                grid:{
                    left: '10%',
                    right: '10%',
                    top: 50,
                    bottom: 10,
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,52,124,0.8)',
                    borderColor: 'rgba(0,73,172,1)',
                    borderWidth: 1,
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    show: false,
                },
                xAxis: [
                    {
                        type: 'value',
                        axisTick:{
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        }
                        
                        
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        data: ['北京','上海','广州','深圳','浙江','南京'],
                       
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisTick:{
                            show: false
                        },
                        axisLabel: {
                            color: '#92D3FF',
                            fontSize: 12,
                            margin:10,
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(25, 186, 230, 1)',
                                width: 2
                            }
                        },
                        splitLine: {
                            show: false,
                        }
                    }
                ],
                animationDuration: 2000,
                series: [
                    {
                        name: 'Fo',
                        type: 'bar',
                        color: "#409EFF",
                        barMaxWidth: 25,
                        label: {
                            show: true,
                            color: 'rgba(255,255,255,1)',
                            position: 'inside',
                            fontSize: 14,
                        },
                        itemStyle: {
							normal: {
                                // color: "#409EFF",
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(3, 110, 254, 1)'},
                                        {offset: 1, color: 'rgba(26, 187, 230, 1)'}
                                    ]
                                ),
							}
						},
                        data: [190,187,123,112,102,89]
                    },
                ]
            }
            this.renderEcharts('chartsAddressTop', options);
        },
        rowClassName(record, index) {
            console.log(record, index);

            if (index % 2 == 1) {
                return 'tab-row-bg'
            }

        }
	},
}
</script>
<style lang="scss" scoped>
.wrapper {
	padding: 10px;
	box-sizing: border-box;
}
aside {
	width: 256px;
	background: pink;
}
content {
	flex: 1;
	background: powderblue;
}
.ant-card {
	background: #15224d;
	border-radius: 8px;
	color: #fff !important;
}
.box-table{
    margin-top: 10px;
}
</style>
<style lang="less">
.box-item-status {
	.ant-statistic-title {
		color: #ffffff !important;
	}
}
.tab-row-bg{
    background-color: rgba(57, 100, 230, 0.1);
}
</style>

<template>
 <div class="wrapper">
     <a-row :gutter="[16,16]">
      <a-col :span="6" class="box-item-status">
        <a-card
        :bordered="false"
        :headStyle="{'color':'#fff'}"
        >
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
      <a-col :span="6"  class="box-item-status">
        <a-card
        :bordered="false"
        >
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

      <a-col :span="6" class="box-item-status">
        <a-card
        :bordered="false"
        :headStyle="{'color':'#fff'}"
        >
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#fff' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <a-icon type="arrow-up" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6"  class="box-item-status">
        <a-card
        :bordered="false"
        >
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#fff' }"
          >
            <template #prefix>
              <a-icon type="arrow-down" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>

            <a-col :span="14">
                
                <a-card
                :bordered="false"
                >
                <div style="height: 300px;width:100%" ref="echarsLine">

                    </div>
                </a-card>
            </a-col>
            <a-col :span="10">
                <a-card
                :bordered="false"
                >
                    <div style="height: 300px;width:100%" ref="FAndCForFlag">

                    </div>
                </a-card>
            </a-col>
            <a-col :span="24">
                 <a-card
                :bordered="false"
                >
                <a-table :columns="columns" :data-source="data">
                    <a slot="name" slot-scope="text">{{ text }}</a>
                    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                    <span slot="tags" slot-scope="tags">
                    <a-tag
                        v-for="tag in tags"
                        :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                    >
                        {{ tag.toUpperCase() }}
                    </a-tag>
                    </span>
                    <span slot="action" slot-scope="text, record">
                    <a>Invite 一 {{ record.name }}</a>
                    <a-divider type="vertical" />
                    <a>Delete</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
                    </span>
                </a-table>
                </a-card>
            </a-col>
        </a-row>
</div>
</template>

<script>
import { Button, Menu, Icon, Row, Col, Statistic, Card, Table, Divider  } from 'ant-design-vue';

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
             columns: [
                {
                    dataIndex: 'name',
                    key: 'name',
                    slots: { title: 'customTitle' },
                    width: 150,
                    scopedSlots: { customRender: 'name' },
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    width: 150,
                    key: 'age',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    width: 300,
                    key: 'address',
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    width: 300,
                    scopedSlots: { customRender: 'tags' },
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ]
		}
	},
	mounted() {
        this.initEcharsLine();
        this.initEchars();
    },
	methods: {
       initEcharsLine() {
            console.log('initEchars:');
            const initSeries = (name, data, baseColor, emphasisColor, ) => {
                return {
                        name: name,
                        type: 'line',
                        color: baseColor,
                        symbol: 'circle',
                        showSymbol: true,
                        smooth: true,
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: baseColor
                            }, {
                                offset: 1,
                                color: 'rgba(4, 31, 92, 0)'
                            }])
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
                                        align: 'center'
                                    },
                                }
                            },
                        },
                        data: data,
                    }
            };
            let options = {
                grid:{
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
                            color: '#999'
                        }
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                legend: {
                    show: true,
                    bottom: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: '#92D3FF',
                        fontSize: 12
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2016','2017','2018','2019','2020'],
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
                yAxis: [
                    {
                        type: 'value',
                        axisTick:{
                            show: false
                        },
                        axisLabel: {
                            color: '#92D3FF',
                            fontSize: 12,
                            margin:10,
                            formatter: '{value}',
                        },
                        axisLine: {
                            show: true,
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
                    initSeries('Bulk Carrier', [12,33,54,48, 51], "#E1A466", '#F77A59'), 
                    initSeries('Lng', [12,23,44, 32,16], "#12BCB1", 'rgba(67, 218, 234, 1)'), 
                    initSeries('Oil Tanker', [12,13,24,54,46], "#1559C9", 'rgba(43, 182, 251, 1)'), 
                ]
            }
            this.$nextTick(() => {
                setTimeout(()=>{
                    var myChart = echarts.init(this.$refs.echarsLine);
                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(options);
                    window.addEventListener('resize',function(){
                        myChart.resize();
                    });
                },1000);
				
			}, (err) => {
				console.log('err:',err);
			});
        },
              initEchars() {
			let data = [{name:'Bulk Carrier', value:18},{name:'LNG', value:24},{name:'Oil Tanker', value:58}];
            console.log('initEchars:');
            let options = {
                color: [// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#19BACB' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#27EFA0' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#EECA58' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#F77A59' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#046EE7' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0693FF' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },'rgba(6, 147, 255, 1)','rgba(229, 169, 4, 1)','rgba(241, 119, 38, 1)','rgba(217, 49, 126, 1)','rgba(168, 46, 220, 1)','rgba(104, 73, 255, 1)','rgba(219, 97, 77, 1)','rgba(217, 133, 70, 1)','rgba(73, 114, 206, 1)'],
                  title: {
                    textAlign: 'center',
                    text: 'Flag',
                    left: '48%',
                    top: '122px',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
                grid:{
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
                            color: '#999'
                        }
                    }
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
                                    color:'#fff',
                                    fontSize: 12,
                                },
                                formatter: ' {per|{d}%} \n {b|{b}}',
                                width: 150,
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    b: {
                                        lineHeight: 20,
                                        fontSize: 12,
                                        color: '#fff',
                                    },
                                    per: {
                                        color: 'rgba(59, 242, 236, 1)',
                                        fontSize: 16,
                                    }
                                }
                            }
                        },
                        labelLine: {
                            show: true,
                            length:10,
                            length2:10,
                        },
                        data: data,
                    },
                ]
            }
            this.$nextTick(() => {
                setTimeout(()=>{
                    var myChart = echarts.init(this.$refs.FAndCForFlag);
                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(options);
                    window.addEventListener('resize',function(){
                        myChart.resize();
                    });
                },1000);
				
                
			}, (err) => {
				console.log('err:',err);
			});
        },

	}
}
</script>
<style lang="scss" scoped>
.wrapper{
    padding: 10px;
    box-sizing: border-box;
}
aside{
    width: 256px;
   background: pink;
}
content{
    flex: 1;
    background:powderblue;
}
.ant-card{
    background: #15224d;
    border-radius: 8px;
    color: #fff !important;
}
</style>
<style lang="less">
.box-item-status{
    .ant-statistic-title {
        color: #ffffff !important;
    }
}


</style>

import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入环形图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';

export default class EchartPie extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <div className="" style={{color:'pink', width: '100%', height: '400px'}} id="box_echarts_bug_trend">

            </div>
    }

    componentDidMount () {
        this.initEcharts();
    }

    initEcharts() {
        let column = [
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00"
          ];
          let data = [
            60,
            30,
            85,
            168,
            101,
            112
          ];
        var myChart = echarts.init(document.getElementById('box_echarts_bug_trend'));
        let options = {
            grid:{
                left: 30,
                right: 20,
                top: 45,
                bottom: 50,
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
            xAxis: [
                {
                    type: 'category',
                    data: column,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisTick:{
                        show: false
                    },
                    axisLabel: {
                        color: '#222',
                        fontSize: 12,
                        formatter:function(params){
                            return params.split(' ')[1];
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(197, 60, 77, 1)',
                            width: 1
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#292C38'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    axisTick:{
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#fff',
                        fontSize: 12
                    },
                    axisLine: {
                        show: false,
                        symbol: ['none', 'arrow'],
                        lineStyle: {
                            color: '#DEE1E8',
                            width: 2
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(153, 181, 255, 0.3)',
                            type: 'dashed',
                            width: 1
                        }
                    }
                }
            ],
            animationDuration: 2000,
            series: [
                {
                    name: 'bug',
                    type: 'line',
                    color: 'rgba(197, 60, 77, 1)',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(197, 60, 77, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(197, 60, 77, 0.7)'
                        }])
                    },
                    data: data
                }
            ]
        }
         // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(options);
        window.addEventListener('resize',function(){
            myChart.resize();
        });
    }


}
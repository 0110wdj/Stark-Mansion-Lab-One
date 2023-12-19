(() => {
  function makeCaseChart(updates, test) {
    return {
      legend: {
        data: ['用例数', "缺陷"],
        show: true,
        selectedMode: false,
        icon: 'circle',
        right: "right",
        orient: 'horizontal',
        textStyle: {
          fontSize: 14,
          color: "#FFFFFF",
        },
      },
      tooltip: {
        trigger: 'item',
        className: "cyl-tip",
        textStyle: {
          color: "#FFFFFF"
        },
        borderColor: " #003055;"
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: {
        type: 'time',
        axisLine: {
          lineStyle: {
            color: "#FFFFFF",
          }
        },
        min: updates[0] ? updates[0].updateAt : test?.createAt,
        max: test?.stopAt || Date.now(),
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: "#FFFFFF"
          }
        },
        axisLine: {
          lineStyle: {
            color: "#FFFFFF",
          }
        }
      },
      color: ["#60acfc", "#23C2DC", "#63D5B3", "#D5ED59", "#FFB64D", "#FA806D", "#D15B80", "#A252A9", "#686FCB", "#5B80C0", "#52B3EE", "#9CDC82", "#FFE168"],
      series: [
        {
          animation: false,
          name: '用例数',
          data: updates.map(u => [u.updateAt, u.caseCount]),
          type: 'line',
          stack: 'Total',
          showSymbol: false,
          color: '#FFFFFF',
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#44DDFF'
            }, {
              offset: 1,
              color: '#4DA1FF'
            }]),
          },
        },
        {
          animation: false,
          name: '缺陷',
          data: updates.map((u, i) => {
            const prev = updates[i - 1]?.problemCount || 0;
            if (u.problemCount > prev) {
              return [u.updateAt, u.caseCount, u.problemCount]
            }
            return []
          }).filter(a => a),
          type: 'scatter',
          color: 'rgb(176, 58, 91)',
          z: 3
        }
      ]
    };
  }
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('replayTest'));

  // 指定图表的配置项和数据
  const option = {
    title: {
      text: '缺陷等级分布'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  if (typeof replayTestData !== 'undefined') {
    const option = makeCaseChart(replayTestData?.updates, replayTestData?.test)
    myChart.setOption(option);
  } else {
    const option = makeCaseChart([], {})
    myChart.setOption(option);
  }
})()

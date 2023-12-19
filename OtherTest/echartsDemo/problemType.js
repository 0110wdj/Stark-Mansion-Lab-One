(() => {

  const ProblemTypes = {
    "0": "已修复",
    "1": "未知崩溃",
    "2": "死锁",
    "3": "内存问题",
    "4": "未定义行为",
    "5": "断言异常",
    "6": "未捕捉异常",
    "7": "其他问题",
    "8": "任意问题",
    "9": "go运行异常",
    "10": "数据库崩溃",
    "11": "逻辑错误",
    "12": "并发问题"
  }

  /**
    * @param {{ id: number, count: number }[] | { name: string, count: number }[]} count
    * @param {"USE_ID" | "USE_NAME"} type
    */
  function makeProblemChart(count, type = "USE_ID") {
    if (count?.length > 0) {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          className: "cyl-tip",
          textStyle: {
            fontSize: 14,
            color: "#FFFFFF"
          },
          borderColor: " #003055;",
          axisPointer: {
            animation: false
          }
        },
        legend: {
          type: 'scroll',
          orient: 'horizontal',
          padding: [0, 40, 0, 40],
          pageButtonItemGap: 0,
          pageButtonGap: 0,
          selectedMode: false,
          top: 16,
          textStyle: {
            color: '#ffffff',
            // width: 100
          },
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: "0%"
        },
        color: ["#60acfc", "#23C2DC", "#63D5B3", "#D5ED59", "#FFB64D", "#FA806D", "#D15B80", "#A252A9", "#686FCB", "#5B80C0", "#52B3EE", "#9CDC82", "#FFE168"],
        series: [
          {
            animation: false,
            name: '缺陷类型',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ["50%", "50%", "50%", "50%"],
            top: 50,
            // minAngle: 3,
            labelLine: {
              show: true,

            },
            label: {
              color: "#fff"
            },
            itemStyle: {
              shadowColor: "transparent"
            },
            data: count.map(c => ({
              name: type === "USE_ID" ? ProblemTypes[c.id] : c.name,
              value: c.count
            }))
          }
        ]
      }
    }
    return {
      series: {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
        },
        showBackground: true,
        axisLine: {
          lineStyle: {
            width: 20,
            color: [[1, "#225163"]]
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        detail: {
          show: false,
        }
      },
      graphic: {
        elements: [{
          type: "image",
          style: {
            image: "./img/empty.png",
            width: 80,
            height: 80,
          },
          left: "center",
          top: "center",
        }],
      }
    }
  }
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('problemType'));

  if (typeof problemTypeData !== 'undefined') {
    const option = makeProblemChart(problemTypeData?.count)
    myChart.setOption(option);
  } else {
    const option = makeProblemChart([])
    myChart.setOption(option);
  }
})()
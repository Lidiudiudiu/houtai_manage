<template>
  <div class="home">
    <div class="content">
      <div class="box1">
          <h2 class="daping">大屏可视化</h2>
      </div>
      <div class="box2">
        <dv-border-box-1>
          <h3>城市占比</h3>
          <dv-active-ring-chart :config="config" 
          style="width:100%;height:100%" />
        </dv-border-box-1>
      </div>
      <div class="box3">
        <ve-pie :data="chartData" height="100%" :extend="pieExtend"></ve-pie>
      </div>
      <div class="box4">
        <dv-border-box-2>
          <dv-capsule-chart :config="config" style="width:100%;height:100%" />
        </dv-border-box-2>
      </div>
      <div class="box5">
        <dv-border-box-5><dv-scroll-ranking-board :config="config" style="width:100%;height:100%" /></dv-border-box-5>
      </div>
      <div class="box6">
        <dv-border-box-6>
          <dv-percent-pond :config="config" style="width:100%;height:100%" />
        </dv-border-box-6>
      </div>
      <div class="box7">
        <dv-border-box-8>
          <dv-water-level-pond :config="config2" style="width:100%;height:100%" />
        </dv-border-box-8>
      </div>
      <div class="box8">
        <dv-border-box-11 title="xxxx表格"></dv-border-box-11>
      </div>
      <div class="box9">
        <dv-border-box-10><dv-conical-column-chart :config="config3" style="width:100%;height:100%;" /></dv-border-box-10>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          //DataV
          config:{
              data: [
                {
                  name: '周口',
                  value: 55
                },
                {
                  name: '南阳',
                  value: 120
                },
                {
                  name: '西峡',
                  value: 78
                },
                {
                  name: '驻马店',
                  value: 66
                },
                {
                  name: '新乡',
                  value: 80
                },
              ],
              
              lineWidth:10,
              digitalFlopStyle:{
                fontSize:18,
                fill:'#fff'
              },
              value:66
          },
          config2:{
            data:[66,45],
            shape:"roundRect",
          },
          config3:{
                        data:[
                {
                  name: '周口',
                  value: 55
                },
                {
                  name: '南阳',
                  value: 120
                },
                {
                  name: '西峡',
                  value: 71
                },
                {
                  name: '驻马店',
                  value: 66
                },
                {
                  name: '新乡',
                  value: 80
                },
                {
                  name: '信阳',
                  value: 35
                },
                {
                  name: '漯河',
                  value: 15
                }
              ],
              showValue:true
          },
          //v-charts数据
          chartData: {
            columns: ['日期', '销售额'],
            rows: [
              { '日期': '1月1日', '销售额': 123 },
              { '日期': '1月2日', '销售额': 1223 },
              { '日期': '1月3日', '销售额': 2123 },
              { '日期': '1月4日', '销售额': 4123 },
              { '日期': '1月5日', '销售额': 3123 },
              { '日期': '1月6日', '销售额': 7123 }
            ]
          },
          //用来改配置的
          pieExtend:{
            series:{
              radius:["0","50%"],  //内外半径,控制柄图大小
              center:["50%","50%"], //颜色
              label:{
                color:"#fff"
              }
            },
            legend:{
              textStyle:{
                color:'#fff'
              }
            }
          }
        }
    }
}
</script>

<style>

  h3{
    color:#fff;
    font-size: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .home {
    height: 100%;
    
  }
  .content{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 50px 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  .daping{
    text-align: center;
    margin:0;
    line-height: 50px;
    color: #fff;
    font-size:22px;
    font-weight: bold;
  }
  .box2{
    position: relative;
  }
  .box1{
    grid-column: span 3;
  }
  .box8{
    grid-column: span 2;
  }
</style>
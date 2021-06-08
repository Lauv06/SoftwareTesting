<template>
  <div id="calendarDe">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <h2>程序设计</h2>
        </template>
        <el-form status-icon label-width="100px" ref="dates" :model="dates" :rules="rules" style="width: 500px;margin: auto">
          <el-form-item label="年" prop="year">
            <el-input v-model.number="dates.year"></el-input>
          </el-form-item>
          <el-form-item label="月" prop="month">
            <el-input v-model.number="dates.month"></el-input>
          </el-form-item>
          <el-form-item label="日" prop="day">
            <el-input v-model.number="dates.day"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dates')">提交</el-button>
            <el-button @click="resetForm('dates')">重置</el-button>
          </el-form-item>
          <el-form-item label="下一天的日期">
            <h3 style="text-align: center">{{ result }}</h3>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <h2>测试数据</h2>
        </template>
        <el-select v-model="verValue" placeholder="请选择版本，默认ver1.0">
          <el-option
              v-for="item in verOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="typeValue" placeholder="请选择方法，默认边界类" style="margin-left: 20px">
          <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-button type="success" style="margin-left: 20px" @click="startTesting()">确定</el-button>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              prop="testCaseID"
              label="测试用例ID"
              width="120">
          </el-table-column>
          <el-table-column
              prop="year"
              label="年"
              width="120">
          </el-table-column>
          <el-table-column
              prop="month"
              label="月"
              width="120">
          </el-table-column>
          <el-table-column
              prop="day"
              label="日"
              width="120">
          </el-table-column>
          <el-table-column
              prop="expectedOutput"
              label="预期输出"
              width="180">
          </el-table-column>
          <el-table-column
              prop="actualOutput"
              label="实际输出"
              width="180">
          </el-table-column>
          <el-table-column
              prop="correctness"
              label="正确性"
              width="150">
          </el-table-column>
          <el-table-column
              prop="testTime"
              label="测试时间">
          </el-table-column>
        </el-table>
        <div id="myChart" style="width: 360px;height: 360px;margin: auto"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "CalendarDe",
  data() {
    return {
      result: '无输入',
      activeNames: ['1'],
      dates: {
        year: '',
        month: '',
        day: ''
      },
      rules: {
        year: [
          { required: true, message: '请输入年！', trigger: 'blur' },
          { type: 'number', message: '请输入数字！' }
        ],
        month: [
          { required: true, message: '请输入月！', trigger: 'blur' },
          { type: 'number', message: '请输入数字！' }
        ],
        day: [
          { required: true, message: '请输入日！', trigger: 'blur' },
          { type: 'number', message: '请输入数字！' }
        ]
      },
      verOptions: [{
        value: 'v1',
        label: 'ver1.0'
      }, {
        value: 'v2',
        label: 'ver2.0'
      }, {
        value: 'v3',
        label: 'ver3.0'
      }],
      typeOptions: [{
        value: 'boundary',
        label: '边界类测试'
      }, {
        value: 'equivalence',
        label: '等价类测试'
      }],
      verValue: 'v1',
      typeValue: 'boundary',
      tableData: [],
      correctNum: 0,
      errorNum: 0,
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.get('http://127.0.0.1:8000/api/calendar', {params: this.dates})
              .then((response) => {
                console.log(response)
                var res = JSON.parse(response.bodyText)
                this.result = res.reInfo
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    countNum() {
      var count = 0
      this.correctNum = 0;this.errorNum = 0
      while(count < this.tableData.length) {
        if(this.tableData[count].correctness === "正确") this.correctNum++
        else if(this.tableData[count].correctness === "错误") this.errorNum++
        count++
      }
    },
    startTesting() {
      this.$http.get('http://127.0.0.1:8000/api/calendarTest',
          {params: {version: this.verValue, method: this.typeValue}})
          .then((response) => {
            var res = JSON.parse(response.bodyText)
            console.log(res.list)
            this.tableData = res.list
            this.drawline()
          })
    },
    drawline() {
      this.countNum()
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            color: ['#91cc75','#ee6666'],
            name: '结果分析',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.correctNum, name: '正确结果'},
              {value: this.errorNum, name: '错误结果'},
            ]
          }
        ]
      });
    },
  }
}
</script>

<style scoped>

</style>
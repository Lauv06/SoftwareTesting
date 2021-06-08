<template>
  <div id="home">
    <div class="autoflow" style="text-align: center">
<!--      <el-calendar v-model="value" style="width: 50%;height: 500px">
      </el-calendar>-->
      <img src="@/assets/images/TJLogo3.jpg" style="margin-top: 50px">
      <p style="font-size: xx-large">{{ nowDate }}</p>
      <p>-----------------------------------</p>
      <p>DEVELOPED BY</p>
      <p>胡智超、张向龙、王传坤、黄安庆</p>
      <p>-</p>
      <p>指导教师：杜庆峰</p>
      <div style="height: 70px"></div>
      <img src="@/assets/images/arrow.png" style="width: 80px;height: 80px">
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      nowDate: ''
    }
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    }
  },
  mounted() {
    this.currentTime()
  }
}
</script>

<style scoped>
</style>
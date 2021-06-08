<template>
  <div id="calendar">
    <h1 style="font-size: xx-large">边界值方法</h1>
    <p style="font-size: larger">
      假定年份（记为a）的取值范围为1900到2100，月份（记为b）的取值范围为1到12, 1月、3月、5月、7月、8月、10月、12月，
      每个月可取到1到31日（记为c），4月、6月、9月、11月，每个月可取到1到30日，平年2月可取到1到28日，闰年2月可取到1到29日。
      据此，采用健壮性边界分析，对于年份和月份，每个变量有7种取值（包含正常值），对于日，分4种情况，每种情况有7种取值，
      共有6 + 6 +5*3 +1 = 28个测试用例。
    </p>
    <h1 style="font-size: xx-large">等价类方法</h1>
    <p style="font-size: larger">
      根据输入变量划分等价类，共有6种等价类：
    </p>
  </div>
</template>

<script>
export default {
  name: "Calendar"
}
</script>

<style scoped>

</style>
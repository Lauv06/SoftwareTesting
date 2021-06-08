<template>
  <div id="computerSelling">
    <h1 style="font-size: xx-large">边界值方法</h1>
    <p style="font-size: larger">
      主机的取值范围为1到70，显示器取值范围为1到80，外设取值范围为1到90，特殊的，主机取值为71亦合法。
      根据健壮性边界分析，每次使除一个以外的所有其他变量取正常值，
      使剩余的那个变量取一个略低于最小值的值、取一个最小值、略高于最小值、正常值、略低于最大值、最大值、略高于最大值，
      对每个变量都重复一次，去掉2个重复的都是正常值的测试用例，共有6*3+1 = 19个测试用例。
    </p>
    <h1 style="font-size: xx-large">等价类方法</h1>
    <p style="font-size: larger">
      根据输出结果（销售额）划分等价类，共三种等价类：销售额小于等于1000，销售额在1000-1800之间，
      销售额大于1800。强一般等价类共有3种，额外强健壮等价类测试用例共有C_3^1*3+C_3^2*3*3+C_3^3*3*3*3 = 63种。
      我们采用强健壮等价类测试，共有63 + 3 = 66个测试用例。
    </p>
  </div>
</template>

<script>
export default {
  name: "ComputerSelling"
}
</script>

<style scoped>

</style>
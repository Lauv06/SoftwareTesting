<template>
  <div id="triangle">
    <h1 style="font-size: xx-large">边界值方法</h1>
    <p style="font-size: larger">
      三角形边长的取值为大于0的数，采用健壮性边界分析，
      每次使除一个以外的所有其他变量取正常值，使剩余的那个变量取一个略低于最小值的值，
      取一个最小值、略高于最小值、正常值,对每个变量都重复一次，
      去掉2个重复的都是正常值的测试用例，共有3*3+1 = 10个测试用例。
    </p>
    <h1 style="font-size: xx-large">等价类方法</h1>
    <p style="font-size: larger">
      根据输出的结果划分等价类，共四种等价类：等边三角形、等腰三角形、不等边三角形、不构成三角形。
      强一般等价类测试用例共有4种；额外弱健壮等价类测试中某一个变量超出取值范围，
      则测试用例共有3 x 2 = 6种；额外强健壮等价类测试用例共有C_3^1  * 2 +C_3^2*2*2+C_3^3*2*2*2 = 26种。
      我们采用强健壮等价类测试，共有26 + 4 = 30个测试用例。
    </p>
  </div>
</template>

<script>
export default {
  name: "Triangle"
}
</script>

<style scoped>

</style>
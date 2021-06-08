<template>
  <div id="telCharge">
    <h1 style="font-size: xx-large">边界值方法</h1>
    <p style="font-size: larger">
      假设本月共有30天，则通话分钟上限为30*24*60 = 43200分钟。未按时缴费次数上限为12。
      据此，通话分钟数（记为a）的取值范围为0到43200，未按时缴费次数（记为b）的取值范围为0到12。
      根据健壮性边界分析，每次使除一个以外的所有其他变量取正常值，
      使剩余的那个变量取一个略低于最小值的值、取一个最小值、略高于最小值、正常值、略低于最大值、最大值、略高于最大值，
      对每个变量都重复一次，去掉1个重复的都是正常值的测试用例，共有6*2+1 = 13个测试用例。
    </p>
    <h1 style="font-size: xx-large">等价类方法</h1>
    <p style="font-size: larger">
      依据输入变量划分等价类，共有10种等价类：
    </p>
    <img src="@/assets/images/class1.png">
    <p style="font-size: larger">
      额外强健壮等价类测试用例共有 C_2^1*2+C_2^2*2*2= 8种。我们采用强健壮等价类测试，共有8 + 10 = 18个测试用例。
    </p>
  </div>
</template>

<script>
export default {
  name: "TelCharge"
}
</script>

<style scoped>

</style>
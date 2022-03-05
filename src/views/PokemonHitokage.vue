<template>
  <div class="output">
    <div class="content">
    <h3> {{ name }}&nbsp;&nbsp;&nbsp;&nbsp;No. {{number}}</h3>
    <img src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/89953014f442146518ef45787d9bb0a4.png"/>
    <p> {{ text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: '004',
      name: 'ヒトカゲ',
      text: 'ヒトカゲの　しっぽの　ほのおは　いのちの　ともしび。　げんきな　ときは　ほのおも　ちからづよく　もえあがる。　（『ポケットモンスター ブリリアントダイヤモンド・シャイニングパール』より）'
    }
  }
}
</script>

<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 50%;
}

img {
    width: 200px;  /* 横幅を200pxに */
}

h3 {
  color: blue;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
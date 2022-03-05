<template>
  <div class="output">
    <div class="content">
    <h3> {{ name }}&nbsp;&nbsp;&nbsp;&nbsp;No. {{number}}</h3>
    <img src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/5bb0cfd44302cd4df0c0c88d37457931.png"/>
    <p> {{ text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: '025',
      name: 'ピカチュウ',
      text: 'もりの　なかで　なかまと　くらす。　ほっぺたの　りょうがわにある　でんきぶくろに　でんきを　ためる。　（『ポケットモンスター ブリリアントダイヤモンド』より）'
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
<template>
  <div class="output">
    <div class="content">
    <h3> {{ name }}&nbsp;&nbsp;&nbsp;&nbsp;No. {{number}}</h3>
    <img src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/17388b7f608671656716ab509ee0fa05.png"/>
    <p> {{ text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: '007',
      name: 'ゼニガメ',
      text: 'こうらに　とじこもり　みを　まもる。　あいての　すきを　みのがさず　みずを　ふきだして　はんげきする。　（『ポケットモンスター ブリリアントダイヤモンド・シャイニングパール』より）'
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
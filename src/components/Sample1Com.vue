<template>
    <div class="hello">
        <!-- 親からきた内容 props -->
        <h1>{{ msg }}</h1>
        <div class="form-group">
            <!-- イベント v-on -->
            <div class="m-4">
                <input type="text" v-on:input="inputEvent">
                <label>{{ inputStr }}</label>
            </div>
            <div class="m-4">
                <button class="btn btn-primary mx-2" v-on:click=" cnt++ ">クリック</button>
                <label>{{ cnt }}</label>
                <button class="btn btn-secondary mx-2" v-on:click="clickEvent">リセット</button>
            </div>
            
            <div class="m-4">
                <!-- v-model myNameという変数を2WAYバインディングする -->
                <input type="text" v-model="myName">
                <label>バインド変数値：{{ myName }}</label>
                
            </div>

            <!-- v-if 値が真の場合のみ表示する -->
            <div class="m-4">
                <div v-if="modalError" class="alert alert-danger">{{modalError}}</div>
            </div>

            <!-- v-forを使ったデータテーブルサンプル -->
            <div class="m-4">
                <table class="table table-bordered table-striped" v-if="pokemonData">
                    <thead class="table-primary">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">なまえ</th>
                        <th scope="col">タイプ</th>
                        <th scope="col">ゲットする</th>
                    </tr>
                    </thead>
                    <tbody class="table-light">
                        <tr v-for="item in pokemonData" :key="item.id">
                            <td >{{ item.id }}</td>
                            <td >{{ item.name }}</td>
                            <td >{{ item.type }}</td>
                            <td> <button v-on:click="rowClick(item)" class="btn btn-primary mb-2">🖊</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="m-4">
            </div>


        </div>

    </div>
</template>

<script>
//sweet alert2を使うにはnpm install してここに記述するだけ
import Swal from 'sweetalert2';

export default {
    name: 'Sample1Com',
    props: {
        msg: String
    },
    data () {
        return {
            inputStr: "",
            cnt: 0,
            myName: '初期値',
            modalError: '',
            pokemonData: [
                {
                    id:"025",
                    name:"ピカチュウ",
                    type:"でんき"
                },
                {
                    id:"004",
                    name:"ヒトカゲ",
                    type:"ほのお"
                },
                {
                    id:"007",
                    name:"ゼニガメ",
                    type:"みず"
                },
                {
                    id:"001",
                    name:"フシギダネ",
                    type:"くさ"
                },
            ]
        }
    },
    methods:{
        inputEvent(event) {
            //console.log(event.target.value);
            this.inputStr = event.target.value;
        },
        clickEvent() {
            this.cnt = 0;
            this.modalError = "リセットされました";
        },
        rowClick(item) {
            Swal.fire(
                item.name + 'をゲット！',
                'やったー！　' + item.name + 'を　つかまえたぞ！',
                'success'
            );
        }
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #ffe8ff;
}

</style>

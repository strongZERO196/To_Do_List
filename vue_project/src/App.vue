<template>
  <div>
    <!-- クリックされた回数を表示 -->
    <P>現在{{  number }}回クリックされています</P>
    
    <!-- クリック時にカウントアップするボタン群 -->
    <button v-on:click="number +=1">カウントアップ</button>
    <button v-on:click="countUp">カウントアップ</button>
    <button @click="countUp">カウントアップ</button>
    
    <!-- 双方向バインディングのデモ -->
    <input type="text" v-model="kon">
    <h1>{{ kon }}</h1>
    
    <!-- カウンターと+1ボタン -->
    <p>{{ counter }}</p>
    <button @click="counter += 1">+1</button>
    
    <!-- カウンターの値に基づくメッセージ表示 -->
    <p>{{ lessThanThree }}</p>
    
    <!-- マウスの座標表示とイベント制御のデモ -->
    <p v-on:mousemove="changeMousePosition(3, $event)">マウスを載せてください
      <span v-on:mousemove.stop>反応しないでください</span>
    </p>
    
    <!-- リンククリック時のイベント制御 -->
    <a v-on:click.prevent href="https://google.com">Google</a>
    <p>X:{{ x }}、Y:{{ y }}</p>
    
    <!-- キーボードイベントデモ -->
    <input type="text" v-on:keyup.enter="myAlert">
    
    <!-- HTMLコンテンツの描画デモ -->
    <div>{{ html }}</div>
    <div v-html="html"></div>
    
    <!-- バインディングのデモ群 -->
    <a v-bind:href="url">Google</a>
    <a :[attribute]="url">Google</a>
    <a v-bind="twitterObject">Twitter</a>
    
    <!-- メッセージとボタンの操作デモ -->
    <div id="app">
       <p>{{ message }}</p>
       <button v-on:click="reverseMessage">メッセージを反転</button>
    </div>
    
    <!-- クラスとスタイルのバインディングデモ -->
    <h1 :class="classObject">Hello!!</h1>
    <button @click="isActive = !isActive">クラス切替</button>
    <h1 :class="[{red: isActive}, bg]">Hello</h1>
    <h1 :style="[styleObject, baseStyles]">Hello</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      message: 'Hello World!',
      html: '<h1>h1です</h1>',
      url: 'https://google.com',
      attribute: 'href',
      twitterObject: {
        href:'https://twitter.com',
        id:3
      },
      number: 0,
      x:0,
      y:0,
      kon:'こんにちは',
      counter: 0,
      isActive: true,
      color: 'red',
      bg: 'bg-blue',
      styleObject:{
        color: 'red',
        'background-color': 'yellow'
      },
      baseStyles: {
        fontSize: '60px'
      }
    }
  },
  computed: {
      // カウンターの値に応じた文字列を返す
      lessThanThree: function() {
        return this.counter > 3 ? '3より上' : '3以下'
    },
    // アクティブ状態に応じたクラスオブジェクトを返す
    classObject: function() {
      return {
        red: this.isActive,
        'bg-blue': !this.isActive
      }
    }
  },
  watch: {
    // counterが変更された際の処理
    counter: function() {
      var vm = this;
      setTimeout(function(){
        vm.counter = 0
      },3000)
    }
  },

  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    },
    sayHi: function(){
        this.message = 'Hello VueJS'
        return 'Hi'
    },
    countUp: function() {
      this.number += 1
    },
    changeMousePosition: function(divideNumber, event) {
      this.x = event.clientX / divideNumber;
      this.y = event.clientY / divideNumber;      
    },
    noEvent: function(event){
      event.preventDefault();
    },
    myAlert(){
      alert('アラート!')
    }
  }
}
</script>

// Vueライブラリをインポート
import Vue from 'vue';

// ルートコンポーネントであるApp.vueをインポート
import App from './App.vue';
import AppSecond from './AppSecondComponent.vue';
import AppThird from './AppThirdComponent.vue';
import AppFour from './AppFourComponent.vue';
// 新しいVueインスタンスを作成
new Vue({
  // IDが'app'のDOM要素にVueインスタンスをマウントする
  el: '#app',
  
  // Appコンポーネントを描画する
  // hはcreateElement関数のエイリアスとして使用される
  render: h => h(App)
})

// 新しいVueインスタンスを作成
new Vue({
  // IDが'app'のDOM要素にVueインスタンスをマウントする
  el: '#app2',
  
  // Appコンポーネントを描画する
  // hはcreateElement関数のエイリアスとして使用される
  render: h => h(AppSecond)
})

new Vue({
  el: '#app3',
  render: h => h(AppThird, {
    props: {
      initialMessage: 'aaaa'
    }
  })
});


new Vue({
  el: '#app4',
  render: h => h(AppFour, {
    props: {
      initialMessage: 'bbbb'
    }
  })
});
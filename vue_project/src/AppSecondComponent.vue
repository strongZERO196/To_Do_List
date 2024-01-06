<template>
  <div>
    <!-- メインコンテナ -->
    <div>
      <!-- アクティブ状態に応じたメッセージ表示 -->
      <P v-if="isActive">OK!</P>
      <p v-else-if="maybeOk">mayBe OK!</p>
      <p v-else>Not Ok</p>

      <!-- アクティブ状態のトグルボタン -->
      <button @click="isActive = !isActive">切替</button>

      <!-- フルーツのリスト（番号付き） -->
      <ul>
        <li v-for="(fruitItem, index) in fruits" :key="fruitItem">({{ index }}){{ fruitItem }}</li>
        <hr>
      </ul>

      <!-- オブジェクト内の各項目をリスト表示 -->
      <ul>
        <li v-for="(value, key, index) in object" :key="value">({{ index }}){{key}}-{{ value }}</li>
      </ul>
    </div>

    <!-- templateを使ってフルーツの別リストを表示 -->
    <ul>
      <template v-for="fruitItem in fruits">
        <li :key="'fruit-' + fruitItem">{{ fruitItem }}</li>
        <hr :key="'hr-' + fruitItem" />
      </template>
    </ul>

    <!-- 1から10までの数字を表示するリスト -->
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ul>

    <!-- 各フルーツ名の下にテキスト入力ボックスを表示 -->
    <div v-for="fruit in fruits" :key="fruit">
      <p>{{ fruit }}</p>
      <input type="text">
    </div>

    <!-- 配列の先頭要素を削除するボタン -->
    <button @click="remove">先頭を削除</button>
  </div>
</template>

<script>
export default {
  name: 'AppSecond',
  data: function() {
    return {
      ok: true,
      isActive: true,
      maybeOk: true,
      // フルーツ名の配列
      fruits: ['りんご', 'バナナ', 'ぶどう'],
      // 人物の詳細を保持するオブジェクト
      object: {
        firstName: '太郎',
        lastName: '田中',
        age: 21
      }
    }
  },
  methods: {
    // 配列の先頭要素を削除するメソッド
    remove: function() {
      this.fruits.shift()
    }
  }
}
</script>

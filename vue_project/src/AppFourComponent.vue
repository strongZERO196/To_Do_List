<template>
    <div>
        <p>{{ message }}</p>
        <button @click="changeMessage1">インスタンス1のメッセージを変更!</button>
    </div>
</template>

<script>
export default {
  name: 'AppFour',
  props: {
    initialMessage: String
  },
  data: function() {
    return {
      message: this.initialMessage || 'インスタンス２'
    };
  }
}
</script>

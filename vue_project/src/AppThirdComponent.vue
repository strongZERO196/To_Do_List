<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
  name: 'AppThird',
  props: {
    initialMessage: String
  },
  data: function() {
    return {
      message: this.initialMessage || 'インスタンス1'
    };
  }
}
</script>

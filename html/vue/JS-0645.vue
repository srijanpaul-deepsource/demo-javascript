<template>
  <!-- ✗ BAD -->
  <div v-if="$scopedSlots.default"><slot /></div>
</template>
<script>
export default {
  render() {
    /* ✗ BAD */
    return this.$scopedSlots.default()
  }
}
</script>

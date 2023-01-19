<template>
  <!-- ✓ GOOD -->
  <div
    is="header"
    v-for="item in items"
    v-if="!visible"
    v-once
    id="uniqueID"
    ref="header"
    v-model="headerData"
    my-prop="prop"
    @click="functionCall"
    v-text="textContent"
  ></div>
  <div
    v-for="item in items"
    v-if="!visible"
    prop-one="prop"
    :prop-two="prop"
    prop-three="prop"
    @click="functionCall"
    v-text="textContent"
  ></div>
  <div prop-one="prop" :prop-two="prop" prop-three="prop"></div>

  <!-- ✗ BAD -->
  <div
    ref="header"
    v-for="item in items"
    v-once
    id="uniqueID"
    v-model="headerData"
    my-prop="prop"
    v-if="!visible"
    is="header"
    @click="functionCall"
    v-text="textContent"
  ></div>
</template>

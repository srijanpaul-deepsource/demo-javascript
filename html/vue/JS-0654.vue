<template>
  <!-- ✓ GOOD -->
  <MyComponent v-bind:propName="foo"/>
  <MyComponent :propName="foo"/>


  <!-- ✗ BAD -->
  <MyComponent v-bind:propName.sync="foo"/>
  <MyComponent v-bind:[dynamiArg].sync="foo"/>
  <MyComponent v-bind.sync="foo"/>
  <MyComponent :propName.sync="foo"/>
</template>

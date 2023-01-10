<template>
  <ListComponent>
    <!-- ✓ GOOD -->
    <template v-slot:name="props">
      {{ props.title }}
    </template>
    <template slot="name" slot-scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
  <ListComponent>
    <!-- ✗ BAD -->
    <template slot="name" scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
</template>

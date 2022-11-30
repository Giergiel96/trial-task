<template>
  <h1>{{ constant }}</h1>
</template>

<script>
import { CONSTANT } from './@mock-package/vue';

export default {
  name: 'DisplayTitle',

  computed: {
    constant() {
      return CONSTANT;
    }
  }
}
</script>

<template>
  <div class="screen">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string;
}>();
</script>

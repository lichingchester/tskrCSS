<script setup>
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import DemoLayout from "./DemoLayout.vue";

const { Layout } = DefaultTheme;

const { frontmatter } = useData();
</script>

<template>
  <DemoLayout v-if="frontmatter.layout === 'Demo'"></DemoLayout>
  <Layout v-else></Layout>
</template>

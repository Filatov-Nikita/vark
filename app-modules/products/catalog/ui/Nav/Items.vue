<template>
  <div>
    <Item
      v-for="item in items"
      :item="item"
      :activeProductSlug="activeProductSlug"
    />
  </div>
</template>

<script setup lang="ts">
  import type { GroupItem } from '../../model/useGroupItems';
  import Item from './Item.vue';

  defineProps<{
    items: GroupItem[],
    activeProductSlug: string,
  }>();
</script>

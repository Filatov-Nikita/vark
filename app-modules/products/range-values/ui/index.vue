<template>
  <section class="ranges white-area">
    <div class="wrapper">
      <div v-if="productAttrs.rangeValues" class="ranges__wrap">
        <Item
          v-if="productAttrs.rangeValues.dn"
          name="Номинальный<br>диаметр (DN)"
          icon="dn"
          :from="productAttrs.rangeValues.dn.from"
          :to="productAttrs.rangeValues.dn.to"
        />
        <Item
          v-if="productAttrs.rangeValues.pn"
          name="Номинальное<br>давление (PN, кгс/см2)"
          icon="pn"
          :from="productAttrs.rangeValues.pn.from"
          :to="productAttrs.rangeValues.pn.to"
        />
        <Item
          v-if="t"
          name="Температура (℃)"
          icon="temp"
          :from="t.from"
          :to="t.to"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import type { ProductAttrs } from '@/stores/products/attrs';

  const props = defineProps<{
    productAttrs: ProductAttrs,
  }>();

  const t = computed(() => {
    const _t = props.productAttrs.rangeValues?.t;
    if(!_t) return null;

    return {
      from: _t.from > 0 ? `+${_t.from}` : _t.from,
      to: _t.to > 0 ? `+${_t.to}` : _t.to,
    }
  });
</script>

<style scoped lang="scss">
  .ranges {
    padding-top: 90px;
    padding-bottom: 40px;

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      column-gap: 100px;
    }
  }
</style>

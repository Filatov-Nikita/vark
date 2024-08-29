<template>
  <div class="table-attrs">
    <div class="row" v-if="productAttrs.rab_env">
      <div class="col1">Рабочая среда</div>
      <div class="col2">{{ productAttrs.rab_env }}</div>
    </div>
    <div class="row" v-if="productAttrs.body">
      <div class="col1">Исполнение корпуса</div>
      <div class="col2">{{ productAttrs.body }}</div>
    </div>
    <div class="row" v-if="productAttrs.spindle">
      <div class="col1">Вид шпинделя</div>
      <div class="col2">{{ productAttrs.spindle }}</div>
    </div>
    <div class="row" v-if="productAttrs.tight">
      <div class="col1">Вид уплотнителя</div>
      <div class="col2">{{ productAttrs.tight }}</div>
    </div>
    <div class="row" v-if="productAttrs.join">
      <div class="col1">Присоединение</div>
      <div class="col2">{{ productAttrs.join }}</div>
    </div>
    <div class="row" v-if="productAttrs.flanges">
      <div class="col1">Исполнение фланцев</div>
      <div class="col2">{{ productAttrs.flanges }}</div>
    </div>
    <div class="row" v-if="productAttrs.management">
      <div class="col1">Управление</div>
      <div class="col2">{{ productAttrs.management }}</div>
    </div>
    <div class="row" v-if="productAttrs.length">
      <div class="col1">Строительные длины</div>
      <div class="col2">{{ productAttrs.length }}</div>
    </div>
    <div class="row" v-if="productAttrs.tightness">
      <div class="col1">Герметичность затвора</div>
      <div class="col2">{{ productAttrs.tightness }}</div>
    </div>
    <div class="row" v-if="productAttrs.position">
      <div class="col1">Рабочее положение</div>
      <div class="col2">{{ productAttrs.position }}</div>
    </div>
    <div class="row" v-if="productAttrs.type_of_execution">
      <div class="col1">Вид исполнения</div>
      <div class="col2">{{ productAttrs.type_of_execution }}</div>
    </div>
    <div class="row" v-if="productAttrs.shtok">
      <div class="col1">Уплотнение штока</div>
      <div class="col2">{{ productAttrs.shtok }}</div>
    </div>
    <div class="row" v-if="productAttrs.type">
      <div class="col1">Тип исполнения</div>
      <div class="col2">{{ productAttrs.type }}</div>
    </div>
    <div class="row" v-if="productAttrs.execution">
      <div class="col1">Исполнение</div>
      <div class="col2">{{ productAttrs.execution }}</div>
    </div>
    <div class="row" v-if="productAttrs.characteristic">
      <div class="col1">Особенности</div>
      <div class="col2">
        <span v-if="productAttrs.characteristic.length === 1">{{ productAttrs.characteristic[0] }}</span>
        <ul class="t-list" v-else>
          <li
            v-for="char in productAttrs.characteristic"
          >
            {{ char }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ProductAttrs } from '@/stores/products/attrs';

  defineProps<{
    productAttrs: ProductAttrs,
  }>();
</script>

<style scoped lang="scss">
  .table-attrs {
    border: 1px solid #DEDEDE;
  }

  .row {
    display: grid;
    grid-template-columns: 250px 1fr;
    border-bottom: 1px solid #DEDEDE;

    &:last-child {
      border: 0;
    }
  }

  .col1, .col2 {
    padding: 20px 24px;
  }

  .col1 {
    color: #6C6C6C;
  }

  .col2 {
    border-left: 1px solid #DEDEDE;
  }

  .t-list {
    padding-left: 20px;
    list-style: disc;
  }
</style>

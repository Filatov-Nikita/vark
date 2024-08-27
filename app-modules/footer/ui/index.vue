<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__org-name">ООО «ВАРК»</div>
      <div class="footer__wrap">
        <div class="footer__row1">
          <Nav class="footer__nav" />
          <Address class="footer__address" />
          <Contacts class="footer__contacts" />
        </div>
        <Privacy class="footer__privacy" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import Nav from './Nav.vue';
  import Address from './Address.vue';
  import Contacts from './Contacts.vue';
  import Privacy from './Privacy.vue';
</script>


<style scoped lang="scss">
  .footer {
    position: relative;
    padding-top: 30px;
    padding-bottom: 74px;
    @apply tw-bg-bg-grafit;

    @include sm {
      padding-bottom: 48px;
    }

    &__org-name {
      @apply tw-text-h3-bold tw-mb-30;

      @include sm {
        font-size: 20px;
        line-height: 1.4;
        margin-bottom: 20px;
      }
    }

    &__wrap {
      max-width: 1130px;
    }

    &__row1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      column-gap: 80px;
      row-gap: 40px;
      margin-bottom: 60px;

      @include sm {
        margin-bottom: 40px;
      }
    }

    &__nav {
      flex-basis: 264px;
    }

    &__address {
      flex-basis: 391px;
    }

    &__privacy {
      padding-right: 11px;
    }
  }
</style>

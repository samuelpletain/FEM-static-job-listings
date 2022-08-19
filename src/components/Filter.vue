<script setup>
  import Tag from './Tag.vue'

  const props = defineProps({
    tags: Array
  })
</script>

<template>
  <div class="filter" :class="{'filter--hidden': props.tags.length == 0}">
    <div class="filter__filter_container filter_container">
      <Tag class="filter_container__tag" v-for="tag in tags" :content="tag" :closable="true" @removable="$emit('removable', tag)"/>
    </div>
    <div class="filter__clear" @click="$emit('clear')">Clear</div>
  </div >
</template>

<style lang="scss" scoped>
  .filter {
    background: white;
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    opacity: 1;
    box-shadow: 0 .75rem 5px -.25rem darken($neutral-100, 5%);
    &__clear {
      font-weight: $font-weight-bold;
      color: $neutral-400;
      &:hover {
        color: $primary;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    &--hidden {
      opacity: 0;
      height: 0;
    }
  }

  .filter_container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
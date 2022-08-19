<script setup>
  const props = defineProps({
    content: String,
    rounded: Boolean,
    color: String,
    closable: Boolean
  })
</script>

<template>
  <div class="tag" :class="{'tag--rounded' : props.rounded, 'tag--black' : props.color == 'black', 'tag--closable' : props.closable}">
    {{ props.content }}
    <div class="tag__close_button" v-if="props.closable" @click="$emit('removable')"></div>
  </div>
</template>

<style lang="scss" scoped>
  .tag {
    padding: .5rem;
    width: fit-content;
    font-weight: $font-weight-bold;
    color: $primary;
    background: $neutral-100;
    display: inline-block;
    border-radius: 5px; 
    position: relative;
    &--rounded {
      border-radius: 15px;
      padding: .35rem .5rem .15rem;
      color: $neutral-100;
      background: $primary;
    }
    &--black {
      background: $neutral-700;
    }
    &--closable {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: 2rem;      
    }
    &__close_button {        
        width: 2rem;
        height: 100%;
        background: $primary url("/images/icon-remove.svg") no-repeat center;
        position: absolute;
        top: 0;
        left: 100%;        
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        &:hover {
          background-color: $neutral-700;
          cursor: pointer;
        }
      }
  }
</style>
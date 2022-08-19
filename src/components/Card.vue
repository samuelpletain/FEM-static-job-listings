<script setup>
  import Tag from './Tag.vue'
  import { computed } from 'vue'

  const props = defineProps({
    id: Number,
    company: String,
    logo: String,
    new: Boolean,
    featured: Boolean,
    position: String,
    role: String,
    level: String,
    postedAt: String,
    contract: String,
    location: String,
    languages: Array,
    tools: Array
  })

  const tags = computed(() => {
    let tmp = []
    tmp.push(props.role)
    tmp.push(props.level)
    tmp = tmp.concat(props.languages)
    tmp = tmp.concat(props.tools)
    return tmp
  })
</script>

<template>
  <article class="card" :class="{'card--featured' : props.featured}">
    <img :src="props.logo" :alt="props.company + ' logo'" class="card__logo">
    <p class="card__company">{{ props.company }}</p>
    <div class="card__round_tag_container round_tag_container">
      <Tag class="round_tag_container__tag" v-if="props.new" content="NEW!" :rounded="true"/>
      <Tag class="round_tag_container__tag" v-if="props.featured" content="FEATURED" :rounded="true" color="black"/>
    </div>
    <a class="card__position">{{ props.position }}</a>
    <p class="card__metadata">{{ props.postedAt }} - {{ props.contract }} - {{ props.location }}</p>
    <div class="card__tag_container tag_container">
      <Tag class="tag_container__tag" v-for="tag in tags" :content="tag" @click="$emit('tagClicked', tag)"/>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .card {
    padding: 1.75rem;
    background: white;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 .75rem 5px -.25rem darken($neutral-100, 5%);
    &--featured::before {
      content: '';
      display: block;
      background: $primary;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: .25rem;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &__logo {
      position: absolute;
      width: 3rem;
      top: -1.5rem;
    }
    &__company, &__position {
      font-weight: $font-weight-bold;
    }
    &__company {
      color: $primary;
      display: inline-block;
    }
    &__position {
      color: $neutral-700;
      display: block;
      width: fit-content;
      &:hover {
        cursor: pointer;
        color: $primary;
      }
    }
    &__metadata {
      color: $neutral-400;
    }
    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .tag_container {
    border-top: 1px $neutral-400 solid;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    &__tag:hover {
      cursor: pointer;
      background: $primary;
      color: $neutral-100;
    }
  }

  .round_tag_container {
    display: inline-block;
    margin-left: 1.5rem;
    &__tag:not(:last-child) {
      margin-right: .5rem;
    }
  }

  @include breakpoint {
    .card {
      padding: 1.5rem 2rem;
      &__logo {
        width: 5.5rem;
        top: auto;
      }
      &__position {
        font-size: 1.3rem;
      }
      &__company, &__metadata, &__position {
        margin-left: 7rem;
      }
      &__metadata {
        margin-bottom: 0 !important;
      }
      & > *:not(:last-child) {
        margin-bottom: .75rem;
      }
    }

    .tag_container {
      position: absolute;
      border: none;
      right: 2rem;
      top: 0;
      bottom: 0;
      margin: auto;
      padding: 0;
      align-content: center;
    }

    .round_tag_container {
      margin-left: 1rem;
    }
  }
</style>
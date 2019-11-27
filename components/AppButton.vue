<template>
  <button type="button" class="button" :class="typeClasses">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  },
  computed: {
    typeClasses () {
      switch (this.type) {
        case 'danger':
          return 'bg-red'
        default:
          return 'bg-teal'
      }
    }
  }
}
</script>

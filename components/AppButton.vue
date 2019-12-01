<template>
  <b-button type="button"
            :class="typeClasses">
    <slot/>
  </b-button>
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
            return 'bg-danger';
        default:
            return 'bg-white';
      }
    }
  }
}
</script>

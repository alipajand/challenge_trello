<template>
  <div
    class="board overflow-auto p-3"
    :style="{height: `${height}px`}"
  >
    <div class="d-flex flex-row align-items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :column-index="$columnIndex"
        :board="board"
      />

      <div class="d-flex flex-column new-column">
        <b-form-input
          v-model="newColumnName"
          type="text"
          class="p-3 mr-2 flex-grow border-0"
          placeholder="نام جدید ستون"
          @keyup.enter="createColumn"
        />
      </div>
    </div>

    <div
      v-if="isTaskOpen"
      class="task-bg position-absolute"
      @click.self="close"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    import BoardColumn from '@/components/BoardColumn';

    export default {
  components: { BoardColumn },
        data: () => ({
            height: 0,
      newColumnName: ''
        }),
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task';
    }
  },
        created() {
            if (!process.browser) {
                return;
            }

            this.height = window.innerHeight;
        },
  methods: {
    close () {
      this.$router.push({ name: 'board' });
    },
    createColumn () {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      });

      this.newColumnName = '';
    }
  }
};
</script>

<style lang="scss">
  @import "../assets/scss/dep";
  @import "../assets/scss/components/task";
</style>

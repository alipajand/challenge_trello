<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :column-index="$columnIndex"
        :board="board"
      />

      <div class="column flex">
        <input
          v-model="newColumnName"
          type="text"
          class="p-2 mr-2 flex-grow"
          placeholder="New Column Name"
          @keyup.enter="createColumn"
        >
      </div>
    </div>

    <div
      v-if="isTaskOpen"
      class="task-bg"
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
  data () {
    return {
      newColumnName: ''
    };
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task';
    }
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

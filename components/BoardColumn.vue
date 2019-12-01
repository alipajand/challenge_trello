<template>
  <AppDrop
    @drop="moveTaskOrColumn"
  >
    <AppDrag
      class="column"
      :transfer-data="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="d-flex justify-content-center mb-2 bold">
        {{ column.name }}
      </div>
      <div class="list-reset">
        <ColumnTask
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
          :task="task"
          :task-index="$taskIndex"
          :column="column"
          :column-index="columnIndex"
          :board="board"
        />

        <b-form-input
          type="text"
          class="p-3 w-100 bg-transparent"
          placeholder="+ یک کارت جدید"
          @keyup.enter="createTask($event, column.tasks)"
        />
      </div>
    </AppDrag>
  </AppDrop>
</template>

<script>
    import ColumnTask from './ColumnTask';
    import AppDrag from './AppDrag';
    import AppDrop from './AppDrop';
    import taskMixins from '@/plugins/taskMixins';

    export default {
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [taskMixins],
  methods: {
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.dropEffect = 'move';

      e.dataTransfer.setData('from-column-index', fromColumnIndex);
      e.dataTransfer.setData('type', 'column');
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      });
      e.target.value = '';
    }
  }
};
</script>

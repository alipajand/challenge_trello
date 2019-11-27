export function uuid () {
  return Math.random().toString(16).slice(2);
}

export function saveStatePlugin (store) {
  store.subscribe(
    (mutation, state) => {
      this.$auth.$storage.setUniversal(
        'board',
        JSON.stringify(state.board)
      );
    }
  );
}

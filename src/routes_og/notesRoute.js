import NotesContainer from '../NotesContainer.tsx';

export default {
  path: 'notes',

  getComponent(nextState, callback) {
    //require.ensure([], function (require) {
      callback(null, NotesContainer)
    //});
  }
};
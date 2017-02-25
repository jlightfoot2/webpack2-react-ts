import WorbookContainer from '../WorkbookContainer.tsx';

const workbookPage = {
  path: 'workbook/:id',

  getComponent(nextState, callback) {
      callback(null, WorbookContainer);
  }
};


export default workbookPage;
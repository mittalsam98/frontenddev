export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_FOLDER_NODE':
      return { ...state };
    case 'ADD_CHILDREN':
      return { ...state };
    case 'DELETE_NODE':
      return { ...state };
    case 'UPDATE_NODE':
      return { ...state };
  }
};

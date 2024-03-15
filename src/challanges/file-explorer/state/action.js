export const createFolderNode = () => {
  return { type: 'CREATE_FOLDER_NODE' };
};
export const addChildren = ({ type, parentNodeId }) => {
  return { type: 'ADD_CHILDREN', id: parentNodeId };
};
export const deleteNode = ({ type, nodeId }) => {
  return { type: 'DELETE_NODE', id: nodeId };
};
export const updateNode = ({ type, nodeId }) => {
  return { type: 'UPDATE_NODE', id: nodeId };
};

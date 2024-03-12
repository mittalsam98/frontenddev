import { v4 as uuid } from 'uuid';

function deleteNodeHandler(state, id) {
  const updatedNodes = [...state];

  function deleteNode(node) {
    return node.filter((val) => {
      if (val.id === id) {
        return false;
      } else if (val.isFolder && val.children.length > 0) {
        val.children = deleteNode(val.children);
      }
      return true;
    });
  }
  return deleteNode(updatedNodes);
}

function addChildrenHandler(state, id, isFolder) {
  const updateNodes = [...state];

  function addNode(node) {
    return node.map((val) => {
      if (val.id === id) {
        val.children = [
          ...val.children,
          {
            id: uuid(),
            children: [],
            isFolder,
            name: '',
            isNew: true
          }
        ];
      } else if (val.isFolder && val.children.length > 0) {
        val.children = addNode(val.children);
      }
      return val;
    });
  }

  return addNode(updateNodes);
}
function updateNodeName(state, id, updatedName) {
  const updateNodes = [...state];

  function updateNode(node) {
    return node.map((val) => {
      if (val.id === id) {
        val.name = updatedName;
      } else if (val.isFolder && val.children.length > 0) {
        val.children = updateNode(val.children);
      }
      delete val['isNew'];
      return val;
    });
  }

  return updateNode(updateNodes);
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_FOLDER_NODE':
      return [
        ...state,
        {
          id: uuid(),
          children: [],
          isFolder: action.isFolder,
          name: '',
          isNew: true
        }
      ];
    case 'ADD_CHILDREN':
      const addedChildrenArray = addChildrenHandler(state, action.parentNodeId, action.isFolder);
      return [...addedChildrenArray];
    case 'DELETE_NODE':
      const deletedNodeArray = deleteNodeHandler(state, action.nodeId);
      return [...deletedNodeArray];
    case 'UPDATE_NODE':
      const updatedNodeArray = updateNodeName(state, action.nodeId, action.updatedName);
      return [...updatedNodeArray];
  }
};

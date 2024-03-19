import React, { useReducer } from 'react';
import { FileExplorerContext, initialState } from './contexts/file-explorer';
import './file-explorer.css';
import Nodes from './folder-nodes';
import NodeController from './shared/node-controller';
import { reducer } from './state/reducer';
import { FaFolder } from 'react-icons/fa';

export default function FileExplorer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actionsClickHandler = (event) => {
    const action = event.currentTarget.getAttribute('data-action');
    if (action == 'addFile' || action == 'addFolder') {
      dispatch({
        type: 'CREATE_FOLDER_NODE',
        isFolder: action == 'addFile' ? false : true
      });
    }

    if (action == 'deleteNode') {
    }
  };

  return (
    <FileExplorerContext.Provider value={{ dispatch }}>
      <div className='outerContainer'>
        <div className='main-folder__title'>
          <span>
            <FaFolder className='main-folder__title-icon' />
            MyApp
          </span>
          <NodeController
            edit={false}
            deleteFile={false}
            actionsClickHandler={actionsClickHandler}
          />
        </div>
        <Nodes nodes={state} />
      </div>
    </FileExplorerContext.Provider>
  );
}

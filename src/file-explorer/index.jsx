import React, { useReducer } from 'react';
import './file-explorer.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Nodes from './folder-nodes';
import { FileExplorerContext, initialState } from '../contexts/file-explorer';
import { reducer } from './state/reducer';

export default function FileExplorer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FileExplorerContext.Provider value={{ ...state, dispatch }}>
      <div className='outerContainer'>
        <div>
          <div>
            <span>
              <MdKeyboardArrowDown />
            </span>
            Your App name
          </div>
          <Nodes nodes={initialState} />
        </div>
      </div>
    </FileExplorerContext.Provider>
  );
}

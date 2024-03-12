import React, { useEffect, useRef, useState } from 'react';
import { FaFile, FaFolder } from 'react-icons/fa';
import Nodes from '.';
import { useFileExplorerContext } from '../../contexts/file-explorer';
import NodeController from '../shared/node-controller';
import './folder-nodes.css';

const getIcon = (isFolder) => {
  return isFolder ? <FaFolder className='folder-icon' /> : <FaFile className='file-icon' />;
};

export default function Node(props) {
  const { id, name, children, isFolder } = props.node;
  const { dispatch } = useFileExplorerContext();
  const [nodeName, setNodeName] = useState(name);
  const [nodeUpdate, setNodeUpdate] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.node?.isNew || nodeUpdate) {
      inputRef.current.focus();
    }
  }, []);

  const actionsClickHandler = (event) => {
    const action = event.currentTarget.getAttribute('data-action');
    if (action == 'addFile' || action == 'addFolder') {
      dispatch({
        type: 'ADD_CHILDREN',
        parentNodeId: id,
        isFolder: action == 'addFile' ? false : true
      });
    }
    if (action == 'edit') {
      setNodeUpdate(true);
      dispatch({
        type: 'UPDATE_NODE',
        nodeId: id,
        updatedName: nodeName
      });
    }
    if (action == 'deleteNode') {
      dispatch({
        type: 'DELETE_NODE',
        nodeId: id
      });
    }
  };

  return (
    <div
      className={`node-container ${
        isFolder && children.length > 0 ? 'node-container_border' : ''
      } `}
    >
      <div className='node-row'>
        <div className='node-row__title'>
          {getIcon(isFolder)}
          {props.node?.isNew || nodeUpdate ? (
            <input
              ref={inputRef}
              value={nodeName}
              onKeyDown={(e) => {
                console.log(e);
                if (e.keyCode === 13) {
                  if (!nodeName) {
                    event.currentTarget.setAttribute('data-action', 'deleteNode');
                    actionsClickHandler(event);
                  } else {
                    event.currentTarget.setAttribute('data-action', 'edit');
                    actionsClickHandler(event);
                  }
                  setNodeUpdate(false);
                }
              }}
              onChange={(e) => {
                setNodeName(e.target.value);
              }}
              onBlur={(event) => {
                if (!nodeName) {
                  event.currentTarget.setAttribute('data-action', 'deleteNode');
                  actionsClickHandler(event);
                } else {
                  event.currentTarget.setAttribute('data-action', 'edit');
                  actionsClickHandler(event);
                }
                setNodeUpdate(false);
              }}
            />
          ) : (
            <span className='name'>{name}</span>
          )}
        </div>
        <NodeController
          addFile={isFolder}
          addFolder={isFolder}
          actionsClickHandler={actionsClickHandler}
        />
      </div>
      {isFolder && children.length > 0 && <Nodes nodes={children} />}
    </div>
  );
}

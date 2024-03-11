import React from 'react';
import Nodes from '.';
import './folder-nodes.css';

export default function Node(props) {
  const { id, name, children, isFolder } = props.node;
  return (
    <div className='node-container '>
      {name}
      {isFolder && children.length > 0 && <Nodes nodes={children} />}
    </div>
  );
}

import React from 'react';
import Node from './node';
import './folder-nodes.css';

export default function Nodes(props) {
  return (
    <div className='nodes-container'>
      {props.nodes.length > 0 &&
        props.nodes.map((val) => {
          return <Node key={val.id} node={val} parentNodeId={val.id} />;
        })}
    </div>
  );
}

import React from 'react';
import { HiFolderAdd } from 'react-icons/hi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiFileAddLine } from 'react-icons/ri';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import '../folder-nodes/folder-nodes.css';

export default function NodeController({
  edit = true,
  addFile = true,
  addFolder = true,
  deleteFile = true,
  actionsClickHandler
}) {
  return (
    <div className='node-row__controls'>
      {edit && (
        <span data-action='edit' onClick={actionsClickHandler}>
          <MdOutlineModeEditOutline className='node-row__controls-edit edit-icon' />
        </span>
      )}
      {addFile && (
        <span data-action='addFile' onClick={actionsClickHandler}>
          <RiFileAddLine className='node-row__controls-icon addfile-icon' />
        </span>
      )}
      {addFolder && (
        <span data-action='addFolder' onClick={actionsClickHandler}>
          <HiFolderAdd className='node-row__controls-icon addfolder-icon' />
        </span>
      )}
      {deleteFile && (
        <span data-action='deleteNode' onClick={actionsClickHandler}>
          <RiDeleteBin5Fill className='node-row__controls-icon delete-icon' />
        </span>
      )}
    </div>
  );
}

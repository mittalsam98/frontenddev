import { createContext, useContext } from 'react';
export const FileExplorerContext = createContext();

export function useFileExplorerContext() {
  const context = useContext(FileExplorerContext);

  if (context === undefined) {
    throw new Error('Scope is outside of the useFileExplorerContext hook');
  }

  return context;
}

export const initialState = [
  {
    id: 111,
    isFolder: true,
    name: 'Files And Folder',
    children: []
  }
  // {
  //   id: 2,
  //   isFolder: true,
  //   name: 'folder1',
  //   children: [
  //     {
  //       id: 3,
  //       isFolder: false,
  //       name: 'folder1file.js',
  //       children: []
  //     },
  //     {
  //       id: 4,
  //       isFolder: true,
  //       name: 'folder1folder',
  //       children: [
  //         {
  //           id: 5,
  //           isFolder: false,
  //           name: 'folder1folderfile.js',
  //           children: []
  //         }
  //       ]
  //     }
  //   ]
  // }
];

/** Schema 1
     const initialState={
        id:uniqueId,
        name:string,
        type:folder | file,
        nodes : {
            id:uniqueId,
            name:string,
            type:folder | file,
            nodes  :{
                ...............
            }
        }
     }
    */

/** Schema 2
     const initialState=[
        {
        id:uniqueId,
        name:string,
        type:folder | file,
        },
        {
        id:uniqueId,
        name:name,
        children : [{
             id:uniqueId,
            name:string,
        },{
            id:uniqueId,
            type:string,
            children  :{
                ...............
            }
        },
        ]},
    ]
    */

# Run project

- npm install
- npm run dev

## Folder structure

.

- [src](./src)
  - [components](.src/components) ui components for tree visualization
  - [uiKit](.src/uiKit) smallest reusable components
  - [lib](.src/lib) helper functions

## About project

Main goal of this project is visualization folder tree structure. By default we can see merged array of path examples. [paths](./src/libs/cleanPath)  
We can add new files/folder to parent node by clicking "add new" button.  
For more detailed visibility at the top of the page added radio buttons group where we can select single path from examples.  
We save data in Narray data structure.
Next rules applied for paths :  
example '/dir8/subdir7/a/b/c/d/../../../.././///file8.txt', --> '/dir/subdir/file.txt'  
../ - go one level up  
./ - stay on the same level  
//// - stay on the same level

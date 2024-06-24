import './App.css'
import { NaryTree } from './lib/tree';
import { cleanPath } from './lib/cleanPath';
import { TreeVisualization } from './components/TreeVisualization';
import { RadioGroup } from './uiKit/RadioGroup';
import { useState } from 'react';
import { folderTree } from './lib/cleanPath';

function App() {
  const [path, setPath] = useState(folderTree)
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

    const cleanedPath = cleanPath(e.target.value)

    const tree = new NaryTree();
    tree.add('src', 'src')

    cleanedPath.pathArr.forEach((subPath,idx, originalArr)=>{
    const value =  originalArr.slice(0, idx + 1).join('/')
    const par = idx === 0 ? 'src' : originalArr.slice(0,idx).join('/')
    tree.add(value,subPath, par)
  })
  setPath(tree)
}


  return (
    <>
      <RadioGroup onChange={handleOnChange}/>
      <TreeVisualization node={path.root} isExpanded />
    </>
  )
}

export default App

import React, {useState} from "react";
import { Modal } from "../../uiKit/Modal";
import { TreeNode } from "../../lib/tree";
import { Input } from "../../uiKit/Input/Input";

export const AddNewElementModal: React.FC<AddNewElementModalProps> = ({isOpen, onClose, node})=>{
    const [value, setValue] = useState('')

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const handleAdd = ()=>{
        if (!value){
            return null
        }

        const bodeValue = `${node?.displayValue}/${value}`

        const newNode = new TreeNode(bodeValue, value);

        node?.addChild(newNode)
        setValue('')
        onClose()
    }

    return (
    <Modal 
        isOpen={isOpen}
        onClose={onClose}
    >   
        <form onSubmit={handleAdd}>
            <Input
                value={value}
                onChange={handleInputChange}
                placeholder="Add an Element"
            />
            <button type="submit" onClick={handleAdd}>Add</button>
        </form>
    </Modal>
)}

interface AddNewElementModalProps {
    isOpen: boolean;
    onClose: () => void;
    node: TreeNode | null;
  }
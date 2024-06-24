import { useState } from 'react';
import { TreeNode } from '../../lib/tree';
import './TreeVisualization.css';
import { AddNewElementModal } from '../AddNewElementModal';

interface TreeVisualizationProps {
  node: TreeNode | null;
  isExpanded?: boolean;
}

export const TreeVisualization = ({
  node,
  isExpanded = false,
}: TreeVisualizationProps) => {
  const [expanded, setExpanded] = useState<boolean>(!!isExpanded);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  if (!node) {
    return null;
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <AddNewElementModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        node={node}
      />
      <div>
        <div className="value-container">
          <div className="node-value pointer" onClick={toggleExpand}>
            {!!node.children.length && (expanded ? '[-]' : '[+]')}{' '}
            {node.displayValue}
          </div>
          {!node.displayValue.includes('.') && (
            <button onClick={handleOpenModal}>add new</button>
          )}
        </div>
        {expanded && node.children.length > 0 && (
          <div className="children">
            {node.children.map((child) => (
              <TreeVisualization key={child.value} node={child} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

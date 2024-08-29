import React from "react";
import { useTreeContext, Tree as TreeType } from "../context/TreeContext";

type TreeProps = {
  id: string;
};

export const Tree = ({ id }: TreeProps) => {
  const { treeData, toggleNode } = useTreeContext();

  const findNode = (node: TreeType, targetId: string): TreeType | undefined => {
    if (node.id === targetId) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = findNode(child, targetId);
        if (found) return found;
      }
    }
    return undefined;
  };

  if (!treeData) return null;
  const node = findNode(treeData, id);
  if (!node) return null;

  return (
    <div className="ml-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={node.checked}
          ref={(el) => {
            if (el) {
              el.indeterminate = node.indeterminate || false;
            }
          }}
          onChange={() => toggleNode(id)}
          className="mr-2"
        />
        {node.name}
      </label>
      {node.children && (
        <div className="ml-4">
          {node.children.map((child) => (
            <Tree key={child.id} id={child.id} />
          ))}
        </div>
      )}
    </div>
  );
};

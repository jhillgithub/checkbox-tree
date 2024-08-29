import React, { createContext, useContext, useState } from "react";

export type Tree = {
  id: string;
  name: string;
  checked: boolean;
  indeterminate?: boolean;
  children?: Tree[];
};

type TreeContextType = {
  treeData: Tree | null;
  toggleNode: (id: string) => void;
};

const TreeContext = createContext<TreeContextType | null>(null);

type TreeProviderProps = {
  children: React.ReactNode;
  initialData: Tree;
};
export const TreeProvider = ({ children, initialData }: TreeProviderProps) => {
  const [treeData, setTreeData] = useState<Tree>(initialData);

  const toggleNode = (id: string) => {
    const updateNode = (node: Tree): Tree => {
      if (node.id === id) {
        const newChecked = !node.checked;
        return {
          ...node,
          checked: newChecked,
          indeterminate: false,
          children: node.children?.map((child) => ({
            ...child,
            checked: newChecked,
            indeterminate: false,
          })),
        };
      }
      if (node.children) {
        const newChildren = node.children.map(updateNode);
        const allChecked = newChildren.every((child) => child.checked);
        const anyChecked = newChildren.some((child) => child.checked);
        return {
          ...node,
          checked: allChecked,
          indeterminate: anyChecked && !allChecked,
          children: newChildren,
        };
      }
      return node;
    };

    setTreeData(updateNode(treeData));
  };

  return (
    <TreeContext.Provider value={{ treeData, toggleNode }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTreeContext = () => {
  const context = useContext(TreeContext);
  if (context === null) {
    throw new Error("useTreeContext must be used within a TreeProvider");
  }
  return context;
};

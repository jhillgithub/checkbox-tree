import React, { useState } from "react";
export type Tree = {
  name: string;
  checked?: boolean;
  children?: Tree[];
};

export const Tree = ({ name, children: initialChildren }: Tree) => {
  const [children, setChildren] = useState(
    initialChildren?.map((child) => ({
      ...child,
      checked: child.checked ?? false,
    })),
  );
  const handleParentToggle = () => {};
  const handleChildToggle = (id: number) => {
    setChildren(
      children?.map((child, index) =>
        index === id ? { ...child, checked: !child.checked } : child,
      ),
    );
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={false} onChange={handleParentToggle} />
        <span>{name}</span>
      </div>
      {children &&
        children.map((child, index) => (
          <div
            key={`child-${index}`}
            className="flex items-center gap-2 py-1 pl-6"
          >
            <input
              type="checkbox"
              checked={child.checked}
              onChange={() => handleChildToggle(index)}
            />
            <span>{child.name}</span>
          </div>
        ))}
    </div>
  );
};

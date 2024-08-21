import React, { useEffect, useRef, useState } from "react";
export type Tree = {
  name: string;
  checked?: boolean;
  children?: Tree[];
};

export const Tree = ({ name, children: initialChildren }: Tree) => {
  const parentRef = useRef<HTMLInputElement>(null);
  const [children, setChildren] = useState(
    initialChildren?.map((child) => ({
      ...child,
      checked: child.checked ?? false,
    })) || [],
  );
  const allChildrenChecked = children.every((child) => child.checked);
  const someChildrenChecked = children.some((child) => child.checked);
  const indeterminate = someChildrenChecked && !allChildrenChecked;

  useEffect(() => {
    if (!parentRef.current) return;
    parentRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const handleParentToggle = () => {
    setChildren(
      children.map((child) => ({ ...child, checked: !allChildrenChecked })),
    );
  };
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
        <input
          ref={parentRef}
          type="checkbox"
          checked={allChildrenChecked}
          onChange={handleParentToggle}
        />
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

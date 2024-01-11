import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
interface Node {
  value: string;
  label: string;
  children?: Node[];
}

const nodes: Node[] = [
  {
    value: "mars",
    label: "Mars",
    children: [
      { value: "phobos", label: "Phobos" },
      { value: "deimos", label: "Deimos" },
    ],
  },
];
function Treeview() {
  const [checked, setChecked] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <CheckboxTree
      nodes={nodes}
      checked={checked}
      expanded={expanded}
      onCheck={(newChecked: string[]) => setChecked(newChecked)}
      onExpand={(newExpanded: string[]) => setExpanded(newExpanded)}
    />
  );
}

export default Treeview;

import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

//you have to give an index to your DraggableColorBox to implement the drag and drop functionality
const DraggableColorList = SortableContainer((props) => {
  return (
    <div style={{ height: "100%" }}>
      {props.colors.map((c, i) => (
        <DraggableColorBox
          index={i}
          key={c.name}
          color={c.color}
          name={c.name}
          handleClick={() => props.removeColor(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;

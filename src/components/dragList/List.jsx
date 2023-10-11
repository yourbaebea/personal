import React, { useState } from "react";
import classes from "../../style/list.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function List() {
  const defaultList = ["A", "B", "C", "D", "E"];

  const [itemList, setItemList] = useState(defaultList);

  // Function to update list on drop
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;

    const updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

  return (
    <div className={classes.List}>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="listContainer">
          {(provided) => (
            <div
              className={classes.listContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <div
                      className={classes.itemContainer}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      draggable={true}
                    >
                      {item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

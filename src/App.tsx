import * as React from 'react';
import './style.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function App(props) {
  const items = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
    // Add more items as needed
  ];

  const onDragEnd = (result) => {
    // Implement your logic to handle the end of dragging
  };

  return (
    <div style={{ border: '1px solid black', padding: '1rem' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ position: 'relative', height: '3rem' }}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      style={{
                        border: '1px solid black',
                        padding: '0.5rem',
                        margin: '0.5rem',
                        height: '1rem',
                        width: '3rem',
                        position: 'absolute',
                        left: `${index * 40}%`,
                      }}
                    >
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </div>
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

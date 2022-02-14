import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/Card';

const Column = ({ column, tasks }) => {
  return (
    <div className='column'>
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provide) => (
          <div ref={provide.innerRef} {...provide.droppableProps}>
            {tasks.map((task, index) => (
              <Card key={task.id} {...task} index={index} />
            ))}
            {provide.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

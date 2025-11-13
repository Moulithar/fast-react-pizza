import {  useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialStateTodos = [
  {
    id: 0,
    title: "0",
    completed: false,
  },
  {
    id: 1,
    title: "1",
    completed: false,
  },
  {
    id: 2,
    title: "2",
    completed: false,
  },
  {
    id: 3,
    title: "3",
    completed: true,
  },
  {
    id: 4,
    title: "4",
    completed: false,
  },
  {
    id: 5,
    title: "5",
    completed: false,
  },
  {
    id: 6,
    title: "6",
    completed: true,
  },
];

const DndList = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const handleDragEnd = (result) => {
    if(!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copyTodos = [...todos];
    const [reorderTodo] = copyTodos.splice(startIndex, 1);
    copyTodos.splice(endIndex, 0, reorderTodo);
    setTodos(copyTodos);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <h1>Todo DndList</h1>
        <Droppable droppableId="todos">
          {(droppableProvider) => (
            <ul
              ref={droppableProvider.innerRef}
              {...droppableProvider.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  index={index}
                  key={todo.id}
                  draggableId={`${todo.id}`}
                >
                  {(draggableProvider) => (
                    <li
                      ref={draggableProvider.innerRef}
                      {...draggableProvider.draggableProps}
                      {...draggableProvider.dragHandleProps}
                    >
                      {todo.title}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvider.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DndList;

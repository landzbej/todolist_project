const Todo = require('../lib/todo');
const TodoList = require('../lib/todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has size of 3', ()=> {
    expect(list.size()).toBe(3);
  })

  test('todolist copy is equal to todolist', ()=> {
    expect( list.toArray()).toEqual([todo1, todo2, todo3])
  })

  test('first method retrieves first item', ()=> {
    expect(list.first()).toBe(todo1);
  })

  test('last method retrieves last item', ()=> {
    expect(list.last()).toBe(todo3);
  })

    test('shift method works', ()=> {
    expect(list.shift()).toBe(todo1);
      expect(list.toArray()).toEqual([todo2, todo3]);  
  })

    test('pop method works', ()=> {
    expect(list.pop()).toBe(todo3);
      expect(list.toArray()).toEqual([todo1, todo2]);   
  })

     test('isDone method works', ()=> {todo1.markDone();
todo2.markDone();
expect(list.allDone().todos).toEqual([todo1, todo2]);
  })

  test('add works', ()=> {
    let todo4 = new Todo('item 4');
    list.add(todo4);
    expect(list.toArray()).toEqual([todo1, todo2, todo3, todo4])
  })

  // test('itemAt works', () => {
  //   expect(list.itemAt(2)).toEqual(todo3);
  //   expect(() => list.itemAt(5)).toThrow(ReferenceError);
  // })

  test('itemAt returns the item at given index', () => {
  expect(list.itemAt(0)).toEqual(todo1);
  expect(list.itemAt(1)).toEqual(todo2);
  expect(() => list.itemAt(5)).toThrow(ReferenceError);
});

  test('markDoneAt works', () => {
    list.markDoneAt(0);
    expect(todo1.done).toBe(true);
    expect (() => list.markDoneAt(5)).toThrow(ReferenceError);
  });

  test('markUndoneAt works', () => {
    list.markDoneAt(0);
    expect(todo1.done).toBe(true);
    list.markUndoneAt(0);
    expect(todo1.done).toBe(false);
    expect (() => list.markUndoneAt(5)).toThrow(ReferenceError);
  });

  test('markAllDone works', () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true)
  })

  test('removeAt works', ()=> {
    list.removeAt(0);
    expect(list.toArray()).toEqual([todo2, todo3]);
  })

test('toString works', ()=> {
  let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`
  list.markAllDone();
  expect(list.toString()).toBe(string);
})

  test('forEach works', ()=> {
    let array = [];
    list.forEach(item=>item.markDone());
    expect(todo1.done).toEqual(true);
    expect(todo2.done).toEqual(true);
    expect(todo3.done).toEqual(true);
  })

  test('filter works', ()=> {
    list.markDoneAt(0);
    let newarray = list.filter(item=>item.done).todos;
    expect(newarray).toEqual([todo1])
  })
});
import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react'; 
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodos() {

  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('list')));
  const getTodoName = useRef(); 

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todo));
  }, [todo])
  
 

  function handleAddToDo(e) {
    e.preventDefault();
    const name = getTodoName.current.value; 
    if (name === '' ) return
    setTodo(prevTodo => {
      return [...prevTodo, {id: uuidv4(), name:name, checking:false}]
    })
    getTodoName.current.value = null;
  }

  function handleCheck(e) {
    const newState = todo.map((obj) => {
       return obj.id == e.target.id ? {...obj, checking: !obj.checking } : { ...obj};
    });
    setTodo(newState);
  };

  function handleDelete(e) {
    e.preventDefault();
    const newState = todo.filter((obj) => {
      if (obj.checking === false) {
        return {...obj};
      } 
    })
    setTodo(newState)
  }



  return (<>
    <Wrapper>
      <H1>Simple To-do</H1>

      <AddForm>
        <Input type='text' ref={getTodoName}/>
        <Buttons>
          <Button onClick={handleAddToDo}>Submit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Buttons>
      </AddForm>


      <Todos todo={todo}
        handleCheck={handleCheck} 
        >     
      </Todos>


    </Wrapper>
  </>)
}




const Wrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 80%;
  min-height: 85%;

  border-radius: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 0 0 1.6rem;
  margin: 1rem;
  width: 90%;
  border-bottom: 1px dotted lightgrey;
  text-decoration: underline;
  color: #343332;
`;
const AddForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 90%;
`;
const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 1.4rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Button = styled.button`
  margin: 1rem;
  background-color: rgb(249, 222, 86);
  width: 100px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 16px;
  transition: 0.1s ease-out;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-out;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: rgba(249, 242, 86, 1);
  }
  :active {
    background: rgba(120, 232, 86, 1);
    box-shadow: inset 5px 5px 5px #c1c1c1;
    outline: none;
    width: 90px;
    height: 45px;
}
`;
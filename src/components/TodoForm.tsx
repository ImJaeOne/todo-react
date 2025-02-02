import React, { useState } from 'react';
import styled from 'styled-components';

const StForm = styled.form`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    height: 100px;
`;

const StInputWrapper = styled.div``;

const StLabel = styled.label`
    font-size: 25px;
    padding: 20px;
`;

const StInput = styled.input`
    margin-left: 10px;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StButton = styled.button`
    margin-right: 10px;
    background-color: #1db01d;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        border: 1px solid #1dae1d;
    }
`;

const initialData = { id: 0, title: '', content: '', isDone: false };

interface Todo {
    id: number ;
    title: string;
    content: string;
    isDone: boolean;
}

interface TodoFormProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
    const [newTodo, setNewTodo] = useState<Todo>(initialData);

    const resetForm = () => {
        setNewTodo(initialData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setNewTodo({ ...newTodo, id: Date.now(), [id]: value });
    };

    const handleAddBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTodo.title === '' || newTodo.content === '') {
            alert('모든 값을 기입해주세요.');
            return;
        }
        setTodos([...todos, newTodo]);
        resetForm();
    };

    return (
        <StForm onSubmit={handleAddBtn}>
            <StInputWrapper>
                <StLabel>
                    제목
                    <StInput id="title" type="text" value={newTodo.title} onChange={handleChange} />
                </StLabel>
                <StLabel>
                    내용
                    <StInput id="content" type="text" value={newTodo.content} onChange={handleChange} />
                </StLabel>
            </StInputWrapper>
            <StButton type="submit">추가하기</StButton>
        </StForm>
    );
};

export default TodoForm;

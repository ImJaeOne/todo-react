import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const TodoTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
`;

const TodoContent = styled.div`
    font-size: 20px;
    padding: 0 20px;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    padding-bottom: 10px;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
`;

const Button = styled.button`
    width: 45%;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
`;

const DeleteButton = styled(Button)`
    border: 1px solid #ff4d4d;

`;

const UpdateButton = styled(Button)`
    border: 1px solid #4caf50;
`;

const TodoItem = ({ todo, setTodos }) => {
    const handleUpdateBtn = (id) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const handleDeleteBtn = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContainer>
            <TodoTitle>{todo.title}</TodoTitle>
            <TodoContent>{todo.content}</TodoContent>
            <ButtonContainer>
                <DeleteButton onClick={() => handleDeleteBtn(todo.id)}>삭제하기</DeleteButton>
                <UpdateButton onClick={() => handleUpdateBtn(todo.id)}>
                    {todo.isDone ? '취소' : '완료'}
                </UpdateButton>
            </ButtonContainer>
        </TodoContainer>
    );
};

export default TodoItem;

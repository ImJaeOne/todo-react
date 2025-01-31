import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const StWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const StMessage = styled.div`
    font-size: 20px;
    color: #333;
`;

const StSection = styled.div`
    margin-top: 20px;
`;

const StSectionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const StSectionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
`;

const TodoList = ({ todos, setTodos }) => {
    const doneTodoLists = [...todos].filter((todo) => todo.isDone !== false);
    const notDoneTodoLists = [...todos].filter((todo) => todo.isDone === false);
    return (
        <StWrapper>
            {todos?.length === 0 ? (
                <StMessage>할 일을 추가해주세요</StMessage>
            ) : (
                <StSection>
                    <StSectionTitle>Working..🔥</StSectionTitle>
                    <StSectionContent>
                        {notDoneTodoLists.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo} setTodos={setTodos}/>;
                        })}
                    </StSectionContent>
                    <StSectionTitle>Done..!🎉</StSectionTitle>
                    <StSectionContent>
                        {doneTodoLists.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo} setTodos={setTodos}/>;
                        })}
                    </StSectionContent>
                </StSection>
            )}
        </StWrapper>
    );
};

export default TodoList;

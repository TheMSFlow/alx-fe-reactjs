import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

test('renders TodoList with initial todos', () => {
    // Render the TodoList component
    render(<TodoList />);

    // Assert that the initial todos are rendered correctly
    const initialTodos = [
        "Buy groceries",
        "Complete React project",
        "Read a book",
        "Exercise",
        "Call a friend",
        "cook"
    ];

    initialTodos.forEach(task => {
        expect(screen.getByText(task)).toBeInTheDocument();
    });
});

// Test to check if a new todo can be added
test('Add new todo', () => {
    render(<TodoList />);

    // Simulate user typing a new task
    const input = screen.getByPlaceholderText(/add a new task/i);
    fireEvent.change(input, { target: { value: 'Learn Testing' } });

    // Simulate clicking the "Add Todo" button
    const addButton = screen.getByText(/add todo/i);
    fireEvent.click(addButton);

    // Verify that the new todo is added to the list
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});

test('allows a todo item to be toggled between completed and not completed', () => {
    // Render the TodoList component
    render(<TodoList />);

    // Find the checkbox for the first todo item
    const firstTodoCheckbox = screen.getByLabelText(/buy groceries/i);

    // Initially, the todo item should not have a strikethrough
    const firstTodoText = screen.getByText(/buy groceries/i);
    expect(firstTodoText).not.toHaveStyle('text-decoration: line-through');

    // Simulate clicking the checkbox to mark the todo as completed
    fireEvent.click(firstTodoCheckbox);

    // The todo item should now have a strikethrough indicating it's completed
    expect(firstTodoText).toHaveStyle('text-decoration: line-through');

    // Simulate clicking the checkbox again to unmark it as completed
    fireEvent.click(firstTodoCheckbox);

    // The strikethrough should now be removed
    expect(firstTodoText).not.toHaveStyle('text-decoration: line-through');
});

test('allows a todo item to be deleted', () => {
    // Render the TodoList component
    render(<TodoList />);

    // Find the "Buy groceries" todo item
    const todoText = screen.getByText(/buy groceries/i);

    // Verify that the todo item is initially in the document
    expect(todoText).toBeInTheDocument();

    // Find the "Delete" button for this todo item using the data-testid
    const deleteButton = screen.getByTestId('delete-button-1'); // Assuming ID 1 for "Buy groceries"

    // Simulate clicking the "Delete" button
    fireEvent.click(deleteButton);

    // Verify that the todo item is no longer in the document
    expect(todoText).not.toBeInTheDocument();
});
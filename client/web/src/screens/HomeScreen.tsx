import React, { useMemo, useState } from 'react';
import Item from '../components/item/Item';
import { GetAllToDosDocument, ToDo, useCreateToDoMutation, useGetAllToDosQuery } from '../gql/graphql';
import './HomeScreen.css';
const HomeScreen: React.FC = () => {
    const { data, loading, error } = useGetAllToDosQuery();
    const [createToDoMutation] = useCreateToDoMutation({
        refetchQueries: [{ query: GetAllToDosDocument }],
    });
    const [value, setValue] = useState<string>('');
    const todos: [ToDo] = data?.todos as [ToDo];
    const numberCompletedTasks: number = useMemo((): number => {
        return todos?.reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue?.status),
            0,
        );
    }, [todos]);
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event: any) => {
        if (value.length > 0) {
            event.preventDefault();
            createToDoMutation({
                variables: {
                    toDoInput: { title: value },
                },
            });
            setValue('');
        }
    };
    const listItems = todos?.map((item) =>
        <Item item={item}></Item>
    );

    return (
        <div className="container">
            <header className='container__header'>
                <h1>
                    To Do
                </h1>
                <p>
                    You've completed {numberCompletedTasks} of {todos?.length} tasks
                </p>
            </header>
            <div className='container__content'>
                {listItems}
            </div>
            <form onSubmit={handleSubmit} className="container__footer">
                <input type="text" value={value} onChange={handleChange} />
                <input className='input-submit' type="submit" value="Add" />
            </form>
        </div>
    );
}

export default HomeScreen;

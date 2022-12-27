import React, { useMemo, useState } from 'react';
import { GetAllToDosDocument, useDeleteToDoByIdMutation, useEditToDoMutation } from '../../gql/graphql';
import './Item.css';
import { ItemProps } from './Item.types';
const Item: React.FC<ItemProps> = ({ item }) => {
    const [editToDoMutation] = useEditToDoMutation({
        refetchQueries: [{ query: GetAllToDosDocument }],
    }); const [text, setText] = useState<string>(item.title);
    const [selected, setSelected] = useState<boolean>(false);
    const [deleteToDoByIdMutation] = useDeleteToDoByIdMutation({
        variables: {
            deleteToDoByIdId: item._id,
        },
        refetchQueries: [{ query: GetAllToDosDocument }],
    });
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (selected) {
            editToDoMutation({
                variables: {
                    editTodoId: item._id,
                    toDoInput: { title: text },
                },
            });
            setSelected(!selected);
        } else {
            deleteToDoByIdMutation();
        }
    };
    const changeText = (event: any) => {
        event.preventDefault();
        setText(event.target.value);
    }
    const handleCancel = (event: any) => {
        event.preventDefault();
        setSelected(!selected); setText(item.title)
    }
    const editItem = (event: any) => {
        event.preventDefault();
        editToDoMutation({
            variables: {
                editTodoId: item._id,
                toDoInput: { status: !item.status },
            },
        });
    }
    const clickOnTitle = (event: any) => {
        event.preventDefault();
        setSelected(!selected);
    }
    const __color = useMemo(() => { return item.status ? '#007aff' : 'black'; }, [item]);
    return (
        <div key={item._id} className="item" >
            {selected ?
                <form className='input-item-container'>
                    <input onChange={changeText} className='input-text' type="text" value={text} />
                    <input onClick={handleCancel} className='input-button-cancel' type='button' value="Cancel" />
                </form> :
                <>
                    <form onChange={editItem}>
                        <input type="checkbox" className='checkbox' checked={item.status} />
                    </form>
                    <div className='label-container' onClick={clickOnTitle}>
                        <label className='label-item' style={{ color: __color }}>{item.title}</label>
                    </div>
                </>
            }
            <form onSubmit={handleSubmit}>
                <input className='input-button' type="submit" value={selected ? 'Update' : 'Delete'} />
            </form>
        </div>

    );
}

export default Item;

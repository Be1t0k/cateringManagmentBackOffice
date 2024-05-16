import React, { useEffect, useState } from 'react';
import MySelect from '../../UI/MySelect/MySelect';
import Get from '../../API/Get';
import { useFetching } from '../../hooks/useFetching';
import axios from 'axios';

const CreateCategoryForm = ({ create }) => {

    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [measures, setMeasure] = useState([]);

    const addNewdish = async (e) => {
        e.preventDefault()
        const newdish = {
            ...ingredient, id: Date.now()
        }
        create(newdish);
        setIngredient('');
        const addingDish = {
            "title": ingredient.title,
            "measures": { "id": Number(selectedValue) }
        }
        console.log(addingDish);
        try {
            const response = await axios.post('http://localhost:8081/api/v1/ingredient',
                addingDish,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response?.data);
            console.log(JSON.stringify(response));
        } catch (err) {
            if (!err?.response) {
                console.log(err.response);
            }
        }
    }

    const [fetchPriceById] = useFetching(async () => {
        const response = await Get.getIngredients()
        setIngredients(response.data);
    })

    const [fetchMeasures] = useFetching(async () => {
        const response = await Get.getMeasures()
        setMeasure(response.data);
    })

    useEffect(() => {
        fetchPriceById();
        fetchMeasures();
    }, [])

    return (
        <form>
                <h1 className='btn-login-center'>Новая категория</h1>
            <label htmlFor="title">title:</label>
            <input
                id='title'
                value={ingredient.title}
                onChange={e => setIngredient({ ...ingredient, title: e.target.value })}
                type="text"
                placeholder="Название категории"
            />
            <label htmlFor="measures">Единица измерения</label>
            <MySelect
                id='measures'
                value={selectedValue}
                onChange={value => {setSelectedValue(value); console.log(value);}}
                defaultValue="Мера измерения"
                options={measures.map(measure => ({ value: `${measure.id}`, title: `${measure.type}` }))}
            />
            <br />
            <p style={{ color: 'var(--clr-primary)' }}>Доступные ингредиенты</p>
            {ingredients.map(
                elem => <p key={elem.id}>{elem.title}</p>
            )}
            <br />
            
            <button className='nav-link btn-login-center' onClick={addNewdish}>Создать пост</button>
        </form>
    );
};

export default CreateCategoryForm;
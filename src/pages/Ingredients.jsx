import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Modal from '../components/Modal/Modal';
import CreateIngredientForm from '../components/CreateIngredientForm/CreateIngredientForm';
import CreateCategoryForm from '../components/CreateCategoryForm/CreateCategoryForm';

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalcategory, setModalcategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openDisclosureId, setOpenDisclosureId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/ingredient')
      .then((response) => response.json())
      .then((data) => setCategories(data));

    fetch('http://localhost:8081/api/v1/consignment')
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCategory(category);
    setOpenDisclosureId(category);
  }

  const createCategory = (newCategory) => {
      setCategories([...categories, newCategory])
      setModal(false)
  }

  const createPost = (newPost) => {
    setCategories([...categories, newPost])
    setModal(false)
  }

  return (
    <div>
      <Modal visible={modal} setVisible={setModal}>
        <CreateIngredientForm create={createPost} category={selectedCategory} />
      </Modal>
      {categories.map((category) => (
        <Disclosure as="div" open={openDisclosureId === category} key={category.id}>
          <DisclosureButton className="disclosure-control" onClick={() => handleCategoryClick(category.title)}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
              <h4>{category.title}</h4>
            </div>
          </DisclosureButton>
          <DisclosurePanel className="disclosure-content">
            <button onClick={()=> setModal(true)} className='nav-link'><p>Добавить товар</p></button>
            {ingredients.filter((ingredient) =>
              ingredient.ingredient.title === selectedCategory
            ).map((ingredient) => (
              <p key={ingredient.id}>
                {ingredient.title} - {ingredient.count}{ingredient.ingredient.measure.type}
              </p>
            ))}
          </DisclosurePanel>
        </Disclosure>
      ))}
      <button className='nav-link btn-login-center' onClick={()=> setModalcategory(true)}>Добавить категорию</button>
      <Modal visible={modalcategory} setVisible={setModalcategory}>
        <CreateCategoryForm create={createCategory} />
      </Modal>
    </div>
  );
};


export default App;
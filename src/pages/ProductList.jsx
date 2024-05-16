import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [productsBytitle, setProductsBytitle] = useState({});

    useEffect(() => {
        const fetchedProducts = [
            { ingredient: { title: 'Соль', measure: { type: "грамм" } }, name: 'Соль поваренная', weight: '500 грамм', price: 5.0 },
            { ingredient: { title: 'Соль', measure: { type: "грамм" } }, name: 'Соль морская', weight: '500 грамм', price: 30.0 },
            { ingredient: { title: 'Лук', measure: { type: "кило" } }, name: 'Лук вязниковский', weight: '100 грамм', price: 10.0 },
            { ingredient: { title: 'Мука', measure: { type: "шт" } }, name: 'Мука пшеничная', weight: '1 кг', price: 15.0 },
            { name: 'Мука кукурузная', weight: '500 грамм', price: 8.0 }
        ];

        const groupedProducts = fetchedProducts.reduce((acc, product) => {
            const { ingredient, ...rest } = product;
            const title = ingredient ? ingredient.title : 'Неизвестная категория';
            if (!acc[title]) {
                acc[title] = [rest];
            } else {
                acc[title].push(rest);
            }
            return acc;
        }, {});

        setProductsBytitle(groupedProducts);
    }, []);

    return (
        <div>
            {Object.keys(productsBytitle).map((title, index) => (
                <div key={index}>
                    <h4>{title}</h4>
                    <ul>
                        {productsBytitle[title].map((product, idx) => (
                            <li key={idx}>
                                {product.name} - {product.weight}, цена: {product.price}{product.ingredient ? `, единица измерения: ${product.ingredient.measure.type}` : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
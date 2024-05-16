import ContentMain from '../components/ContentMain/ContentMain';
import DishPage from '../pages/DishPage';
import Orders from '../pages/Orders';
import NotFoundPage from '../pages/NotFoundPage';
import Suppliers from '../pages/Supplier';
import Ingredients from '../pages/Ingredients';
import InvoceConsigment from '../pages/InvoceConsigment';
import Statistics from '../pages/Statistics';


export const publicRoutes = [
    {
        name: NotFoundPage,
        path: "*"
    }
];
export const privateRoutes = [
    {
        name: Suppliers,
        path: '/suppliers'
    },
    {
        name: Orders,
        path: '/orders'
    },
    {
        name: DishPage,
        path: '/dish/:id'
    },
    {
        name: ContentMain,
        path: '/home'
    },
    {
        name: Ingredients,
        path: '/ingredients'
    },
    {
        name: InvoceConsigment,
        path: '/invoce_consigment'
    },
    {
        name: Statistics,
        path: '/statistics'
    }
];
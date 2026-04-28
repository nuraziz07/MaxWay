import './App.css';
import Search from './components/search/search.jsx';
import Page1 from '../src/components/Page1/page1.jsx';
import { Routes, Route } from 'react-router-dom';
import Page2 from './components/Page 2/page2.jsx';
import Basket from './components/Basket Page/basket.jsx';
import Order from './components/Order/order.jsx';
import { useLocation } from 'react-router-dom';
import OrderDetail from './components/Order/order-detail.jsx';
import EditLocation from './components/EditLocation/edit-location.jsx';

function App() {
    const location = useLocation();
    let startLocation = location.pathname.split('/');
    return (
        <div>
            {startLocation[1] === '' ||
            startLocation[1] === 'detail' ||
            startLocation[1] === 'basket' ? (
                <Search />
            ) : null}
            <div
                className={'sm:w-full px-10 pt-10 pb-2 flex sm:justify-center'}
            >
                <Routes>
                    <Route index element={<Page1 />} />
                    <Route path={'/detail/:id'} element={<Page2 />} />
                    <Route path={'/basket'} element={<Basket />} />
                    <Route path={'/order'} element={<Order />} />
                    <Route path={'/order-detail'} element={<OrderDetail />} />
                    <Route path={'/order-card'} element={<Order />} />
                    <Route path={'/editing'} element={<EditLocation />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

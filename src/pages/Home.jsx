import { useEffect } from "react";
import Categories from "../components/content/Categories";
import Sort from "../components/content/Sort";
import PizzaLoader from "../components/content/pizzaBlock/SceletonPizza";
import PizzaBlock from '../components/content/pizzaBlock/PizzaBlock';
import Pagination from '../components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import icon from "../assets/img/smile.png"
import { fetchPizzas, selectPizza } from '../redux/slices/pizzasSlices';


let Content = () => {

    const dispatch = useDispatch()

    const { searchValue } = useSelector((state) => state.pagination)

    const { items, status } = useSelector(selectPizza)

    const catagories = useSelector((state) => state.filter.catagories)

    const sort = useSelector((state) => state.filter.sort)

    const page = useSelector((state) => state.pagination.page)

    const category = catagories !== "Все" ? `category=${catagories}` : '';

    const search = searchValue ? `search=${searchValue}` : '';

    const getPizzas = async () => {
        dispatch(
            fetchPizzas({
                sort,
                category,
                search,
                page,
            }),
        );
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getPizzas()
    }, [category, page, sort, search])

    const Pizzas = items.map((el, i) => (<PizzaBlock key={i} {...el} />));

    const Skeleton = [...new Array(4)].map((el) => <PizzaLoader />);

    console.log(status)
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Key Store</h2>
                {items.length > 0
                    ?
                    <div className="content__items">
                        {
                            status === 'loading' ? Skeleton : Pizzas
                        }
                    </div>
                    :
                    <div className='content__error'>
                        <span>К сожалению такой игры нет ... </span>
                        <img src={icon} alt="smile" />
                    </div>
                }
                <Pagination />
            </div>
        </div>
    )
}

export default Content;

//Поиск который происходит без бек энда

// const Pizzas = state.filter((el) => {
//     if (el.title.toLowerCase().includes(searchValue.toLowerCase())) {
//         return true;
//     }
//     return false;
// }).map((el, i) => (<PizzaBlock key={i} {...el} />));
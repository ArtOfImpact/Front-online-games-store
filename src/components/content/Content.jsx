import Categories from "./Categories";
import PizzaBlock from "./pizzaBlock/PizzaBlock";
import Sort from "./Sort";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import PizzaLoader from "./pizzaBlock/SceletonPizza";

let Content = () => {

    const [state, setState] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://62e3a62bb54fc209b88d822d.mockapi.io/items')
            .then(response => {
                setTimeout(() => {
                    setState(response.data)
                    setIsLoading(false)
                }, 1000)
            })
    }, [])


    console.log(state)
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading ? [...new Array(8)].map((el, i) => <PizzaLoader key={i} />) : state.map((el, i) => (
                            <PizzaBlock key={i} {...el} />))
                    }
                    {/* {state.map((el, i) => (
                        <PizzaLoader key={i} {...el} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Content;
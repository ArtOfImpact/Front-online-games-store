import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { addCart } from "../redux/slices/cartSlices";



const Description = () => {

    const [status, setStatus] = useState(false)
    const [state, setState] = useState({ price: "", imageUrl: "", title: "" })

    const dispatch = useDispatch();

    const id = useParams();

    useEffect(() => {
        setStatus(false)
        axios.get(`https://mall-games.herokuapp.com/games?id=${id.id}`, {
        })
            .then(response => {
                console.log(response.data)
                setState(response.data)
                setStatus(true)
            })
    }, [])
    console.log(state)

    const onClickAdd = (state) => {
        const { price, imageUrl, title, id, } = state
        const items = {
            price,
            imageUrl,
            title,
            id,
        }
        dispatch(addCart(items))
    }

    return (
        status === true ?
            <div className="description">
                <div className="description-left">
                    <img className="description-left__img" src={state.imageUrl} />
                    <button className="description-left__button" onClick={() => onClickAdd(state)}>Добавить + </button>
                </div>
                <div className="description-right">
                    <div className="description-right__title" ><span>{state.title}</span></div>
                    <div className="description-right__subtitle">{state.category} / Оценка игры: {state.rating} из 10</div>
                    <div className="description-right__title">Цена: {state.price} BYN</div>
                    <div className="description-right__text">{state.description}</div>
                    <div className="description-right__video">
                        <iframe width="800" height="515" src={state.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            :
            <div className='content__error'>
                <div class="loader">loading</div>
            </div>
    )
}

export default Description
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png'

let CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <span>😕</span>
            </h2>
            <p>
                Вероятней всего, вы не добавли не одной игры в корзину.
                <br />
                Для того, чтобы добваить игру , перейди на главную страницу.
            </p>
            <img src={cartEmptyImg} alt="Empty cart" />
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}

export default CartEmpty;
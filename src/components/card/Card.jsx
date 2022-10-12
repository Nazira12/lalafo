import css from "./Card.module.css"
import { Link } from "react-router-dom"

function Card(props) {
    return(
        <div className={css.wrapper}>
            <div className={css.imageWrapper}>
                <img 
                src={props.img || "https://www.alfasolare.ru/a_solar_restyle/wp-content/themes/consultix/images/no-image-found-360x260.png"}
                alt={props.text} />
            </div>
          <div className={css.footer}>
            <div>{props.text}</div>
            <div>{props.price}$</div>
            <Link to={'/product/' + props.id}><button>Подробнее</button></Link>
          </div>
        </div> 
    )
}

export default Card 
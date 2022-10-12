import css from "./ErrorBlock.module.css"

function ErrorBlock(props){
    return(
        <div className={css.wrapper}>
            <h1>{props.text}</h1>
            <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18633.jpg?w=2000" alt="" />
        </div>
    )
}

export default ErrorBlock
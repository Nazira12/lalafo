import css from "./Input.module.css"

function Input({ title, ...props }){
    return(
        <label className={css.wrapper}>
            {title}
            <input {...props} />
        </label>
    )
}

export default Input
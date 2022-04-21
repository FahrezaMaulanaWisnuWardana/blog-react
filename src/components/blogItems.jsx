import { Link } from "react-router-dom"

const blogItem = (props) => {

    // Date Setting
    let date = new Date(props.date)
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let dateFormat =`${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return(
        <Link to={`/blog/${props.slug}`}>
            <article className="mb-5">
                <header>
                    <h3
                    className="text-3xl font-bold tracking-tight text-black dark:text-white"
                    style={{
                        fontFamily:"Montserrat, sans-serif",
                    }}>
                    {props.title}
                    </h3>
                    <small className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">{dateFormat}</small>
                </header>
                <p className="mt-2 text-black dark:text-slate-50">{props.summary}</p>
                <small className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                    {props.topic}
                </small>
            </article>
        </Link>
    )
}
export default blogItem
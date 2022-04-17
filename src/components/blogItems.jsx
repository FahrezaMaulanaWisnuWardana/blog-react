const blogItem = (props) => {
    
    return(
        <article className="mb-3">
            <header>
                <h3
                className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white"
                style={{
                    fontFamily:"Montserrat, sans-serif",
                }}>
                   {props.title}
                </h3>
                <small className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">Topics • July 7, 2021</small>
            </header>
            <p className="mt-5 text-black dark:text-slate-50">Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</p>
        </article>
    )
}
export default blogItem
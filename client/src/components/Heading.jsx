const Heading = ({ subtitle, title }) => {
    return (
        <>
            <div className="heading">
                <h5 className="subtitle">{subtitle}</h5>
                <h3 className="title">{title}</h3>
            </div>
        </>
    )
}

export default Heading
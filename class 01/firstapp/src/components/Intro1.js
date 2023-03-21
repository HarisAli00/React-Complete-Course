function Intro1(props){
    return(
        <div className="blog-post-intro">
            <h2>{props.title}</h2>
            <div>
                <p>{props.description}</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
}

export default Intro1;
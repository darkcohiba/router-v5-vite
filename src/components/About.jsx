function About() {

    fetch("/api/planeteers") //fetching to localhost4000/planeteers
        .then((response) => response.json())
        .then((data) => console.log(data));
    
    return (
        <div>
            <p>About page</p>
        </div>
    );
}

export default About;
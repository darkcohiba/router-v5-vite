function About() {

    fetch("http://localhost:4000/planeteers")
        .then((response) => response.json())
        .then((data) => console.log(data));
    
    return (
        <div>
            <p>About page</p>
        </div>
    );
}

export default About;
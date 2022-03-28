import avatar from '../../assets/img/AvatarMaker.png';
const About = () => {
    return (
        <section className="about">
            <div className="about__title">
                <img className='about__title--image' src={avatar} alt="Author" />
                <h2 className="about__title--title">Konrad Nowak</h2>
            </div>
            <div className="about__content">
                <h3 className="about__content--title">About me</h3>
                <p className="about__content--content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim aliquam nemo?
                    Error eum suscipit doloremque totam quidem reiciendis repellendus commodi!
                    Eaque vero, ipsum laudantium reprehenderit nam eveniet soluta ipsa, illum
                    culpa deserunt nisi explicabo earum perspiciatis architecto velit voluptatibus doloribus
                    maiores cumque dolorum aliquam optio libero labore veniam quod.
                </p>
            </div>
        </section>
    );
}

export default About;
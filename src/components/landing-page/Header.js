import Nav from './Nav';
const Header = () => {
    return (
        <section className="header">
            <div className="cloud">
                <h1 className="author">Konrad Nowak</h1>
                <h3 className="title">Web Developer</h3>
            </div>
            <div className="settings">
                <i className='fa fa-cog'></i>
            </div>
            <Nav />
        </section>
    );
}

export default Header;
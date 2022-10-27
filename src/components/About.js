import avatar from './../assets/img/avatar/AvatarMaker.png';
const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__author">
                <h2 className="author__title">Konrad Nowak</h2>
                <img className='author__svg' src={avatar} alt="Author" />
            </div>
            <div className="about__content">
                <div className="content__info">
                    <div>
                        <h3>Kim jestem?</h3>
                        <span>Urodziłem się w 1998 roku. Jestem absolwentem studiów I stopnia Politechniki Świętokrzyskiej w Kielcach na kierunku Informatyka, gdzie uzyskałem stopień inżyniera informatyka ze specjalizacją - Systemy informacyjne. Obecnie pracuję w pracy niezwiązanej z branżą IT. Jednak aby to zmienić stale rozwijam się studiując informatykę, gdzie zgłębiam wiedzę z zakresu ogólnopojętej informatyki, a w czasie wolnym rozszerzając swój asortyment technologii webowych.</span>
                    </div>
                    <div>
                        <h3>Jak wygląda moja droga?</h3>
                        <span>Swoje kształcenie w tym kierunku rozpocząłem już w technikum informatycznym, które zakończyło się uzyskaniem dyplomu technika informatyka. Na tamtym etapie programowanie było moją piętą achillesową. Postanowiłem to zmienić i rozpocząć naukę programowania. Podczas nauki programowania szczególnie zafascynowałem się web developerką. Do dziś staram się podnosić swoje kwalifikacje w tym zakresie, udowadniając sobie, że ciągła praca nad sobą pozwoli mi osiągnąć wyznaczony cel pomimo wielu przeciwności jakie napotkałem po drodze.</span>
                    </div>
                    <div>
                        <h3>Jak pracuję?</h3>
                        <span>Stawiam sobie wysokie poprzeczki, dowodem na to jest pobierane stypendium naukowe już od czasów technikum. Patrzę na swoją osobę krytycznym okiem, aby stale mieć motywację do podnoszenia swoich kompetencji interpersonalnych oraz zawodowych. Pomimo codziennych obowiązków staram się, aby moja praca była na jak najwyższym poziomie.</span>
                    </div>
                    <div>
                        <h3>Obecny status</h3>
                        <span>Obecnie studiuję niestacjonarnie Informatykę II stopnia na Politechnice Świętokrzyskiej w Kielcach, przy okazji ucząc się nowych rzeczy z zakresu programowania webowego.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
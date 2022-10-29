import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import avatar from './../assets/img/avatar/AvatarMaker.png';
const About = () => {

    const [animateAbout, setAnimateAbout] = useState({});

    const animateAbout1 = useSpring({ translateX: animateAbout.anim1 ? 0 : -2000 });
    const animateAbout2 = useSpring({ translateX: animateAbout.anim2 ? 0 : 2000 });
    const animateAbout3 = useSpring({ translateX: animateAbout.anim3 ? 0 : -2000 });
    const animateAbout4 = useSpring({ translateX: animateAbout.anim4 ? 0 : 2000 });

    useEffect(() => {
        const aboutHeight = document.getElementById('about').offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.scrollY > aboutHeight - 450) {
                setAnimateAbout(prevState => ({
                    ...prevState,
                    anim1: true
                }));
            }
            if (window.scrollY > aboutHeight - 250) {
                setAnimateAbout(prevState => ({
                    ...prevState,
                    anim2: true
                }));
            }
            if (window.scrollY > aboutHeight - 50) {
                setAnimateAbout(prevState => ({
                    ...prevState,
                    anim3: true
                }));
            }
            if (window.scrollY > aboutHeight + 150) {
                setAnimateAbout(prevState => ({
                    ...prevState,
                    anim4: true
                }));
            }
        });
    }, []);
    return (
        <section id="about" className="about">
            <div className="intro">
                <h2 className="intro__title">About me</h2>
                <div className="about__author">
                    <h2 className="author__title">Konrad Nowak</h2>
                    <img className='author__svg' src={avatar} alt="Author" />
                </div>
            </div>
            <div className="about__content">
                <div className="content__info">
                    <animated.div style={animateAbout1}>
                        <h3>Kim jestem?</h3>
                        <span>Urodziłem się w 1998 roku. Jestem absolwentem studiów I stopnia Politechniki Świętokrzyskiej w Kielcach na kierunku Informatyka, gdzie uzyskałem stopień inżyniera informatyka ze specjalizacją - Systemy informacyjne. Obecnie pracuję w pracy niezwiązanej z branżą IT. Jednak aby to zmienić stale rozwijam się studiując informatykę, gdzie zgłębiam wiedzę z zakresu ogólnopojętej informatyki, a w czasie wolnym rozszerzając swój asortyment technologii webowych.</span>
                    </animated.div>
                    <animated.div style={animateAbout2}>
                        <h3>Jak wygląda moja droga?</h3>
                        <span>Swoje kształcenie w tym kierunku rozpocząłem już w technikum informatycznym, które zakończyło się uzyskaniem dyplomu technika informatyka. Na tamtym etapie programowanie było moją piętą achillesową. Postanowiłem to zmienić i rozpocząć naukę programowania. Podczas nauki programowania szczególnie zafascynowałem się web developerką. Do dziś staram się podnosić swoje kwalifikacje w tym zakresie, udowadniając sobie, że ciągła praca nad sobą pozwoli mi osiągnąć wyznaczony cel pomimo wielu przeciwności jakie napotkałem po drodze.</span>
                    </animated.div>
                    <animated.div style={animateAbout3}>
                        <h3>Jak pracuję?</h3>
                        <span>Stawiam sobie wysokie poprzeczki, dowodem na to jest pobierane stypendium naukowe już od czasów technikum. Patrzę na swoją osobę krytycznym okiem, aby stale mieć motywację do podnoszenia swoich kompetencji interpersonalnych oraz zawodowych. Pomimo codziennych obowiązków staram się, aby moja praca była na jak najwyższym poziomie.</span>
                    </animated.div>
                    <animated.div style={animateAbout4}>
                        <h3>Obecny status</h3>
                        <span>Obecnie studiuję niestacjonarnie Informatykę II stopnia na Politechnice Świętokrzyskiej w Kielcach, przy okazji ucząc się nowych rzeczy z zakresu programowania webowego.</span>
                    </animated.div>
                </div>
            </div>
        </section>
    );
}

export default About;
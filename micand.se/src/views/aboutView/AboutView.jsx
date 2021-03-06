import css from './AboutView.module.css'
import profileImage from '../../utils/images/micand.png'

const AboutView = () => {
    return (
        <>
            <div className={css.container}>
                <section className={css.empty}></section>
                <section className={css.containerImage}>
                    <img src={profileImage} alt="profile" className={css.profileImage}/>
                </section>
                <section className={css.containerText}>
                    <p>My name is Michaela and i live in Stenungsund with my family just north of Gothenburg.</p>
                    <p>I study to become a fullstack developer, which will give me a good understanding about both
                        frontend and backend. So far i'm more interested in backend.
                        The role as a developer gives me the opportunity to be a problemsolver aswell as bringing out
                        the creative side of me.</p>
                    <p> As a person i like to keep things in order which is good because i try to write my code as clean
                        as possible.
                        I work structured, i like to try new things and i have a keen eye for design.</p>
                    <a href="https://dashing-gumption-c5da63.netlify.app/" method="get" target="_blank"> <button className={css.buttonCv}>Mitt cv</button></a>
                </section>
                <section className={css.empty}></section>
            </div>
        </>
    )
}

export default AboutView
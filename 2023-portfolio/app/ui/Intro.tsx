import styles from './Intro.module.css';
import { montserrat, sourceSans } from '../assets/fonts/fonts';
import Link from 'next/link';
export function Intro() {
    return (
        <div className={`${styles.introContainer} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp} ${montserrat.className}`}>
            <h1 className={styles.introHeader}>Jacob Cadiente</h1>
            <h2 className={styles.introSubtitle}>A passionate full stack Software Engineer/Web Developer.</h2>
            <p className={`${styles.introBio} ${sourceSans.className}`}>Hey there! Nice to make your acquaintance, im Jake and I am a lover of all things tech and engineering. A full stack engineer for about 5 years now, with a passion for engaging and creative UI/UX. Currently, I am helping build interactive, dynamic and performant web apps for <Link className={styles.introInlineLink} href="capco.com">Capco Inc.</Link> as a Senior Software Engineering Consultant.</p>
        </div>
    )
}

export default Intro;
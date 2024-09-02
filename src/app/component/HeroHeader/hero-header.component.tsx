import styles from './hero-header.module.scss';
import Button from '../Button/button.component';
import VerticalLinks from '../VerticalLink/vertical-link.component';

type propsType = {
    name: string,
    subTitle: string
}

export default function HeroHeader(props: propsType): JSX.Element {
    return (
        <div id="Home" className={`${styles.mainContainer} flex justify-between w-full px-32 mt-12`}>
            <div className={`${styles.heroTextAndBtnContainer} my-auto`}>
                <div className={`${styles.heroText} my-6 text-2xl text-white`}>I'M <span className={`${styles.heroName} text-4xl`}>{props.name}</span><br />{props.subTitle}</div>
                <Button>Contact Me</Button>
            </div>
            <div className={`${styles.heroImage} flex `}><img className={`w-96 h-96`} src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png" alt="test-image" /></div>
            <VerticalLinks />
        </div>
    )
}
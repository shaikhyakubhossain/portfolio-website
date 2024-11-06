import styles from './hero-header.module.scss';
import Button from '../Button/button.component';
import VerticalLinks from '../VerticalLink/vertical-link.component';
import Link from 'next/link';
import type { verticalLinks } from '@/app/constants/Types/api-data';

type propsType = {
    name: string,
    subTitle: string,
    verticalLinks: verticalLinks[]
}

export default function HeroHeader(props: propsType): JSX.Element {
    return (
        <div id="Home" className={`${styles.mainContainer} relative w-full px-32 pt-12 mt-12`}>
            <div className='flex flex-wrap-reverse justify-between'>
            <div className={`${styles.heroTextAndBtnContainer} my-auto`}>
                <div className={`${styles.heroText} my-6 text-2xl text-white`}>I&apos;M <span className={`${styles.heroName} text-4xl`}>{props.name}</span><br />{props.subTitle}</div>
                <Link href={'#Contact'}><Button customTW='text-yellow-300 hover:text-black hover:bg-yellow-300'>Contact Me</Button></Link>
            </div>
            <div className={`${styles.heroImage} flex `}><img className={`w-96 h-96`} src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png" alt="test-image" /></div>
            </div>
            <VerticalLinks />
        </div>
    )
}
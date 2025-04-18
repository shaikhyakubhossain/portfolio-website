import styles from './hero-header.module.scss';
import Button from '../Button/button.component';
import VerticalLinks from '../VerticalLink/vertical-link.component';
import AutoTypeEffect from '../AutoTypeEffect/auto-type-effect.component';
import Link from 'next/link';
import Image from 'next/image';
import type { verticalLink } from '@/app/constants/Types/api-data';

type propsType = {
    name: string,
    subTitles: string[],
    heroImage: string,
    verticalLinks: verticalLink[]
}

export default function HeroHeader(props: propsType): JSX.Element {
    return (
        <div id="Home" className={`${styles.mainContainer} relative w-full min-[925px]:px-32 pt-12 mt-12`}>
            <div className={`flex justify-between max-[1040px]:flex-col-reverse max-[1040px]:items-center`}>
            <div className={`${styles.heroTextAndBtnContainer} my-auto`}>
                <div className={`${styles.heroText} my-6 text-2xl max-[640px]:text-xl text-white`}>I&apos;M <span className={`${styles.heroName} min-[925px]:text-4xl max-[640px]:text-2xl`}>{props.name}</span><br />A <AutoTypeEffect subTitles={props.subTitles} /></div>
                <Link href={'#Contact'}><Button customTW='text-yellow-300 hover:!text-black hover:bg-yellow-300'>Contact Me</Button></Link>
            </div>
            <div className={`${styles.heroImage} relative flex min-w-[420px] min-h-[420px]`}><Image quality={100}  width={420} height={420} className={`min-w-[420px] min-h-[420px] max-[460px]:min-w-[30px] max-[460px]:min-h-[300px] rounded-full`} src={props.heroImage} alt='hero-image' /></div>
            </div>
            <VerticalLinks verticalLink={props.verticalLinks} />
        </div>
    )
}
import styles from './skill-card.module.scss';
import Image from 'next/image';


type propsType = {
    skillIcon: string,
    skillTitle: string
}

export default function SkillCard(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} max-[925px]:py-5 max-[925px]:px-8 max-[925px]:w-40 max-[640px]:py-3 max-[640px]:px-6 max-[640px]:w-28 py-7 px-12 m-4 shadow-lg shadow-slate-800 hover:bg-slate-600 transition-all duration-200 bg-slate-700`}>
            <div className={`${styles.skillIconContainer} flex justify-center mx-auto`}><Image loading='lazy' width={96} height={96} className={`${styles.skillIconImg} w-24 h-24 max-[925px]:w-16 max-[925px]:h-16 max-[640px]:w-8 max-[640px]:h-8 `} src={props.skillIcon} alt={"skillIcon"} /></div>
            <div className={`${styles.skillTitle} mt-5 max-[640px]:text-xs`}>{props.skillTitle}</div>
        </div>
    )
}
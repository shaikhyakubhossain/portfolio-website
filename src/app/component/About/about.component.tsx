import styles from "./about.module.scss"


type propsType ={
    aboutMe: string
}

export default function About(props: propsType): JSX.Element {
    return (
        <div id="About" className={`${styles.mainContainer} flex mt-60 pt-40`}>
            <div className="my-auto">
            <div className={`${styles.heading} text-4xl font-bold mb-4 ml-40`}>About</div>
                <div className={`${styles.paragraphContainer} flex justify-center`}>
                    <div className={`${styles.longDash} font-bold mr-2 `}>&#8212;&#8212;&#8212;</div>
                    <div className={`${styles.paragraph} w-3/4 text-2xl`}>{props.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}
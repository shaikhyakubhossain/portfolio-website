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
                    <div className={`${styles.longDash} flex flex-col justify-center mr-2 h-[34px] `}><div className="w-11 h-[1px] bg-gray-50"></div></div>
                    <div className={`${styles.paragraph} w-3/4 text-2xl text-justify`}>{props.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}
import styles from "./about.module.scss"


export default function About(): JSX.Element {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.heading} text-4xl font-bold mb-4 ml-40`}>About</div>
            <div className={`${styles.paragraphContainer} flex justify-center`}>
                <div className={`${styles.longDash} font-bold mr-2 `}>&#8212;&#8212;&#8212;</div>
                <div className={`${styles.paragraph} w-3/4`}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</div>
            </div>  
        </div>
    )
}
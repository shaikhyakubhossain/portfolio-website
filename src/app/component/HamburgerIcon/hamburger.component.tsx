import styles from "./hamburger.module.scss"

export default function HamburgerIcon(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex items-center w-4 h-4`}>
            <div className="w-full h-[1px] bg-white"></div>
        </div>
    )
}
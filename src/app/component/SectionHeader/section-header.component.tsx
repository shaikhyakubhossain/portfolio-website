import styles from './section-header.module.scss';

type propsType = {
    title: string
}

export default function SectionHeader(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} text-center text-4xl font-bold mb-12`}>{props.title}</div>
    )
}
import styles from './button.module.scss';

type propsType = {
    children: React.ReactNode
}

export default function Button(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} `}>
            <button className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}>{props.children}</button>
        </div>
    );
}
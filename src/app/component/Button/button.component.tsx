import styles from './button.module.scss';

type propsType = {
    children: React.ReactNode,
    customTW?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
}

export default function Button(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} inline-block`}>
            <button onClick={props.onClick} type={props.type} className={`${styles.btn} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-4 hover:border-transparent rounded ${props.customTW}`}>{props.children}</button>
        </div>
    );
}
"use client";
import { useRef, useEffect } from "react";
import styles from './auto-type-effect.module.scss';

type propsType = {
    subTitle: string
};

export default function AutoTypeEffect(props: propsType): JSX.Element {
    const elemRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const elem = elemRef.current;
        let typingInterval: any;
        let cursorBlinkingInterval: any;
        if (elem) {
            let indexToAdd = 0;
            typingInterval = setInterval(() => {
                if(indexToAdd === props.subTitle.length) {
                    clearInterval(typingInterval);
                    return;
                }
                elem.textContent += props.subTitle[indexToAdd];
                indexToAdd++;
            }, 100);
            cursorBlinkingInterval = setInterval(() => {
                elem.style.borderRightWidth = elem.style.borderRightWidth === "2px" ? "0px" : "2px";
            }, 500)
        }
        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorBlinkingInterval);
        }
    }, [])

    return <span ref={elemRef} className={`${styles.typingText} text-yellow-300`}></span>;
}
"use client";
import { useRef, useEffect, useState } from "react";
import styles from './auto-type-effect.module.scss';

type propsType = {
    subTitle: string
};

export default function AutoTypeEffect(props: propsType): JSX.Element {
    const elemRef = useRef<HTMLSpanElement | null>(null);

    const [shouldErase, setShouldErase] = useState<boolean>(false);
    const [indexToAdd, setIndexToAdd] = useState<number>(0);

    useEffect(() => {
        const elem = elemRef.current;
        let typingInterval: any;
        if (elem) {
            typingInterval = setInterval(() => {
            console.log(indexToAdd, shouldErase);
            if(indexToAdd === props.subTitle.length - 1) {
                // clearInterval(typingInterval);
                setShouldErase(true);
            }
            else if(indexToAdd === 1){
                // clearInterval(typingInterval);
                setShouldErase(false);
            }

                if(!shouldErase){
                    elem.textContent += props.subTitle[indexToAdd];
                    setIndexToAdd(prev => prev + 1);
                }
                else{
                    elem.textContent = elem.textContent && elem.textContent.slice(0, elem.textContent.length - 1);
                    setIndexToAdd(prev => prev - 1);

                }
            }, 100);
            
        }
        return () => {
            clearInterval(typingInterval);
        }
    }, [shouldErase, indexToAdd]);

    useEffect(() => {
        const elem = elemRef.current;
        let cursorBlinkingInterval: any;
        if(!elem) return;
        cursorBlinkingInterval = setInterval(() => {
            elem.style.borderRightWidth = elem.style.borderRightWidth === "2px" ? "0px" : "2px";
        }, 500);
        return () => {
            clearInterval(cursorBlinkingInterval);
        }

    }, []);

    return <span ref={elemRef} className={`${styles.typingText} text-yellow-300`}></span>;
}
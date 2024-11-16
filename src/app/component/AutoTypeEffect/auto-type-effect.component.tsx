"use client";
import { useRef, useEffect } from "react";
import styles from './auto-type-effect.module.scss';

type propsType = {
    subTitles: string[]
};

export default function AutoTypeEffect(props: propsType): JSX.Element {
    const elemRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const elem = elemRef.current;
        let typingInterval: any;
        let eraseDelay: any;
        let indexToType = 0;
        let indexToAdd = 0;
        let shouldErase = false;
        if (elem) {
            typingInterval = setInterval(() => {
            // console.log(indexToAdd, shouldErase);
            if(indexToAdd === props.subTitles[indexToType].length) {
                // clearInterval(typingInterval);
                // setShouldErase(true);
                shouldErase = true;
            }
            else if(indexToAdd === 0 && shouldErase){
                // clearInterval(typingInterval);
                // setShouldErase(false);
                indexToType++;
                shouldErase = false;
            }
            
            if(indexToType === props.subTitles.length){
                indexToType = 0;
                indexToAdd = 0;
            }

                if(!shouldErase && props.subTitles[indexToType][indexToAdd]){
                    elem.textContent += props.subTitles[indexToType][indexToAdd];
                    // setIndexToAdd(prev => prev + 1);
                    indexToAdd++;
                }
                else{
                    elem.textContent = elem.textContent && elem.textContent.slice(0, -1);
                    // setIndexToAdd(prev => prev - 1);
                    indexToAdd--;

                }
            }, 100);
        }
        return () => {
            clearInterval(typingInterval);
            clearTimeout(eraseDelay);
        }
    }, []);

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
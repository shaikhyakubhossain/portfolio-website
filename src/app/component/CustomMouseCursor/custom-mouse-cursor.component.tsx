type propsType = {
    mousePosition: { x: number, y: number }
}

export default function CustomMouseCursor(props : propsType): JSX.Element {
    return (
        <div className={`absolute w-7 h-7 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2`} style={{left: `${props.mousePosition.x}px`, top: `${props.mousePosition.y}px`, pointerEvents: "none"}} ></div>
    )
}
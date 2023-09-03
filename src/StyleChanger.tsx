import { useRef } from 'react'

const StyleChanger = () => {
    let ref1 = useRef<HTMLDivElement>(null);
    let ref2 = useRef<HTMLDivElement>(null);

    let div1Color = 'red';
    let div2Color = 'blue';

    let div1Text = 'I\'m a red square';
    let div2Text = 'I\'m a blue square';


    const changeColor = () => {
        if (ref1.current) ref1.current.style.backgroundColor = 'white';
        if (ref2.current) ref2.current.style.backgroundColor = 'white';
    };

    const switchColor = () => {
        if (ref1.current!.style.backgroundColor === div1Color) {
            ref1.current!.style.backgroundColor = div2Color
            ref1.current!.textContent = div2Text
        } else {
            ref1.current!.style.backgroundColor = div1Color
            ref1.current!.textContent = div1Text
        }
        if (ref2.current!.style.backgroundColor === div2Color) {
            ref2.current!.style.backgroundColor = div1Color
            ref2.current!.textContent = div1Text
        } else {
            ref2.current!.style.backgroundColor = div2Color
            ref2.current!.textContent = div2Text
        }
    }

    return (
        <>
            <div className="StyleChanger" ref={ref1} style={{ backgroundColor: div1Color, color: "white" }}>{div2Text}</div>
            <div className="StyleChanger" ref={ref2} style={{ backgroundColor: div2Color, color: "white" }}>{div1Text}</div>
            <button onClick={changeColor}>Change color to white</button >
            <button onClick={switchColor}>Switch color</button >
        </>
    )
}

export default StyleChanger
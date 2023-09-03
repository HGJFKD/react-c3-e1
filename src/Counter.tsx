import { useRef } from 'react'

function Counter(): JSX.Element {
    let ref = useRef<HTMLDivElement>(null);
    let counter: number = 0
    return (
        <>
            <div ref={ref}>{counter}</div>
            <button onClick={
                () => {
                    if (ref.current && ref.current.textContent) {
                        ref.current.textContent = (+ref.current.textContent + 1).toString()
                    }
                }}>add</button>
            <button onClick={
                () => {
                    if (ref.current && ref.current.textContent) {
                        ref.current.textContent = (counter).toString()
                    }
                }}>Reset counter</button>
        </>
    )
}

export default Counter
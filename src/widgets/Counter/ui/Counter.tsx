import cls from './Counter.module.scss'
import {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const handleIncrement = () => {
        setCounter((prev: number) => prev + 1);
    }
    const handleDecrement = () => {
        setCounter((prev: number) => prev - 1);
    }
    return (
        <div className={cls.Counter}>
            <button className={cls.button} onClick={handleDecrement}>Decrement</button>
            <button className={cls.button} onClick={handleIncrement}>Increment</button>
            <div className={cls.info}>{counter}</div>
        </div>
    )
}
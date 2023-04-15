import React, {ChangeEvent, FC} from 'react';
import style from './Input.module.scss'


export type InputPropsTypes = {
    type: 'text' | 'number'
    callBack?: () => void
    styles: 'default' | 'primary'
    required: boolean

    inputValue: number | string
    setInputValue?: (inputValue: string) => void
    callback: (value: string, name: 'User' | 'Friend') => void
    name: 'User' | 'Friend'
}


export const Input: FC<InputPropsTypes> = ({
                                               type,
                                               callBack,
                                               styles,
                                               required,

                                               inputValue,
                                               setInputValue,
                                               callback,
                                               name,
                                           }) => {
    const className = `${style.input} ${style[`input_${styles}`]}`
    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
       callback(event.currentTarget.value,name)
    }
    // попробуем получить значение из интпута
    return (
        <>
            <input
                value={inputValue}
                className={className} type={type}
                onChange={handleValueChange}
                required={required}
                name={name}

            />

        </>
    );
};


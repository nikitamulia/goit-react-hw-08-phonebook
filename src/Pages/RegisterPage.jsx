import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/auth/auth-operations";
import s from './RegisterPage.module.css';

export default function RegisterPage(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch(name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);   
            default:
                return;         
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(operations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    };

    return(
        <div>
            <h1>Страница регистрации</h1>

            <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="">
                    Имя
                    <input className={s.input} type="text" name="name" value={name} onChange={handleChange}/>
                </label>

                <label htmlFor="">
                    Почта
                    <input className={s.input} type="email" name="email" value={email} onChange={handleChange}/>
                </label>

                <label htmlFor="">
                    Пароль
                    <input className={s.input} type="password" name="password" value={password} onChange={handleChange}/>
                </label>

                <div>
                <button className={s.button} type="submit">Зарегистрироваться</button>
              </div>
            </form>
        </div>
    )
}
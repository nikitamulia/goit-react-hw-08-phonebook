import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/auth/auth-operations";
import s from './LoginPage.module.css';

export default function LoginPage(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch(name) {
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
        dispatch(operations.logIn({email, password}));
        setEmail('');
        setPassword('');
    };

    return(
        <div>
            <h1>Страница логина</h1>

            <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="">
                    Почта
                    <input className={s.input} type="email" name="email" value={email} onChange={handleChange}/>
                </label>

                <label htmlFor="">
                    Пароль
                    <input className={s.input} type="password" name="password" value={password} onChange={handleChange}/>
                </label>

                <div>
                <button className={s.button} type="submit">Войти</button>
              </div>
            </form>
        </div>
    )
}
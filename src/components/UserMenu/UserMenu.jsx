import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return(
        <div>
            <span className={s.span}>Добро пожаловать, {name}</span>
            <button className={s.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
                Выйти
            </button>
        </div>
    )
}
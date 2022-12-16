import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return(
        <div>
            <span>Добро пожаловать, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                Выйти
            </button>
        </div>
    )
}
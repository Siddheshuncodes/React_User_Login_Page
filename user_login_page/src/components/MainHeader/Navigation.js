
import AuthContext from '../../store/AuthContext';
import classes from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <AuthContext.Consumer>
            {(xyz) => {
                return <nav className={classes.nav}>
                    <ul>
                        {xyz.isLoggedIn && (
                            <li>
                                <a href="/">Users</a>
                            </li>
                        )}
                        {xyz.isLoggedIn && (
                            <li>
                                <a href="/">Admin</a>
                            </li>
                        )}
                        {xyz.isLoggedIn && (
                            <li>
                                <button onClick={props.onLogout}>Logout</button>
                            </li>
                        )}
                    </ul>
                </nav>
            }}

        </AuthContext.Consumer>
    );
};

export default Navigation;

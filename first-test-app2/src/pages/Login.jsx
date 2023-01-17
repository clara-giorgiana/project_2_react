import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook-app-icon.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUser, loginFbUser } from '../redux/actions/user';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login({signInWithGoogle, user, signInWithFacebook}) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        if (user) {
            navigate('/');
        }
    }, [user]);

    return(
        <div className="login-page">
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            <button
                className="btn btn-outline-dark d-flex align-items-center"
                style={{width: '250px', height: '65px'}}
                onClick={() => signInWithGoogle()}
            >
                <Google style={{width: '50px'}}/>
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        <br />
            <button
                className="btn btn-outline-dark d-flex align-items-center"
                style={{width: '250px', height: '65px'}}
                onClick={() => signInWithFacebook()}
            >
                <Facebook style={{width: '50px'}}/>
                <span className="text-nowrap"> &nbsp;Loghează-te cu Facebook</span>
            </button>


        </div>
    );
}


// class Login extends React.Component {

//     componentDidUpdate(prevProps) {
//         if (this.props.user !== prevProps.user) {
//             // this.props.history.push('/');
            
//         }
//     }

//     render() {

//     }
// }

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginUser()),
        signInWithFacebook: () => dispatch(loginFbUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import NavigationBar from './NavigationBar';
import {useTheme} from '../contexts/useTheme';

function Login(props) {
  const { themeToggle } = useTheme()

  return (
    <div>
      <NavigationBar />
      <div className={`wrapper ${themeToggle ? 'dark' : 'light'}`}>
        <h1>Login 🪪</h1>
        <p>Hello from login!</p>
      </div>
    </div>
  );
}

export default Login;

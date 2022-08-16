import NavigationBar from './NavigationBar';
import {useTheme} from '../contexts/useTheme';

function Welcome(props) {
  const { themeToggle } = useTheme()

  return (
    <div>
      <NavigationBar />
      <div className={`wrapper ${themeToggle ? 'dark' : 'light'}`}>
        <h1>Welcome 👋</h1>
        <p>Hello from welcome!</p>
      </div>
    </div>
  );
}

export default Welcome;

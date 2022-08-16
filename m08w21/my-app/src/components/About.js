import NavigationBar from './NavigationBar';
import {useTheme} from '../contexts/useTheme';

function About(props) {
  const { themeToggle } = useTheme()
  
  return (
    <div>
      <NavigationBar />
      <div className={`wrapper ${themeToggle ? 'dark' : 'light'}`}>
        <h1>About 🔍</h1>
        <p>Hello from about!</p>
      </div>
    </div>
  );
}

export default About;

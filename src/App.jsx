import { Clock } from './components/clock';
import './App.css';
import { Navbar, Footer } from '@/components/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Clock />
    </>
  );
}

export default App;

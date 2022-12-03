import { Navbar } from "./components/Navbar";
import {SpotList} from './components/SpotList';

export function Application() {
  return (
    <div className="application">
      <Navbar />
      <SpotList />
    </div>
  );
}

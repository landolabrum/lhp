import ViewOne from '../views/Lists';
import About from '../json/About';
import Nav from '../elements/Nav'
 
export default function App() {
  return ([<Nav/>,
    <ViewOne items={About} />]
  );
}
import Nav from '../elements/Nav'
import Foot from '../elements/Footer'
import Pricing from '../elements/Pricing'


export default function App() {
  return (<span>
    <Nav/>
    <Pricing/>
    <br/><br/>
    {/* <ViewOne items={Home} /> */}
    <Foot/>
  </span>
  );
}
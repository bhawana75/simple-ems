import Chart from '../components/Charts';
import Cardd from '../components/Card';
import FeaturedInfo from '../components/FeaturedInfo';
import '../css/page/home.css'
import { userData } from "../dummyData";
import WidgetSm from '../components/WidgetSm';
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <Cardd/>
        <WidgetSm/>
      </div>
    </div>
  );
}
export default Home;
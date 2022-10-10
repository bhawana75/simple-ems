import '../css/component/widgetSm.css'
import Novelty from '../images/novelty.png';
function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={Novelty}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Raj Thapa </span>
            <span className="widgetSmUserTitle">React Intern</span>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
            src={Novelty}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ana Basnet</span>
            <span className="widgetSmUserTitle">Sr Engineer</span>
          </div>
        </li>

        <li className="widgetSmListItem">
          <img
            src={Novelty}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ram Pandit</span>
            <span className="widgetSmUserTitle">Sr Developer</span>
          </div>
        </li>

        
      </ul>
    </div>
  );
}
export default WidgetSm;
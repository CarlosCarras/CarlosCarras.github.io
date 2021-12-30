import React from 'react';
import FourYearPlanContent from './FourYearPlanContent';
import 'antd/dist/antd.css';
import './FourYearPlan.css';

class FourYearPlan extends React.Component {

    render() {
        return(
          <div className="four-year-plan-page-container parallax">
              <h1>Four Year Plan</h1>
              <div className="paper">
                  <FourYearPlanContent/>
              </div>
          </div>
        )
    }
}

export default FourYearPlan

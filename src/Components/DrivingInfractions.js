import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class DrivingInfractions extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleSubmit = (event)=>{
        this.continue(event);
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render(){
        const { drivingInfraction, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Have you had more than 3 driving infractions in the last 3 years?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                   <div className="form-group">
                       <select
                            required={true}
                           name="drivingInfraction"
                           value={drivingInfraction}
                           onChange={handleChange('drivingInfraction')}
                           className="form-control"
                       >
                           <option value={""}>--Select Option--</option>
                           <option value="Yes">Yes</option>
                           <option value={"No"}>No</option>
                       </select>
                   </div>
                </label>
                  <div className="form-action">
                      <div className="form-buttons">
                          <button className="btn btn-plain" onClick={this.back} style={{backgroundColor: colors.orangeRed}}>
                              « Previous
                          </button>
                          <button className="btn btn-primary" type={"submit"} style={{backgroundColor: colors.orangeRed}}>
                              Continue »
                          </button>

                      </div>
                  </div>
                  </form>
              </section>
              <section className="progress-report">
                <div style={{textAlign: 'center'}}>29%</div>
                <div id="myProgress">
                    <div id="myBarNine"></div>
                </div>
              </section>
            </>
        );
    }
}

export default DrivingInfractions;

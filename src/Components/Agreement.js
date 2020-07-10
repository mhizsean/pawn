import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Agreement extends Component{
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
        const {agreement, handleChange } = this.props;
        return(
            <>
              <section className="first-section">

                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name">
                    Thanks for taking the time to apply, Here is what the job involves:
                    In this role, you’ll be working very closely with pets, animals, and livestock
                    including but not limiting to: Dogs, Cats, Reptiles, Amphibians, Rodents, Fish,
                    Birds & livestock (certain licensing for livestock needed). You'll be working
                    as your own boss (1099 Contractor) with an uncapped earning potential.
                    Your job role will mainly include but not limit to: Driving short or long distances
                    delivering pets, animals, or livestock to their final destinations. Pet & animal
                    caretaking on each trip including walking, feeding, water breaks, clean up & sanitation
                    and cuddles (not required but who could resist?). Engaing with customers such as
                    picture and ETA updates. Maintaining  good customer service at all times. Best of all,
                    you work on your own schedule.
                </div>
                <br/>

                <div className="full-name">Please select yes to agree</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                <label>
                  <div className="form-group">
                      <select
                            required={true}
                          name="agreement"
                          value={agreement}
                          placeholder="Type your answer here"
                          onChange={handleChange('agreement')}
                          className="form-control"
                      >
                          <option value={""}>--Select Option--</option>
                          <option value={"Yes"}>Yes</option>
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
                <div style={{textAlign: 'center'}}>20%</div>
                <div id="myProgress">
                    <div id="myBarFive"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Agreement;

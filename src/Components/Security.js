import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Security extends Component{
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
        const {link, security, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Here at Pawndr, We take safety seriously. To ensure the safety and security of all parties
                involved we conduct background checks. Would you be willing to take a background check for this job/role?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                   <div className="form-group mt-4">
                       <select
                           required={true}
                           name="security"
                           value={security}
                           placeholder="Type your answer here"
                           onChange={handleChange('security')}
                           className="form-control"
                       >
                           <option value={""}>--Select Option--</option>
                           <option value={"Yes"}>Yes</option>
                           <option value={"No"}>No</option>
                       </select>
                   </div>

                      {
                          security==="Yes"?
                              <div className="form-group mt-4">
                                  <input
                                      required={true}
                                      type="text"
                                      name="link"
                                      value={link}
                                      placeholder="Enter link for background check"
                                      onChange={handleChange('link')}
                                      className="form-control"
                                  />
                              </div>
                              :null
                      }
                </label>
              <div className="form-action">
                  <div className="form-buttons">
                      <button className="btn btn-plain" onClick={this.back} style={{backgroundColor: colors.orangeRed}}>
                          « Previous
                      </button>
                      <button className="btn btn-primary" type="submit" style={{backgroundColor: colors.orangeRed}}>
                          Continue »
                      </button>

                  </div>
              </div>
                  </form>
              </section>
              <section className="progress-report">
                <div style={{textAlign: 'center'}}>24%</div>
                <div id="myProgress">
                    <div id="myBarSix"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Security;

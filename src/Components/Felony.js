import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Felony extends Component{
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
        const {felony,whathappened, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Have you ever been convicted of felony? If so tell us what happened</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                    <div className="form-group mt-4">
                        <select
                            type="text"
                            name="felony"
                            value={felony}
                            placeholder="Type your answer here"
                            onChange={handleChange('felony')}
                            className="form-control"
                            required={true}
                        >

                            <option value={""}>--Select Option--</option>
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
                        </select>
                    </div>

                    {
                        felony==="Yes"?
                            <div className="form-group">

                                <input
                                    type="text"
                                    name="whathappened"
                                    value={whathappened}
                                    placeholder="Tell us what Happened"
                                    onChange={handleChange('whathappened')}
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
                          <button className="btn btn-primary" type={"submit"} style={{backgroundColor: colors.orangeRed}}>
                              Continue »
                          </button>

                      </div>
                  </div>
                  </form>
              </section>
              <section className="progress-report">
                <div style={{textAlign: 'center'}}>31%</div>
                <div id="myProgress">
                    <div id="myBarTen"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Felony;

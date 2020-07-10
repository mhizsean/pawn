import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Uscitizen extends Component{
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
        const { uscitizen, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Are you currently a citizen of the United states or have a ALIEN (green card)?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                    <div className="form-group">
                        <select
                            required={true}
                            name="uscitizen"
                            value={uscitizen}
                            placeholder="Type your answer here"
                            onChange={handleChange('uscitizen')}
                            className="form-control"
                        >
                            <option value={""}>--Select Option--</option>
                            <option value={"Yes"}>Yes</option>
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
                <div style={{textAlign: 'center'}}>35%</div>
                <div id="myProgress">
                    <div id="myBarEleven"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Uscitizen;

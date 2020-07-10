import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Gender extends Component{
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
        const { gender, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> what is your gender?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                <label>
                    <div className="form-group">
                        <select

                            name="gender"
                            required={true}
                            value={gender}
                            placeholder="Type your answer here"
                            onChange={handleChange('gender')}
                            className="form-control"
                        >
                            <option value={""}>--Select Option--</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Not Given"}>I'd rather not say</option>
                        </select>
                    </div>
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
                <div style={{textAlign: 'center'}}>13%</div>
                <div id="myProgress">
                    <div id="myBarThree"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Gender;

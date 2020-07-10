import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Education extends Component{
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
        const { education, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Your highest level of education?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                    <div className="form-group">
                        <select
                            required={true}
                            name="education"
                            value={education}
                            placeholder="Type your answer here"
                            onChange={handleChange('education')}
                            className="form-control"
                        >
                            <option value={""}>--Select Option--</option>
                            <option value={"College Graduate"}>College Graduate</option>
                            <option value={"Some School"}>Some School</option>
                            <option value={"High School Diploma/GED"}>High School Diploma/GED</option>
                            <option value={"Trade School"}>Trade School</option>
                            <option value={"None of the Above"}>None of the Above</option>
                        </select>
                    </div>

                </label>
                  <div className="form-action">
                      <div className="form-buttons">
                          <button className="btn btn-plain" onClick={this.back} style={{backgroundColor: colors.orangeRed}}>
                              « Previous
                          </button>
                          <button className="btn btn-primary" type={"submiy"} style={{backgroundColor: colors.orangeRed}}>
                              Continue »
                          </button>

                      </div>
                  </div>
                  </form>
              </section>
              <section className="progress-report">
                <div style={{textAlign: 'center'}}>45%</div>
                <div id="myProgress">
                    <div id="myBarFourteen"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Education;

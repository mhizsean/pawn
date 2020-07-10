import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Age extends Component{
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
    };


    render(){
        const { age, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> How old are you?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >

                <label>
                   <div className="form-group">
                       <input
                           type="number"
                           name="age"
                           min={18}
                           required={true}
                           value={age}
                           placeholder="Type your answer here"
                           onChange={handleChange('age')}
                           className="form-control"
                       />
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
                <div style={{textAlign: 'center'}}>10%</div>
                <div id="myProgress">
                    <div id="myBarTwo"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Age;

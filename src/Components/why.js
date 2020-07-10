import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Why extends Component{
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
        const { why, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="full-name-hero"  src={hero} alt="" />
                <div className="full-name"> Great! Now in a few short words, tell us why you would be ideal for this job?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                    <div className="form-group">
                        <textarea
                            rows={4}
                            required={true}

                            name="why"
                            value={why}
                            placeholder="Type your answer here"
                            onChange={handleChange('why')}
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
                <div style={{textAlign: 'center'}}>22%</div>
                <div id="myProgressOne">
                    <div id="myBarSix"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Why;

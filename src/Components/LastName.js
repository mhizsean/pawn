import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class LastName extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleSubmit = (event)=>{
        this.continue(event);
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render(){
        const { lastname, handleChange } = this.props;
        return(
            <div>
              <section className="first-section">
                <img className="full-name-hero"  src={hero} alt="" />
                <div className="full-name"> What is your last name?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)}>


                  <div className="form-body">
                        <label>
                            <div className="form-group">
                                <input
                                    required={true}
                                    type="text"
                                    name="lastname"
                                    value={lastname}
                                    placeholder="Type your answer here"
                                    onChange={handleChange('lastname')}
                                    className="form-control"
                                />
                            </div>

                        </label>
                  </div>

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
                <div style={{textAlign: 'center'}}>5%</div>
                <div id="myProgress">
                    <div id="myBarOne"></div>
                </div>
              </section>
            </div>
        );
    }
}

export default LastName;

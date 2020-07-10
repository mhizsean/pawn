import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class FirstName extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

     handleSubmit = (event)=>{
        this.continue(event);
    }

    render(){
        const { firstname, handleChange } = this.props;
        return(
            <div >
              <section className="first-section">
                <img className="full-name-hero"  src={hero} alt="" />
                <div className="full-name"> What is your first name?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >


                  <div className="form-body">
                      <label>
                          <div className="form-group">
                              <input
                                  value={firstname}
                                  type="text"
                                  name="firstname"
                                    required={true}
                                  placeholder="Type your answer here"
                                  onChange={handleChange('firstname')}
                                  className="form-control"
                              />
                          </div>
                      </label>
                    <div className="form-action">
                        <div className="form-buttons">
                            <button type={"submit"} className="btn btn-primary left-align"  >
                                Continue »
                            </button>
                        </div>
                    </div>

                  </div>
                  </form>
              </section>
              <section className="progress-report">
                <div style={{textAlign: 'center'}}>1%</div>
                <div id="myProgress">
                    <div id="myBar"></div>
                </div>
              </section>
            </div>
        );
    }
}

export default FirstName;

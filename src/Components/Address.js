import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class Address extends Component{
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
        const {street, city,state,zipcode, address, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> What is your home address?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                <label>
                    <div className="form-group mt-4">
                        <input
                            required={true}
                            type="text"
                            name="street"
                            value={street}
                            placeholder="Enter your street"
                            onChange={handleChange('street')}
                            className="form-control"
                        />
                    </div>

                </label>

                <label>
                    <div className="form-group mt-4">
                    <input
                        required={true}
                        type="text"
                        name="city"
                        value={city}
                        placeholder="Enter your city"
                        onChange={handleChange('city')}
                        className="form-control"
                    />
                    </div>
                </label>

                <label>
                    <div className="form-group mt-4">
                    <input
                        required={true}
                        type="text"
                        name="state"
                        value={state}
                        placeholder="Enter your state"
                        onChange={handleChange('state')}
                        className="form-control"
                    />
                    </div>
                </label>

                <label>
                    <div className="form-group mt-4">
                    <input
                        required={true}
                        type="text"
                        name="zipcode"
                        value={zipcode}
                        placeholder="Enter your zipcode"
                        onChange={handleChange('zipcode')}
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
                <div style={{textAlign: 'center'}}>16%</div>
                <div id="myProgress">
                    <div id="myBarFour"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Address;

import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class CustomerService extends Component{
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
        const { customerService, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Share with us a time you provided amazing customer service.</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                    <div className="form-group">
                        <input
                            required={true}
                            type="text"
                            name="customerService"
                            value={customerService}
                            placeholder="Type your answer here"
                            onChange={handleChange('customerService')}
                            className="form-control"
                        />
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
                <div style={{textAlign: 'center'}}>49%</div>
                <div id="myProgress">
                    <div id="myBarFifteen"></div>
                </div>
              </section>
            </>
        );
    }
}

export default CustomerService;

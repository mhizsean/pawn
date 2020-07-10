import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class PetBelief extends Component{
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
        const { PetStatement, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> What do you think of this statement? Do you agree or disagree?
                <br/><br/>
                "Pets and animals are our friends and should always be treated with respect, care and love."
                </div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                   <div className="form-group">
                       <textarea
                           rows={4}
                           required={true}

                           name="PetStatement"
                           value={PetStatement}
                           placeholder="Type your answer here"
                           onChange={handleChange('petStatement')}
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
                <div style={{textAlign: 'center'}}>41%</div>
                <div id="myProgress">
                    <div id="myBarThirteen"></div>
                </div>
              </section>
            </>
        );
    }
}

export default PetBelief;

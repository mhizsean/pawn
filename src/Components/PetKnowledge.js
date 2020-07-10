import React, { Component } from 'react';
import hero from '../images/drive/1.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';



class PetKnowledge extends Component{
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
        const { petknowlegde, handleChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> How would you rate your experience and knowledge with pets and animals?</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                   <div className="form-group">
                       <select
                           required={true}
                           name="petknowlegde"
                           value={petknowlegde}
                           placeholder="Type your answer here"
                           onChange={handleChange('petknowlegde')}
                           className="form-control"
                       >
                           <option value={""}>-- Select Option--</option>
                           <option value={"Very Knowledgeable"}>Very Knowledgeable</option>
                           <option value={"Moderately Knowledgeable"}>Moderately Knowledgeable</option>
                           <option value={"I just have few ideas"}>I just have few ideas</option>
                           <option value={"Not Knowledgeable"}>Not Knowledgeable</option>

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
                <div style={{textAlign: 'center'}}>38%</div>
                <div id="myProgress">
                    <div id="myBarTwelve"></div>
                </div>
              </section>
            </>
        );
    }
}

export default PetKnowledge;

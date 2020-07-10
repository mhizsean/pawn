import React from 'react'
import { colors } from './colors';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        width: '100%',
        top: '-40%',
        position: 'absolute',
        zIndex: '-1',
	  },
	});
	
	function FaqProp ({faq, index, toggleFAQ}) {
		
		return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question" >
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FaqProp
import React from 'react';
import  { render }  from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';

class Varon extends React.Component {
	render() {
	    var user = {
	        name: "Anna",
            hobbies: ["Sports", "Study"]
        };
		return (
		<div className="container">
			<div className="row">
				<div className="col-xs-10 col-xs-offset-1">
					<Header/>
				</div>
			</div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={'Max'} age={27} user={user}/>
                </div>
            </div>
		</div>
		);
	}
}
render(<Varon />, window.document.getElementById('app'));
import React from 'react';

const Button = (props) => (
  <div className="calculator-history">
    <ul className="list-group">
		{props.history.map(item => <li className="list-group-item">{item}</li>)}
	</ul>
  </div>
);

export default Button;
import React from 'react';

let About = (props) => {
  console.log(props);
    return (
      <div>
        About {props.match.params.id && <strong>{props.match.params.id}</strong>}
      </div>
    )
};

export {About as default}
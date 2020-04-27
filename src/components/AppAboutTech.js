import React from 'react';

const InfoTech = (props) => {
  if (!props.list || !props.list.length) {
    return null;
  }

  return (
    <div className="info-tech">
      <h4 className="info-tech__title">Technologies</h4>
      <ul>
        {props.list.map((el, index) => (
          <li className="info-tech__item" key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoTech;

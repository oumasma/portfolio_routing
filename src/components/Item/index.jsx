import React from "react";


const Item = (card) => {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
        {card.title}
        </div>
      </div>
    );

};

export default Item
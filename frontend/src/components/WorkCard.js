import React from "react";

function WorkCard({workingCard}) {
  return (
    <>
      <div className="row mt-5">
        <div className="col-10">
          <h5>{workingCard.title}</h5>
          <p>
            {workingCard.desp}
          </p>
        </div>
        <div className="col-2">
          <img className="w-75" src={workingCard.image} alt="" />
        </div>
      </div>
    </>
  );
}

export default WorkCard;

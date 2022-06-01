import React from "react";

function ProfileCard(props) {
  console.log("props.social -> ", props.data.social);
  return (
    <div className="profile">
      <img src={props.data.image} alt="profile " className="image"></img>
      <div className="text">
        <p>NAME : {props.data.name} </p>
        <p>profession : {props.data.profession}</p>
        <p>contact : {props.data.contact}</p>
        <div className="social">
          {props.data.social.map((item) => {
            return (
              <div>
                <a title={item.name} href={item.url} target="_blank">
                  <h3>
                    <img src={item.image} width="40"></img>: {item.name}
                  </h3>
                </a>
              </div>
            );
          })}
          <br />
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;

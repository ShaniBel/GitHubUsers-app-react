import React from "react";
import "./UserInfo.css";
import Card from "../Bulma/Crad";

function UserInfo(userData) {
  return (
    <div className="cards_div">
      <Card src={userData.user.avatar_url} Username={userData.user.login} />
      {/* <ul>
        <li>
          <img src={userData.user.avatar_url} />
        </li>
        <li>Username: {userData.user.login} </li>
        <li>Followers: {userData.user.followers} </li>
        <li>Following: {userData.user.following} </li>
        <li>Created at: {userData.user.created_at}</li>
      </ul> */}
    </div>
  );
}

export default UserInfo;

import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { selectUser } from "./features/userSlice";
import "./Message.css";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import "moment/locale/fr";

const Message = forwardRef(
  (
    { id, contents: { photo, timestamp, displayName, email, message, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"} `}
      >
        <Avatar className="message__photo" src={photo} />

        <p>{message}</p>

        <small>
          {
            <Moment format="D MMM k [h] mm">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </Moment>
          }
        </small>
      </div>
    );
  }
);

export default Message;

import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { setChat } from "./features/chatSlice";
import "./SidebarChat.css";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import Moment from "react-moment";
import "moment/locale/fr";
import TextTruncate from "react-text-truncate";

function SidebarChat({ id, chatName, read }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div
      onClick={() =>
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
            read: read,
          })
        )
      }
      className="sidebarChat"
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className="sidebarChat__info">
        <div className="sidebarChat__left">
          <h3>{chatName}</h3>
          <TextTruncate
            line={1}
            element="p"
            truncateText="..."
            text={chatInfo[0]?.message}
          />
        </div>

        <div className="sidebarChat__right">
          <small>
            {!chatInfo[0] ? (
              "Aucun message"
            ) : (
              <Moment interval={1000} fromNow>
                {new Date(chatInfo[0]?.timestamp?.toDate()).valueOf()}
              </Moment>
            )}
          </small>
        </div>
      </div>
    </div>
  );
}

export default SidebarChat;

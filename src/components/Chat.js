import React, { useContext, useState } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Button, Container, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";
import VideoChat from "./Video/VideoChat";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
    console.log(messages);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <VideoChat />
      </Grid>
      <Grid item xs={3}>
        <Grid
          container
          justify={"flex-end"}
          direction={"column"}
          style={{ height: window.innerHeight - 50, marginTop: 20 }}
        >
          <div
            style={{
              justify: "flex-end",
              border: "1px solid gray",
              overflowY: "auto",
            }}
          >
            {messages?.map((message) => (
              <div
                style={{
                  margin: 10,
                  border:
                    user.uid === message.uid
                      ? "2px solid green"
                      : "2px dashed red",
                  marginLeft: user.uid === message.uid ? "auto" : "10px",
                  width: "fit-content",
                  padding: 5,
                }}
              >
                <Grid container>
                  <Avatar src={message.photoURL} />
                  <div>{message.displayName}</div>
                </Grid>
                <div>{message.text}</div>
              </div>
            ))}
          </div>
          <Grid
            container
            direction={"column"}
            alignItems={"flex-end"}
            style={{ height: "20%" }}
          >
            <TextField
              fullWidth
              rowsMax={2}
              variant={"outlined"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={sendMessage} variant={"outlined"}>
              Отправить
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    //<Container>
    /* <Grid
        container
        justify={"flex-end"}
        direction={"column"}
        width={"187px"}
        //style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
 
        <div
          style={{
            justify:"flex-end",
            width: "20%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "20%", height: "20%" }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    //</Container>*/
  );
};

export default Chat;

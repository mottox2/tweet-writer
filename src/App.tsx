import React, { useState } from "react";
import Tweet from "./components/Tweet";
import Button from "./components/Button";
import GlobalStyle from "./components/GlobalStyle";
import { useCallback } from "react";

const App = () => {
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      text: "",
      createdAt: new Date().toLocaleString()
    }
  ]);
  const updateTweet = useCallback(
    (tweet: Tweet, index: number) => {
      const newTweets = [...tweets];
      newTweets[index] = tweet;
      setTweets(newTweets);
    },
    [tweets]
  );
  const createTweet = useCallback(() => {
    setTweets([
      ...tweets,
      {
        text: "",
        createdAt: new Date().toLocaleString()
      }
    ]);
  }, [tweets]);

  return (
    <div>
      <GlobalStyle />
      {tweets.map((tweet, index) => {
        return (
          <Tweet
            tweet={tweet}
            onUpdate={(tweet: Tweet) => {
              updateTweet(tweet, index);
            }}
            key={index}
          />
        );
      })}
      <div
        style={{
          margin: "12px auto",
          textAlign: "center"
        }}
      >
        <Button onClick={createTweet}>New Tweets</Button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Tweet from './components/Tweet'
import { useCallback } from 'react';

const App = () => {
  const [tweets, setTweets] = useState<string[]>([''])
  const updateTweet = useCallback((tweet: string, index: number) => {
    const newTweets = [...tweets]
    newTweets[index] = tweet
    setTweets(newTweets)
  }, [tweets])
  const createTweet = useCallback(() => {
    setTweets([...tweets, ''])
  }, [tweets])

  return (
    <div>
      {
        tweets.map((tweet, index) => {
          return <Tweet tweet={tweet} onUpdate={(tweet: string) => {
            updateTweet(tweet, index)
          }}  key={index} />
        })
      }
      <button onClick={createTweet}>New Tweets</button>
    </div>
  );
}

export default App;

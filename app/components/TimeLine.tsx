"use client";
import { db } from "@lib/client/firebase";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import ProfileButton from "./ProfileButton";
import Image from "next/image";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  photo: string;
  tweet: string;
  userId: string;
  username: string;
  createAt: number;
}

/* async function getTweets(): Promise<ITweet[]> {
  const tweetsQuery = query(
    collection(db, "tweets"),
    orderBy("createAt", "desc"),
    limit(25),
  );
  const snapshot = await getDocs(tweetsQuery);
  const tweets = snapshot.docs.map((doc) => {
    const { tweet, createAt, userId, username, photo } = doc.data() as ITweet;
    return { tweet, createAt, userId, username, photo, id: doc.id };
  });
  return tweets;
} */

function TimeLine() {
  const [tweets, setTweet] = useState<ITweet[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createAt", "desc"),
        limit(25),
      );
      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, createAt, userId, username, photo } =
            doc.data() as ITweet;
          return {
            tweet,
            createAt,
            userId,
            username,
            photo,
            id: doc.id,
          };
        });
        setTweet(tweets);
      });
    };
    fetchTweets();

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <div className="w-full">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default TimeLine;

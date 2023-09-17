import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import {calls} from './constants.js';
import { MdCall } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import io from "socket.io-client";
import PriorityCards from "./PriorityCards";
import { liveData, automatedData } from "./data/data";




const inter = Inter({ subsets: ['latin'] })




export default function Home() {

    const [automated, setautomated] = useState(true);
    const [selectedCard, setSelectedCard] = useState("efnwhfwhn1");
    const [data, setData] = useState(liveData);
    const [priorityCard, setpriorityCard] = useState(automatedData);
    let labels = ["Incoming", "1", "2", "3", "4", "5"];

    const updateLabel = (e) => {
        let theCards = [];
    
        automated
          ? priorityCard.forEach((card) => {
              if (card.id == selectedCard) {
                theCards.push({
                  ...card,
                  priority: parseInt(e.target.value),
                });
              } else {
                theCards.push(card);
              }
            })
          : data.forEach((card) => {
              if (card.id == selectedCard) {
                theCards.push({
                  ...card,
                  priority: parseInt(e.target.value),
                });
              } else {
                theCards.push(card);
              }
            });
        automated ? setpriorityCard(theCards) : setData(theCards);
      };

    const [cardActive, setCardActive] = useState("")
    console.log(cardActive)

  return (
    <div className={styles.home}>
      <Head>
        <title>AI Responder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`${styles.main} ${inter.className}`}>

        { (cardActive=="") ?
        <div className={styles.header}>
            <h1 className={styles.title}> Emergencies </h1>
            <div className={styles.line}/>
        </div> 
        : <></> }
        <div>
            <div className={styles.attended}>
                <button onClick={() => setautomated(true)} className={styles.attendedselect}>
                    <h3>Automated</h3>
                </button>
                <button
                    onClick={() => setautomated(false)} className={styles.attendedselect}>
                    <h3>Live Attended</h3>
                </button>
            </div>
      </div>

    <div className={styles.emergencies}>
        {automated
          ? labels.map((label) => (
              <PriorityCards
                priority={label}
                priorityCard={priorityCard}
                setpriorityCard={setpriorityCard}
                updateLabel={updateLabel}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              />
            ))
          : labels.map((label) => (
              <PriorityCards
                priority={label}
                priorityCard={data}
                setpriorityCard={setData}
                updateLabel={updateLabel}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              />
            ))}
      </div>
   
      </main>
    </div>
  )
}

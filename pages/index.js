import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import {calls} from './constants.js'


const inter = Inter({ subsets: ['latin'] })




export default function Home() {

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
        : <></>
        }

        <div className={styles.callwrapper}>
            {calls.map( (call) => (

                (cardActive==call.id || cardActive=="") ? 
                <div className={cardActive==call.id ? `${styles.card} ${styles.cardactive}` : styles.card} onClick={() => 
                {
                    if (!(cardActive==call.id)) {
                        setCardActive(call.id) 
                    }
                }}>
                    { cardActive==call.id ? 



                    <div> {/* fullscreen */}
                        <div className={styles.header}>
                            <div className={styles.titlewrapper}>
                            <h1 className={styles.titleactive}> {call.name} </h1>
                            <motion.img
                            
                                className={styles.exit}
                                onClick={() => setCardActive("")}
                                src={"/cross.png"}
                                whileHover={{ scale: 1.1, rotate: -90 }}
                                whileTap={{ scale: 0 }}/> 
                            </div>
                            <div className={styles.line}/>
                        </div> 
                        <div className={styles.bodyactive}> 
                            <p> Status: <span>{call.status}</span></p>
                            <p> Call Started: <span>{call.time}</span></p>
                            <p> Location: <span>{call.location}</span></p>
                        </div>
                        <div className={styles.log}>
                            <h2> Log </h2>
                            <div className={styles.line}/>
                            <div className={styles.logbody}>
                                {call.log.map( (log) => (
                                    <p> {log.time} &nbsp; {log.speaker}: <span>{log.text}</span> </p> 
                                ))}
                            </div>

                        </div>
                        <h1 className={styles.dispatchtitle}> Dispatch </h1>
                        <div className={styles.line}/>

                        <div className={styles.dispatch}>
                            <motion.div className={`${styles.dispatchicon} ${styles.icon1}`} whileHover={{ scale: 1.1, }}> <p>TORONTO FIRE SERVICES</p> </motion.div>
                            <motion.div className={`${styles.dispatchicon} ${styles.icon2}`} whileHover={{ scale: 1.1, }}> <p>TORONTO POLICE SERVICES</p> </motion.div>
                            <motion.div className={`${styles.dispatchicon} ${styles.icon3}`} whileHover={{ scale: 1.1, }}> <p>TORONTO PARAMEDIC SERVICES</p> </motion.div>
                        </div>
                    </div> 


                    
                    : <div> {/* card not fullscreen */}
                        <h2> {call.name} </h2>
                        <p> Status: <span>{call.status}</span></p>
                        <p> Call Started: <span>{call.time}</span></p>
                        <p> Location: <span>{call.location}</span></p>
                    </div>
                    }
                </div> : <></>
            ))}
        </div>    
      </main>
    </div>
  )
}

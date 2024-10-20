import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";

import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/crash.jpg";
import HeaderLogo from "../assets/sawal.png";
import aa from "../assets/last.png";
import Headline from "../assets/headline_spandeb1.png";
import {  Link } from 'react-router-dom';
// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

TagManager.initialize(tagManagerArgs);

export default function Fifth_SP() {

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  

  


  
 
  useEffect(() => {
    window.document.title = "Seniors Saving Journal";

  
     
  }, []);

  const handleCall = () => {
   
  };

  const [quiz, setQuiz] = useState("Select Your Age:  ");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes,setYes]=useState("55-64")
  const [no,setNo]=useState("65-74")
  const [third,setThird]=useState("75+")
  const [fourth, setFourth] = useState("Under 55");
  

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

     
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  const handlepositive = () => {
    topScroll("btn");
    if (quiz === "Select Your Age:  ") {
      setYes("Yes")
      setNo("No")
      setThird("Skip")
      setFourth("No");
      
      setQuiz("Are you on Medicare Parts A & B?");
    } else {
      setStep("Reviewing Your Answers...");
     
      topScroll("top");
    }


  };

  const handleNo = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 60?  ") {
      setYes("Yes")
      setNo("No")
      setThird("Skip")
      setFourth("Skip");
      setQuiz("Are you on Medicare Parts A & B?");
    } else {
      setStep("Reviewing Your Answers...");
    
      topScroll("top");
    }

  
  };

  return (
    <div>
   
     <div  className="top-sticky-blue-test2" id="top">
     Seniors Benefits Today
  </div>

      {step === "process" ? (
        <>
          <div className="main-container-5">
            
            <div className="main-descrition-5-5">
              
              <div className="main-des-title-6-7">
            
                <b>
                Medicare Beneficiaries May Be Eligible For New Benefits. Click Below To Check Eligibility.
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div  style={{marginTop:'14px'}}className="main-des-5">
              {/* Americans over 65 years old may be eligible to claim the 2024 Grocery Allowance Card Americans may use the funds to fully cover their Groceries, Medicines, etc. */}
              <b>How it works:</b> Complete this survey to check your eligibility.
              </div>
              <div className="main-des-5"  style={{marginTop:'-5px'}}>
              {/* If you have not yet claimed your monthly allowance then answer the questions below and once approved <b>you will have your $3,600 Grocery Allowance mailed to you within a few days ready for use!</b> */}
              </div>
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div style={{marginTop:'-5px'}} className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div  className="answer">
              {quiz === "Select Your Age:  " && <div className="answer-btn-5" onClick={handlepositive} style={{"textTransform": "capitalize"}}>
              {fourth}
                </div>}
                <div className="answer-btn-5" onClick={handlepositive}>
              {yes}
                </div>
                <div className="answer-btn-5" onClick={handleNo}>
              {no}
                </div>
               <div className="answer-btn-5" onClick={handlepositive}>
              {third}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div className="checking">
          <div className="congrats">Congratulations!</div>
          <div className="top-description-5">
          Tap Below And Speak To A Licensed Insurance Agent About Medicare Plans you may be eligible for
          </div>
          {/* <div className="spots-count">Spots remaining: 4</div> */}
          <div className="tap-direction">👇 TAP BELOW TO CALL  👇</div>
          <a href="tel:+18446720874">
            <div className="call-btn" onClick={handleCall}>
            CALL (844) 672-0874 | TTY 711
            </div>
          </a>
          {/* <div className="sub-title">We Have Reserved Your Spot</div> */}
          <div className="sub-description">
          {/* Your spot is reserved so call within the next 5 minutes. */}
          </div>
          {/* <div className="timer">
            <div className="timer-cell">{min}</div>
            <div className="timer-cell">:</div>
            <div className="timer-cell">{second}</div>
          </div> */}
        </div>
      )}
      <div className="footer2">
      <p>We represent Medicare Advantage HMO, PPO and PFFS organizations and stand-alone PDP prescription drug plans that are contracted with Medicare. Enrollment depends on the plan’s contract renewal."
				</p>
				<p>Not all plans offer all of these benefits. Benefits may vary by carrier and location. Limitations and exclusions may apply.
				</p>
				<p>Enrollment in Medicare/Medicare Advantage may be limited to certain times of the year unless you qualify for a Special Enrollment Period

				</p>
				<p>seniorsbenefitstoday.org is not connected with or endorsed by the US government or Federal Medicare program. This website is a solicitation for insurance and Medicare Advantage, Part D or Medicare supplement insurance comparison services. Medicare supplement insurance is available to those age 65 or older enrolled in Medicare Parts A and B, and in some states to those under age 65 eligible to Medicare due to disability or end stage renal disease.
				</p>
				<p> Please contact Medicare.gov, 1–800–MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.</p>
        <div className="terms2">

        <Link to="/terms-and-conditions">Terms & Conditions</Link> | 
        <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
        
        <hr/>
        </div>
        <div className="copyright">
          
        
        </div>

<p>G2 Licensed Agent :  Gregory K. Teipelz</p>
      
      </div>
    
    </div>
  );
}

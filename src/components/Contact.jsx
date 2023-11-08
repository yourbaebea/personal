import React, { Component } from "react";
import { HiOutlineMail} from "react-icons/hi";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";


import classes from '../style/page.module.css'
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIconHeld: false,
      timeoutId: null,
    };

 
  }

  


  render() {
    
    function handleCopy() {
      navigator.clipboard.writeText("anafm@student.dei.uc.pt");
      let copy= document.getElementById("copy");

      copy.style.visibility="visible";


      setTimeout(() => {
        copy.style.visibility="hidden";
      }, 2000);
    }

    return (
      <div className={classes.endContainer}>
        <h1>Contacts</h1>

        <div className={classes.socialContainer}>
          <a
            className={classes.social}
            onClick={() => {
              handleCopy();
            }}
        >
            <HiOutlineMail
              size={80}
              className={`${classes.logo} ${this.state.isIconHeld ? classes.continuouslyRotating : ''}`}
            />
            <span className={classes.span} id="copy" style={{visibility: "hidden"}} >Copied email to clipboard!</span>
          </a>

                        <a
								className={classes.social}
								href={"https://www.linkedin.com/in/yourbaebea/"}
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
                <AiFillLinkedin size={80} className={classes.logo}/>
              </a>


              <a
								className={classes.social}
								href={"https://www.instagram.com/yourbaebea/"}
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
                <AiOutlineInstagram size={80} className={classes.logo}/>
              </a>
        </div>
      </div>
    );
  }


}

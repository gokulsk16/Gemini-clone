import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState,useContext } from "react";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const {onsent,prevPrompt,SetRecentPrompt,newChat}=useContext(Context)
  const loadprompt=async (prompt)=>{
    SetRecentPrompt(prompt)
    await onsent(prompt)
  }

  return (
    <div className="Sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtend((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>New chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item,index)=>{
              return(

                <div key={index} onClick={()=>loadprompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                 <p>{item.slice(0,18)}...</p>
                </div>               
              )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

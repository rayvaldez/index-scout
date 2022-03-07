import React from 'react';

const About = () => {

  return (
    <div className="position-relative" id="about">
      <h2>FAQs</h2>
      <h4>What is Index Scout</h4>
      <p>Index Scout is a public message board created to provide users of the website "Football Index" a platform to help new users navigate through the sites features and discuss trading strategies.</p>
      <br/>
      <h4>How do I get started?</h4>
      <p>Click on the player tab on the navigation page to access the player menu. Click on your desired player and you will then be taken to a page of their details and stats. Below the players stats you will find "Scout Reports" written by other users.</p>
      <br/>
      <h4>How do I create my own report?</h4>
      <p>Navigate to the bottom of the chosen player's page and you will find a form. Input your name, followed by your report. When you are happy with your report, click the "Submit" button to add your report.</p>
      <br/>
      <h4>What is the badge system?</h4>
      <p>The badge system is designed to allow users to quickly vote on 5 different traits of a player:</p>
      <ul>
        <li>Media Mogul - This player is constantly talked about in the media, therefore generating plenty media dividends</li>
        <li>High Scorer - This player is consistent in scoring highly in performance points, generating performance dividends</li>
        <li>High Cap App - "High Capital Appreciation" This player is considered to be undervalued, and is projected to appreciate in price</li>
        <li>Prime Player - This player is in his prime, this could be a sign to stay invested, or to invest in him</li>
        <li>Last legs - This player is past his prime, so consider investing with caution that their stock could fall</li>
      </ul>
      <p>If a player has been voted by users to have a certain trait, you will find it attributed to them under their stats.</p>
      <br/>
      <h5>Happy Scouting!</h5>
    </div>
  )
}

export default About;

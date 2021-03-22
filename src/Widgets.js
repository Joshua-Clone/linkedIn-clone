import React from 'react'; 
import './Widgets.css'; 
import InfoIcon from "@material-ui/icons/Info"; 
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"; 

function Widgets() { 

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    ); 

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2> 
                <InfoIcon />
            </div>

            {newsArticle("Another Hit", "Joshua Singleton creates another application")}
            {newsArticle("LinkedIn Lunatics", "Is LinkedIn created for Networking or Virtual Signaling")}
            {newsArticle("Blog Copy", "Am I writing anything original")}
            {newsArticle("Job Market", "We are hiring! Just not everybody")}
            {newsArticle("Home Alone", "Top 10 ways to enjoy yourself at home when you don't have a choice")}
            {newsArticle("Summer Body", "How to get a 6 pack instantly, 6 pack of beer of course")}
        </div>

    )
}

export default Widgets; 
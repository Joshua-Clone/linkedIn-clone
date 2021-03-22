import React, { useState, useEffect } from 'react' 
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import InputOption from "./InputOption"
import Post from "./Post"
import { db } from "./firebase";
import firebase from 'firebase'; 

function Feed () { 
    const [input, setInput] = useState(""); 
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id, 
                    data: doc.data()
                }))
            )
        ); 
    }, []); 

    const sendPost = e => { 
        e.preventDefault(); 

        db.collection('posts').add({
            name: 'Joshua Singleton', 
            description: 'this is a test', 
            message: input, 
            photoUrl: '', 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }); 

        setInput(''); 
    }; 

    return ( 
        <div className="feed"> 
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />

                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />

                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: { 
                name,
                description, 
                message, 
                photoUrl
            }}) => (
                <Post 
                    key={id}
                    name={name} 
                    description={description} 
                    message={message} 
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed; 
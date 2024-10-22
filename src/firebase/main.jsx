import { useEffect, useState } from "react";
import { auth, signOut } from "./firebase"; // Firebase authentication and signOut
import { useNavigate } from "react-router-dom"; // Navigation
import Exp1 from "./login"; // Login/Sign-up component
import One from "../components/one"; // Game component
import './main.css'; // Custom styles for UI

function Main() {
  const [presentUser, setPresentUser] = useState(null); // To track authenticated user
  const [testPlay, setTestPlay] = useState(false); // To track if it's a test play
  const navigate = useNavigate(); // Used for navigation

  // Listen to Firebase authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user.uid,
          email: user.email,
        });
        navigate("/game"); // Navigate to game if authenticated
      } else {
        setPresentUser(null); // Reset user state when logged out
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Handle user logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setPresentUser(null); // Reset user state
        setTestPlay(false); // Reset test play state
        navigate("/"); // Navigate to the homepage
      })
      .catch((error) => {
        console.error("Logout error: ", error); // Handle any errors
      });
  };

  // Handle Test Play - Navigate to game for test play
  const handleTestPlay = () => {
    setTestPlay(true);
    navigate("/game"); // Directly navigate to the game for test play
  };

  return (
    <div className="main-container">
      {/* If user is authenticated or it's a test play, show game */}
      {(presentUser || testPlay) ? (
        <div className="game-section">
          <One /> {/* Show the game */}
          {presentUser && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </div>
      ) : (
        <div className="welcome-section">
          <h1 className="title">Welcome to the Millionaire Quiz</h1>
          <div className="button-container">
            <button onClick={handleTestPlay} className="start-button">
              Test Play (No Login Required)
            </button>
          </div>
          <div className="auth-section">
            <Exp1 /> {/* Render login/signup form */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;

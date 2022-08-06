import { useState } from "react";
import NotificationPanel from "./components/NotificationPanel";
import Auth from "./pages/LoginSignUpPages";
import { Routes, Route, Redirect } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import WalletPage from "./pages/WalletPage";
import NavigationBar from "./widgets/Navbar/NavigationBar";
import { PrivateRoute } from "./PrivateRoute";
import * as ROUTELIST from "./routes";
import MentorMeet from "./pages/PostBookPage";
import PostAssignment from "./pages/PostBookPage/PostAssignment";
import BookLiveSession from "./pages/PostBookPage/BookLiveSession";
import LandingPage from "./pages/LandingPage/index";
function App() {
  const [files, setFiles] = useState([{ name: " myFile.pdf" }]);

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path={ROUTELIST.HOME} element={<LandingPage />} />
        <Route path={ROUTELIST.AUTH} element={<Auth />} />
        <Route path={ROUTELIST.MENTOR_MEET} element={<MentorMeet />}></Route>
        <Route path={ROUTELIST.POST_ASSIGNMENT} element={<PostAssignment />} />

        <Route
          path={ROUTELIST.BOOK_LIVE_SESSION}
          element={<BookLiveSession />}
        />
        <Route path="profile" element={<ProfilePage />} />
        <Route path={ROUTELIST.WALLET} element={<WalletPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import NotificationPanel from "./components/NotificationPanel";
import UploadFile from "./widgets/UploadFile";
import FileList from "./widgets/FileList";
import Auth from "./pages/LoginSignUpPages";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import WalletPage from "./pages/WalletPage";
import NavigationBar from "./widgets/NavigationBar";
import Home from "./pages/Home";
import * as ROUTELIST from "./routes";
import MentorMeet from "./pages/PostBookPage";
import PostAssignment from "./pages/PostBookPage/PostAssignment";
import BookLiveSession from "./pages/PostBookPage/BookLiveSession";
function App() {
  const [files, setFiles] = useState([{ name: " myFile.pdf" }]);

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };
  return (
    <div className="App">
      {/* <NotificationPanel/> 
     <UploadFile files={files} setFiles={setFiles} removeFile={removeFile}/>
     <FileList/> */}
      <NavigationBar />
      <Routes>
        <Route path={ROUTELIST.HOME} element={<Home />} />
        <Route path={ROUTELIST.AUTH} element={<Auth />} />
        <Route path={ROUTELIST.MENTOR_MEET} element={<MentorMeet />}>
          <Route
            path={ROUTELIST.POST_ASSIGNMENT}
            element={<PostAssignment />}
          />
          <Route
            path={ROUTELIST.BOOK_LIVE_SESSION}
            element={<BookLiveSession />}
          />
        </Route>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="wallet" element={<WalletPage />} />
        {/* <Route path="postassignment" element={<PostAssignment/>}/>
        <Route path="booklivesession" element={<BookLiveSession/>}/>
        <Route path="assignmentdetails" element={<AssignmentDetails/>}/>
        <Route path="livesessiondetails" element={<LiveSessionDetails/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

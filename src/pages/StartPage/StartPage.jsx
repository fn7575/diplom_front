import React, {useState} from "react";
import Header from "../../components/Header";
import MatchList from "../../components/MatchList/MatchList";
import Footer from "../../components/Footer";
import Admin from "../../components/Admin/Admin";

const StartPage = () => {
    const [isAdmin, setIsAdmin] = useState(true)
    return (<>
            <Header/>
        {isAdmin && <Admin/>}
            <MatchList/>
            <Footer/>
        </>
    )
}

export default StartPage;

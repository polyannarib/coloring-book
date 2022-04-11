import Header from "../components/Header/header";
import Choose from "../components/Option/choose";
import Drawings from "../components/Drawings/drawings";
import Footer from "../components/Footer/footer";

export default function Home() {
    return (
        <div
            style={
                {backgroundColor: "#F7E7CE", zIndex: -1, height: "100vh"}
            }
        >
            <Header>
                <Choose />
            </Header>
            <Drawings />
            <Footer />
        </div>
    )
}
import {Card, Container, Row, Col, Image} from "react-bootstrap"
import doctorStrange from "../assets/images/trending/Doctor-Strange.jpg"
import fantasticBeast from "../assets/images/trending/Fantastic-Beast.jpg"
import kkn from "../assets/images/trending/KKN.jpg"
import morbius from "../assets/images/trending/Morbius.jpg"
import sonic from "../assets/images/trending/Sonic.jpg"
import theNorthman from "../assets/images/trending/The-Northman.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="text-white movieImage">
                        <Image src={doctorStrange} alt="Doctor Strange In The Multiverse Of Madness (2022)" className="Images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Doctor Strange In The Multiverse Of Madness (2022)</Card.Title>
                            <Card.Text className="text-left">
                            The next most popular recommended cinema is DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS. The film, directed by Sam Raimi, presents an exciting story across the Multiverse. Officially released on May 5, 2022 in theaters, DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS tells the story of Doctor Strange's journey of trying to maintain and restore peace on earth.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 5 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={fantasticBeast} alt="Fantastic Beast: The Secrets Of Dumbledore (2022)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Fantastic Beast: The Secrets Of Dumbledore (2022)</Card.Title>
                            <Card.Text className="text-left">
                            FANTASTIC BEAST: THE SECRETS OF DUMBLEDORE is the next hit cinema recommendation. The film FANTASTIC BEAST: THE SECRETS OF DUMBLEDORE is a sequel to the previous similar film. Where the synopsis of FANTASTIC BEAST: THE SECRETS OF DUMBLEDORE will focus on the character Dumbledore.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 5 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={kkn} alt="KKN Di Desa Penari (2022)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">KKN Di Desa Penari (2022)</Card.Title>
                            <Card.Text className="text-left">
                            The first most popular recommended cinema was KKN at PENARI VILLAGE. You must have been very familiar lately with the title of the KKN film in PENARI VILLAGE which was viral on social media. Having experienced delays, finally the KKN film in DESA PENARI was released in theaters at the end of April 2022.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 3 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={morbius} alt="Morbius (2022)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Morbius (2022)</Card.Title>
                            <Card.Text className="text-left">
                            MORBIUS also includes the most popular recommended cinema films that you won't want to miss. The MORBIUS film was released at the end of March 2022. Where this film is played by a number of well-known stars such as Jared Leto, Matt Smith, Adria Arjona and others.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 3 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={sonic} alt="Sonic The Hedgehog 2 (2022)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Sonic The Hedgehog 2 (2022)</Card.Title>
                            <Card.Text className="text-left">
                            SONIC THE HEDGEHOG 2 is also the next recommended cinema, it's a shame for you to miss it. SONIC THE HEDGEHOG 2 is a film that elevates the genre of adventure, action and comedy. This film combines 3D animation which is also very exciting for you to watch.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 2 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={theNorthman} alt="The Northman (2022)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">The Northman (2022)</Card.Title>
                            <Card.Text className="text-left">
                            Where the synopsis of THE NORTHMAN tells the story of Prince Amleth who will take revenge for the death of his father. This film departs from the story of a Scandinavian legend. Where the father of Prince Amleth is known to have died at the hands of his uncle. Not only that, the mother was also kidnapped. This is what angered Prince Amleth to save his mother as well as revenge.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 1 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>

    )
}

export default Trending
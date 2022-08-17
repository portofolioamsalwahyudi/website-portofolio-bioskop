import {Card, Container, Row, Col, Image} from "react-bootstrap"
import jokerImage from "../assets/images/trending/joker.jpg"
import avengerEndGameImage from "../assets/images/superhero/Avenger-EndGame.jpg"
import avengerInfinityWar from "../assets/images/superhero/Avenger-Infinity-War.jpg"
import spidermanIntoTheSpiderVerse from "../assets/images/superhero/Spiderman-Into-The-Spider-Verse.jpg"
import spidermanNoWayHome from "../assets/images/superhero/Spiderman-No-Way-Home.jpg"
import theDarkKnightRises from "../assets/images/superhero/The-Dark-Knight-Rises.jpg"
import theDarkKnight from "../assets/images/superhero/The-Dark-Knight.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPER HERO</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="text-white movieImage">
                        <Image src={avengerEndGameImage} alt="Avenger End Game (2019)" className="Images" />
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Avengers: Endgame (2019)</Card.Title>
                            <Card.Text className="text-left">
                            The second half of Infinity War, "Avengers: Endgame" is a film that really steals the attention because all the superheroes are in one story. Half of the universe's population being lost in Endgame may feel tragic, especially watching Natasha and Tony sacrifice their lives to save the universe. Everything that is shown in "Avengers: Endgame" really drains the emotions and minds of fans.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 30 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={avengerInfinityWar} alt="Avengers: Infinity War (2018)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Avengers: Infinity War (2018)</Card.Title>
                            <Card.Text className="text-left">
                            Avengers: Infinity War 2018 is the development of more than a decade of work on the MCU films. The first trailer of the film even attracted hundreds of millions of viewers, which somehow the film succeeded and even exceeded expectations.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 25 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={spidermanIntoTheSpiderVerse} alt="Spider-Man: Into The Spider-Verse (2018)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Spider-Man: Into The Spider-Verse (2018)</Card.Title>
                            <Card.Text className="text-left">
                            Of course, "Spider-Man: No Way Home" might never have happened had "Spider-Man: Into the Spider-Verse" not had such a powerful impact. Although it remains the lowest-grossing Spider-Man film, the Spider-Verse was loved by fans and won the Academy Award for Best Animated Feature.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 25 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={spidermanNoWayHome} alt="Spider-Man: No Way Home (2021)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">Spider-Man: No Way Home (2021)</Card.Title>
                            <Card.Text className="text-left">
                            Not only is it one of the best films to gross $1 billion, “Spiderman: No Way Home” is the third film in Tom Holland's Spider-Man trilogy and is a great ending to the series. Bringing back generations of Spider-Man Maguire and Garfield, the film celebrates two decades of cinematic wall crawling.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 20 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={theDarkKnightRises} alt="The Dark Knight Rises (2012)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">The Dark Knight Rises (2012)</Card.Title>
                            <Card.Text className="text-left">
                            Just as the MCU began to realize its full potential in 2012 with The Avengers, the Dark Knight trilogy presented “The Dark Knight Rises”. Like Logan, it's an exploration of what happens when a hero's journey ends, but here Batman ends up being deified as Gotham's ultimate savior.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 20 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-white movieImage">
                        <Image src={theDarkKnight} alt="The Dark Knight (2008)" className="Images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1">
                            <Card.Title className="text-center">The Dark Knight (2008)</Card.Title>
                            <Card.Text className="text-left">
                            The film stars Heath Ledger as the Joker. In this film, Bruce Wayne aka Batman, prosecutors and police form an alliance to uncover organized crime in Gotham City. But their efforts are thwarted by the Joker, who tries to undermine Batman's influence and turn the city into chaos.
                            </Card.Text >
                            <Card.Text className="text-left">Last updated 10 days ago</Card.Text>
                        </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>

    )
}

export default SuperHero
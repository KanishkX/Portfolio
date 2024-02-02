import React from "react";
import './portfolio.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ChatApp from '../../assets/ChatApp.png'
import HTA from '../../assets/HTA.png'
import ZHSimulation from '../../assets/ZHSimulation.png'
export function Portfolio(){
    return (
    <div className="portfolio">
        <section id = "work">
            <h2 className="workstitle">My Portfolio</h2>
            <div className="works">
                <div className="cards">
                <Card raised
                sx={{
                    maxWidth: 440,
                    margin: "0 auto",
                    padding: "0.1em",
                }}>
                    <CardActionArea href="https://github.com/KanishkX/Transit-App">
                        <CardMedia
                        component="img"
                        height="250"
                        image={HTA}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Halifax Transit App
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>

                <div className="cards">
                <Card raised
                sx={{
                    maxWidth: 440,
                    margin: "0 auto",
                    padding: "0.1em",
                }}>
                    <CardActionArea href="https://github.com/KanishkX/Chat-Application.git">
                        <CardMedia
                        component="img"
                        height="250"
                        image={ChatApp}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Chat Application
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>

                <div className="cards">
                <Card raised
                    sx={{
                        maxWidth: 440,
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                    <CardActionArea href= "https://github.com/KanishkX/Zombie-Apocolypse.git">
                        <CardMedia
                        component="img"
                        height="200"
                        image={ZHSimulation}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Zombie-Apocolypse Simulation
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
        </div>
        </section>
    </div>)
}
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
import stock from '../../assets/stock.png'
export function Portfolio(){
    return (
    <div class="portfolio">
        <section id = "work">
            <h2 class="workstitle">Portfolio</h2>
            <div class="works">
                <div class="cards">
                <Card raised
                sx={{
                    maxWidth: 500,
                    margin: "0 auto",
                    padding: "0.1em",
                }}>
                    <CardActionArea href="https://github.com/KanishkX/Transit-App">
                        <CardMedia
                        component="img"
                        height="350"
                        image={HTA}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Halifax Transit App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Simplify HRM transit with Kotlin app for seamless journey planning
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>

                <div class="cards">
                <Card raised
                sx={{
                    maxWidth: 500,
                    margin: "0 auto",
                    padding: "0.1em",
                }}>
                    <CardActionArea href="https://github.com/KanishkX/Chat-Application.git">
                        <CardMedia
                        component="img"
                        height="350"
                        image={ChatApp}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Chat Application
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Real-time messaging app for local networks, designed for local use
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>

                <div class="cards">
                <Card raised
                    sx={{
                        maxWidth: 500,
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                    <CardActionArea href= "https://github.com/KanishkX/Stock-Exchange">
                        <CardMedia
                        component="img"
                        height="350"
                        image={stock}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        World Stock Exchange
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Dynamic platform offering real-time market data, expert analysis, and seamless trading experience for savvy investors worldwide.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>

                
        </div>
        </section>
    </div>)
}
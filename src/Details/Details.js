import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "./Details.css";

const Details = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getSingleData();
    }, []);

    const getSingleData = () => {
        axios
            .get(`https://api.spacexdata.com/v3/launches/`)
            .then((res) => {
                console.log("data", res.data);
                setdata(res.data);
            })
            .catch((error) => console.log(error));

    };

    //   ------------slick-carousel--------------

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1,
        cssEase: "linear",
    };
    return (
        <div>
            <div className="rocket-box-single">
                {data.flight_number}
                <Card sx={{ width: "100%" }}>
                    <h1>Details OF Flight Page</h1>
                    <Slider {...settings}>
                        {data?.map((e, i) => {
                            return (
                                <div key={i}>
                                    <img src={e.links.flickr_images[0]} className="flickr-img" alt={"img"} />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {e.mission_name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {e.launch_year}
                                        </Typography>
                                    </CardContent>
                                </div>
                            )
                        })}

                    </Slider>
                </Card>
            </div>
        </div>
    );
};

export default Details;



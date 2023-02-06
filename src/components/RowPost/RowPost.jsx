import "./RowPost.css";
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constant";
import YouTube from "react-youtube";
//imports......

function RowPost(props) {
	const [movies, setMovies] = useState([]);
	const [urlId, seturlId] = useState("");
	useEffect(() => {
		axios
			.get(props.url)
			.then(response => {
				setMovies(response.data.results);
			})
			.catch(err => {
				alert(err);
			});
	}, []);
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	const handleMovie = id => {
		axios
			.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
			.then(response => {
				if (response.data.results.length !== 0) {
					seturlId(response.data.results[0]);
				} else {
					console.log("trialar not available");
				}
			});
	};
	return (
		<div className="row">
			<h2>{props.title}</h2>
			<div className="posters">
				{movies.map(obj => (
					<img
						onClick={() => {
							handleMovie(obj.id);
						}}
						className={props.isSmall ? "small_poster" : "poster"}
						alt="poster"
						src={`${imageUrl + obj.backdrop_path}`}
					/>
				))}
			</div>
			{urlId && <YouTube videoId={urlId.key} opts={opts} />}
		</div>
	);
}

export default RowPost;

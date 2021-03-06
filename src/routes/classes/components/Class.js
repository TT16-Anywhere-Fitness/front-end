import React, { useState } from "react";
import "./Class.css";

function Class(props) {
	const [login, setLogin] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setLogin(true);
		console.log(e);

		setTimeout(() => {}, 3000);
	};
	return (
		<div className="Class-div" id="one">
			<div className="classname">
				<h1>{props.info.name}</h1>
			</div>
			<div className="class-info-div">
				<div className="locationName">
					<p>
						Location:{" "}
						<span className="locationSpan">{props.info.location}</span>
					</p>
				</div>
				<div className="AboutClass">
					<h2>About Class</h2>
					<div className="class-info-time">
						<p>
							Date:
							<span className="locationSpan">{props.info.date}</span>{" "}
						</p>
						<p>
							Start Time:
							<span className="locationSpan"> {props.info.startTime}</span>{" "}
						</p>
					</div>
					<div className="extraInfo">
						<p>
							Duration:{" "}
							<span className="locationSpan">{props.info.duration}</span>
						</p>
						<p>
							Type: <span className="locationSpan">{props.info.type}</span>{" "}
						</p>
					</div>
					<h2>Level of Difficulty:</h2>

					<span className="difficultySpan">{props.info.level}</span>
				</div>
			</div>
			<div className="classRole">
				<p>
					Class Size:{" "}
					<span className="classSizeSpan">{props.info.classSize}</span>
				</p>
				<p>
					Attendies:{" "}
					<span className="classSizeSpan">{props.info.attendees}</span>
				</p>
			</div>
			{login ? (
				<button onClick={handleClick}>Sign Up Now</button>
			) : (
				<a href="/login" id="SignupBTN">
					Login to Sign Up
				</a>
			)}
		</div>
	);
}

export default Class;

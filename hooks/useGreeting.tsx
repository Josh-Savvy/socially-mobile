import { useState, useEffect } from "react";
import { getGreeting } from "../utils";

const useGreeting = () => {
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const now = new Date();
		const hours = now.getHours();
		setGreeting(getGreeting(hours));
	}, []);

	return greeting;
};

export default useGreeting;

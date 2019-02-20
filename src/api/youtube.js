import axios from "axios";

const KEY = "AIzaSyCkjuiY9c7RAXi9RM0CAdOJSaSWqMN_IQ8";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3/search",
	params: {
		part: "snippet",
		maxResult: 5,
		key: KEY
	}
});

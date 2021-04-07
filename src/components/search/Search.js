import React, { useState, useEffect } from "react";
import Contact from "../../api/Contact";
import SearchBar from "./SearchBar";
import NameList from "./NameList";
import { NameLoader } from "../Loader";

const Search = (props) => {
	if (props.id === null || props.token === "") {
		props.history.replace("/");
	}
	const [name, setName] = useState("");
	const [debouncedName, setDebouncedName] = useState("");
	const [nameList, setNameList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchNames = async (name) => {
			try {
				setLoading(true);
				const response = await Contact.get("/getNames", {
					params: {
						name: debouncedName,
					},
					headers: {
						Authorization: "Bearer " + props.token,
					},
				});
				// console.log(response)
				setNameList(response.data.names);
				setLoading(false);
			} catch (error) {
				if (error.response) {
					console.log(error.response);
				}
				throw error;
			}
		};

		fetchNames(debouncedName);
	}, [debouncedName, props.token]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedName(name);
		}, 500);

		return () => {
			clearTimeout(timerId);
		};
	}, [name]);

	const renderNames = () => {
		if (loading) {
			return <NameLoader text={"fetching Names"} />;
		}
		return (
			<NameList
				debouncedName={debouncedName}
				nameList={nameList}
				id={props.id}
				token={props.token}
			/>
		);
	};

	return (
		<React.Fragment>
			<SearchBar name={name} setName={setName} />
			{renderNames()}
		</React.Fragment>
	);
};

export default Search;

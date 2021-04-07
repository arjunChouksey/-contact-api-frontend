import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import Contact from "../../api/Contact";
import AboutYou from "./AboutYou";
import { Loader } from "../Loader";

const ContactComponent = ({ id, history, token }) => {
	if (id === null || token === "") {
		history.replace("/");
	}
	const [contactList, setContactList] = useState([]);
	const [click, setClick] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchContacts = async (id) => {
			try {
				const response = await Contact.get("/getContacts", {
					params: {
						id: id,
					},
					headers: {
						Authorization: "Bearer " + token,
					},
				});
				// console.log(response.data.contactArr);
				if (response.status === 200) {
					setContactList(response.data.contactArr);
					setLoading(false);
				}
			} catch (error) {
				throw error;
			}
		};

		fetchContacts(id);
	}, [id, click, token]);

	const renderList = (loading) => {
		if (loading) {
			return <Loader text={"fetching your contacts..."} />;
		}

		return <ContactList contactList={contactList} />;
	};

	return (
		<div className="ui grid">
			<div className="ui row">
				<div className="ui four wide column">
					<AboutYou id={id} setClick={setClick} click={click} token={token} />
				</div>
				<div className="ui twelve wide column">
					{renderList(loading, contactList)}
				</div>
			</div>
		</div>
	);
};

export default ContactComponent;

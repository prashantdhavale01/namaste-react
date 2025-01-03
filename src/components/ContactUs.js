const ContactUs = () => {
	return(
		<div>
			<h1 className="text-lg font-bold">Contact Us Page</h1>
			<form>
				<input type="text" className="border border-black p-2 m-2" placeholder="Name" /> 
				<input type="text" className="border border-black p-2 m-2" placeholder="Email" />
				<button type="submit" className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
			</form>
		</div>
	);
}

export default ContactUs;
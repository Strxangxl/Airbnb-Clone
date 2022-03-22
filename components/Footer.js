const Footer = () => {
	return(
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
			<div className="space-y-3 text-sm text-gray-800">
				<h5 className="font-bold">About</h5>
				<p>How Airbnb Works</p>
				<p>Newsroom</p>
				<p>Investors</p>
			</div>
			<div className="space-y-3 text-sm text-gray-800">
				<h5 className="font-bold">Community</h5>
				<p>Discord</p>
				<p>Reddit</p>
				<p>Twitter</p>
			</div>
			<div className="space-y-3 text-sm text-gray-800">
				<h5 className="font-bold">Contact</h5>
				<p>Email</p>
				<p>Slack</p>
				<p>Facebook</p>
			</div>
			<div className="space-y-3 text-sm text-gray-800">
				<h5 className="font-bold">Host</h5>
				<p>I</p>
				<p>Me</p>
				<p>Myself</p>
			</div>
		</div>
	)
}

export default Footer;
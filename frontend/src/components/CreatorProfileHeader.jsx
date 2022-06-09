import "../styles/CreatorProfileHeader.css"

export default function CreatorProfileHeader({creator}) {

	const user = null // TODO: authenticate current user

	return (
		<div className="profile-header-container">
			<img src={creator.avatar} />
			<div className="profile-info-container">
				<div className="profile-info-top">
					<h2 className="profile-info-name">{creator.name}</h2>
					{ 
						user !== creator ?
						creator.inFollow ? 
						<button className="profile-primary-action">Unfollow</button>
						: <button className="profile-primary-action">Follow</button>
						: <button className="profile-primary-action">Edit Profile</button>
					}
				</div>
				<p className="profile-info-follower">{creator.follower} Followers</p>
				<p className="profile-info-bio">{creator.bio}</p>
			</div>
		</div>
	)
}
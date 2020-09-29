import Card from './Card'
import React from 'react';

// line 9 : convert the profiles array to a new array "profile" on kind Card
// actually return Card array 
// ...profile - signle object from  card array
const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

export default CardList
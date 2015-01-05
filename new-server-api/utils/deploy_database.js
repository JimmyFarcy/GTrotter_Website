exports.accounts = [
{
	'Login' : 'GTrotter',
	'Password' : 'azerty',
	'FirstName' : 'G',
	'LastName' : 'Trotter',
	'Age' : 1,
	'Genre' : 'M',
	'Email' : 'GTrotter@epitech.eu',
	'Location' : 'France',
	'Langue' : 'FR',
},
{	
	'Login' : 'Julian',
	'Password' : 'azerty',
	'FirstName' : 'Julian',
	'LastName' : 'HO',	
	'Age' : 24,
	'Genre' : 'M',
	'Email' : 'julian.hoquang@epitech.eu',
	'Location' : 'France',
	'Langue' : 'FR'
},
{	
	'Login' : 'Yoann',
	'Password' : 'bourga_y',
	'FirstName' : 'Yoann',
	'LastName' : 'Bourgault',	
	'Age' : 27,
	'Genre' : 'M',
	'Email' : 'yoann.bourgault@epitech.eu',
	'Location' : 'Chine',
	'Langue' : 'FR'
}
]

exports.trip = [
{
	'Name' : 'Essaie',
	'Depart' : 
	{
		'Pays' : 'France',
		'Ville' : 'Lyon',
		'Date' : 897465,
		'Geolocalisation' : '43Â° 5494 N - 1Â° 48472 E'
	},
	'Arrivee' : 
	{
		'Pays' : 'Chine',
		'Ville' : 'Beijing',
		'Date' : 466537489,
		'Geolocalisation' : '43Â° 5494 N - 1Â° 48472 E'
	},
	'Places' : [48651,89764523,98764513,8674,6,6165,4,65,46,54,32,1,8,7,89,79]
}
]

exports.coordinates = [
{
	'x' : 78946,
	'y' : 78964,
	'z' : 9335,
	'Description' : 'First picture'
}
]

exports.likes = [
{
	'Member_id' : 'Joe',
	'Structure id' : 'photo1',
	'Date' : 798765
}
]

exports.follow = [
{
	'Follower_id' : 'Joe',
	'Followed_id' : 'Jim',
	'Date' : 789456
}
]

exports.images = [
{
	'Address' : './db/user1',
	'id_owner' : 'Joe',
	'Rights' : 'RW'
}
]

exports.blogs = [
{
	'Name' : 'Blog Australie',
	'Title' : 'Blog de Jim',
	'Owner_id' : 'Jim',
	'Date' : 565846
}
]

exports.social_network = [
{
	'Owner_id' : 'Jim',
	'Facebook' : '',
	'Google+' : '',
	'Twitter' : '',
	'Instagramme' : ''
}
]

exports.text = [
{
	'Title' : 'Pekin',
	'Contents' : 'Grande ville, beaucoup de pollution et trÃ¨s peu d\'anglophone',
	'Author_id' : 'Jim'
}
]

exports.language = [
{
	'English_Name' : 'Pekin',
	'Original_name' : 'Beijing'
}
]

exports.struct_type = exports [
{
	'Name' : 'Photo',
	'Description' : '1ere Photo de la Chine'
}
]

exports.comments = [
{
	'Struct_id' : 'Comm1',
	'Struct_type_id' : 'Commentaire',
	'Date' : 789465,
	'Contents' : 'Woua chouette photo'
}
]

exports.article = [
{
	'Author_id' : 'Jim',
	'Name' : 'France - Chine',
	'Contents' : 'Premiere impression',
	'Language_id' : 'FR'
}
]

exports.opinion = [
{
	'Title' : 'Censure chine',
	'Description' : 'Google est bloque, prennez un vpn',
	'Mark' : 5,
	'Author_id' : 'Jim'
}
]

exports.places = [
{
	'Name' : 'Forbidden city',
	'Coordinates_id' : 'FC_S',
	'Description' : 'Grande place de rencontre avec l\'empereur',
	'Author_id' : 'Jim'
}
]



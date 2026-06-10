// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Babe Cave",
	tagline: "Babe Cave",
	description: "Visit Babe Cave in Land O' Lakes, FL for expert hair services by Bri Hill. We take the time to listen, care, and make sure every guest walks out feeling their best.",
	url: "https://www.yourwebsite.com",
	author: "Bri Hill",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "",
	// phoneForTel: "656-266-0907",
	// phoneFormatted: "(656) 266-0907",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "11725 Angeline Pl",
		lineTwo: "",
		city: "Land O' Lakes",
		state: "FL",
		zip: "34638",
		mapLink: "https://maps.app.goo.gl/cq7Y5HoaPJDxsp6q9",
	},
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/babecave.bri/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};

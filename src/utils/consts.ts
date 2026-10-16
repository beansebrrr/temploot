import type { SocialMediaLink } from "@utils/types";

interface SiteInfo {
	name: string;
	description: string;
	author: {
		name: string;
		email: string;
		socials: SocialMediaLink[];
	};
}

export const SITE: SiteInfo = {
	name: "Temploot",
	description: "A starter template for my websites",
	author: {
		name: "Vince",
		email: "vincemcaballero@gmail.com",
		socials: [
			{
				platform: "GitHub",
				username: "beansebrrr",
				url: "https://github.com/beansebrrr",
			},
			{
				platform: "LinkedIn",
				username: "Vince Caballero",
				url: "https://github.com/vincecaballero",
			},
		],
	},
} as const;

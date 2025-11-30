export interface Character {
	id: string;
	name: string;
	element: "pyro" | "hydro" | "anemo" | "electro" | "dendro" | "cryo" | "geo";
	weapon: "sword" | "claymore" | "polearm" | "catalyst" | "bow";
	rarity: 4 | 5;
	image: string; // path to image
	ranks: {
		overworld: string;
		abyss: string;
		theatre: string;
		stygian: string;
	};
	role: "DPS" | "Sub-DPS" | "Support";
}

export const characters: Character[] = [
	{
		id: "furina",
		name: "Furina",
		element: "hydro",
		weapon: "sword",
		rarity: 5,
		image: "/assets/images/characters/furina.png", // Make sure this image exists!
		role: "Support",
		ranks: {
			overworld: "T0",
			abyss: "T0",
			theatre: "T0",
			stygian: "T0.5",
		},
	},
	{
		id: "diluc",
		name: "Diluc",
		element: "pyro",
		weapon: "claymore",
		rarity: 5,
		image: "/assets/images/characters/diluc.png",
		role: "DPS",
		ranks: {
			overworld: "T1",
			abyss: "T2",
			theatre: "T1",
			stygian: "T3",
		},
	},
	// Add more characters here...
];

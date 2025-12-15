// src/data/tierListInfo.ts

export const tierListInfo = [
	{
		title: "About the Tier List",
		content: `
            <div class="space-y-4">
                <p>This list is a culmination of three factors: <strong>General User Consensus</strong>, <strong>Public Data</strong> (usage rates/clear times), and <strong>Personal Experience</strong> regarding how characters feel in the current economy.</p>
                
                <div class="p-3 bg-[var(--card-bg)] border border-[var(--line-divider)] rounded-md">
                    <h4 class="font-bold text-[var(--primary)] mb-2 text-sm uppercase tracking-wider">The Investment Standard</h4>
                    <ul class="list-disc pl-5 space-y-1 text-sm opacity-90">
                        <li><strong>5-Star Characters:</strong> Evaluated at <span class="text-yellow-400 font-bold">C0</span> (Constellation 0).</li>
                        <li><strong>4-Star Characters:</strong> Evaluated at <span class="text-purple-400 font-bold">C6</span> (Constellation 6).</li>
                        <li><strong>Builds:</strong> Assuming ~25 useful substats and accessible weapon options (Signatures considered where applicable).</li>
                    </ul>
                </div>
            </div>
        `,
	},
	{
		title: "Ranking Criteria & Meta Lines",
		content: `
            <div class="space-y-4">
                <p class="text-sm mb-2">Rankings are a hybrid of <strong>Relative Strength</strong> (Raw performance/Clear speed) and <strong>Pull Value</strong> (Versatility/Future-proofing).</p>
                
                <div class="space-y-3 text-sm">
                    
                    <div class="p-3 border-l-4 border-red-500 bg-red-500/5 rounded-r-md">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-black text-red-500 text-lg">T0 / T0.5</span>
                            <span class="font-bold text-red-400 uppercase tracking-wide text-xs">The Best of the Best</span>
                        </div>
                        <p class="opacity-90">
                            The cream of the crop. These characters can almost bruteforce any content with sufficient investment. They offer extreme account value and excel across multiple scenarios.
                        </p>
                    </div>

                    <div class="p-3 border-l-4 border-orange-500 bg-orange-500/5 rounded-r-md">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-black text-orange-500 text-lg">T1 - T2</span>
                            <span class="font-bold text-orange-400 uppercase tracking-wide text-xs">The Good Meta Options</span>
                        </div>
                        <p class="opacity-90">
                            Strong alternative options. They are pretty strong themselves when used in the right situations and can perfectly clear content at decent investment levels.
                        </p>
                    </div>

                    <div class="p-3 border-l-4 border-lime-500 bg-lime-500/5 rounded-r-md">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-black text-lime-500 text-lg">T3 / T4</span>
                            <span class="font-bold text-lime-500 uppercase tracking-wide text-xs">Situational Characters</span>
                        </div>
                        <p class="opacity-90">
                            Niche picks. As the name suggests, they require heavy investment and a specific situation that favors them to fully unlock their potential. Their general pull value is lower.
                        </p>
                    </div>

                    <div class="p-3 border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-md">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-black text-cyan-500 text-lg">T5</span>
                            <span class="font-bold text-cyan-500 uppercase tracking-wide text-xs">Currently Weak</span>
                        </div>
                        <p class="opacity-90">
                            Not recommended to build unless you absolutely love their design. They are currently weak in the meta and will struggle to clear hard content without massive over-investment.
                        </p>
                    </div>

                </div>
            </div>
        `,
	},
    {
		title: "Roles & Tags",
		content: `
            <div class="space-y-6 text-sm">
                
                <div>
                    <h4 class="font-bold text-[var(--primary)] mb-3 border-b border-[var(--line-divider)] pb-1">CLASS ROLES</h4>
                    <div class="space-y-3">
                        <div class="flex items-start gap-3">
                            <span class="font-bold text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded shrink-0 w-20 text-center">MAIN DPS</span>
                            <span class="opacity-80">The on-field carry. The team is built around them, and they consume the most field time.</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="font-bold text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded shrink-0 w-20 text-center">SUB DPS</span>
                            <span class="opacity-80">Off-field damage dealers. They swap in, unleash skills, and swap out while continuing to deal damage.</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="font-bold text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded shrink-0 w-20 text-center">SUPPORT</span>
                            <span class="opacity-80">Buffers, Healers, and Shielders. Their primary job is to amplify team performance rather than deal raw damage.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-[var(--primary)] mb-3 border-b border-[var(--line-divider)] pb-1">TAG LEGEND</h4>
                    
                    <div class="bg-[var(--btn-regular-bg)] p-3 rounded mb-4 text-xs">
                        <span class="block font-bold mb-1 opacity-70 uppercase tracking-wider">How to read the colors:</span>
                        <ul class="space-y-1">
                            <li><span class="text-green-500 font-bold">GREEN:</span> Represents <strong>Positive Utility</strong>. These are added benefits the character provides to the team.</li>
                            <li><span class="text-red-500 font-bold">RED:</span> Represents <strong>Conditions or Drawbacks</strong>. These are requirements you must meet for the character to work.</li>
                            <li><span class="text-orange-400 font-bold">ORANGE:</span> Represents <strong>Situational Warnings</strong>. Usually related to investment cost or constellation reliance.</li>
                            <li><span class="text-gray-400 font-bold">GRAY:</span> Represents <strong>Specialization</strong>. These denote the scenarios where the character truly shines. These are neutral and not detrimental to a character's placement.</li>
                        </ul>
                    </div>

                    <div class="space-y-4">
                        
                        <div>
                            <span class="font-bold text-green-500 block mb-1 text-xs uppercase">Advantages (Utility)</span>
                            <ul class="list-disc pl-4 space-y-1 opacity-80">
                                <li><strong class="text-green-500">BUFF:</strong> Provides stat amplification (ATK, DMG%, EM, etc.).</li>
                                <li><strong class="text-green-500">SHIELD:</strong> Provides interruption resistance and damage mitigation.</li>
                                <li><strong class="text-green-500">HEAL:</strong> Restores HP to the active character or party.</li>
                                <li><strong class="text-green-500">CC:</strong> Crowd Control. Groups enemies or immobilizes them.</li>
                                <li><strong class="text-green-500">DEBUFF:</strong> Weakens enemies (Def Shred, Res Shred, etc.).</li>
                            </ul>
                        </div>

                        <div>
                            <span class="font-bold text-red-500 block mb-1 text-xs uppercase">Caveats (Conditions)</span>
                            <ul class="list-disc pl-4 space-y-1 opacity-80">
                                <li><strong class="text-red-400">ULT:</strong> Burst reliant. Clunky without high Energy Recharge.</li>
                                <li><strong class="text-red-400">PARTNER:</strong> "Parasitic" carry. Needs a specific partner to function properly.</li>
                            </ul>
                        </div>

                        <div>
                            <span class="font-bold text-orange-400 block mb-1 text-xs uppercase">Investment & Scenarios</span>
                            <ul class="list-disc pl-4 space-y-1 opacity-80">
                                <li><strong class="text-orange-400">C0:</strong> <strong> 4-Star Exclusive </strong>: This 4-Star unit is notably weaker at low constellations.</li>
                                <li><strong class="text-orange-400">INVEST:</strong> Needs vertical investment (Signatures/Artifacts) to reach potential.</li>
                                <li><strong class="text-gray-400">ST:</strong> Specialized in Single Target (Boss) content.</li>
                                <li><strong class="text-gray-400">AOE:</strong> Specialized in Multi-Target (Mobbing) content.</li>
                                <li><strong class="text-gray-400">CLEAVE:</strong> Hits small groups but not full room-wide AOE.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        `,
	},
	{
		title: "Changelog",
		content: `
            <div class="space-y-2">
                <div>
                    <span class="font-bold text-[var(--primary)]">v5.2</span> - <span class="text-xs opacity-70">Nov 30, 2025</span>
                    <ul class="list-disc pl-5 text-sm opacity-80">
                        <li>Added <strong>Chasca</strong> to Main DPS (T1).</li>
                        <li>Moved <strong>Bennett</strong> to T0 Support.</li>
                    </ul>
                </div>
                <div>
                    <span class="font-bold text-[var(--primary)]">v5.1</span> - <span class="text-xs opacity-70">Oct 15, 2025</span>
                    <ul class="list-disc pl-5 text-sm opacity-80">
                         <li>Updated rankings for Xilonen release.</li>
                    </ul>
                </div>
            </div>
        `,
	},
];
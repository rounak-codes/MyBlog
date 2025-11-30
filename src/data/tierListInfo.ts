// src/data/tierListInfo.ts

export const tierListInfo = [
    { 
        title: 'About the Tier List', 
        content: `
            <p>This tier list is designed to help you understand the current meta of <strong>Genshin Impact</strong>.</p>
            <br>
            <p>It focuses on optimal team compositions and Abyss performance.</p>
        ` 
    },
    { 
        title: 'Criteria & Methodology', 
        content: `
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>T0 (Meta):</strong> Characters that define the meta.</li>
                <li><strong>T1 (Strong):</strong> excellent picks for any content.</li>
                <li><strong>T2 (Viable):</strong> Good, but requires more investment.</li>
            </ul>
        ` 
    },
    { 
        title: 'Categories & Tags', 
        content: `
            <div class="space-y-3">
                <p>Characters are categorized by their primary function in optimal teams:</p>
                
                <ul class="space-y-2 text-sm">
                    <li class="flex items-center gap-2">
                        <span class="font-bold text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">DPS / CARRY</span>
                        <span class="opacity-80">Primary on-field damage dealers.</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">BUFF / HEAL</span>
                        <span class="opacity-80">Provides team utility, heals, or stat boosts.</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="font-bold text-blue-300 bg-blue-300/10 px-1.5 py-0.5 rounded">DEBUFF / DOT</span>
                        <span class="opacity-80">Applies negative effects or damage over time.</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="font-bold text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded">SUSTAIN / SHIELD</span>
                        <span class="opacity-80">Protects the team from incoming damage.</span>
                    </li>
                </ul>

                <p class="text-xs opacity-60 pt-2 border-t border-[var(--line-divider)] border-dashed">
                    *Note: Characters are tagged based on their most effective C0 role (C6 for 4-stars).
                </p>
            </div>
        ` 
    },
    { 
        title: 'Changelog', 
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
        ` 
    }
];
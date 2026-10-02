// An original cartoon "Lavish" drawn in SVG. One body, five poses, one per section.
// To swap in your own video later, see README.md ("Using your own character videos").

const C = {
  skin: '#c68a5e',
  skinDark: '#a2683f',
  hair: '#1f1a17',
  hoodie: '#3c8f86',
  hoodieDark: '#2c6d66',
  pants: '#2b3a55',
  shoe: '#1a1a1a',
  ink: '#1a1a1a',
  white: '#ffffff',
  gold: '#f0c94d',
  goldDark: '#c99a22',
  wood: '#a86b3c',
  woodDark: '#80502b',
}

function Arm({ d, hand, className, style, children }) {
  return (
    <g className={className} style={style}>
      <path d={d} stroke={C.hoodieDark} strokeWidth="31" strokeLinecap="round" fill="none" />
      <path d={d} stroke={C.hoodie} strokeWidth="25" strokeLinecap="round" fill="none" />
      {children}
      {hand && <circle cx={hand[0]} cy={hand[1]} r="14" fill={C.skin} />}
    </g>
  )
}

function Head({ mouth = 'smile', look = [0, 0], shades = false }) {
  const [lx, ly] = look
  return (
    <g>
      <circle cx="132" cy="148" r="14" fill={C.skin} />
      <circle cx="268" cy="148" r="14" fill={C.skin} />
      <ellipse cx="200" cy="140" rx="68" ry="74" fill={C.skin} />
      <path
        d="M132 132 Q126 60 200 56 Q274 60 268 132 Q258 98 228 92 Q214 110 186 100 Q160 96 146 114 Q138 122 132 132Z"
        fill={C.hair}
      />
      {shades ? (
        <g>
          <rect x="156" y="124" width="40" height="28" rx="10" fill={C.ink} />
          <rect x="204" y="124" width="40" height="28" rx="10" fill={C.ink} />
          <path d="M196 132 L204 132" stroke={C.ink} strokeWidth="5" />
          <path d="M164 130 L176 130" stroke="#ffffff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
          <path d="M212 130 L224 130" stroke="#ffffff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <path d="M163 116 Q176 108 189 114" stroke={C.hair} strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M211 114 Q224 108 237 116" stroke={C.hair} strokeWidth="5" strokeLinecap="round" fill="none" />
          <g className="blink">
            <ellipse cx="176" cy="138" rx="10" ry="12" fill={C.white} />
            <ellipse cx="224" cy="138" rx="10" ry="12" fill={C.white} />
            <circle cx={178 + lx} cy={140 + ly} r="5.5" fill={C.ink} />
            <circle cx={226 + lx} cy={140 + ly} r="5.5" fill={C.ink} />
          </g>
        </g>
      )}
      <path d="M200 144 Q209 160 198 165" stroke={C.skinDark} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="160" cy="168" r="9" fill="#e07a6a" opacity=".25" />
      <circle cx="240" cy="168" r="9" fill="#e07a6a" opacity=".25" />
      {mouth === 'open' ? (
        <path d="M178 177 Q200 206 222 177 Z" fill="#6b2b2b" stroke={C.ink} strokeWidth="3" strokeLinejoin="round" />
      ) : mouth === 'hmm' ? (
        <path d="M186 184 Q200 180 214 186" stroke={C.ink} strokeWidth="5" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M180 178 Q200 194 220 178" stroke={C.ink} strokeWidth="5" strokeLinecap="round" fill="none" />
      )}
    </g>
  )
}

function Torso() {
  return (
    <g>
      <rect x="186" y="200" width="28" height="26" fill={C.skinDark} />
      <path d="M140 252 Q140 222 170 220 L230 220 Q260 222 260 252 L263 362 L137 362 Z" fill={C.hoodie} />
      <path d="M168 221 Q200 250 232 221" stroke={C.hoodieDark} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M190 236 L188 266" stroke="#f5f5f5" strokeWidth="3" strokeLinecap="round" />
      <path d="M210 236 L212 266" stroke="#f5f5f5" strokeWidth="3" strokeLinecap="round" />
      <path d="M160 322 L240 322 L232 352 L168 352 Z" fill={C.hoodieDark} opacity=".6" />
      <text x="200" y="304" textAnchor="middle" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="18" fill="#f5f5f5">
        {'</>'}
      </text>
    </g>
  )
}

function Legs() {
  return (
    <g>
      <rect x="150" y="350" width="44" height="112" rx="12" fill={C.pants} />
      <rect x="206" y="350" width="44" height="112" rx="12" fill={C.pants} />
      <ellipse cx="166" cy="466" rx="32" ry="13" fill={C.shoe} />
      <ellipse cx="234" cy="466" rx="32" ry="13" fill={C.shoe} />
    </g>
  )
}

function Shadow({ wide = false }) {
  return <ellipse cx="200" cy="482" rx={wide ? 180 : 110} ry="10" fill="#000" opacity=".07" />
}

const LeftArmDown = () => <Arm d="M150 240 Q126 292 134 342" hand={[134, 346]} />

function Wave() {
  return (
    <g className="float">
      <Shadow />
      <Legs />
      <Torso />
      <Head />
      <LeftArmDown />
      <Arm className="wave" d="M250 240 Q296 214 302 150" hand={[302, 140]} />
    </g>
  )
}

function Desk() {
  return (
    <g>
      <Shadow wide />
      <rect x="128" y="228" width="144" height="150" rx="20" fill="#4a4a4a" />
      <Torso />
      <Head look={[0, 3]} />
      <Arm d="M150 240 Q138 302 180 326" />
      <Arm d="M250 240 Q262 302 220 326" />
      <circle className="tap-l" cx="184" cy="326" r="14" fill={C.skin} />
      <circle className="tap-r" cx="216" cy="326" r="14" fill={C.skin} />
      {/* desk */}
      <rect x="50" y="344" width="12" height="138" fill={C.woodDark} />
      <rect x="338" y="344" width="12" height="138" fill={C.woodDark} />
      <rect x="28" y="330" width="344" height="18" rx="5" fill={C.wood} />
      {/* laptop, lid facing us */}
      <path d="M146 332 L158 258 L264 258 L252 332 Z" fill="#cfd2d6" />
      <path d="M146 332 L252 332 L256 338 L142 338 Z" fill="#b5b8bd" />
      <text x="205" y="302" textAnchor="middle" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="16" fill="#9a9da2">
        LK
      </text>
      {/* mug + steam */}
      <rect x="290" y="298" width="28" height="32" rx="5" fill="#e9dcc8" />
      <path d="M318 306 Q332 308 330 318 Q328 326 318 324" stroke="#e9dcc8" strokeWidth="5" fill="none" />
      <path className="steam" d="M298 290 Q292 280 298 270 Q304 260 298 250" stroke="#bbb" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path className="steam s2" d="M310 290 Q304 280 310 270 Q316 260 310 250" stroke="#bbb" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* plant */}
      <path d="M62 330 L58 298 L100 298 L96 330 Z" fill="#d9a77e" />
      <path d="M79 298 Q60 270 66 252 Q82 270 79 298" fill="#6aa36f" />
      <path d="M79 298 Q96 266 92 246 Q74 268 79 298" fill="#7fb984" />
      <path d="M79 298 Q74 262 80 240 Q88 262 79 298" fill="#5a9460" />
    </g>
  )
}

function Think() {
  return (
    <g className="float">
      <Shadow />
      <Legs />
      <Torso />
      <Head look={[3, -4]} mouth="hmm" />
      <Arm d="M150 240 Q148 304 214 296" hand={[218, 294]} />
      <Arm d="M250 240 Q296 282 230 214" hand={[226, 208]} />
      <g className="think-dots" fill="#ffffff" stroke="#d6d6d6" strokeWidth="2">
        <circle cx="282" cy="92" r="6" />
        <circle cx="304" cy="64" r="9" />
        <ellipse cx="336" cy="22" rx="34" ry="24" />
      </g>
      <text x="336" y="29" textAnchor="middle" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="20" fill={C.ink}>
        {'{ }'}
      </text>
    </g>
  )
}

function Trophy() {
  return (
    <g className="float">
      <Shadow />
      <Legs />
      <Torso />
      <Head mouth="open" look={[3, -3]} />
      <LeftArmDown />
      <Arm d="M250 240 Q294 214 300 152">
        <g>
          <path d="M276 78 Q262 78 264 92 Q266 104 280 104" stroke={C.goldDark} strokeWidth="5" fill="none" />
          <path d="M324 78 Q338 78 336 92 Q334 104 320 104" stroke={C.goldDark} strokeWidth="5" fill="none" />
          <path d="M276 72 L324 72 Q324 114 300 120 Q276 114 276 72 Z" fill={C.gold} />
          <rect x="295" y="118" width="10" height="14" fill={C.goldDark} />
          <rect x="284" y="130" width="32" height="9" rx="2" fill={C.goldDark} />
          <text x="300" y="100" textAnchor="middle" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="14" fill={C.goldDark}>
            1
          </text>
        </g>
      </Arm>
      <circle cx="300" cy="148" r="14" fill={C.skin} />
      <g className="sparkle" fill={C.gold}>
        <path d="M352 60 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 z" />
        <path className="s2" d="M250 44 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" />
      </g>
    </g>
  )
}

function CallMe() {
  return (
    <g className="float">
      <Shadow />
      <Legs />
      <Torso />
      <Head shades mouth="open" />
      <LeftArmDown />
      <g className="wiggle">
        <Arm d="M250 240 Q304 248 300 196" />
        {/* thumbs up: fist + thumb */}
        <rect x="294" y="146" width="13" height="30" rx="6.5" fill={C.skin} stroke={C.skinDark} strokeWidth="2" />
        <rect x="284" y="168" width="32" height="30" rx="11" fill={C.skin} stroke={C.skinDark} strokeWidth="2" />
        <path d="M288 178 H304 M288 187 H304" stroke={C.skinDark} strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>
  )
}

const POSES = { wave: Wave, desk: Desk, think: Think, trophy: Trophy, call: CallMe }

export default function Character({ pose = 'wave', className = '' }) {
  const Pose = POSES[pose] ?? Wave
  return (
    <svg className={`character ${className}`} viewBox="0 -20 400 520" role="presentation" focusable="false">
      <Pose />
    </svg>
  )
}

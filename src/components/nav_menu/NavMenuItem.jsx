import React from 'react';

const NavMenuItem = ({ icon, text, classNamer }) => {
  return (
    <div className={"NavMenu_item "+classNamer}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1530 3898 c-33 -17 -51 -35 -67 -68 -21 -41 -23 -58 -23 -217 l0
-173 -205 0 c-230 0 -280 -8 -356 -53 -81 -49 -107 -91 -193 -323 -119 -318
-96 -283 -212 -328 -188 -74 -241 -113 -286 -211 -22 -47 -23 -64 -26 -292
l-3 -243 -26 0 c-39 0 -91 -38 -114 -82 -18 -35 -20 -55 -17 -163 3 -142 13
-164 88 -203 41 -20 57 -22 220 -22 l175 0 17 -48 c98 -276 434 -356 649 -155
48 45 109 148 109 185 0 16 10 18 103 18 93 0 103 -2 115 -21 7 -11 32 -29 55
-40 39 -17 69 -19 377 -19 191 0 350 4 371 10 19 5 48 23 64 40 l29 30 584 0
584 0 30 30 c24 25 29 36 23 58 -16 66 22 62 -619 64 l-581 3 -3 83 -3 82 731
0 730 0 -24 -37 c-63 -97 -73 -257 -23 -365 72 -159 262 -262 423 -230 85 18
158 55 213 110 125 125 153 306 72 464 l-29 57 262 3 c289 3 302 6 348 70 l23
33 3 922 c3 1023 6 966 -64 1019 l-37 29 -1721 3 -1721 2 -45 -22z m3440
-1018 l0 -890 -1687 2 -1688 3 -5 467 c-5 423 -7 469 -22 484 -27 27 -77 22
-105 -10 l-23 -27 0 -460 0 -459 -565 0 -565 0 0 85 0 85 39 0 c50 0 99 18
111 40 16 30 12 64 -10 88 -17 18 -32 22 -82 22 l-61 0 5 75 c8 114 28 135
204 207 l139 57 255 0 c236 1 257 3 288 21 61 37 72 69 72 211 0 114 -2 129
-23 159 -42 64 -75 75 -235 78 -141 4 -143 4 -136 25 16 53 46 97 81 118 36
23 47 24 261 27 l222 3 0 -54 c0 -70 26 -107 76 -107 21 0 42 8 54 20 19 19
20 33 20 313 0 162 3 297 7 300 3 4 764 7 1690 7 l1683 0 0 -890z m-3850 5 l0
-85 -185 0 c-102 0 -185 2 -185 5 0 2 10 30 21 62 12 32 26 68 30 81 8 22 12
22 164 22 l155 0 0 -85z m-584 -1087 c-13 -24 -30 -62 -37 -85 l-12 -43 -169
0 -168 0 0 85 0 85 205 0 206 0 -25 -42z m470 7 c107 -67 145 -203 87 -315
-119 -232 -459 -150 -458 110 1 74 23 126 77 177 51 49 93 64 174 61 59 -3 79
-8 120 -33z m434 -50 l0 -85 -86 0 c-80 0 -86 1 -92 22 -3 13 -20 51 -37 85
l-32 63 124 0 123 0 0 -85z m800 -40 l0 -125 -322 2 -323 3 -3 123 -3 122 326
0 325 0 0 -125z m2018 109 c47 -19 98 -68 123 -116 96 -186 -82 -403 -281
-345 -215 63 -246 353 -48 451 61 31 147 35 206 10z"/>
<path d="M2609 3266 c-53 -27 -437 -346 -442 -367 -3 -11 -2 -31 3 -43 4 -13
105 -100 223 -194 185 -148 219 -172 249 -172 44 0 68 26 68 73 0 34 -6 41
-127 139 l-128 103 872 3 872 2 20 26 c27 35 26 57 -3 91 l-24 28 -863 5 -863
5 122 98 c118 94 122 99 122 136 0 59 -51 93 -101 67z"/>
<path d="M821 1644 c-24 -30 -26 -43 -10 -78 33 -72 139 -45 139 36 0 64 -89
92 -129 42z"/>
<path d="M4110 1648 c-53 -57 8 -148 81 -118 25 11 49 46 49 74 0 7 -9 25 -21
40 -27 34 -79 36 -109 4z"/>
</g>
</svg>

      <p>{text}</p>
    </div>
  );
}

export default NavMenuItem;
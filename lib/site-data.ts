export const audiences = [
  {
    label: "01 · Founders",
    title: "Build with clearer direction.",
    description:
      "Get practical feedback on your pitch, market, and next steps from a team of McMaster students.",
    points: [
      "Pitch deck and investor material feedback",
      "Market positioning and growth strategy",
      "Connections to talent, operators, and investors",
    ],
    cta: "Work with us",
    href: "/#contact",
  },
  {
    label: "02 · Students",
    title: "Turn interest into experience.",
    description:
      "Gain practical exposure to venture capital, startups, and the people building them.",
    points: [
      "Hands-on startup and investment experience",
      "Access to founders, investors, and industry events",
      "Practical research and investing skills",
    ],
    cta: "Join the community",
    href: "https://linktr.ee/macventurecapital",
  },
  {
    label: "03 · Partners",
    title: "Meet McMaster's venture talent.",
    description:
      "Connect with promising founders and ambitious students across the McMaster ecosystem.",
    points: [
      "Early access to emerging startups",
      "Events, workshops, and networking",
      "A direct connection to students interested in venture",
    ],
    cta: "Partner with MVCC",
    href: "/#contact",
  },
] as const;

export const founders = [
  {
    name: "Diya Shah",
    role: "Co-Founder",
    image:
      "https://static.wixstatic.com/media/7505c5_44f084e099c1428fa41da0ba4c3033c1~mv2.jpeg/v1/fill/w_388,h_311,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/diya.jpeg",
    position: "center 34%",
    bio: "Diya is a third-year Political Science student at McMaster University minoring in Business with a passion for venture capital, startups, and community building. Outside of co-founding MVCC, she's apart of Front Row Ventures and the Toronto Tech Week team, where she works to connect more students with Canada's startup ecosystem. She loves meeting people, hearing the stories behind what they're building, and making introductions that lead to new ideas, opportunities, and collaborations.",
  },
  {
    name: "Benicio Uhart",
    role: "Co-Founder",
    image:
      "https://static.wixstatic.com/media/7505c5_a43d9c4c71464d2a8d122390ac6a1ec7~mv2.jpg/v1/fill/w_388,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ben_edited%20(1)_edited.jpg",
    position: "center 25%",
    bio: "Benicio is a third-year Statistics student at McMaster. He's worked in data and ai automation at Finni Health (YC W23), and risk modelling at at Kensa Logistics. He co-founded MVCC because he believes McMaster should be a name people know in VC. He built the club to get it there.",
  },
  {
    name: "Veer Sarin",
    role: "Co-Founder",
    image:
      "https://static.wixstatic.com/media/7505c5_3f1b3b57af27449982cb3d3ffd3f0f2f~mv2.png/v1/fill/w_388,h_311,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Veer%20upscaled_edited.png",
    position: "center 30%",
    bio: "Veer Sarin is a co-founder of MVCC, where he led external relations and partnerships - forming ties with mega-funds, high-growth startups, and alumni that helped grow the club to over 850 members. He serves a venture scount for a number of firms across North America, sat on the investment committee for the McMaster Student Seed Fund, and interned at an M&&A advisory firm. Veer has since transferred to Ivey's HBA program, where he continues to advise MVCC while serving as Founding GTM for Visceral AI, an early-stage AI inference optimization startup.",
  },
] as const;

export const executiveTeam = [
  {
    name: "Nathan Fanti",
    role: "Chief of Staff",
    image:
      "https://static.wixstatic.com/media/7505c5_e72fd2ef4a4a4284a53846d6b01b9345~mv2.jpg/v1/fill/w_386,h_417,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/wix%20portfolio%20image_edited_edited.jpg",
    position: "center 22%",
  },
  {
    name: "Joshua Michell",
    role: "Operations Lead",
    image:
      "https://static.wixstatic.com/media/7505c5_1ce17787984f489aa73e682fbe07277d~mv2.jpg/v1/fill/w_386,h_417,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Josh.jpg",
    position: "center 24%",
  },
  {
    name: "Daniel Watmough",
    role: "Lead Analyst",
    image:
      "https://static.wixstatic.com/media/7505c5_2532c2a0bb214329997e3748d3bcd495~mv2.jpg/v1/fill/w_386,h_417,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Daniel.jpg",
    position: "center 22%",
  },
  {
    name: "Aneek Mukherjee",
    role: "Community Lead",
    image:
      "https://static.wixstatic.com/media/7505c5_1d23e5d0c6dd4280a0df46a3ebdc50c2~mv2.png/v1/crop/x_567,y_196,w_3166,h_3419/fill/w_386,h_417,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20260527-A7401998.png",
    position: "center 20%",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Operational support",
    description:
      "Research that helps founders make clearer decisions and move projects forward.",
    points: ["Market and competitor research", "Operations and process review", "Clear summaries and recommendations"],
  },
  {
    number: "02",
    title: "Go-to-market strategy",
    description:
      "Research on customers, competitors, and channels to help founders decide where to focus.",
    points: ["Customer and segment mapping", "Positioning and messaging", "Sales and growth channel research"],
  },
  {
    number: "03",
    title: "Talent acquisition",
    description:
      "Help defining early hiring needs and connecting with students across McMaster.",
    points: ["Role and skill requirements", "Connections to McMaster students", "Introductions across campus"],
  },
] as const;

export const partners = [
  { name: "Front Row Ventures", slug: "front-row-ventures" },
  { name: "Golden Ventures", slug: "golden-ventures" },
  { name: "LVLUP Ventures", slug: "lvlup-ventures" },
  { name: "Boardy Ventures", slug: "boardy-ventures" },
  { name: "Althra", slug: "althra" },
  { name: "GoAhead Ventures", slug: "goahead-ventures" },
] as const;

export const mcmasterShield =
  "https://static.wixstatic.com/media/7505c5_40aa724d17b74d86b509679fe5f952b0~mv2.png/v1/fill/w_135,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McMaster%20Shield.png";

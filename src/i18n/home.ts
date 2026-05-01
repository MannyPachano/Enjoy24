export type MenuRow = { name: string; desc: string; price: string };

export interface HomeCopy {
  nav: {
    offerings: string;
    place: string;
    menu: string;
    visit: string;
    cta: string;
    langLabel: string;
    langHref: string;
    langHrefLang: string;
    langAria: string;
  };
  hero: {
    marquee: string[];
    eyebrow: string;
    title1: string;
    title2Before: string;
    title2Accent: string;
    subHtml: string;
    ctaPrimary: string;
    ctaGhost: string;
    badgeOpen: string;
    badgeEvery: string;
    imgMainAlt: string;
    imgSmallAlt: string;
  };
  stats: { num: string; label: string }[];
  offerings: {
    eyebrow: string;
    titleHtml: string;
    lede: string;
    cards: { title: string; desc: string }[];
  };
  place: {
    eyebrow: string;
    titleHtml: string;
    ledeHtml: string;
    alts: [string, string, string, string, string];
  };
  menu: {
    eyebrow: string;
    titleHtml: string;
    lede: string;
    coffeeTitle: string;
    coffeeTag: string;
    barTitle: string;
    barTag: string;
    coffeeRows: MenuRow[];
    barRows: MenuRow[];
    note: string;
  };
  reviews: {
    eyebrow: string;
    titleHtml: string;
    items: { quote: string; name: string; meta: string; avatar: string }[];
  };
  visit: {
    eyebrow: string;
    titleHtml: string;
    lede: string;
    labels: { address: string; hours: string; phone: string; parking: string; vibes: string };
    addressLines: string[];
    hours: string;
    phoneHref: string;
    phoneDisplay: string;
    parking: string;
    vibes: string;
    mapTitle: string;
  };
  footer: {
    privacy: string;
    terms: string;
    suffix: string;
    disclaimer: string;
  };
}

export const homeCopy: Record<SiteLocale, HomeCopy> = {
  en: {
    nav: {
      offerings: 'What We Do',
      place: 'The Place',
      menu: 'Menu',
      visit: 'Visit',
      cta: 'Chat With Us',
      langLabel: 'ไทย',
      langHref: '/th/',
      langHrefLang: 'th',
      langAria: 'Switch to Thai',
    },
    hero: {
      marquee: [
        'Premium Cannabis',
        'Open 24 Hours',
        'PlayStation 5',
        'Fresh Coffee',
        'Cold Drinks',
        'Rawai Phuket',
      ],
      eyebrow: 'Open Right Now · Always Open',
      title1: 'Cannabis.',
      title2Before: 'Coffee. ',
      title2Accent: '24h.',
      subHtml:
        'A late-night kind of place in <strong>Rawai, Phuket</strong>. Premium ganja, fresh espresso, cold drinks, and a <strong>PlayStation 5</strong> ready whenever you are. Whether it\'s 2 PM or 2 AM, we\'re up.',
      ctaPrimary: 'Get Directions →',
      ctaGhost: 'See the Menu',
      badgeOpen: 'OPEN',
      badgeEvery: 'EVERY · DAY',
      imgMainAlt: 'Enjoy 24 storefront at night with neon green leaf signage',
      imgSmallAlt: 'Inside the cannabis bar with stocked shelves and bar seating',
    },
    stats: [
      { num: '24/7', label: 'Always Open' },
      { num: '5.0', label: 'Google Rating' },
      { num: 'PS5', label: 'Free to Play' },
      { num: '฿200+', label: 'Avg Spend' },
    ],
    offerings: {
      eyebrow: 'What we do',
      titleHtml: 'Four reasons<br/>to <span class="accent">come in.</span>',
      lede:
        "We're a cannabis shop first — but we figured if you're going to hang out, you might as well have something to drink, something to play, and somewhere good to sit.",
      cards: [
        {
          title: 'Cannabis',
          desc: 'Premium flower, hand-picked strains, and everything you need — papers, tips, grinders, glassware. Staff who know their stuff and take time to explain.',
        },
        {
          title: 'Coffee',
          desc: "Espresso, americano, latte, cappuccino, macchiato. Iced or hot. Decaf if you'd rather sleep. Honestly amazing — that's not us, that's the reviews.",
        },
        {
          title: 'PlayStation',
          desc: "PS5 set up and ready. Bring a friend, pick a game, settle in. The bean bags out front are also fair game if you'd rather just chill.",
        },
        {
          title: '24 Hours',
          desc: "No closing time. Whether the night caught you sideways or the morning came too fast, we're already open. Walk in whenever.",
        },
      ],
    },
    place: {
      eyebrow: 'The Place',
      titleHtml: 'Cozy<br/><span class="accent">around the clock.</span>',
      ledeHtml:
        'Astroturf and bean bags out front. Wood-slat walls and a long bar inside. Soft pendant lights, a graffiti wall, fresh flowers on every table. Built to be a <strong style="color:var(--ink)">good place to be</strong>, not just a transaction.',
      alts: [
        'The interior bar with bar stools, glassware shelves, and warm lighting',
        'Pink bean bag chair on outdoor astroturf with graffiti wall',
        'Wooden bar counter with leather bar stools by tinted windows',
        'Inside view through sliding doors out to the street with neon signs',
        'Outdoor seating with blue and yellow bean bags facing the street',
      ],
    },
    menu: {
      eyebrow: 'A taste of the menu',
      titleHtml: 'Coffee <span class="accent">+</span> the<br/>good stuff.',
      lede:
        "A few of the things we pour and roll. The full menu sits at the bar — and we're happy to talk you through any of it.",
      coffeeTitle: 'Coffee Bar',
      coffeeTag: 'Hot · Iced · Decaf',
      barTitle: 'The Bar',
      barTag: 'Cannabis · Drinks',
      coffeeRows: [
        { name: 'Espresso', desc: 'Single shot, double on request', price: '฿60' },
        { name: 'Americano', desc: 'Hot or iced', price: '฿70' },
        { name: 'Cappuccino', desc: 'Steamed milk, fine foam', price: '฿80' },
        { name: 'Latte', desc: 'Hot or iced, vanilla optional', price: '฿90' },
        { name: 'Macchiato', desc: 'Espresso marked with milk', price: '฿80' },
        { name: 'Tea', desc: 'Hot or iced, ask for varieties', price: '฿60' },
      ],
      barRows: [
        { name: 'Premium Flower', desc: 'Rotating selection, ask the staff', price: 'market' },
        { name: 'Pre-rolls', desc: 'Made fresh, choose your strain', price: '฿200+' },
        { name: 'Papers · Tips · Filters', desc: 'RAW, JV, and others', price: '฿70+' },
        { name: 'Grinders', desc: 'Multiple sizes & colors', price: '฿150+' },
        { name: 'Glassware', desc: 'Bongs, pipes, accessories', price: '฿400+' },
        { name: 'Cold Beer & Drinks', desc: 'From the fridge, ice cold', price: '฿80+' },
      ],
      note: 'Prices are indicative and may change. Cannabis sales for adults 20+ only.',
    },
    reviews: {
      eyebrow: '5.0 on Google',
      titleHtml: 'What people<br/><span class="accent">say about us.</span>',
      items: [
        {
          quote:
            '"This place is next level! A cannabis shop, coffee spot, and PlayStation lounge all in one. The staff really know their products and take time to explain different strains. The coffee is honestly amazing — rich, smooth, and perfect whether it\'s early morning or late night."',
          name: 'Saagar B.',
          meta: 'Google Review',
          avatar: 'S',
        },
        {
          quote:
            '"Great place to hang out and chill. PS5, good selections, awesome staff and open 24 hours. I\'ll be back for sure."',
          name: 'Manny P.',
          meta: 'Local Guide · Google',
          avatar: 'M',
        },
        {
          quote:
            '"Good vibes and quality weed. No wait, plenty of free parking. Atmosphere is clean, comfortable, and relaxed — easily the go-to spot whether it\'s 2 PM or 2 AM."',
          name: 'Naylwin S.',
          meta: 'Google Review',
          avatar: 'N',
        },
      ],
    },
    visit: {
      eyebrow: 'Find us',
      titleHtml: 'Come <span class="accent">through.</span>',
      lede: 'In Rawai, just off the main road. Free parking out front, 7-Eleven next door if you need anything else.',
      labels: {
        address: 'Address',
        hours: 'Hours',
        phone: 'Phone',
        parking: 'Parking',
        vibes: 'Vibes',
      },
      addressLines: ['Q8R9+H3V, Rawai', 'Mueang Phuket District', 'Phuket 83100, Thailand'],
      hours: 'Open 24 hours · Every day',
      phoneHref: 'https://wa.me/66993594534',
      phoneDisplay: '099 359 4534',
      parking: 'Plenty · Free of charge',
      vibes: 'Outdoor terrace · Bean-bag patio · Counter seating · Solo, pairs, or groups',
      mapTitle: 'Enjoy 24 location map',
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      suffix: 'Rawai · Phuket · ',
      disclaimer:
        'You must be 20 years or older to purchase cannabis products. Please consume responsibly. Not for sale to minors. Cannabis products are not intended to diagnose, treat, cure, or prevent any disease.',
    },
  },
  th: {
    nav: {
      offerings: 'บริการ',
      place: 'บรรยากาศ',
      menu: 'เมนู',
      visit: 'ที่ตั้ง',
      cta: 'คุยกับเรา',
      langLabel: 'EN',
      langHref: '/',
      langHrefLang: 'en',
      langAria: 'Switch to English',
    },
    hero: {
      marquee: ['กัญชาคุณภาพ', 'เปิด 24 ชั่วโมง', 'PlayStation 5', 'กาแฟสด', 'เครื่องดื่มเย็น', 'ราไวย์ ภูเก็ต'],
      eyebrow: 'เปิดอยู่ตอนนี้ · เปิด 24 ชม.',
      title1: 'กัญชา.',
      title2Before: 'กาแฟ. ',
      title2Accent: '24 ชม.',
      subHtml:
        'ที่นั่งชิลตอนดึก ที่ <strong>ราไวย์ ภูเก็ต</strong> กัญชาคุณภาพ กาแฟสดร้อน ๆ เครื่องดื่มเย็น ๆ และ <strong>PlayStation 5</strong> พร้อมเล่น ไม่ว่าจะบ่ายสองหรือตีสอง เราเปิดให้เสมอ',
      ctaPrimary: 'ดูแผนที่ →',
      ctaGhost: 'ดูเมนู',
      badgeOpen: 'เปิด',
      badgeEvery: 'ทุก · วัน',
      imgMainAlt: 'ร้าน Enjoy 24h ตอนกลางคืน พร้อมป้ายไฟกัญชาสีเขียว',
      imgSmallAlt: 'ภายในร้านกัญชาบาร์ มีชั้นวางสินค้าและที่นั่งบาร์',
    },
    stats: [
      { num: '24/7', label: 'เปิดตลอด' },
      { num: '5.0', label: 'รีวิว Google' },
      { num: 'PS5', label: 'เล่นฟรี' },
      { num: '฿200+', label: 'เริ่มต้น' },
    ],
    offerings: {
      eyebrow: 'บริการของเรา',
      titleHtml: '4 เหตุผล<br/>ที่ต้อง<span class="accent">แวะมา</span>',
      lede:
        'เราเป็นร้านกัญชาก่อน — แต่คิดว่าถ้ามาแล้วก็ควรมีอะไรให้ดื่ม มีเกมให้เล่น และมีที่นั่งสบาย ๆ ให้นั่งชิล',
      cards: [
        {
          title: 'กัญชา',
          desc: 'ดอกคุณภาพคัดสรรเป็นอย่างดี พร้อมอุปกรณ์ครบ — กระดาษ ทิปส์ เครื่องบด แก้วบ้อง ทีมงานรู้เรื่องดี อธิบายแต่ละสายพันธุ์ได้ละเอียด',
        },
        {
          title: 'กาแฟ',
          desc: 'เอสเปรสโซ อเมริกาโน ลาเต้ คาปูชิโน มัคคิอาโต ร้อนหรือเย็นก็ได้ ดีแคฟก็มี ลูกค้ารีวิวเองว่าอร่อยจริง',
        },
        {
          title: 'PlayStation',
          desc: 'PS5 พร้อมเล่น ชวนเพื่อนมาด้วย เลือกเกม นั่งสบาย ๆ ถ้าไม่อยากเล่นเกมก็มีบีนแบ็กข้างนอกให้นั่งเอกเขนก',
        },
        {
          title: '24 ชั่วโมง',
          desc: 'ไม่มีเวลาปิด ไม่ว่าจะดึกแค่ไหน หรือเช้าแค่ไหน เราเปิดอยู่แล้ว เดินเข้ามาได้เลย',
        },
      ],
    },
    place: {
      eyebrow: 'บรรยากาศ',
      titleHtml: 'ชิล<br/><span class="accent">ตลอด 24 ชม.</span>',
      ledeHtml:
        'หญ้าเทียมและบีนแบ็กด้านนอก ผนังไม้ระแนงและบาร์ยาวด้านใน ไฟแขวนนวล ๆ ผนังกราฟฟิตี้ และดอกไม้สดบนทุกโต๊ะ ตั้งใจให้เป็น<strong style="color:var(--ink)">ที่ที่อยู่แล้วสบายใจ</strong> ไม่ใช่แค่ร้านขายของ',
      alts: [
        'ภายในบาร์ มีเก้าอี้บาร์ ชั้นวางแก้วบ้อง และไฟอุ่น',
        'บีนแบ็กสีชมพูบนหญ้าเทียม พื้นหลังกำแพงกราฟฟิตี้',
        'เคาน์เตอร์บาร์ไม้พร้อมเก้าอี้บาร์หนัง ใกล้กระจกสีชา',
        'มองออกจากในร้านผ่านประตูเลื่อนเห็นถนนและป้ายไฟ',
        'ที่นั่งภายนอกพร้อมบีนแบ็กสีฟ้าและสีเหลืองหันออกถนน',
      ],
    },
    menu: {
      eyebrow: 'เมนูบางส่วน',
      titleHtml: 'กาแฟ <span class="accent">+</span><br/>ของดี ๆ',
      lede: 'แค่บางส่วนที่เรามี เมนูเต็มอยู่ที่บาร์ — เดินเข้ามาดู เราอธิบายทุกอย่างให้ฟังได้',
      coffeeTitle: 'เมนูกาแฟ',
      coffeeTag: 'ร้อน · เย็น · ดีแคฟ',
      barTitle: 'เมนูบาร์',
      barTag: 'กัญชา · เครื่องดื่ม',
      coffeeRows: [
        { name: 'เอสเปรสโซ', desc: 'ช็อตเดียว สั่งดับเบิลได้', price: '฿60' },
        { name: 'อเมริกาโน', desc: 'ร้อนหรือเย็น', price: '฿70' },
        { name: 'คาปูชิโน', desc: 'นมร้อน ฟองนมละเอียด', price: '฿80' },
        { name: 'ลาเต้', desc: 'ร้อนหรือเย็น เพิ่มวานิลลาได้', price: '฿90' },
        { name: 'มัคคิอาโต', desc: 'เอสเปรสโซแต่งด้วยนม', price: '฿80' },
        { name: 'ชา', desc: 'ร้อนหรือเย็น มีหลายชนิด', price: '฿60' },
      ],
      barRows: [
        { name: 'ดอกพรีเมียม', desc: 'หมุนเวียนสายพันธุ์ ถามทีมงานได้', price: 'ตามวัน' },
        { name: 'มวนสำเร็จ', desc: 'มวนใหม่สด เลือกสายพันธุ์ได้', price: '฿200+' },
        { name: 'กระดาษ · ทิปส์ · ฟิลเตอร์', desc: 'RAW, JV และอื่น ๆ', price: '฿70+' },
        { name: 'เครื่องบด', desc: 'หลายขนาด หลายสี', price: '฿150+' },
        { name: 'แก้วบ้อง · ไปป์', desc: 'บ้อง ไปป์ และอุปกรณ์', price: '฿400+' },
        { name: 'เบียร์ · เครื่องดื่มเย็น', desc: 'แช่เย็นจัด พร้อมเสิร์ฟ', price: '฿80+' },
      ],
      note: 'ราคาเป็นราคาประมาณ อาจมีการเปลี่ยนแปลง · จำหน่ายกัญชาเฉพาะอายุ 20 ปีขึ้นไป',
    },
    reviews: {
      eyebrow: '5.0 บน Google',
      titleHtml: 'ลูกค้า<br/><span class="accent">บอกอะไรเรา</span>',
      items: [
        {
          quote:
            '"ที่นี่เจ๋งมาก! ร้านกัญชา ร้านกาแฟ และที่เล่น PlayStation อยู่ในที่เดียว ทีมงานรู้เรื่องสินค้าจริง ๆ อธิบายสายพันธุ์ต่าง ๆ ได้ดี กาแฟอร่อยมาก หอมกลมกล่อม ดื่มได้ทั้งเช้าทั้งดึก"',
          name: 'Saagar B.',
          meta: 'รีวิว Google',
          avatar: 'S',
        },
        {
          quote:
            '"ที่ดีสำหรับมาชิล มี PS5 ของก็คัดมาดี พนักงานเฟรนด์ลี่ เปิด 24 ชั่วโมงด้วย จะกลับมาแน่นอน"',
          name: 'Manny P.',
          meta: 'Local Guide · Google',
          avatar: 'M',
        },
        {
          quote:
            '"ฟีลดี กัญชาคุณภาพ ไม่ต้องรอคิว ที่จอดรถเยอะ ฟรี บรรยากาศสะอาด สบาย ผ่อนคลาย ไม่ว่าจะบ่ายสองหรือตีสองก็ที่นี่แหละ"',
          name: 'Naylwin S.',
          meta: 'รีวิว Google',
          avatar: 'N',
        },
      ],
    },
    visit: {
      eyebrow: 'ที่ตั้ง',
      titleHtml: 'แวะ<span class="accent">มาหาเราสิ</span>',
      lede: 'อยู่ราไวย์ ติดถนนหลัก ที่จอดรถฟรีหน้าร้าน 7-Eleven อยู่ติดกันเลย ถ้าต้องซื้ออะไรเพิ่ม',
      labels: {
        address: 'ที่อยู่',
        hours: 'เวลาเปิด',
        phone: 'โทร',
        parking: 'ที่จอดรถ',
        vibes: 'บรรยากาศ',
      },
      addressLines: ['Q8R9+H3V ตำบลราไวย์', 'อำเภอเมืองภูเก็ต', 'จังหวัดภูเก็ต 83100'],
      hours: 'เปิด 24 ชั่วโมง · ทุกวัน',
      phoneHref: 'https://wa.me/66993594534',
      phoneDisplay: '099 359 4534',
      parking: 'มีเยอะ · ฟรี',
      vibes: 'มีระเบียงนอก · บีนแบ็ก · ที่นั่งบาร์ · มาคนเดียว มาคู่ หรือมาเป็นกลุ่ม',
      mapTitle: 'แผนที่ Enjoy 24h',
    },
    footer: {
      privacy: 'ความเป็นส่วนตัว',
      terms: 'ข้อกำหนด',
      suffix: 'ราไวย์ · ภูเก็ต · ',
      disclaimer:
        'ต้องอายุ 20 ปีขึ้นไปจึงจะซื้อกัญชาได้ กรุณาบริโภคอย่างมีความรับผิดชอบ ห้ามจำหน่ายให้ผู้เยาว์ ผลิตภัณฑ์กัญชาไม่ได้มีไว้เพื่อวินิจฉัย รักษา หรือป้องกันโรคใด ๆ',
    },
  },
};

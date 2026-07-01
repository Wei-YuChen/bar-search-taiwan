export type Bar = {
  id: number;
  name: string;
  englishName: string;
  city: "台北" | "台中" | "高雄";
  area: string;
  type: string;
  moods: string[];
  price: number;
  rating: number;
  reviews: number;
  noise: "安靜" | "適中" | "熱鬧";
  distance: string;
  openUntil: string;
  description: string;
  signature: string;
  tags: string[];
  gradient: string;
  emoji: string;
  featured?: boolean;
};

export const bars: Bar[] = [
  { id: 1, name: "霧島製造所", englishName: "KIRISHIMA LAB", city: "台北", area: "大安區", type: "創意調酒", moods: ["約會", "朋友聊天"], price: 850, rating: 4.8, reviews: 326, noise: "安靜", distance: "捷運忠孝敦化 4 分鐘", openUntil: "02:00", description: "以台灣茶與島嶼香氣為靈感，座位疏朗，適合把一杯酒慢慢喝完。", signature: "焙茶・烏梅・琴酒", tags: ["茶調酒", "新手友善", "可訂位"], gradient: "linear-gradient(145deg,#7a5033,#1d1612)", emoji: "霧", featured: true },
  { id: 2, name: "小島公寓", englishName: "ISLAND FLAT", city: "台北", area: "中山區", type: "餐酒館", moods: ["約會", "慶生"], price: 1200, rating: 4.7, reviews: 591, noise: "適中", distance: "捷運中山 6 分鐘", openUntil: "01:00", description: "像走進朋友家裡的客廳，有完整餐點與溫柔燈光，第一次約會也不尷尬。", signature: "鳳梨・紫蘇・蘭姆酒", tags: ["有餐點", "多人友善", "可訂位"], gradient: "linear-gradient(145deg,#755c43,#20201d)", emoji: "島" },
  { id: 3, name: "無題酒室", englishName: "UNTITLED", city: "台北", area: "信義區", type: "威士忌", moods: ["獨飲", "朋友聊天"], price: 1400, rating: 4.9, reviews: 188, noise: "安靜", distance: "捷運市政府 8 分鐘", openUntil: "02:00", description: "沒有酒單，讓 bartender 從你今天的心情開始，做出只屬於今晚的一杯。", signature: "Bartender's choice", tags: ["無酒單", "威士忌", "獨飲友善"], gradient: "linear-gradient(145deg,#583c28,#0e0f12)", emoji: "無", featured: true },
  { id: 4, name: "月台精釀", englishName: "PLATFORM TAPROOM", city: "台北", area: "萬華區", type: "精釀啤酒", moods: ["朋友聊天", "慶生"], price: 600, rating: 4.6, reviews: 842, noise: "熱鬧", distance: "捷運西門 3 分鐘", openUntil: "01:30", description: "二十款台灣精釀輪替上 tap，氣氛自在，臨時揪團也能痛快碰杯。", signature: "台灣水果酸啤", tags: ["精釀", "平價", "多人友善"], gradient: "linear-gradient(145deg,#926b25,#252015)", emoji: "月" },
  { id: 5, name: "山眠", englishName: "MOUNTAIN DREAM", city: "台中", area: "西區", type: "創意調酒", moods: ["約會", "獨飲"], price: 800, rating: 4.8, reviews: 274, noise: "安靜", distance: "勤美誠品 5 分鐘", openUntil: "02:00", description: "水泥與木質構成的隱密空間，把台灣山林的氣味裝進杯裡。", signature: "刺蔥・梨・高粱", tags: ["在地風味", "獨飲友善", "隱藏酒吧"], gradient: "linear-gradient(145deg,#455846,#121714)", emoji: "山", featured: true },
  { id: 6, name: "綠川俱樂部", englishName: "GREEN RIVER CLUB", city: "台中", area: "中區", type: "經典調酒", moods: ["朋友聊天", "約會"], price: 750, rating: 4.7, reviews: 412, noise: "適中", distance: "台中車站 9 分鐘", openUntil: "02:00", description: "老城區裡的復古酒館，經典調酒穩定俐落，像一部節奏剛好的老電影。", signature: "Old Fashioned", tags: ["經典調酒", "復古", "可訂位"], gradient: "linear-gradient(145deg,#53634a,#161a15)", emoji: "川" },
  { id: 7, name: "浮光", englishName: "AFTERGLOW", city: "台中", area: "南屯區", type: "餐酒館", moods: ["慶生", "朋友聊天"], price: 1000, rating: 4.5, reviews: 733, noise: "熱鬧", distance: "文心森林公園 7 分鐘", openUntil: "01:00", description: "開放式廚房與長桌很有能量，適合多人分享餐點、一路聊到深夜。", signature: "百香果・辣椒・龍舌蘭", tags: ["有餐點", "包場", "多人友善"], gradient: "linear-gradient(145deg,#a25b38,#251815)", emoji: "光" },
  { id: 8, name: "鹽埕浪人", englishName: "YANCHENG RONIN", city: "高雄", area: "鹽埕區", type: "創意調酒", moods: ["獨飲", "朋友聊天"], price: 700, rating: 4.9, reviews: 367, noise: "適中", distance: "捷運鹽埕埔 4 分鐘", openUntil: "02:30", description: "港都老屋裡的率性小店，熟客與旅人很容易在吧台成為一晚朋友。", signature: "芭樂・梅粉・琴酒", tags: ["港都風味", "獨飲友善", "深夜"], gradient: "linear-gradient(145deg,#356a70,#111b1d)", emoji: "浪", featured: true },
  { id: 9, name: "港邊未眠", englishName: "HARBOR AWAKE", city: "高雄", area: "鼓山區", type: "景觀酒吧", moods: ["約會", "慶生"], price: 1500, rating: 4.7, reviews: 927, noise: "適中", distance: "輕軌駁二蓬萊 6 分鐘", openUntil: "01:00", description: "面向港灣的露台座位，日落到夜景都有戲，值得為重要的晚上預約。", signature: "海鹽・葡萄柚・伏特加", tags: ["港景", "露台", "可訂位"], gradient: "linear-gradient(145deg,#375276,#111722)", emoji: "港" },
  { id: 10, name: "南方啤酒研究所", englishName: "SOUTH LAB", city: "高雄", area: "苓雅區", type: "精釀啤酒", moods: ["朋友聊天", "慶生"], price: 550, rating: 4.6, reviews: 648, noise: "熱鬧", distance: "捷運三多商圈 5 分鐘", openUntil: "01:30", description: "南台灣小農水果精釀是主角，價格輕鬆，店員也樂於帶新手試飲。", signature: "大樹鳳梨小麥啤酒", tags: ["精釀", "試飲", "平價"], gradient: "linear-gradient(145deg,#8b6f31,#211c12)", emoji: "南" },
  { id: 11, name: "零度之間", englishName: "BETWEEN ZERO", city: "台北", area: "松山區", type: "無酒精", moods: ["約會", "朋友聊天"], price: 500, rating: 4.7, reviews: 156, noise: "安靜", distance: "捷運南京復興 5 分鐘", openUntil: "00:00", description: "專注無酒精 pairings，香氣與層次一樣認真，明天早起也能擁有今晚。", signature: "白桃・茉莉・氣泡茶", tags: ["無酒精", "新手友善", "早場"], gradient: "linear-gradient(145deg,#6c7770,#18201c)", emoji: "零" },
  { id: 12, name: "午夜唱片行", englishName: "MIDNIGHT RECORDS", city: "台中", area: "北區", type: "音樂酒吧", moods: ["獨飲", "朋友聊天"], price: 650, rating: 4.8, reviews: 219, noise: "適中", distance: "一中商圈 8 分鐘", openUntil: "03:00", description: "黑膠唱片與調酒輪流主場，週末 DJ set 熱鬧但不喧嘩。", signature: "咖啡・黑糖・蘭姆酒", tags: ["黑膠", "深夜", "獨飲友善"], gradient: "linear-gradient(145deg,#74465a,#171116)", emoji: "夜" },
];

export const cities = ["全部", "台北", "台中", "高雄"];
export const moods = ["全部", "約會", "朋友聊天", "獨飲", "慶生"];
export const types = ["全部", "創意調酒", "經典調酒", "餐酒館", "威士忌", "精釀啤酒", "景觀酒吧", "無酒精", "音樂酒吧"];

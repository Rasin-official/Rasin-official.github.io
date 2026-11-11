/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to make the site yours!
 *  Names, roles, links, hobbies... everything lives here.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "رسول خواجه میرزایی",
  firstName: "رسول",
  initials: "R",
  role: "طراح رابط کاربری و تولیدکنندهٔ محتوا",
  tagline: "ایده‌ها را به رابط‌های کاربردی و محتوای روشن و اثرگذار تبدیل می‌کنم.",
  currentWork: "این روزها در واحد KTE دانشگاه علوم پزشکی گلستان فعالیت می‌کنم و در کنار آن، پروژه‌های دورکاری می‌پذیرم.",
  location: "ایران، گلستان، گرگان",
  locationJoke: "دفتر مرکزی: زمین، کهکشان راه شیری",
  locationReal: "شوخی کردم؛ فعلاً ایران، گلستان، گرگان",
  email: "Thinkaze.work@gmail.com",
  portfolioUrl: "https://mega.nz/folder/UwoCjTiB#uPbEbCcZhgnOgk0qhq4I9Q",
  availability: "آمادهٔ همکاری در پروژه‌های تازه",
  avatar: "/images/avatar.png",
};

export const services = [
  {
    title: "طراحی رابط کاربری",
    description: "طراحی رابط سایت، اپلیکیشن، پنل کاربری و صفحهٔ فرود (لندینگ)؛ با تمرکز بر وضوح و استفادهٔ آسان.",
    tile: "bg-yellow",
  },
  {
    title: "تولید محتوا",
    description: "تولید پادکست، اینفوگرافیک، بنر و خلاصهٔ پژوهشی؛ برای انتقال ساده و دقیق پیام به مخاطب.",
    tile: "bg-pink",
  },
  {
    title: "تولید بصری با هوش مصنوعی",
    description: "ساخت موشن‌گرافیک، تصویر و ویدیو با کمک هوش مصنوعی؛ متناسب با ایده و هدف پروژه.",
    tile: "bg-blue",
  },
];

/* ------------------------------ TOOLS ------------------------------ */

export type ToolId =
  | "figma"
  | "framer"
  | "chatgpt"
  | "claude"
  | "gemini"
  | "github"
  | "capcut"
  | "photoshop"
  | "premiere";

export interface Tool {
  id: ToolId;
  name: string;
  blurb: string;
  tile: string; // tailwind bg class for the icon tile
  rot: string; // resting rotation for playfulness
}

export const tools: Tool[] = [
  { id: "figma", name: "Figma", blurb: "طراحی رابط و ساخت نمونه‌های تعاملی", tile: "bg-pink", rot: "-2deg" },
  { id: "chatgpt", name: "ChatGPT", blurb: "ایده‌پردازی، پیش‌نویس محتوا و کمک به حل مسئله", tile: "bg-green", rot: "1.5deg" },
  { id: "claude", name: "Claude", blurb: "تحلیل متن، خلاصه‌سازی و بازنویسی محتوا", tile: "bg-paper", rot: "-1.5deg" },
  { id: "framer", name: "Framer", blurb: "ساخت و انتشار سایت و لندینگ", tile: "bg-blue", rot: "2deg" },
  { id: "github", name: "GitHub", blurb: "نگهداری پروژه‌ها و مدیریت تغییرات", tile: "bg-yellow", rot: "-2deg" },
  { id: "gemini", name: "Gemini", blurb: "بررسی و جمع‌بندی اطلاعات و ایده‌پردازی", tile: "bg-pink", rot: "1.5deg" },
  { id: "capcut", name: "CapCut", blurb: "تدوین سریع ویدیو و افزودن زیرنویس", tile: "bg-green", rot: "-1deg" },
  { id: "photoshop", name: "Photoshop", blurb: "ویرایش تصویر و طراحی بنر و محتوای بصری", tile: "bg-blue", rot: "2deg" },
  { id: "premiere", name: "Premiere", blurb: "تدوین ویدیو و تنظیم صدا و تصویر", tile: "bg-orange", rot: "-1.5deg" },
];

/* ---------------------------- EXPERIENCE ---------------------------- */

export interface Job {
  company: string;
  role: string;
  period: string;
  blurb: string;
  tags: string[];
  tile: string;
  rot: string;
}

export const jobs: Job[] = [
  {
    company: "دانشگاه علوم پزشکی گلستان · واحد KTE",
    role: "کارشناس ترجمان دانش",
    period: "شهریور ۱۴۰۵ تا امروز",
    blurb:
      "تولید محصولات و محتوای متناسب با پژوهش‌ها و مقالات انجام‌شده؛ برای تبدیل یافته‌های علمی به خروجی‌های قابل‌فهم و کاربردی.",
    tags: ["ترجمان دانش", "تولید محصول", "محتوای پژوهشی"],
    tile: "bg-orange",
    rot: "-1.2deg",
  },
  {
    company: "شرکت متزون",
    role: "طراح رابط و تجربه کاربری",
    period: "دی ۱۴۰۳ تا شهریور ۱۴۰۴",
    blurb:
      "فعالیت در طراحی رابط و تجربهٔ کاربری محصولات شرکت متزون.",
    tags: ["طراحی رابط کاربری", "تجربهٔ کاربری"],
    tile: "bg-yellow",
    rot: "1.4deg",
  },
  {
    company: "شرکت آبرنگ",
    role: "تولیدکنندهٔ محتوا و دیزاینر",
    period: "آذر ۱۴۰۲ تا فروردین ۱۴۰۴",
    blurb:
      "همکاری با شرکت آبرنگ در زمینهٔ تولید محتوا و طراحی.",
    tags: ["تولید محتوا", "دیزاین"],
    tile: "bg-blue",
    rot: "-1.4deg",
  },
  {
    company: "همکاری مستقل",
    role: "پروژه‌های فریلنسری",
    period: "۱۴۰۰ تا امروز",
    blurb:
      "شروع همکاری‌های مستقل از سال ۱۴۰۰ و ورود حرفه‌ای به مسیر طراحی و تولید محتوا از ۱۴۰۲ (۲۰۲۳)؛ همراه با پذیرش پروژه‌های دورکاری.",
    tags: ["فریلنسری", "طراحی و تولید محتوا", "دورکاری"],
    tile: "bg-pink",
    rot: "1.2deg",
  },
];

/* ---------------------------- SOCIALS ---------------------------- */

export type SocialId = "linkedin" | "telegram" | "dribbble";

export interface Social {
  id: SocialId;
  platform: string;
  handle: string;
  actionLabel: string;
  url: string;
  tile: string;
}

export const socials: Social[] = [
  { id: "linkedin", platform: "لینکدین", handle: "رسول خواجه میرزایی", actionLabel: "مشاهده پروفایل", url: "https://www.linkedin.com/in/rasoul-khajehmirzaei-28bb93221/", tile: "bg-blue" },
  { id: "telegram", platform: "تلگرام", handle: "@rasin2", actionLabel: "گفت‌وگو در تلگرام", url: "https://t.me/rasin2", tile: "bg-paper" },
  { id: "dribbble", platform: "دریبل", handle: "@Rasin_official", actionLabel: "مشاهده پروفایل", url: "https://dribbble.com/Rasin_official", tile: "bg-pink" },
];

/* ---------------------------- HOBBIES ---------------------------- */

export interface Hobby {
  label: string;
  title: string;
  blurb: string;
  image: string;
  tile: string;
}

export const hobbies: Hobby[] = [
  {
    label: "تکنولوژی",
    title: "کنجکاوی همیشه روشن",
    blurb: "هر ابزار تازه، یک بهانه برای کشف کردن؛ آپدیت کنجکاوی هم که اجباری است!",
    image: "/images/hobby-technology-v2.png",
    tile: "bg-yellow",
  },
  {
    label: "گیم",
    title: "فقط یه مرحلهٔ دیگه!",
    blurb: "کمی چالش، کمی ماجراجویی و همان جملهٔ آشنا: این یکی واقعاً مرحلهٔ آخره!",
    image: "/images/hobby-gaming-v2.png",
    tile: "bg-pink",
  },
  {
    label: "فیلم",
    title: "قصه روی پرده",
    blurb: "یک داستان خوب و سفری به دنیایی دیگر؛ لطفاً پایانش را لو ندهید!",
    image: "/images/hobby-cinema-v2.png",
    tile: "bg-blue",
  },
  {
    label: "انیمیشن",
    title: "جادوی فریم‌ها",
    blurb: "جایی که خیال جان می‌گیرد؛ برای لذت بردن از انیمیشن محدودیت سنی نداریم!",
    image: "/images/hobby-animation-v2.png",
    tile: "bg-green",
  },
  {
    label: "انیمه",
    title: "یک قسمت دیگر…",
    blurb: "دنیاهای تازه و قصه‌های پرکشش؛ تصمیم سخت، زدن دکمهٔ قسمت بعدی نیست!",
    image: "/images/hobby-anime-v2.png",
    tile: "bg-orange",
  },
  {
    label: "دیزاین",
    title: "چشم‌ها در حالت دیزاین",
    blurb: "از رنگ‌ها تا ریزترین جزئیات؛ انگار چشم طراح دکمهٔ تعطیلی ندارد!",
    image: "/images/hobby-design-v2.png",
    tile: "bg-yellow",
  },
];

/* ---------------------------- MARQUEE ---------------------------- */

export const marqueeItems = [
  "Figma",
  "ChatGPT",
  "Claude",
  "Framer",
  "GitHub",
  "Gemini",
  "CapCut",
  "Photoshop",
  "Premiere",
];

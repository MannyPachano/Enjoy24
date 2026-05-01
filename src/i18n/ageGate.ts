export type SiteLocale = 'en' | 'th';

export const ageGateCopy: Record<
  SiteLocale,
  {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    sub: string;
    btnYes: string;
    btnNo: string;
    legal: string;
    blockedTitleLine1: string;
    blockedAccent: string;
    blockedSub: string;
  }
> = {
  en: {
    eyebrow: 'One quick check',
    titleLine1: 'Are you',
    titleAccent: '20 or older?',
    sub: 'You must be 20 years or older to enter this site. Cannabis products are for adults only — please confirm your age to continue.',
    btnYes: "Yes, I'm 20+ →",
    btnNo: "I'm under 20",
    legal: 'By entering, you confirm you are of legal age to view cannabis content in your jurisdiction.',
    blockedTitleLine1: 'Sorry —',
    blockedAccent: 'come back later.',
    blockedSub: "You must be 20 or older to access this site. We'll see you in a few years.",
  },
  th: {
    eyebrow: 'ยืนยันอายุสั้น ๆ',
    titleLine1: 'คุณอายุ',
    titleAccent: '20 ปีขึ้นไปหรือยัง?',
    sub: 'เข้าชมเว็บไซต์นี้ได้เมื่อมีอายุครบ 20 ปีขึ้นไปเท่านั้น ผลิตภัณฑ์กัญชามีไว้สำหรับผู้ใหญ่ — โปรดยืนยันอายุก่อนเข้าชม',
    btnYes: 'อายุ 20 ปีขึ้นไป →',
    btnNo: 'ยังไม่ครบ 20 ปี',
    legal: 'เมื่อเข้าชม ถือว่าคุณยืนยันว่ามีอายุตามกฎหมายในเขตพื้นที่ของคุณสำหรับเนื้อหาที่เกี่ยวกับกัญชา',
    blockedTitleLine1: 'ขอโทษด้วย —',
    blockedAccent: 'ไว้กลับมาทีหลังนะ',
    blockedSub: 'คุณต้องมีอายุ 20 ปีขึ้นไปจึงจะเข้าเว็บไซต์นี้ได้ พบกันใหม่ในอีกไม่กี่ปีข้างหน้า',
  },
};

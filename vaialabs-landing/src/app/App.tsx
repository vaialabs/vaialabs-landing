import { motion, useScroll, useTransform, useInView } from "motion/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import logoWide from "../imports/vaia.svg";

function PreterLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 195 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M19.5 0C30.2695 0 39 8.73045 39 19.5C39 30.2696 30.2695 39 19.5 39C17.8812 39 16.3087 38.8026 14.8048 38.4307C14.8072 38.4299 14.8091 38.4295 14.8091 38.4295V27.6221C15.577 28.2038 16.438 28.6578 17.3919 28.9834C18.3459 29.3324 19.3813 29.5069 20.4981 29.5069C22.4525 29.5069 24.2208 29.0068 25.803 28.006C27.3852 27.0057 28.6417 25.6793 29.5724 24.0272C30.5263 22.3522 31.0035 20.5023 31.0035 18.478C31.0035 16.4537 30.5263 14.604 29.5724 12.9288C28.6417 11.2535 27.3852 9.92743 25.803 8.95018C24.2208 7.94973 22.4526 7.44952 20.4981 7.44952C19.1719 7.44952 17.9504 7.68192 16.8336 8.14726C15.74 8.61261 14.786 9.25249 13.9716 10.0669V8.00787H8.7366V35.761C3.4719 32.2695 0 26.2908 0 19.5C0 8.73045 8.73045 0 19.5 0ZM19.8 12.789C20.8237 12.789 21.7547 13.0451 22.5924 13.557C23.43 14.0689 24.0929 14.7555 24.5815 15.6164C25.0933 16.4773 25.3495 17.431 25.3495 18.478C25.3495 19.5249 25.0934 20.479 24.5815 21.3398C24.0929 22.2011 23.4299 22.8874 22.5924 23.3992C21.7547 23.911 20.8237 24.1671 19.8 24.1671C18.7762 24.1671 17.8455 23.911 17.0079 23.3992C16.1704 22.8874 15.4957 22.2011 14.9839 21.3398C14.4952 20.479 14.2508 19.5249 14.2508 18.478C14.2508 17.431 14.4953 16.4773 14.9839 15.6164C15.4957 14.7555 16.1704 14.0689 17.0079 13.557C17.8455 13.0452 18.7762 12.7891 19.8 12.789Z" />
      <path d="M39.0001 19.299V39H18.897L39.0001 19.299Z" />
      <path d="M52 47V8.54543H58.3738V11.0663C59.3651 10.0693 60.5266 9.28599 61.8583 8.71631C63.2178 8.14663 64.7053 7.86175 66.3202 7.86175C68.6999 7.86175 70.8527 8.47423 72.7791 9.69907C74.7055 10.8954 76.2352 12.519 77.3684 14.5699C78.5299 16.6209 79.1106 18.8854 79.1106 21.3634C79.1106 23.8418 78.5299 26.106 77.3684 28.1571C76.2352 30.1796 74.7055 31.8034 72.7791 33.0278C70.8527 34.2527 68.6999 34.8652 66.3202 34.8652C64.9601 34.8652 63.6996 34.6515 62.5381 34.2242C61.3766 33.8254 60.3285 33.27 59.3934 32.5579V47H52ZM65.4702 28.3282C66.7168 28.3282 67.8499 28.015 68.8696 27.388C69.8893 26.7615 70.697 25.9208 71.2916 24.867C71.9152 23.8133 72.2267 22.6454 72.2267 21.3634C72.2267 20.0818 71.9152 18.9139 71.2916 17.8599C70.697 16.806 69.8893 15.9657 68.8696 15.339C67.8499 14.7123 66.7168 14.399 65.4702 14.399C64.2236 14.399 63.0905 14.7123 62.0708 15.339C61.0512 15.9657 60.2295 16.806 59.6059 17.8599C59.0113 18.9139 58.7137 20.0818 58.7137 21.3634C58.7137 22.6454 59.0113 23.8133 59.6059 24.867C60.2295 25.9208 61.0512 26.7615 62.0708 27.388C63.0905 28.015 64.2236 28.3282 65.4702 28.3282ZM83.4318 34.1817V8.54543H90.0604V12.9463C90.9387 11.4651 92.0435 10.3257 93.3752 9.52813C94.7347 8.7021 96.3212 8.28903 98.1341 8.28903L99.749 14.869C99.2105 14.6981 98.6014 14.6127 97.9216 14.6127C95.7972 14.6127 94.0833 15.3106 92.78 16.7063C91.4772 18.0736 90.8252 20.039 90.8252 22.6029V34.1817H83.4318ZM115.351 35.0363C112.489 35.0363 109.968 34.4379 107.787 33.2414C105.605 32.0456 103.905 30.4073 102.688 28.3282C101.47 26.2201 100.86 23.8133 100.86 21.1072C100.86 18.515 101.455 16.222 102.645 14.2281C103.835 12.2057 105.435 10.6106 107.447 9.44266C109.487 8.27483 111.739 7.69088 114.203 7.69088C116.724 7.69088 118.977 8.27483 120.96 9.44266C122.943 10.5821 124.501 12.1487 125.634 14.1427C126.796 16.1366 127.376 18.4011 127.376 20.936V23.5425H111.824C111.115 23.5425 110.436 23.5 109.784 23.4144C109.132 23.3289 108.481 23.2293 107.829 23.1152C108.169 24.8245 109.005 26.2201 110.337 27.3024C111.696 28.3567 113.424 28.8836 115.521 28.8836C117.135 28.8836 118.58 28.5559 119.855 27.9009C121.158 27.2459 122.22 26.4337 123.042 25.4655L124.657 32.1306C123.382 33.0994 121.937 33.8254 120.322 34.3098C118.736 34.7942 117.079 35.0363 115.351 35.0363ZM107.659 18.629C109.076 18.3157 110.464 18.159 111.824 18.159H116.328C117.121 18.159 117.872 18.1875 118.58 18.2444C119.288 18.3014 119.954 18.4011 120.577 18.5436C120.153 17.0054 119.373 15.7948 118.24 14.9117C117.135 14.0287 115.761 13.5872 114.118 13.5872C112.56 13.5872 111.2 14.043 110.039 14.9545C108.906 15.8375 108.113 17.0623 107.659 18.629ZM134.45 34.1817V14.4417H129.691V8.54543H134.577V0H141.716V8.54543H146.773V14.4417H141.844V34.1817H134.45ZM162.558 35.0363C159.697 35.0363 157.175 34.4379 154.994 33.2414C152.813 32.0456 151.113 30.4073 149.895 28.3282C148.677 26.2201 148.068 23.8133 148.068 21.1072C148.068 18.515 148.663 16.222 149.853 14.2281C151.042 12.2057 152.643 10.6106 154.654 9.44266C156.694 8.27483 158.946 7.69088 161.41 7.69088C163.932 7.69088 166.184 8.27483 168.167 9.44266C170.15 10.5821 171.708 12.1487 172.841 14.1427C174.003 16.1366 174.584 18.4011 174.584 20.936V23.5425H159.031C158.323 23.5425 157.643 23.5 156.991 23.4144C156.34 23.3289 155.688 23.2293 155.037 23.1152C155.377 24.8245 156.212 26.2201 157.544 27.3024C158.903 28.3567 160.632 28.8836 162.728 28.8836C164.343 28.8836 165.787 28.5559 167.062 27.9009C168.366 27.2459 169.427 26.4337 170.249 25.4655L171.864 32.1306C170.589 33.0994 169.144 33.8254 167.529 34.3098C165.943 34.7942 164.286 35.0363 162.558 35.0363ZM154.866 18.629C156.283 18.3157 157.671 18.159 159.031 18.159H163.535C164.329 18.159 165.079 18.1875 165.787 18.2444C166.496 18.3014 167.161 18.4011 167.785 18.5436C167.36 17.0054 166.58 15.7948 165.447 14.9117C164.343 14.0287 162.969 13.5872 161.326 13.5872C159.768 13.5872 158.408 14.043 157.246 14.9545C156.113 15.8375 155.32 17.0623 154.866 18.629ZM178.683 34.1817V8.54543H185.312V12.9463C186.19 11.4651 187.295 10.3257 188.626 9.52813C189.986 8.7021 191.572 8.28903 193.386 8.28903L195 14.869C194.462 14.6981 193.853 14.6127 193.173 14.6127C191.048 14.6127 189.334 15.3106 188.032 16.7063C186.728 18.0736 186.077 20.039 186.077 22.6029V34.1817H178.683Z" />
    </svg>
  );
}

const INK = "#0a0a0a";
const BG = "#f1eee5";

type Lang = "ko" | "en" | "ja";

const T = {
  ko: {
    nav: { brand: "Brand", mission: "Mission", work: "Work", difference: "Difference", future: "Future", cta: "Preter 바로가기" },
    hero: {
      kicker: "VAIA Labs · 회사 소개",
      title1: "보이스 인터페이스로",
      title2: "세상을 바꿉니다.",
      sub: "목소리는 사람과 기계를, 사람과 사람을, 사람과 정보를 잇는 가장 자연스러운 인터페이스입니다. 바이아랩스는 그 믿음으로 서비스를 만듭니다.",
      scroll: "scroll ↓",
    },
    brand: {
      label: "02 — Brand",
      title1: "VAIA — 우리 이름에",
      title2: "담긴 의미.",
      intro1: "바이아(VAIA)",
      intro2: "라는 이름은 세 단어가 합쳐져 만들어졌습니다. 목소리로 시작해 인공지능으로 이해하고, 에이전시로 완결한다 — 이것이 바이아랩스가 만드는 모든 서비스의 공통된 뼈대입니다.",
      parts: [
        { k: "V" as const, w: "Voice", sub: "목소리", d: "우리가 믿는 인터페이스. 화면과 손가락이 아니라, 말과 귀로 시작합니다." },
        { k: "AI" as const, w: "AI", sub: "인공지능", d: "그 목소리를 이해하고 답하는 힘. 맥락과 의도까지 읽어냅니다." },
        { k: "A" as const, w: "Agency", sub: "에이전시", d: "사람을 대신해 일을 끝까지 해내는 능력. 답이 아니라 결과를 만듭니다." },
      ],
    },
    mission: {
      label: "03 — Mission",
      title1: "말하고 듣는 것에는",
      title2: "장벽이 없습니다.",
      para: "바이아랩스는 목소리가 사람과 기계를 가장 자연스럽게 잇는 인터페이스라고 믿습니다. 화면을 보고, 손으로 입력하는 방식은 결국 누군가에게는 장벽입니다. 하지만 말하고 듣는 것에는 장벽이 없습니다.",
      items: [
        { t: "사람과 사람 사이", d: "언어가 다르다는 이유로 놓치는 기회, 오해로 끝나는 대화를 목소리로 연결합니다." },
        { t: "사람과 정보 사이", d: "복잡한 문서와 시스템 앞에서 헤매는 대신, 말 한마디로 필요한 답을 얻을 수 있게 합니다." },
      ],
      outro1: "첫 번째 답이 실시간 통역 ",
      outro2: "이었다면, 앞으로는 목소리가 필요한 모든 순간에 답을 만들어갈 것입니다.",
    },
    work: {
      label: "04 — Our Work",
      title1: "하나의 서비스가",
      title2: "아닌, 계속 만들어",
      title3: "가는 회사.",
      para: "각 서비스는 독립된 브랜드로 운영되지만, 그 안에는 우리가 오랫동안 쌓아온 같은 기술적 뿌리가 있습니다 — 실시간성, 문맥 이해, 그리고 사용하는 사람의 언어와 상황에 맞춰 스스로를 바꾸는 능력입니다.",
      firstProduct: "First Product",
      preterSub: "AI 동시통역 서비스",
      preterDesc: "해외 바이어를 만나는 수출 기업을 위한 실시간 AI 동시통역 서비스로, 참가자는 각자 이어폰을 끼고 자신의 언어로 말하면 상대방은 자신의 언어로 듣습니다.",
      langs: ["한국어", "English", "日本語", "中文", "Español (soon)", "العربية (soon)"],
      cta: "Preter 바로가기",
    },
    diff: {
      label: "05 — Why VAIA",
      title1: "말을 옮기는",
      title2: "것 이상.",
      p1: "시중의 통역 AI는 대부분 \"말을 옮기는\" 기술에 머물러 있습니다. 바이아랩스는 한 걸음 더 나아가, 사용자가 처한 업무 맥락과 대화 상대의 이해도까지 반영하는 목소리 서비스를 만듭니다.",
      p2a: "우리에게 통역 엔진 자체는 계속 발전하는 도구일 뿐, ",
      p2b: "진짜 차이는 그 위에 얹는 맥락과 경험에서 나온다",
      p2c: "고 믿습니다.",
    },
    future: {
      label: "06 — What's Next",
      title1: "Preter는",
      title2: "시작일 뿐.",
      para: "바이아랩스는 수출 상담을 넘어, 목소리로 언어의 벽을 낮출 수 있는 모든 순간으로 서비스를 확장해 나갈 계획입니다. 각 서비스는 독립된 이름과 브랜드를 갖게 되겠지만, 그 뿌리에는 언제나 같은 질문이 있을 것입니다.",
      domains: ["의료", "여행", "커머스", "상담", "교육", "행정"],
      quote1: "\"목소리로 이 문제를",
      quote2: "더 쉽게 풀 수 있을까?\"",
    },
    footer: { contact: "Contact", product: "Product" },
  },
  en: {
    nav: { brand: "Brand", mission: "Mission", work: "Work", difference: "Difference", future: "Future", cta: "Visit Preter" },
    hero: {
      kicker: "VAIA Labs · Company",
      title1: "Reshaping the world",
      title2: "with voice interfaces.",
      sub: "Voice is the most natural interface between people and machines, between people, and between people and information. VAIA Labs builds on that belief.",
      scroll: "scroll ↓",
    },
    brand: {
      label: "02 — Brand",
      title1: "VAIA — the meaning",
      title2: "behind our name.",
      intro1: "VAIA",
      intro2: " is built from three words. Start with voice, understand it with AI, and complete the task with agency — this is the shared backbone of every service we build.",
      parts: [
        { k: "V" as const, w: "Voice", sub: "Voice", d: "The interface we believe in. It begins not with screens and fingers, but with words and ears." },
        { k: "AI" as const, w: "AI", sub: "Artificial Intelligence", d: "The power to understand voice and respond — reading context and intent, not just words." },
        { k: "A" as const, w: "Agency", sub: "Agency", d: "The ability to complete a task on behalf of a person. Not just answers — outcomes." },
      ],
    },
    mission: {
      label: "03 — Mission",
      title1: "Speaking and listening",
      title2: "have no barriers.",
      para: "We believe voice is the most natural interface between people and machines. Looking at screens and typing with your hands eventually becomes a barrier for someone. But speaking and listening have no barriers.",
      items: [
        { t: "Between people", d: "We connect conversations lost to language differences and misunderstandings — through voice." },
        { t: "Between people and information", d: "Instead of getting lost in documents and systems, you get the answer you need with a single spoken question." },
      ],
      outro1: "If our first answer was real-time interpretation ",
      outro2: ", we will keep building answers for every moment voice is needed.",
    },
    work: {
      label: "04 — Our Work",
      title1: "Not a single service,",
      title2: "but a company that",
      title3: "keeps building.",
      para: "Each service runs under its own brand, but they share the same technical roots we've built over years — real-time performance, contextual understanding, and the ability to adapt to each user's language and situation.",
      firstProduct: "First Product",
      preterSub: "AI real-time interpretation",
      preterDesc: "A real-time AI interpretation service for exporters meeting overseas buyers. Each participant wears earphones and speaks in their own language — the other side hears in theirs.",
      langs: ["Korean", "English", "Japanese", "Chinese", "Spanish (soon)", "Arabic (soon)"],
      cta: "Visit Preter",
    },
    diff: {
      label: "05 — Why VAIA",
      title1: "More than",
      title2: "moving words.",
      p1: "Most interpretation AI stops at \"moving words.\" We go further, building voice services that reflect the user's work context and the listener's level of understanding.",
      p2a: "For us, the interpretation engine is just a tool that keeps improving. ",
      p2b: "The real difference comes from the context and experience layered on top",
      p2c: ".",
    },
    future: {
      label: "06 — What's Next",
      title1: "Preter is",
      title2: "just the start.",
      para: "Beyond export negotiations, we plan to expand voice services to every moment where voice can lower language barriers. Each service will have its own name and brand — but at the root will always be the same question.",
      domains: ["Healthcare", "Travel", "Commerce", "Support", "Education", "Government"],
      quote1: "\"Can voice make",
      quote2: "this problem easier?\"",
    },
    footer: { contact: "Contact", product: "Product" },
  },
  ja: {
    nav: { brand: "Brand", mission: "Mission", work: "Work", difference: "Difference", future: "Future", cta: "Preterへ" },
    hero: {
      kicker: "VAIA Labs · 会社紹介",
      title1: "音声インターフェースで",
      title2: "世界を変えます。",
      sub: "声は、人と機械を、人と人を、人と情報をつなぐ最も自然なインターフェースです。VAIA Labsはその信念でサービスを作ります。",
      scroll: "scroll ↓",
    },
    brand: {
      label: "02 — Brand",
      title1: "VAIA — 名前に",
      title2: "込めた意味。",
      intro1: "VAIA",
      intro2: "という名前は、3つの言葉を組み合わせて生まれました。声から始まり、AIで理解し、エージェンシーで完結する — これがVAIA Labsが作るすべてのサービスに共通する骨組みです。",
      parts: [
        { k: "V" as const, w: "Voice", sub: "声", d: "私たちが信じるインターフェース。画面と指ではなく、言葉と耳から始まります。" },
        { k: "AI" as const, w: "AI", sub: "人工知能", d: "その声を理解し応える力。文脈と意図まで読み取ります。" },
        { k: "A" as const, w: "Agency", sub: "エージェンシー", d: "人に代わって仕事を最後までやり遂げる力。答えではなく、結果を生みます。" },
      ],
    },
    mission: {
      label: "03 — Mission",
      title1: "話すことと聞くことに",
      title2: "壁はありません。",
      para: "VAIA Labsは、声こそが人と機械を最も自然につなぐインターフェースだと信じています。画面を見て手で入力する方法は、誰かにとっては障壁になります。しかし、話すことと聞くことに障壁はありません。",
      items: [
        { t: "人と人のあいだ", d: "言語が違うことで逃してしまう機会、誤解で終わる会話を、声でつなぎます。" },
        { t: "人と情報のあいだ", d: "複雑な書類やシステムに迷う代わりに、一言で必要な答えを得られるようにします。" },
      ],
      outro1: "最初の答えがリアルタイム通訳 ",
      outro2: " だったなら、これからは声が必要なあらゆる瞬間に答えを作っていきます。",
    },
    work: {
      label: "04 — Our Work",
      title1: "ひとつのサービスでは",
      title2: "なく、作り続ける",
      title3: "会社。",
      para: "各サービスは独立したブランドとして運営されますが、その中には長年培ってきた同じ技術の根があります — リアルタイム性、文脈理解、そして使う人の言語と状況に合わせて自ら変わる力です。",
      firstProduct: "First Product",
      preterSub: "AIリアルタイム通訳サービス",
      preterDesc: "海外バイヤーと会う輸出企業向けのリアルタイムAI通訳サービス。参加者はそれぞれイヤホンをつけ、自分の言語で話すと、相手には相手の言語で届きます。",
      langs: ["韓国語", "English", "日本語", "中国語", "スペイン語 (soon)", "アラビア語 (soon)"],
      cta: "Preterへ",
    },
    diff: {
      label: "05 — Why VAIA",
      title1: "言葉を運ぶ",
      title2: "以上のこと。",
      p1: "市場の通訳AIの多くは「言葉を運ぶ」技術に留まっています。VAIA Labsはさらに一歩踏み込み、利用者の業務文脈と相手の理解度まで反映する声のサービスを作ります。",
      p2a: "私たちにとって通訳エンジンは進化し続ける道具にすぎず、",
      p2b: "本当の違いはその上に重ねる文脈と体験から生まれる",
      p2c: "と信じています。",
    },
    future: {
      label: "06 — What's Next",
      title1: "Preterは",
      title2: "始まりに過ぎない。",
      para: "VAIA Labsは輸出商談を超え、声で言語の壁を下げられるあらゆる瞬間へサービスを広げていきます。各サービスは独自の名前とブランドを持ちますが、その根にはいつも同じ問いがあります。",
      domains: ["医療", "旅行", "コマース", "相談", "教育", "行政"],
      quote1: "「声でこの問題を",
      quote2: "もっと簡単に解けるだろうか?」",
    },
    footer: { contact: "Contact", product: "Product" },
  },
} as const;

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "ko", setLang: () => {} });
const useLang = () => useContext(LangCtx);
const useT = () => T[useLang().lang];

function LangSwitcher() {
  const { lang, setLang } = useLang();
  const options: { k: Lang; label: string }[] = [
    { k: "ko", label: "KO" },
    { k: "en", label: "EN" },
    { k: "ja", label: "JA" },
  ];
  return (
    <div className="flex items-center gap-1 border border-black/20 rounded-full p-1 text-[11px]">
      {options.map((o) => (
        <button
          key={o.k}
          onClick={() => setLang(o.k)}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            lang === o.k ? "bg-black text-[#f1eee5]" : "hover:bg-black/5"
          }`}
          style={{ fontWeight: 500 }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const t = useT();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[#f1eee5]/70 border-b border-black/5" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoWide} alt="VAIA" className="h-6 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-wide">
          <a href="#brand" className="hover:opacity-60 transition-opacity">{t.nav.brand}</a>
          <a href="#mission" className="hover:opacity-60 transition-opacity">{t.nav.mission}</a>
          <a href="#work" className="hover:opacity-60 transition-opacity">{t.nav.work}</a>
          <a href="#difference" className="hover:opacity-60 transition-opacity">{t.nav.difference}</a>
          <a href="#future" className="hover:opacity-60 transition-opacity">{t.nav.future}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="https://preter.me"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-black rounded-full px-4 py-2 text-[13px] hover:bg-black hover:text-[#f1eee5] transition-colors"
          >
            {t.nav.cta}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function AnimatedWords({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.04 }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Waveform() {
  const bars = Array.from({ length: 48 });
  return (
    <div className="flex items-end gap-[3px] h-16 md:h-24">
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] md:w-[4px] rounded-full bg-black"
          initial={{ height: 4 }}
          animate={{
            height: [
              4 + Math.random() * 8,
              10 + Math.random() * 60,
              4 + Math.random() * 8,
            ],
          }}
          transition={{
            duration: 1.4 + Math.random() * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-24">
      <motion.div style={{ y, opacity }} className="max-w-[1400px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 mb-10 text-[12px] tracking-[0.3em] uppercase"
        >
          <span className="inline-block w-8 h-px bg-black" />
          {t.hero.kicker}
        </motion.div>

        <h1 key={lang} className="text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] leading-[0.95] tracking-[-0.03em]" style={{ fontWeight: 500 }}>
          <div><AnimatedWords text={t.hero.title1} /></div>
          <div className="italic" style={{ fontWeight: 300 }}>
            <AnimatedWords text={t.hero.title2} delay={0.15} />
          </div>
        </h1>

        <motion.p
          key={`sub-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl mt-12 text-base md:text-lg leading-relaxed opacity-80"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-16 md:mt-24"
        >
          <Waveform />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] uppercase"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {t.hero.scroll}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section id={id} ref={ref} className="px-6 md:px-10 py-28 md:py-40 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-12 md:mb-20 text-[12px] tracking-[0.3em] uppercase"
        >
          <span className="inline-block w-8 h-px bg-black" />
          {label}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

const V_PATH = "M0 0.0436778C15.5907 0.0292274 31.2027 0.00394245 46.7843 0.0441325C53.4309 0.0612923 59.5476 1.04347 65.1192 4.87011C67.5005 6.5319 70.0577 8.66649 71.8956 10.9587C76.5604 16.7772 80.9225 23.0843 85.2661 29.1372L109.643 63.2342C112.425 67.1263 116.768 73.993 120.07 77.0908C133.474 89.6635 142.349 72.4992 149.166 62.8874L173.327 28.7493C194.195 -0.769144 193.125 -0.0199871 228.815 0.00575261L257 0.0463926C252.476 7.29731 244.584 17.8104 239.406 25.1819L208.24 69.7021C198.679 83.42 186.156 104.613 173.34 114.273C158.896 125.952 144.681 123.79 128.861 124.777C84.2788 127.56 74.6185 103.929 51.4749 72.0702C34.8961 49.2481 17.353 23.6777 0 0.0436778Z";
const AI_A_OUTLINE = "M310.615 0.331372C314.519 -0.247805 334.18 0.106328 339.579 0.115742L368.564 0.0955766C375.591 0.078542 384.23 -0.235709 391.006 0.942818C404.735 3.45139 417.17 10.5705 426.229 21.1033C429.488 24.945 433.484 30.9919 436.481 35.2416L452 57.1732L422.486 101.791L398.722 68.9266C392.656 60.5218 384.479 44.9809 373.431 45.4906C365.726 45.8461 356.616 45.114 349.027 45.5655C339.926 46.1065 323.899 43.9095 315.835 46.9524C309.501 50.4235 302.048 62.5194 297.505 68.8025L272.319 103.73C256.217 126.142 258.156 123.983 231.177 123.915L195 123.858C212.767 99.9023 229.55 74.7892 247.35 50.7933C266.418 25.0889 274.676 4.13592 310.615 0.331372Z";
const AI_A_BAR = "M312.618 82.2821C324.708 81.5203 340.464 82.5886 352.996 82.1781C362.836 82.3111 372.916 81.7917 382.707 82.5109C387.965 82.8968 393.67 92.6164 396.706 96.6595L417 123.933C405.992 124.063 394.77 123.964 383.743 123.962L279 123.948C289.046 111.927 298.604 95.3932 309.62 83.8119C309.976 83.4373 312.01 82.5416 312.618 82.2821Z";
const AI_I = "M518.847 0.215597C523.284 -0.0817547 567.318 -0.227042 568.767 0.846403C569.043 1.84043 569.202 2.34534 568.486 3.44225C564.877 8.97417 560.765 14.6753 556.998 20.0908L532.164 55.8913L503.772 96.5405C498.6 104.019 493.293 112.101 487.723 119.281C485.441 122.225 482.86 123.245 479.405 124.424C472.757 125.055 435.113 125.428 430.051 124.123C429.331 123.938 429.376 123.831 429 123.202C430.205 117.131 465.802 68.7758 471.657 59.0615C481.298 43.0609 497.351 22.6862 507.711 6.42705C510.039 2.7767 514.622 1.03681 518.847 0.215597Z";
const A_OUTLINE = "M625.323 0.305459C628.381 -0.187225 645.324 0.0640917 649.132 0.0640917L675.389 0.0789758C682.102 0.087097 690.987 -0.213392 697.36 1.10494C707.79 3.30533 717.42 8.30435 725.217 15.5638C731.102 21.0568 736.04 28.8455 740.706 35.5256L756.917 58.6741C771.814 79.9371 788.934 103.256 803 124.662C793.171 124.68 755.829 125.886 748.972 123.63C746.085 122.681 743.484 120.622 741.442 118.419C736.482 113.069 732.367 106.267 728.13 100.324L703.716 66.2606C698.973 59.6612 693.457 50.0201 686.515 46.5966C680.345 44.8934 648.96 45.7132 640.974 45.6942C636.855 45.6847 631.936 45.5855 628.313 47.8418C621.912 51.8329 592.253 95.2116 585.369 104.827C581.787 109.831 578.3 115.615 573.883 119.924C572.071 121.691 570.007 123.217 567.527 123.849C560.463 125.648 551.605 124.708 544.328 124.699L509 124.627C533.103 90.0976 559.058 56.1917 583.707 22.0052C592.506 9.7973 610.561 1.77404 625.323 0.305459Z";
const A_BAR = "M627.128 82.1783C627.626 82.1527 628.12 82.1334 628.614 82.1201C645.198 81.7762 662.017 82.3033 678.623 82.0796C681.968 82.0347 691.613 81.6189 693.897 83.7704L694.096 83.9629C696.924 86.6417 702.993 95.217 705.536 98.6986C711.65 107.054 718.099 115.519 724 123.973L689.55 124L593 123.949C599.254 115.353 605.572 106.802 611.954 98.2952C615.398 93.6693 619.156 88.2219 623.148 84.0572C624.137 83.0279 625.755 82.5716 627.128 82.1783Z";

function LogoPart({ part, active }: { part: "V" | "AI" | "A"; active: boolean }) {
  const dim = active ? 1 : 0.12;
  const common = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  if (part === "V") {
    return (
      <motion.svg viewBox="0 0 257 125" className="h-full w-auto" fill="black" {...common}>
        <motion.path d={V_PATH} initial={{ opacity: 1 }} animate={{ opacity: dim }} transition={{ duration: 0.5 }} />
      </motion.svg>
    );
  }
  if (part === "AI") {
    return (
      <motion.svg viewBox="195 0 374 125" className="h-full w-auto" fill="black" {...common}>
        <motion.g initial={{ opacity: 1 }} animate={{ opacity: dim }} transition={{ duration: 0.5 }}>
          <path d={AI_A_OUTLINE} />
          <path d={AI_A_BAR} />
          <path d={AI_I} />
        </motion.g>
      </motion.svg>
    );
  }
  return (
    <motion.svg viewBox="509 0 294 125" className="h-full w-auto" fill="black" {...common}>
      <motion.g initial={{ opacity: 1 }} animate={{ opacity: dim }} transition={{ duration: 0.5 }}>
        <path d={A_OUTLINE} />
        <path d={A_BAR} />
      </motion.g>
    </motion.svg>
  );
}

function Brand() {
  const [active, setActive] = useState<"V" | "AI" | "A">("V");
  const t = useT();
  const parts = t.brand.parts;

  return (
    <Section id="brand" label={t.brand.label}>
      <div className="max-w-3xl">
        <h2 className="text-[7vw] md:text-[4.2vw] leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
          <AnimatedWords text={t.brand.title1} />
          <br />
          <span style={{ fontWeight: 300 }} className="italic">
            <AnimatedWords text={t.brand.title2} delay={0.15} />
          </span>
        </h2>
        <p className="mt-10 text-base md:text-lg opacity-80 leading-relaxed max-w-xl">
          <strong style={{ fontWeight: 500 }}>{t.brand.intro1}</strong>{t.brand.intro2}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 md:mt-28 max-w-4xl"
      >
        <div className="h-10 sm:h-14 md:h-28 flex items-end justify-start gap-3 sm:gap-5 md:gap-10 overflow-hidden">
          {parts.map((p) => (
            <button
              key={p.k}
              onMouseEnter={() => setActive(p.k)}
              onFocus={() => setActive(p.k)}
              onClick={() => setActive(p.k)}
              className="h-full flex items-end cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
              aria-label={p.w}
            >
              <LogoPart part={p.k} active={active === p.k} />
            </button>
          ))}
        </div>

        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
          {parts.map((p, i) => {
            const isOn = active === p.k;
            return (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setActive(p.k)}
                animate={{
                  backgroundColor: isOn ? INK : "rgba(0,0,0,0)",
                  color: isOn ? BG : INK,
                }}
                className="relative p-5 md:p-8 rounded-2xl border border-black/15 cursor-default"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <div className="text-[11px] tracking-[0.3em] uppercase opacity-60">0{i + 1}</div>
                  <div className="text-[11px] tracking-[0.4em] uppercase opacity-60">{p.k}</div>
                </div>
                <div className="text-3xl md:text-5xl tracking-tight" style={{ fontWeight: 500, marginBottom: "10px" }}>
                  {p.w}
                </div>
                <div className="text-sm opacity-70 mb-6 italic">{p.sub}</div>
                <div className="text-[15px] leading-relaxed opacity-85">{p.d}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

function Mission() {
  const t = useT();
  return (
    <Section id="mission" label={t.mission.label}>
      <div className="max-w-4xl">
        <h2 className="text-[7vw] md:text-[4.2vw] leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
          <AnimatedWords text={t.mission.title1} />
          <br />
          <span className="italic" style={{ fontWeight: 300 }}>
            <AnimatedWords text={t.mission.title2} delay={0.15} />
          </span>
        </h2>
      </div>

      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-base md:text-lg leading-relaxed opacity-85"
        >
          {t.mission.para}
        </motion.p>

        <div className="space-y-10">
          {t.mission.items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="border-l-2 border-black pl-6"
            >
              <div className="text-xl md:text-2xl mb-3" style={{ fontWeight: 500 }}>{it.t}</div>
              <div className="opacity-75 leading-relaxed">{it.d}</div>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="italic opacity-70"
          >
            {t.mission.outro1}<span className="not-italic">(Preter)</span>{t.mission.outro2}
          </motion.p>
        </div>
      </div>
    </Section>
  );
}

function Work() {
  const t = useT();
  return (
    <Section id="work" label={t.work.label}>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
        <div>
          <h2 className="text-[7vw] md:text-[4.2vw] leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
            <AnimatedWords text={t.work.title1} />
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              <AnimatedWords text={t.work.title2} delay={0.1} />
            </span>
            <br />
            <AnimatedWords text={t.work.title3} delay={0.2} />
          </h2>
          <p className="mt-10 opacity-80 leading-relaxed max-w-lg">
            {t.work.para}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-black text-[#f1eee5] rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="flex items-start justify-between mb-16">
            <div className="text-[11px] tracking-[0.3em] uppercase opacity-60">{t.work.firstProduct}</div>
            <div className="text-[11px] tracking-[0.3em] uppercase opacity-60">preter.me</div>
          </div>

          <PreterLogo className="h-10 md:h-12 w-auto mb-4 text-[#f1eee5]" />
          <div className="opacity-70 mb-10">{t.work.preterSub}</div>

          <p className="opacity-85 leading-relaxed mb-8 max-w-md">
            {t.work.preterDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {t.work.langs.map((l, i) => (
              <motion.span
                key={l}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="text-[12px] border border-[#f1eee5]/30 rounded-full px-3 py-1"
              >
                {l}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="https://preter.me"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 bg-[#f1eee5] text-black rounded-full pl-6 pr-2 py-2 group overflow-hidden"
          >
            <span className="relative z-10" style={{ fontWeight: 500 }}>{t.work.cta}</span>
            <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#f1eee5] transition-transform group-hover:translate-x-1">
              ↗
            </span>
            <motion.span
              className="absolute inset-0 rounded-full bg-[#f1eee5]"
              animate={{ boxShadow: ["0 0 0 0 rgba(241,238,229,0.6)", "0 0 0 18px rgba(241,238,229,0)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.a>

          <motion.div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#f1eee5]/5"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </Section>
  );
}

function Difference() {
  const t = useT();
  return (
    <Section id="difference" label={t.diff.label}>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="text-[7vw] md:text-[4.2vw] leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
            <AnimatedWords text={t.diff.title1} />
            <br />
            <span className="italic" style={{ fontWeight: 300 }}>
              <AnimatedWords text={t.diff.title2} delay={0.15} />
            </span>
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-6 md:col-start-7 space-y-6 text-base md:text-lg leading-relaxed opacity-85"
        >
          <p>{t.diff.p1}</p>
          <p>
            {t.diff.p2a}
            <span className="italic">{t.diff.p2b}</span>
            {t.diff.p2c}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

function Future() {
  const t = useT();
  return (
    <Section id="future" label={t.future.label}>
      <div className="max-w-4xl">
        <h2 className="text-[7vw] md:text-[4.2vw] leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
          <AnimatedWords text={t.future.title1} />{" "}
          <span className="italic" style={{ fontWeight: 300 }}>
            <AnimatedWords text={t.future.title2} delay={0.15} />
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 text-base md:text-lg leading-relaxed opacity-85 max-w-2xl"
        >
          {t.future.para}
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        {t.future.domains.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.05, backgroundColor: INK, color: BG }}
            className="border border-black rounded-full px-6 py-3 text-sm cursor-default transition-colors"
          >
            {d}
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-24 md:mt-32 text-3xl md:text-5xl lg:text-6xl italic leading-[1.1] tracking-tight max-w-4xl"
        style={{ fontWeight: 300 }}
      >
        {t.future.quote1}
        <br />{t.future.quote2}
      </motion.blockquote>
    </Section>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="px-6 md:px-10 pt-24 pb-10 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-[12px] tracking-[0.3em] uppercase opacity-60 mb-2">{t.footer.contact}</div>
            <a href="mailto:louis.lee@vaialabs.com" className="text-2xl md:text-3xl underline underline-offset-8 decoration-1 hover:opacity-60 transition-opacity">
              louis.lee@vaialabs.com
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-sm opacity-70">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-1">{t.footer.product}</div>
              <a href="https://preter.me" target="_blank" rel="noreferrer" className="hover:opacity-60">preter.me ↗</a>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-1">© 2026</div>
              <div>VAIA Labs</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed z-[100] w-6 h-6 rounded-full border border-black mix-blend-difference hidden md:block"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.4 }}
    />
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("ko");
  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div className="min-h-screen text-[#0a0a0a]" style={{ backgroundColor: BG }}>
        <Cursor />
        <Nav />
        <Hero />
        <Brand />
        <Mission />
        <Work />
        <Difference />
        <Future />
        <Footer />
      </div>
    </LangCtx.Provider>
  );
}

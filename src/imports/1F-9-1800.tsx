import svgPaths from "./svg-8guspoj645";
import img1RemovebgPreview1 from "figma:asset/1f762cdabce5e5e9464fd254f68bd2ce2bca1c7b.png";

function BackButton() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Back Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g data-figma-bg-blur-radius="40" id="Back Button">
          <rect fill="var(--fill-0, white)" fillOpacity="0.7" height="64" rx="32" width="64" />
          <path d={svgPaths.p34a948a0} id="Back" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.05714" />
        </g>
        <defs>
          <clipPath id="bgblur_0_7_584_clip_path" transform="translate(40 40)">
            <rect height="64" rx="32" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RoundNumberContainer() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)] h-full relative rounded-[8px] shrink-0" data-name="Round Number Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center not-italic px-[20px] py-[10px] relative text-[20px] text-center whitespace-nowrap">
          <p className="font-['NanumSquareOTF_ac:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[#0e0c0a]">1</p>
          <div className="flex flex-col font-['NanumSquare:ExtraBold',sans-serif] justify-end leading-[0] opacity-40 relative shrink-0 text-[#1c1c1c]">
            <p className="leading-[normal]">Floor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimerContainer() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[64px]" data-name="Timer Container">
      <p className="font-['NanumSquareOTF_ac:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d10e0e] text-[40px] text-center w-full">5</p>
    </div>
  );
}

function RoundTimeInfo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[64px] items-center relative shrink-0" data-name="Round&Time Info">
      <RoundNumberContainer />
      <TimerContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[1650px] items-center justify-center max-w-[400px] relative shrink-0 w-full" data-name="Header">
      <BackButton />
      <RoundTimeInfo />
    </div>
  );
}

function LevelBadge() {
  return (
    <div className="bg-[rgba(255,192,19,0.12)] content-stretch flex items-start justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[120px]" data-name="LevelBadge">
      <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffc013] text-[30px] whitespace-nowrap">3학년 학생</p>
    </div>
  );
}

function BadgeContainer() {
  return (
    <div className="content-stretch flex flex-col h-[93px] items-start justify-center px-[20px] py-[24px] relative shrink-0 w-[1880px]" data-name="Badge Container">
      <LevelBadge />
    </div>
  );
}

function Result() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Result">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] h-[35px] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-black text-center w-[72px]">
        <p className="leading-[1.4]">1교시</p>
      </div>
    </div>
  );
}

function StateUser() {
  return (
    <div className="bg-white content-stretch flex h-[65px] items-center pl-[16px] pr-[19px] py-[8px] relative rounded-[12px] shrink-0 w-[102px]" data-name="State_User1">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Result />
    </div>
  );
}

function Result1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Result">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[25px] text-black text-center w-[78px]">2교시</p>
    </div>
  );
}

function StateUser1() {
  return (
    <div className="bg-white content-stretch flex h-[65px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[102px]" data-name="State_User1">
      <Result1 />
    </div>
  );
}

function Result2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Result">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[25px] text-black text-center w-[78px]">3교시</p>
    </div>
  );
}

function StateUser2() {
  return (
    <div className="bg-white content-stretch flex h-[65px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[102px]" data-name="State_User1">
      <Result2 />
    </div>
  );
}

function Result3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Result">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[25px] text-black text-center w-[78px]">4교시</p>
    </div>
  );
}

function StateUser3() {
  return (
    <div className="bg-white content-stretch flex h-[65px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[102px]" data-name="State_User1">
      <Result3 />
    </div>
  );
}

function StateBar() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-[299px]" data-name="State Bar">
      <StateUser />
      <StateUser1 />
      <StateUser2 />
      <StateUser3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">16번</p>
      <Frame />
    </div>
  );
}

function NextButtonContainer() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer />
      <HomeButtonContainer />
    </div>
  );
}

function Seat() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo />
      <ButtonContainer />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo1() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">15번</p>
      <Frame3 />
    </div>
  );
}

function NextButtonContainer1() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer1 />
      <HomeButtonContainer1 />
    </div>
  );
}

function Seat2() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo1 />
      <ButtonContainer1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo2() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">14번</p>
      <Frame4 />
    </div>
  );
}

function NextButtonContainer2() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer2 />
      <HomeButtonContainer2 />
    </div>
  );
}

function Seat3() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo2 />
      <ButtonContainer2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo3() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">13번</p>
      <Frame5 />
    </div>
  );
}

function NextButtonContainer3() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer3 />
      <HomeButtonContainer3 />
    </div>
  );
}

function Seat4() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo3 />
      <ButtonContainer3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo4() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">12번</p>
      <Frame6 />
    </div>
  );
}

function NextButtonContainer4() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer4() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer4 />
      <HomeButtonContainer4 />
    </div>
  );
}

function Seat5() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo4 />
      <ButtonContainer4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo5() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">11번</p>
      <Frame7 />
    </div>
  );
}

function NextButtonContainer5() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer5() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer5 />
      <HomeButtonContainer5 />
    </div>
  );
}

function Seat6() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo5 />
      <ButtonContainer5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo6() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">10번</p>
      <Frame8 />
    </div>
  );
}

function NextButtonContainer6() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer6() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer6 />
      <HomeButtonContainer6 />
    </div>
  );
}

function Seat7() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo6 />
      <ButtonContainer6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo7() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">9번</p>
      <Frame9 />
    </div>
  );
}

function NextButtonContainer7() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer7() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer7 />
      <HomeButtonContainer7 />
    </div>
  );
}

function Seat8() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo7 />
      <ButtonContainer7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo8() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">8번</p>
      <Frame10 />
    </div>
  );
}

function NextButtonContainer8() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer8() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer8 />
      <HomeButtonContainer8 />
    </div>
  );
}

function Seat9() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo8 />
      <ButtonContainer8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo9() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">7번</p>
      <Frame11 />
    </div>
  );
}

function NextButtonContainer9() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer9() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer9() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer9 />
      <HomeButtonContainer9 />
    </div>
  );
}

function Seat10() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo9 />
      <ButtonContainer9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo10() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">6번</p>
      <Frame12 />
    </div>
  );
}

function NextButtonContainer10() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer10() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer10() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer10 />
      <HomeButtonContainer10 />
    </div>
  );
}

function Seat11() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo10 />
      <ButtonContainer10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo11() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">5번</p>
      <Frame13 />
    </div>
  );
}

function NextButtonContainer11() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer11() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer11() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer11 />
      <HomeButtonContainer11 />
    </div>
  );
}

function Seat12() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo11 />
      <ButtonContainer11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo12() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">4번</p>
      <Frame14 />
    </div>
  );
}

function NextButtonContainer12() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer12() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer12 />
      <HomeButtonContainer12 />
    </div>
  );
}

function Seat13() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo12 />
      <ButtonContainer12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo13() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">3번</p>
      <Frame15 />
    </div>
  );
}

function NextButtonContainer13() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer13() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer13 />
      <HomeButtonContainer13 />
    </div>
  );
}

function Seat14() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo13 />
      <ButtonContainer13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo14() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">2번</p>
      <Frame16 />
    </div>
  );
}

function NextButtonContainer14() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer14() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer14 />
      <HomeButtonContainer14 />
    </div>
  );
}

function Seat15() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo14 />
      <ButtonContainer14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo15() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">1번</p>
      <Frame17 />
    </div>
  );
}

function NextButtonContainer15() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer15() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer15 />
      <HomeButtonContainer15 />
    </div>
  );
}

function Seat16() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo15 />
      <ButtonContainer15 />
    </div>
  );
}

function Seat1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Seat 1">
      <Seat />
      <Seat2 />
      <Seat3 />
      <Seat4 />
      <Seat5 />
      <Seat6 />
      <Seat7 />
      <Seat8 />
      <Seat9 />
      <Seat10 />
      <Seat11 />
      <Seat12 />
      <Seat13 />
      <Seat14 />
      <Seat15 />
      <Seat16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo16() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">32번</p>
      <Frame18 />
    </div>
  );
}

function NextButtonContainer16() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer16() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer16() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer16 />
      <HomeButtonContainer16 />
    </div>
  );
}

function Seat18() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo16 />
      <ButtonContainer16 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo17() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">31번</p>
      <Frame19 />
    </div>
  );
}

function NextButtonContainer17() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer17() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer17 />
      <HomeButtonContainer17 />
    </div>
  );
}

function Seat19() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo17 />
      <ButtonContainer17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo18() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">30번</p>
      <Frame20 />
    </div>
  );
}

function NextButtonContainer18() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer18() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer18 />
      <HomeButtonContainer18 />
    </div>
  );
}

function Seat20() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo18 />
      <ButtonContainer18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo19() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">29번</p>
      <Frame21 />
    </div>
  );
}

function NextButtonContainer19() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer19() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer19 />
      <HomeButtonContainer19 />
    </div>
  );
}

function Seat21() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo19 />
      <ButtonContainer19 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo20() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">28번</p>
      <Frame22 />
    </div>
  );
}

function NextButtonContainer20() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer20() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer20() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer20 />
      <HomeButtonContainer20 />
    </div>
  );
}

function Seat22() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo20 />
      <ButtonContainer20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo21() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">27번</p>
      <Frame23 />
    </div>
  );
}

function NextButtonContainer21() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer21() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer21() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer21 />
      <HomeButtonContainer21 />
    </div>
  );
}

function Seat23() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo21 />
      <ButtonContainer21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo22() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">26번</p>
      <Frame24 />
    </div>
  );
}

function NextButtonContainer22() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer22() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer22() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer22 />
      <HomeButtonContainer22 />
    </div>
  );
}

function Seat24() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo22 />
      <ButtonContainer22 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo23() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">25번</p>
      <Frame25 />
    </div>
  );
}

function NextButtonContainer23() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer23() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer23() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer23 />
      <HomeButtonContainer23 />
    </div>
  );
}

function Seat25() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo23 />
      <ButtonContainer23 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo24() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">24번</p>
      <Frame26 />
    </div>
  );
}

function NextButtonContainer24() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer24() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer24() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer24 />
      <HomeButtonContainer24 />
    </div>
  );
}

function Seat26() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo24 />
      <ButtonContainer24 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo25() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">23번</p>
      <Frame27 />
    </div>
  );
}

function NextButtonContainer25() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer25() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer25() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer25 />
      <HomeButtonContainer25 />
    </div>
  );
}

function Seat27() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo25 />
      <ButtonContainer25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo26() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">22번</p>
      <Frame28 />
    </div>
  );
}

function NextButtonContainer26() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer26() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer26() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer26 />
      <HomeButtonContainer26 />
    </div>
  );
}

function Seat28() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo26 />
      <ButtonContainer26 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo27() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">21번</p>
      <Frame29 />
    </div>
  );
}

function NextButtonContainer27() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer27() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer27() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer27 />
      <HomeButtonContainer27 />
    </div>
  );
}

function Seat29() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo27 />
      <ButtonContainer27 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo28() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">20번</p>
      <Frame30 />
    </div>
  );
}

function NextButtonContainer28() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer28() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer28() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer28 />
      <HomeButtonContainer28 />
    </div>
  );
}

function Seat30() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo28 />
      <ButtonContainer28 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo29() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">19번</p>
      <Frame31 />
    </div>
  );
}

function NextButtonContainer29() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer29() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer29() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer29 />
      <HomeButtonContainer29 />
    </div>
  );
}

function Seat31() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo29 />
      <ButtonContainer29 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo30() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">18번</p>
      <Frame32 />
    </div>
  );
}

function NextButtonContainer30() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer30() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer30() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer30 />
      <HomeButtonContainer30 />
    </div>
  );
}

function Seat32() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo30 />
      <ButtonContainer30 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo31() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">17번</p>
      <Frame33 />
    </div>
  );
}

function NextButtonContainer31() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer31() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer31() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer31 />
      <HomeButtonContainer31 />
    </div>
  );
}

function Seat33() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo31 />
      <ButtonContainer31 />
    </div>
  );
}

function Seat17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Seat 2">
      <Seat18 />
      <Seat19 />
      <Seat20 />
      <Seat21 />
      <Seat22 />
      <Seat23 />
      <Seat24 />
      <Seat25 />
      <Seat26 />
      <Seat27 />
      <Seat28 />
      <Seat29 />
      <Seat30 />
      <Seat31 />
      <Seat32 />
      <Seat33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo32() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">48번</p>
      <Frame34 />
    </div>
  );
}

function NextButtonContainer32() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer32() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer32() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer32 />
      <HomeButtonContainer32 />
    </div>
  );
}

function Seat35() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo32 />
      <ButtonContainer32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo33() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">47번</p>
      <Frame35 />
    </div>
  );
}

function NextButtonContainer33() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer33() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer33() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer33 />
      <HomeButtonContainer33 />
    </div>
  );
}

function Seat36() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo33 />
      <ButtonContainer33 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo34() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">46번</p>
      <Frame36 />
    </div>
  );
}

function NextButtonContainer34() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer34() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer34() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer34 />
      <HomeButtonContainer34 />
    </div>
  );
}

function Seat37() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo34 />
      <ButtonContainer34 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo35() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">45번</p>
      <Frame37 />
    </div>
  );
}

function NextButtonContainer35() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer35() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer35() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer35 />
      <HomeButtonContainer35 />
    </div>
  );
}

function Seat38() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo35 />
      <ButtonContainer35 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo36() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">44번</p>
      <Frame38 />
    </div>
  );
}

function NextButtonContainer36() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer36() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer36() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer36 />
      <HomeButtonContainer36 />
    </div>
  );
}

function Seat39() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo36 />
      <ButtonContainer36 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo37() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">43번</p>
      <Frame39 />
    </div>
  );
}

function NextButtonContainer37() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer37() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer37() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer37 />
      <HomeButtonContainer37 />
    </div>
  );
}

function Seat40() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo37 />
      <ButtonContainer37 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo38() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">42번</p>
      <Frame40 />
    </div>
  );
}

function NextButtonContainer38() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer38() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer38() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer38 />
      <HomeButtonContainer38 />
    </div>
  );
}

function Seat41() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo38 />
      <ButtonContainer38 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo39() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">41번</p>
      <Frame41 />
    </div>
  );
}

function NextButtonContainer39() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer39() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer39() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer39 />
      <HomeButtonContainer39 />
    </div>
  );
}

function Seat42() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo39 />
      <ButtonContainer39 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo40() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">40번</p>
      <Frame42 />
    </div>
  );
}

function NextButtonContainer40() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer40() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer40() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer40 />
      <HomeButtonContainer40 />
    </div>
  );
}

function Seat43() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo40 />
      <ButtonContainer40 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo41() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">39번</p>
      <Frame43 />
    </div>
  );
}

function NextButtonContainer41() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer41() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer41() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer41 />
      <HomeButtonContainer41 />
    </div>
  );
}

function Seat44() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo41 />
      <ButtonContainer41 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo42() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">38번</p>
      <Frame44 />
    </div>
  );
}

function NextButtonContainer42() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer42() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer42() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer42 />
      <HomeButtonContainer42 />
    </div>
  );
}

function Seat45() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo42 />
      <ButtonContainer42 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo43() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">37번</p>
      <Frame45 />
    </div>
  );
}

function NextButtonContainer43() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer43() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer43() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer43 />
      <HomeButtonContainer43 />
    </div>
  );
}

function Seat46() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo43 />
      <ButtonContainer43 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo44() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">36번</p>
      <Frame46 />
    </div>
  );
}

function NextButtonContainer44() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer44() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer44() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer44 />
      <HomeButtonContainer44 />
    </div>
  );
}

function Seat47() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo44 />
      <ButtonContainer44 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo45() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">35번</p>
      <Frame47 />
    </div>
  );
}

function NextButtonContainer45() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer45() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer45() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer45 />
      <HomeButtonContainer45 />
    </div>
  );
}

function Seat48() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo45 />
      <ButtonContainer45 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo46() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">34번</p>
      <Frame48 />
    </div>
  );
}

function NextButtonContainer46() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer46() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer46() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer46 />
      <HomeButtonContainer46 />
    </div>
  );
}

function Seat49() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo46 />
      <ButtonContainer46 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo47() {
  return (
    <div className="content-stretch flex flex-col font-['NanumSquare:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">33번</p>
      <Frame49 />
    </div>
  );
}

function NextButtonContainer47() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
        </div>
      </div>
    </div>
  );
}

function HomeButtonContainer47() {
  return (
    <div className="bg-white flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer47() {
  return (
    <div className="content-stretch flex gap-[2.984px] items-center relative shrink-0 w-full" data-name="Button Container">
      <NextButtonContainer47 />
      <HomeButtonContainer47 />
    </div>
  );
}

function Seat50() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo47 />
      <ButtonContainer47 />
    </div>
  );
}

function Seat34() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Seat 3">
      <Seat35 />
      <Seat36 />
      <Seat37 />
      <Seat38 />
      <Seat39 />
      <Seat40 />
      <Seat41 />
      <Seat42 />
      <Seat43 />
      <Seat44 />
      <Seat45 />
      <Seat46 />
      <Seat47 />
      <Seat48 />
      <Seat49 />
      <Seat50 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[79px] items-start justify-center relative shrink-0">
      <Seat1 />
      <Seat17 />
      <Seat34 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] h-[1083px] items-start justify-center pb-[524px] relative shrink-0 w-[1852px]">
      <StateBar />
      <Frame1 />
    </div>
  );
}

function WordContainer() {
  return (
    <div className="content-stretch flex h-[1148.324px] items-center justify-center px-[32.49px] relative rounded-[20.306px] shrink-0 w-[1856px]" data-name="Word Container">
      <Frame2 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[1248px] items-center max-w-[1920px] relative rounded-[20px] shrink-0 w-full" data-name="Content Container">
      <BadgeContainer />
      <WordContainer />
    </div>
  );
}

function FooterTextContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center p-[16px] relative rounded-[14px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Footer Text Container">
      <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">늘 학생들을 위해 애써 주셔서 진심으로 감사드립니다.</p>
      <div className="absolute bottom-[4px] h-[23px] left-[-9px] w-[17px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 23">
          <path d={svgPaths.p1e207780} fill="var(--fill-0, white)" id="Vector 2" />
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[27px] items-center justify-center relative shrink-0 w-[284px]" data-name="Footer">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[63px] relative w-[60px]" data-name="영랑이_얼빡1-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1RemovebgPreview1} />
          </div>
        </div>
      </div>
      <FooterTextContainer />
    </div>
  );
}

export default function Component1F() {
  return (
    <div className="bg-gradient-to-t content-stretch flex flex-col from-[#ffc013] items-center justify-between pb-[20px] pt-[44px] px-[12px] relative size-full to-[#fff9e4]" data-name="1F">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}
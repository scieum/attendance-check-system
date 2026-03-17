import svgPaths from "./svg-d7huhobbv7";
import img1RemovebgPreview1 from "figma:asset/1f762cdabce5e5e9464fd254f68bd2ce2bca1c7b.png";

function BackButton() {
  return (
    <div className="relative shrink-0 size-[59.2px]" data-name="Back Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.2 59.2">
        <g data-figma-bg-blur-radius="37" id="Back Button">
          <rect fill="var(--fill-0, white)" fillOpacity="0.7" height="59.2" rx="29.6" width="59.2" />
          <path d={svgPaths.p866af80} id="Back" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90286" />
        </g>
        <defs>
          <clipPath id="bgblur_0_26_299_clip_path" transform="translate(37 37)">
            <rect height="59.2" rx="29.6" width="59.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RoundNumberContainer() {
  return (
    <div className="backdrop-blur-[18.5px] bg-[rgba(255,255,255,0.7)] h-full relative rounded-[7.4px] shrink-0" data-name="Round Number Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex font-['Pretendard:ExtraBold',sans-serif] gap-[7.4px] h-full items-center justify-center not-italic px-[18.5px] py-[9.25px] relative text-[18.5px] text-center whitespace-nowrap">
          <p className="leading-[normal] relative shrink-0 text-[#0e0c0a]">3</p>
          <div className="flex flex-col justify-end leading-[0] opacity-40 relative shrink-0 text-[#1c1c1c]">
            <p className="leading-[normal]">Floor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimerContainer() {
  return (
    <div className="backdrop-blur-[18.5px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-center justify-center p-[9.25px] relative rounded-[7.4px] shrink-0 size-[59.2px]" data-name="Timer Container">
      <p className="font-['NanumSquareOTF_ac:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d10e0e] text-[37px] text-center w-full">5</p>
    </div>
  );
}

function RoundTimeInfo() {
  return (
    <div className="content-stretch flex gap-[7.4px] h-[59.2px] items-center relative shrink-0" data-name="Round&Time Info">
      <RoundNumberContainer />
      <TimerContainer />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[1542px] h-[59px] items-start justify-center relative shrink-0">
      <BackButton />
      <RoundTimeInfo />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center relative shrink-0">
      <Frame5 />
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
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">96번</p>
      <Frame />
    </div>
  );
}

function NextButtonContainer() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">97번</p>
      <Frame3 />
    </div>
  );
}

function NextButtonContainer1() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo2() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">98번</p>
      <Frame6 />
    </div>
  );
}

function NextButtonContainer2() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo3() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">99번</p>
      <Frame7 />
    </div>
  );
}

function NextButtonContainer3() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo4() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">100번</p>
      <Frame8 />
    </div>
  );
}

function NextButtonContainer4() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo5() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">101번</p>
      <Frame9 />
    </div>
  );
}

function NextButtonContainer5() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo6() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">102번</p>
      <Frame10 />
    </div>
  );
}

function NextButtonContainer6() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo7() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">103번</p>
      <Frame11 />
    </div>
  );
}

function NextButtonContainer7() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4.476px] items-start relative shrink-0 text-[11px]">
      <p className="relative shrink-0 w-[26.854px]">학번</p>
      <p className="relative shrink-0 w-[26.854px]">이름</p>
    </div>
  );
}

function AlarmInfo8() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">104번</p>
      <Frame12 />
    </div>
  );
}

function NextButtonContainer8() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat1() {
  return (
    <div className="content-stretch flex gap-[71px] items-center relative shrink-0" data-name="Seat 1">
      <Seat />
      <Seat2 />
      <Seat3 />
      <Seat4 />
      <Seat5 />
      <Seat6 />
      <Seat7 />
      <Seat8 />
      <Seat9 />
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

function AlarmInfo9() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">91번</p>
      <Frame13 />
    </div>
  );
}

function NextButtonContainer9() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat11() {
  return (
    <div className="absolute backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center left-[1580px] overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] rounded-[4.476px] top-[0.07px] w-[104.434px]" data-name="Seat">
      <AlarmInfo9 />
      <ButtonContainer9 />
    </div>
  );
}

function Seat10() {
  return (
    <div className="h-[91.379px] relative shrink-0 w-[1684px]" data-name="Seat 2">
      <Seat11 />
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

function AlarmInfo10() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] left-[11.94px] not-italic text-center text-white top-[10.82px] w-[80.563px]" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">95번</p>
      <Frame14 />
    </div>
  );
}

function NextButtonContainer10() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer10() {
  return (
    <div className="absolute content-stretch flex gap-[2.984px] h-[19.395px] items-center left-[11.94px] top-[65.5px] w-[80.563px]" data-name="Button Container">
      <NextButtonContainer10 />
      <HomeButtonContainer10 />
    </div>
  );
}

function Seat13() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] h-[91.379px] overflow-clip relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo10 />
      <ButtonContainer10 />
    </div>
  );
}

function Seat12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Seat 4">
      <Seat13 />
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

function AlarmInfo11() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">85번</p>
      <Frame16 />
    </div>
  );
}

function NextButtonContainer11() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat15() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo11 />
      <ButtonContainer11 />
    </div>
  );
}

function Seat14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[104px]" data-name="Seat 5">
      <Seat15 />
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

function AlarmInfo12() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">85번</p>
      <Frame17 />
    </div>
  );
}

function NextButtonContainer12() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat17() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo12 />
      <ButtonContainer12 />
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

function AlarmInfo13() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">85번</p>
      <Frame18 />
    </div>
  );
}

function NextButtonContainer13() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat18() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo13 />
      <ButtonContainer13 />
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

function AlarmInfo14() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">85번</p>
      <Frame19 />
    </div>
  );
}

function NextButtonContainer14() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat19() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo14 />
      <ButtonContainer14 />
    </div>
  );
}

function Seat16() {
  return (
    <div className="content-stretch flex gap-[249px] items-center relative shrink-0 w-[104px]" data-name="Seat 6">
      <Seat17 />
      <Seat18 />
      <Seat19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[250px] items-center relative shrink-0">
      <Seat14 />
      <Seat16 />
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

function AlarmInfo15() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">84번</p>
      <Frame20 />
    </div>
  );
}

function NextButtonContainer15() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat21() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo15 />
      <ButtonContainer15 />
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

function AlarmInfo16() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">83번</p>
      <Frame21 />
    </div>
  );
}

function NextButtonContainer16() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat22() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo16 />
      <ButtonContainer16 />
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

function AlarmInfo17() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">82번</p>
      <Frame22 />
    </div>
  );
}

function NextButtonContainer17() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat23() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo17 />
      <ButtonContainer17 />
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

function AlarmInfo18() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">81번</p>
      <Frame23 />
    </div>
  );
}

function NextButtonContainer18() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat24() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo18 />
      <ButtonContainer18 />
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

function AlarmInfo19() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">80번</p>
      <Frame24 />
    </div>
  );
}

function NextButtonContainer19() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat25() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo19 />
      <ButtonContainer19 />
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

function AlarmInfo20() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">79번</p>
      <Frame25 />
    </div>
  );
}

function NextButtonContainer20() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat26() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo20 />
      <ButtonContainer20 />
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

function AlarmInfo21() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraBold',sans-serif] gap-[12.681px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full" data-name="Alarm Info">
      <p className="relative shrink-0 text-[18px] w-[59px]">78번</p>
      <Frame26 />
    </div>
  );
}

function NextButtonContainer21() {
  return (
    <div className="bg-[#4e4d4d] flex-[1_0_0] h-[19.395px] min-h-px min-w-px relative rounded-[2.984px]" data-name="Next Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[3.73px] relative size-full">
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">출석</p>
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
          <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[9px] text-black whitespace-nowrap">결석</p>
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

function Seat27() {
  return (
    <div className="backdrop-blur-[3.469px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[8px] h-[91.379px] items-center overflow-clip pb-[7px] pt-[10.816px] px-[11.935px] relative rounded-[4.476px] shrink-0 w-[104.434px]" data-name="Seat">
      <AlarmInfo21 />
      <ButtonContainer21 />
    </div>
  );
}

function Seat20() {
  return (
    <div className="content-stretch flex gap-[71px] items-center relative shrink-0" data-name="Seat 3">
      <Seat21 />
      <Seat22 />
      <Seat23 />
      <Seat24 />
      <Seat25 />
      <Seat26 />
      <Seat27 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
      <Seat1 />
      <Seat10 />
      <Seat12 />
      <Frame15 />
      <Seat20 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[777px] items-start justify-center mb-[-17px] pb-[48px] pt-[22px] relative shrink-0 w-[1852px]">
      <StateBar />
      <Frame1 />
    </div>
  );
}

function SelectButtonContainer() {
  return (
    <div className="bg-[#141414] content-stretch flex h-[65.1px] items-center justify-center max-w-[333.84600830078125px] mb-[-17px] overflow-clip p-[6.677px] relative rounded-[10.015px] shrink-0 w-[333.846px]" data-name="Select Button Container">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[29.212px] text-white whitespace-nowrap">전송하기</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[850px] items-center max-h-[850px] max-w-[1896px] pb-[17px] relative rounded-[20px] shrink-0 w-[1896px]" data-name="Content Container">
      <Frame2 />
      <SelectButtonContainer />
    </div>
  );
}

function FooterTextContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[63px] items-center justify-center p-[16px] relative rounded-[14px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Footer Text Container">
      <p className="font-['Pretendard:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">늘 학생들을 위해 애써 주셔서 진심으로 감사드립니다.</p>
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
    <div className="content-stretch flex gap-[27px] h-[117px] items-center justify-center relative shrink-0 w-[774px]" data-name="Footer">
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

export default function Component3F() {
  return (
    <div className="bg-gradient-to-t content-stretch flex flex-col from-[#8b31ff] gap-[12px] items-center pb-[100px] pt-[20px] px-[12px] relative size-full to-[#efe3ff]" data-name="3F">
      <Frame4 />
      <ContentContainer />
      <Footer />
    </div>
  );
}
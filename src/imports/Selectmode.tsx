import imgImageRemovebgPreview1 from "figma:asset/24c9e7c6147a6313297db851072f0e60d0933952.png";
import img1RemovebgPreview1 from "figma:asset/1f762cdabce5e5e9464fd254f68bd2ce2bca1c7b.png";
import img2RemovebgPreview1 from "figma:asset/8fe66627112ed04bd5bd8225bbcafc19846d70b8.png";

function Header() {
  return (
    <div className="h-[388px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <div className="h-[353px] relative shrink-0 w-[358px]" data-name="image-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRemovebgPreview1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionIconContainer() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Option Icon Container">
          <path d="M5 10L10.5 16L19.5 7" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function OptionTextContainer() {
  return (
    <div className="content-stretch flex gap-[393px] items-center relative shrink-0 w-[707px]" data-name="Option Text Container">
      <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">1층 자습실(3학년)</p>
      <OptionIconContainer />
    </div>
  );
}

function OptionContainer() {
  return (
    <div className="bg-[rgba(255,242,195,0.44)] h-[151px] max-w-[800px] relative rounded-[12px] shrink-0 w-full" data-name="Option Container">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[18px] items-center justify-center max-w-[inherit] pl-[108px] pr-[59px] py-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[63px] relative w-[60px]" data-name="영랑이_얼빡1-removebg-preview 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1RemovebgPreview1} />
              </div>
            </div>
          </div>
          <OptionTextContainer />
        </div>
      </div>
    </div>
  );
}

function OptionIconContainer1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Option Icon Container" opacity="0.2">
          <path d="M5 10L10.5 16L19.5 7" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function OptionTextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[385px] items-center min-h-px min-w-px relative" data-name="Option Text Container">
      <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">2층 자습실(2학년)</p>
      <OptionIconContainer1 />
    </div>
  );
}

function OptionContainer1() {
  return (
    <div className="bg-[rgba(25,161,252,0.12)] content-stretch flex gap-[23px] h-[151px] items-center justify-center max-w-[800px] pl-[37px] pr-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[800px]" data-name="Option Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[65px] relative w-[54px]" data-name="영랑이_얼빡2-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2RemovebgPreview1} />
          </div>
        </div>
      </div>
      <OptionTextContainer1 />
    </div>
  );
}

function OptionIconContainer2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Option Icon Container" opacity="0.2">
          <path d="M5 10L10.5 16L19.5 7" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function OptionTextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[388px] items-center min-h-px min-w-px relative" data-name="Option Text Container">
      <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">3층 자습실(3학년)</p>
      <OptionIconContainer2 />
    </div>
  );
}

function OptionContainer2() {
  return (
    <div className="bg-[rgba(139,49,255,0.12)] content-stretch flex gap-[17px] h-[151px] items-center justify-center max-w-[800px] pl-[34px] pr-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[800px]" data-name="Option Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[63px] relative w-[60px]" data-name="영랑이_얼빡1-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1RemovebgPreview1} />
          </div>
        </div>
      </div>
      <OptionTextContainer2 />
    </div>
  );
}

function OptionIconContainer3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Option Icon Container" opacity="0.2">
          <path d="M5 10L10.5 16L19.5 7" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function OptionTextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[447px] items-center min-h-px min-w-px relative" data-name="Option Text Container">
      <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">오늘의 불참자</p>
      <OptionIconContainer3 />
    </div>
  );
}

function OptionContainer3() {
  return (
    <div className="bg-[rgba(255,49,87,0.12)] content-stretch flex gap-[24px] h-[151px] items-center justify-center max-w-[800px] pl-[34px] pr-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[800px]" data-name="Option Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[65px] relative w-[54px]" data-name="영랑이_얼빡2-removebg-preview 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2RemovebgPreview1} />
          </div>
        </div>
      </div>
      <OptionTextContainer3 />
    </div>
  );
}

function DifficultyOptions() {
  return (
    <div className="h-[753px] relative shrink-0 w-full" data-name="Difficulty Options">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[39px] items-center px-[20px] py-[16px] relative size-full">
          <OptionContainer />
          <OptionContainer1 />
          <OptionContainer2 />
          <OptionContainer3 />
        </div>
      </div>
    </div>
  );
}

function DifficultyContainer() {
  return (
    <div className="content-stretch flex flex-col h-[775px] items-center relative shrink-0 w-full" data-name="Difficulty Container">
      <DifficultyOptions />
    </div>
  );
}

function SelectButtonContainer() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex h-[94px] items-center justify-center max-w-[400px] overflow-clip px-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[168px]" data-name="Select Button Container">
      <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#141414] text-[28px] whitespace-nowrap">홈으로</p>
    </div>
  );
}

function SelectButtonContainer1() {
  return (
    <div className="bg-[#141414] content-stretch flex h-[94px] items-center justify-center max-w-[400px] overflow-clip p-[8px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Select Button Container">
      <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">선택</p>
    </div>
  );
}

function SelectContainer() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[98px] content-stretch flex from-[rgba(255,255,255,0)] gap-[69px] items-end justify-center left-0 pb-[20px] pt-[40px] px-[20px] right-0 to-white" data-name="Select Container">
      <SelectButtonContainer />
      <SelectButtonContainer1 />
    </div>
  );
}

export default function Selectmode() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center py-[32px] relative size-full" data-name="Selectmode">
      <Header />
      <DifficultyContainer />
      <SelectContainer />
    </div>
  );
}
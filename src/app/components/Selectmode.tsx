const imgImageRemovebgPreview1 = "/mascot-header.png";
const img1RemovebgPreview1 = "/mascot-1f3f.png";
const img2RemovebgPreview1 = "/mascot-2f.png";
import { useState } from "react";
import { useResponsiveScale } from "./useResponsiveScale";

interface SelectmodeProps {
  onNavigateToHome: () => void;
  onNavigateToFloor1: () => void;
  onNavigateToFloor2: () => void;
  onNavigateToFloor3: () => void;
}

function Header() {
  return (
    <div className="h-[194px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <div className="h-[186px] relative shrink-0 w-[188px]" data-name="image-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRemovebgPreview1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionIconContainer({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Option Icon Container" opacity={isSelected ? 1 : 0.2}>
          <path d="M5 10L10.5 16L19.5 7" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function OptionContainer({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-[rgba(255,242,195,0.44)] h-[151px] max-w-[800px] relative rounded-[12px] shrink-0 w-full cursor-pointer active:scale-[0.98] transition-transform"
      data-name="Option Container"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[18px] items-center justify-center max-w-[inherit] pl-[108px] pr-[59px] py-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[63px] relative w-[60px]" data-name="영랑이_얼빡1-removebg-preview 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1RemovebgPreview1} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[393px] items-center relative shrink-0 w-[707px]" data-name="Option Text Container">
            <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">1층 자습실(3학년)</p>
            <OptionIconContainer isSelected={isSelected} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionContainer1({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-[rgba(25,161,252,0.12)] content-stretch flex gap-[23px] h-[151px] items-center justify-center max-w-[800px] pl-[37px] pr-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[800px] cursor-pointer active:scale-[0.98] transition-transform"
      data-name="Option Container"
      onClick={onClick}
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[65px] relative w-[54px]" data-name="영랑이_얼빡2-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2RemovebgPreview1} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[385px] items-center min-h-px min-w-px relative" data-name="Option Text Container">
        <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">2층 자습실(2학년)</p>
        <OptionIconContainer isSelected={isSelected} />
      </div>
    </div>
  );
}

function OptionContainer2({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-[rgba(139,49,255,0.12)] content-stretch flex gap-[17px] h-[151px] items-center justify-center max-w-[800px] pl-[34px] pr-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[800px] cursor-pointer active:scale-[0.98] transition-transform"
      data-name="Option Container"
      onClick={onClick}
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[63px] relative w-[60px]" data-name="영랑이_얼빡1-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1RemovebgPreview1} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[388px] items-center min-h-px min-w-px relative" data-name="Option Text Container">
        <p className="font-['NanumSquare:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-black whitespace-nowrap">3층 자습실(1학년)</p>
        <OptionIconContainer isSelected={isSelected} />
      </div>
    </div>
  );
}

function DifficultyOptions({ selectedOption, onSelectOption }: { selectedOption: number; onSelectOption: (index: number) => void }) {
  return (
    <div className="h-[810px] relative shrink-0 w-full" data-name="Difficulty Options">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[39px] items-center pb-[54px] pt-[47px] px-[20px] relative size-full">
          <OptionContainer isSelected={selectedOption === 0} onClick={() => onSelectOption(0)} />
          <OptionContainer1 isSelected={selectedOption === 1} onClick={() => onSelectOption(1)} />
          <OptionContainer2 isSelected={selectedOption === 2} onClick={() => onSelectOption(2)} />
        </div>
      </div>
    </div>
  );
}

function DifficultyContainer({ selectedOption, onSelectOption }: { selectedOption: number; onSelectOption: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col h-[598px] items-center relative shrink-0 w-full" data-name="Difficulty Container">
      <DifficultyOptions selectedOption={selectedOption} onSelectOption={onSelectOption} />
    </div>
  );
}

function SelectContainer({ onNavigateToHome, onSelect, hasSelection }: { onNavigateToHome: () => void; onSelect: () => void; hasSelection: boolean }) {
  return (
    <div className="absolute bg-gradient-to-b bottom-[59px] content-stretch flex from-[rgba(255,255,255,0)] gap-[69px] h-[131px] items-end justify-center left-0 pb-[20px] pt-[47px] px-[20px] right-0 to-white" data-name="Select Container">
      <div
        className="bg-[#f3f3f3] content-stretch flex h-[94px] items-center justify-center max-w-[400px] overflow-clip px-[20px] py-[8px] relative rounded-[12px] shrink-0 w-[168px] cursor-pointer active:scale-95 transition-transform"
        data-name="Select Button Container"
        onClick={onNavigateToHome}
      >
        <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#141414] text-[28px] whitespace-nowrap">홈으로</p>
      </div>
      <div
        className={`bg-[#141414] content-stretch flex h-[94px] items-center justify-center max-w-[400px] overflow-clip p-[8px] relative rounded-[12px] shrink-0 w-[400px] transition-transform ${
          hasSelection ? 'cursor-pointer active:scale-95' : 'opacity-50 cursor-not-allowed'
        }`}
        data-name="Select Button Container"
        onClick={hasSelection ? onSelect : undefined}
      >
        <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">선택</p>
      </div>
    </div>
  );
}

export default function Selectmode({ onNavigateToHome, onNavigateToFloor1, onNavigateToFloor2, onNavigateToFloor3 }: SelectmodeProps) {
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const { scale } = useResponsiveScale({ baseWidth: 1920, baseHeight: 1080 });

  const handleSelect = () => {
    if (selectedOption !== -1) {
      console.log('Selected option:', selectedOption);
      if (selectedOption === 0) {
        onNavigateToFloor1();
      } else if (selectedOption === 1) {
        onNavigateToFloor2();
      } else if (selectedOption === 2) {
        onNavigateToFloor3();
      }
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white flex items-center justify-center" data-name="Selectmode-Wrapper">
      <div 
        className="bg-white content-stretch flex flex-col gap-[14px] items-center py-[32px] relative w-[1920px] h-[1080px] origin-center"
        style={{ transform: `scale(${scale})` }}
        data-name="Selectmode"
      >
        <Header />
        <DifficultyContainer selectedOption={selectedOption} onSelectOption={setSelectedOption} />
        <SelectContainer
          onNavigateToHome={onNavigateToHome}
          onSelect={handleSelect}
          hasSelection={selectedOption !== -1}
        />
      </div>
    </div>
  );
}
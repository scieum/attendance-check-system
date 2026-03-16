import imgImage3992 from "figma:asset/ebab9813a9b49095afdf97f7348e970456725293.png";

function IconColor() {
  return (
    <div className="overflow-clip relative shrink-0 size-[195.525px]" data-name="icon/Color">
      <div className="-translate-x-1/2 absolute aspect-[140/140] bottom-0 left-1/2 top-0" data-name="image 3992">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-18.52%] max-w-none top-0 w-[137.04%]" src={imgImage3992} />
        </div>
      </div>
    </div>
  );
}

function AlarmInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[58.658px] items-center relative shrink-0 w-full" data-name="Alarm Info">
      <IconColor />
      <div className="font-['NanumSquare:ExtraBold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[117.315px] text-center text-white w-[min-content]">
        <p className="mb-0">이대로</p>
        <p>전송하시겠습니까?</p>
      </div>
    </div>
  );
}

function HomeButtonContainer() {
  return (
    <div className="bg-white flex-[1_0_0] h-[254.183px] min-h-px min-w-px relative rounded-[39.105px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[48.881px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[78.21px] text-black whitespace-nowrap">전송하기</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[39.105px] items-center relative shrink-0 w-full" data-name="Button Container">
      <HomeButtonContainer />
    </div>
  );
}

export default function DoneModal() {
  return (
    <div className="backdrop-blur-[45.46px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[156.42px] items-center overflow-clip px-[156.42px] py-[97.763px] relative rounded-[58.658px] size-full" data-name="DoneModal">
      <AlarmInfo />
      <ButtonContainer />
    </div>
  );
}
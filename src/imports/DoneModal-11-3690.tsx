import imgImage3992 from "figma:asset/ebab9813a9b49095afdf97f7348e970456725293.png";

function IconColor() {
  return (
    <div className="overflow-clip relative shrink-0 size-[116.746px]" data-name="icon/Color">
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
    <div className="content-stretch flex flex-col gap-[35.024px] items-center relative shrink-0 w-full" data-name="Alarm Info">
      <IconColor />
      <div className="font-['NanumSquare:ExtraBold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[70.047px] text-center text-white w-[min-content]">
        <p className="mb-0">이대로</p>
        <p>전송하시겠습니까?</p>
      </div>
    </div>
  );
}

function HomeButtonContainer() {
  return (
    <div className="bg-white flex-[1_0_0] h-[151.769px] min-h-px min-w-px relative rounded-[23.349px]" data-name="Home Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[29.186px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[46.698px] text-black whitespace-nowrap">전송하기</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[23.349px] items-center relative shrink-0 w-full" data-name="Button Container">
      <HomeButtonContainer />
    </div>
  );
}

export default function DoneModal() {
  return (
    <div className="backdrop-blur-[27.143px] bg-[rgba(0,0,0,0.42)] content-stretch flex flex-col gap-[93.397px] items-center overflow-clip px-[93.397px] py-[58.373px] relative rounded-[35.024px] size-full" data-name="DoneModal">
      <AlarmInfo />
      <ButtonContainer />
    </div>
  );
}
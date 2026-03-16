import imgHome from "figma:asset/a0838b5b9f1d017bbbfbb0b296eb1870a5e8006c.png";

function SelectButtonContainer() {
  return (
    <div className="bg-[#141414] h-[99px] max-w-[400px] min-w-[300px] relative rounded-[12px] shrink-0 w-full" data-name="Select Button Container">
      <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] min-w-[inherit] pl-[8px] py-[8px] relative size-full">
          <p className="font-['NanumSquare:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[35px] text-white whitespace-nowrap">출석 확인하기</p>
        </div>
      </div>
    </div>
  );
}

function SelectContainer({ className }: { className?: string }) {
  return (
    <div className={className || "bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0)] h-[255px] items-center pb-[20px] pt-[85px] px-[20px] relative shrink-0 to-white w-[2057px]"} data-name="Select Container">
      <SelectButtonContainer />
    </div>
  );
}

export default function Home() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1281px] relative size-full" data-name="Home">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHome} />
      <SelectContainer />
    </div>
  );
}
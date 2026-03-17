interface HomeProps {
  onNavigateToSelectMode: () => void;
}

export default function Home({ onNavigateToSelectMode }: HomeProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#4a8c3f]" data-name="Home">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={`${import.meta.env.BASE_URL}home-bg.png`}
      />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-[20px] pt-[85px] px-[20px] bg-gradient-to-b from-transparent to-white">
        <div
          className="bg-[#141414] h-[99px] max-w-[400px] min-w-[300px] w-full rounded-[12px] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
          onClick={onNavigateToSelectMode}
        >
          <p className="font-['NanumSquare:ExtraBold',sans-serif] text-[35px] text-white whitespace-nowrap">
            출석 확인하기
          </p>
        </div>
      </div>
    </div>
  );
}
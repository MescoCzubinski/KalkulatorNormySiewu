import { useState, useEffect } from "react";
export default function Section({
  children,
  title,
  showTitleOnMobile,
}: {
  children: React.ReactNode;
  title: string;
  showTitleOnMobile: boolean;
}) {
  const [isMobile, setIsMobile] = useState(showTitleOnMobile);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="flex flex-col w-[310px] h-fit">
      <div className="flex flex-col">
        {isMobile && (
          <p className="text-xl text-center font-semibold mb-4">
            {title.toUpperCase()}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

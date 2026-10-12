import type { QuickPlayItem } from "../../types";

export function QuickPlay({
  id,
  thumbnail,
  tag,
  layoutType,
  isQuickPlay,
  title,
  description,
  type,
  link,
}: QuickPlayItem) {
  return (
    <div className="min-w-90 max-h-39 max-w-[50%] w-[30%] flex px-3 py-4 bg-amber-700 relative rounded-xl overflow-hidden">
      <img
        src={thumbnail}
        alt=""
        className="absolute inset-0 object-fit blur-xl scale-110"
      />
      <img src={thumbnail} alt="none" className="w-33 v-33 z-1" />
      <div className="mx-4 z-1">
        <div className="rounded-full bg-[#ffffff1A] px-2 text-[11px] italic font-bold w-fit">
          {tag}
        </div>
        <div className="font-black text-xl line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}

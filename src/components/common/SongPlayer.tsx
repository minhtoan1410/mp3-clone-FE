import { useRef, useState } from "react";
import type { SongData } from "../../types";
// KqFpz3hPwuSG

export function SongPlayer({ link, thumbnail, title, artistsNames }: SongData) {
  //audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const [volume, setVolume] = useState<number>(100);
  const [isMuted, setIsMuted] = useState(false);

  // time
  function handleIsPlaying() {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }
  function handleTimeChange(operation: number) {
    if (!audioRef.current) return;
    if (operation !== 0) {
      audioRef.current.currentTime += operation;
    }
    setTime(audioRef.current.currentTime);
  }
  function handleDurationSeekChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = parseFloat(e.target.value);
    if (!audioRef.current) return;
    handleTimeChange(newTime - audioRef.current.currentTime);
  }
  function getConvertedTime(duration: number) {
    const minutes = Math.floor(duration / 60),
      seconds = Math.floor(duration - minutes * 60);
    return [
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ];
  }

  // volume
  function handleVolumeChange(newVolume: number) {
    if (!audioRef.current) return;
    if (!newVolume) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  }
  function handleVolumeSeekChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseFloat(e.target.value);
    handleVolumeChange(newVolume);
  }
  //   function handleClick() {
  //     if (!audioRef.current) return;
  //     audioRef.current.currentTime += 5;
  //   }
  //   function handlePlay() {
  //     if (!audioRef.current) return;
  //     audioRef.current.play();
  //   }
  //   function handlePaused() {
  //     if (!audioRef.current) return;
  //     audioRef.current.pause();
  //   }

  return (
    <div className="fixed bg-[#130C1C] border-t border-t-[#FFFFFF1A] bottom-0 w-full flex justify-between px-4 py-2 h-24 items-center cursor-pointer text-white">
      {/* song info */}
      <div className="flex w-[30%] min-w-0">
        {/* thumbnail */}
        <img
          src={thumbnail}
          alt="no"
          className="w-16 h-16 object-cover rounded-md shrink-0"
        />
        {/* detail */}
        <div className="my-auto marquee-container  whitespace-nowrap overflow-hidden hover-marquee mx-2 min-w-0 w-full mask-[linear-gradient(to_right,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]">
          {/* track */}
          <div className="marquee-track ">
            <span className="text-m font-medium mr-12">{title}</span>
            <span className="text-m font-medium mr-12">{title}</span>
          </div>
          {/* name */}
          <div className="text-[#ffffff80] text-sm hover:text-[#B66CE0] hover:underline">
            {artistsNames}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[40%] ">
        <audio
          ref={audioRef}
          src={link}
          onLoadedMetadata={(e) => {
            setDuration(e.currentTarget.duration);
          }}
          onTimeUpdate={() => handleTimeChange(0)}
          onDurationChange={(e) => {
            setDuration(e.currentTarget.duration);
          }}
        ></audio>
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full transition hover:bg-[#ffffff1A] mx-4 my-auto justify-center items-center flex">
            {/* before */}
            <i
              onClick={() => handleTimeChange(-5)}
              className="icon text-[22px]"
            >
              {"\uE90E"}
            </i>
          </div>

          {isPlaying ? (
            // pause
            <i
              className="icon text-[40px] hover:text-[#B66CE0] transition my-auto"
              onClick={() => handleIsPlaying()}
            >
              {"\u003F"}
            </i>
          ) : (
            // play
            <i
              className="icon text-[40px] hover:text-[#B66CE0] transition my-auto"
              onClick={() => handleIsPlaying()}
            >
              {"\u005F"}
            </i>
          )}
          <div className="w-12 h-12 rounded-full transition hover:bg-[#ffffff1A] mx-4 my-auto justify-center items-center flex">
            {/* forward */}
            <i className="icon text-[22px]" onClick={() => handleTimeChange(5)}>
              {"\uE90D"}
            </i>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* current time */}
          <div className="text-[#ffffff80]">
            {getConvertedTime(time)[0]}:{getConvertedTime(time)[1]}
          </div>
          {/* seek bar */}
          <input
            type="range"
            value={time}
            min={0}
            max={duration}
            onChange={handleDurationSeekChange}
            className="custom-range mx-2 w-[80%] h-1.5!"
            style={
              {
                "--progress": `${(time / duration) * 100}%`,
              } as React.CSSProperties
            }
          />
          {/* duration  */}
          <div>
            {getConvertedTime(duration)[0]}:{getConvertedTime(duration)[1]}
          </div>
        </div>
      </div>
      <div className="flex w-[30%] flex-row-reverse pr-12">
        <div className="flex">
          <div className="w-12 h-12 rounded-full transition hover:bg-[#ffffff1A] mx-2 my-auto justify-center items-center flex">
            {isMuted ? (
              <i
                className="icon flex text-[28px]"
                onClick={() => handleVolumeChange(100)}
              >
                {"\uE00A"}
              </i>
            ) : (
              <i
                className="icon flex text-[28px]"
                onClick={() => handleVolumeChange(0)}
              >
                {"\uE009"}
              </i>
            )}
          </div>
          <input
            type="range"
            value={volume}
            min={0}
            max={100}
            className="custom-range flex my-auto w-20 h-1!"
            onChange={handleVolumeSeekChange}
            style={
              {
                "--progress": `${volume}%`,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
}

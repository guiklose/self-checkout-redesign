import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="flex bg-white w-full h-[20%]">
        <div className="w-[30%] h-[20%] px-4 py-2 border-t-2 border-green-600">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Banner"
              width={250}
              height={250}
            />
          </Link>
        </div>
      <div className="w-[5%] flex">
        <div className="w-[50%] h-[100%]">

          {/* Second segment: green diagonal down-right */}
          <div className="w-12 h-[2px] bg-green-600 rotate-[45deg] origin-top-left"></div>
        </div>
        <div className="w-[50%] h-[100%] flex items-end">
          {/* Third segment: orange diagonal down-right */}
          <div className="w-12 h-[2px] bg-orange-600 rotate-[45deg] origin-bottom-right"></div>
        </div>
      </div>

      <div className="text-right px-4 py-2 border-b-2 border-orange-600 w-[66%]">
        <button
          className="bg-orange-500 text-white text-lg cursor-pointer font-semibold px-6 py-2 rounded-md shadow hover:bg-orange-600 transition"
          onClick={() => router.push("/help")}
        >
          Chamar Atendente
        </button>
      </div>


    </div>
  );
};

export default Banner;
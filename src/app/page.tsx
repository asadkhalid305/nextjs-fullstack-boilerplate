import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-1/2 h-1/2">
        <Image
          src="/undraw_welcome_cats.svg"
          alt="Welcome Cats"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

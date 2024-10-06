import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-1/2 h-1/2">
        <Image
          src="/undraw_dashboard.svg"
          alt="Admin Dashboard"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/65441f09edf0fe6e1cdc551e/be84ec6a-2b9c-4e6e-bc7e-57f4ad9e5dc5/White_Accent.png"
        width={100}
        height={100}
        className="mb-4"
        alt="Orchestro"
      />
      <Button as={Link} href="/chat">
        Get Started
      </Button>
    </div>
  );
}

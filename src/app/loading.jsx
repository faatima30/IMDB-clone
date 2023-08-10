import Image from "next/image";
export default function loading() {
  return (
    <div className="flex justify-center mt-14">
      <Image className=" h-16" src="Spinner.svg" alt="Loading..." />
    </div>
  );
}
// Focus is the art of knowing what to ignore.

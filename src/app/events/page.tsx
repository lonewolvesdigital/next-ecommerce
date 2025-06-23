import Image from "next/image";
import SignupModal from "@/components/SignupModal";

export default function EventsPage() {
  return (
    <>
      <SignupModal />
      <div className="min-h-screen bg-white">
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl mb-8 font-playfair font-semibold text-j-7">
            Find Us At Local Events
          </h1>
          <div className="mb-8">
            <p className="text-lg mb-4 font-playfair text-j-7">
              You can find Jamila Beauty at{" "}
              <span className="font-bold text-primary">
                Victoria Yards Market
              </span>{" "}
              on the{" "}
              <span className="font-bold">1st Sunday of every month</span>.
            </p>
            <p className="text-base text-j-7">
              Come visit us, experience our products in person, and meet the
              team!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Image
              src="/IMG_4906_20250523_183524301.jpg"
              alt="Victoria Yards Market"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <Image
              src="/IMG_4890_20250523_20274069.jpg"
              alt="Market Stand"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <Image
              src="/IMG_4886_20250523_201157820.jpg"
              alt="Jamila Beauty Event"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

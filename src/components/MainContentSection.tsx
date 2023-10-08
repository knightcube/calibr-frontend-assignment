import React from "react";
// import clientLogo1 from "client_logo_1.png";
// import clientLogo2 from "client_logo_2.png";
// import clientLogo3 from "client_logo_3.png";
// import clientLogo4 from "client_logo_4.png";
// import clientLogo5 from "client_logo_5.png";
// import clientLogo6 from "client_logo_6.png";
// import clientLogo7 from "client_logo_7.png";
// import membershipOrgLogo from "../assets/community_icon1.png";
// import nationalAssociationLogo from "../assets/community_icon2.png";
// import clubsAndGroupsLogo from "../assets/community_icon3.png";
// import illustration2 from "../assets/illustration_2.png";
// import membersIcon from "../assets/members_icon.png";
// import clubsIcon from "../assets/clubs_icon.png";
// import eventBookingsIcon from "../assets/event_bookings_icon.png";
// import paymentsIcon from "../assets/payments_icon.png";
// import designYourSiteFooterIcon from "../assets/pana.png";
// import customerLogo1 from "../assets/customer_logo_1.png";
// import rightArrow from "../assets/right_arrow.png";
// import blogImage1 from "../assets/blog_image_1.png";
// import blogImage2 from "../assets/blog_image_2.png";
// import blogImage3 from "../assets/blog_image_3.png";
import Image from "next/image";
import BrandedButton from "./BrandedButton";

const ClientSection = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-neutral_dark_gray font-semibold">
        Our Clients
      </h1>
      <p className="mt-2 text-center text-neutral_gray font-normal">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-between px-60 mt-10">
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_1.png"
          alt="Logo"
        />
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_2.png"
          alt="Logo"
        />
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_3.png"
          alt="Logo"
        />
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_4.png"
          alt="Logo"
        />
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_5.png"
          alt="Logo"
        />
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_6.png"
          alt="Logo"
        />
        <Image
          width={48}
          height={48}
          className="cursor-pointer"
          src="/client_logo_7.png"
          alt="Logo"
        />
      </div>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl text-center text-neutral_dark_gray font-semibold">
        Manage your entire community <br /> in a single system
      </h1>
      <p className="mt-2 text-center text-neutral_gray font-normal">
        Who is Nextcent suitable for?
      </p>
      <div className="flex mt-10 justify-evenly">
        <div className="flex flex-col items-center">
          <Image
            width={65}
            height={56}
            src="/community_icon1.png"
            alt="Membership Organizations"
          />
          <h1 className="w-[257px] text-3xl mt-2 text-center text-neutral_dark_gray font-semibold">
            Membership Organizations
          </h1>
          <p className="w-[257px] mt-2 text-center text-neutral_gray font-normal">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={65}
            height={56}
            src="/community_icon2.png"
            alt="National Associations"
          />
          <h1 className="w-[257px] text-3xl mt-2  text-center text-neutral_dark_gray font-semibold">
            National Associations
          </h1>
          <p className="w-[257px] mt-2 text-center text-neutral_gray font-normal">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            width={65}
            height={56}
            src="/community_icon3.png"
            alt="Clubs and Groups"
          />
          <h1 className="w-[257px] text-3xl mt-2 text-center text-neutral_dark_gray font-semibold">
            Clubs And Groups
          </h1>
          <p className="w-[257px] mt-2 text-center text-neutral_gray font-normal">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

const PixelgradeSection = () => {
  return (
    <div className="px-72 flex mt-32 justify-evenly place-items-center">
      <Image
        width={442}
        height={433}
        src="/illustration_2.png"
        alt="Pixelgrade"
      />
      <div className="item-center">
        <h1 className="w-[600px] text-4xl mb-5 text-neutral_dark_gray font-semibold">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="w-[600px] text-sm mb-10 pr-4 text-neutral_gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <BrandedButton title="Learn More"></BrandedButton>
      </div>
    </div>
  );
};

const ReinventSection = () => {
  return (
    <div className="pt-16 pb-16 flex mt-20 bg-silver justify-center ">
      <div>
        <h1 className="w-[600px] text-4xl mb-2 text-neutral_dark_gray font-semibold">
          Helping a local <br />
          <span className="text-green">business reinvent itself</span>
        </h1>
        <p className="w-[600px] text-sm pr-4 text-neutral_dark_gray font-medium">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex space-evenly gap-20">
          <div className="flex items-center gap-4">
            <Image width={48} height={48} src="/members_icon.png" alt="Clubs" />
            <div className="flex flex-col">
              <h1 className="text-neutral_dark_gray text-xl font-bold">
                2,245,341
              </h1>
              <p className="text-neutral_gray">Members</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image width={48} height={48} src="/clubs_icon.png" alt="Clubs" />
            <div className="flex flex-col pl-2">
              <h1 className="text-neutral_dark_gray text-xl font-bold">
                46,328
              </h1>
              <p className="text-neutral_gray">Clubs</p>
            </div>
          </div>
        </div>

        <div className="flex space-between gap-16">
          <div className="flex items-center gap-4">
            <Image
              width={48}
              height={48}
              src="/event_bookings_icon.png"
              alt="Event Bookings"
            />
            <div className="flex flex-col pl-4">
              <h1 className="text-neutral_dark_gray text-xl font-bold">
                828,867
              </h1>
              <p className="text-neutral_gray">Event Bookings</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              width={48}
              height={48}
              src="/payments_icon.png"
              alt="Payments"
            />
            <div className="flex flex-col">
              <h1 className="text-neutral_dark_gray text-xl font-bold">
                1,926,436
              </h1>
              <p className="text-neutral_gray">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignSiteFooterSection = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <Image
        width={441}
        height={433}
        src="/pana.png"
        alt="Illustration"
      />
      <div>
        <h1 className="w-[600px] text-4xl mb-5 text-neutral_dark_gray font-semibold">
          How to design your site footer like we did
        </h1>
        <p className="w-[600px] text-sm mb-10 pr-4 text-neutral_gray">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <BrandedButton title="Learn More"></BrandedButton>
      </div>
    </div>
  );
};

const MeetAllCustomersSection = () => {
  return (
    <div className="flex mt-16 pt-10 justify-center gap-10 bg-silver">
      <Image
        width={326}
        height={326}
        src="/customer_logo_1.png"
        alt="Customer Logo"
      />
      <div className="">
        <p className="w-[748px] mb-10 pt-1 text-neutral_gray">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1 className="text-green font-semibold">Tim Smith</h1>
        <p className="text-[#89939E]">British Dragon Boat Racing Association</p>
        <div className="flex items-center justify-between">
          <Image
            width={48}
            height={48}
            className="cursor-pointer"
            src="/client_logo_1.png"
            alt=""
          />
          <Image
            width={48}
            height={48}
            className="cursor-pointer"
            src="/client_logo_2.png"
            alt=""
          />
          <Image
            width={48}
            height={48}
            className="cursor-pointer"
            src="/client_logo_3.png"
            alt=""
          />
          <Image
            width={48}
            height={48}
            className="cursor-pointer"
            src="/client_logo_4.png"
            alt=""
          />
          <Image
            width={48}
            height={48}
            className="cursor-pointer"
            src="/client_logo_5.png"
            alt=""
          />
          <Image
            width={48}
            height={48}
            className="cursor-pointer"
            src="/client_logo_6.png"
            alt=""
          />
          <ArrowButton title="Meet all customers"></ArrowButton>
        </div>
      </div>
    </div>
  );
};

const ArrowButton: React.FC<{ title: string }> = (props) => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <h1 className="text-green text-center font-semibold pt-8 pl-8 pb-9 pr-4">
        {props.title}
      </h1>
      <Image width={24} height={24} src="/right_arrow.png" alt="Right Arrow" />
    </div>
  );
};

const NexcentBlogSection = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl text-center text-neutral_dark_gray font-semibold">
        Caring is the new marketing
      </h1>
      <div className="w-[630px]">
        <p className="mt-2 mb-4 text-center text-neutral_gray font-normal">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-5">
          <div className="container relative">
            <Image
              width={368}
              height={286}
              src="/blog_image_1.png"
              alt="Blog Image"
              className="w-full h-auto z-0"
            />
            <div className="w-[300px] h-[176px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-silver shadow-md absolute rounded-lg px-4 py-5">
              <p className="text-center text-neutral_gray font-semibold text-xl">
                Creating Streamlined Safeguaring Processes with OneRen
              </p>
              <ArrowButton title="Readmore" />
            </div>
          </div>
          <div className="container relative">
            <Image
              width={368}
              height={286}
              src="/blog_image_2.png"
              alt="Blog Image"
              className="w-full h-auto z-0"
            />
            <div className="w-[300px] h-[176px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-silver shadow-md absolute rounded-lg px-4 py-5">
              <p className="text-center text-neutral_gray font-semibold text-xl">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <ArrowButton title="Readmore" />
            </div>
          </div>
          <div className="container relative">
            <Image
              width={368}
              height={286}
              src="/blog_image_3.png"
              alt="Blog Image"
              className="w-full h-auto z-0"
            />
            <div className="w-[300px] h-[176px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-silver shadow-md absolute rounded-lg px-4 py-5 ">
              <p className="text-center text-neutral_gray font-semibold text-xl">
                Revamping the Membership Model with Triathlon <br /> Australia
              </p>
              <ArrowButton title="Readmore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DemoSection = () => {
  return (
    <div className="mt-48 py-10 text-center bg-silver ">
      <h1 className="text-6xl font-semibold text-[#263238] leading-[76px]">
        Pellentesque suscipit
        <br />
        fringilla libero eu.
      </h1>
      <button className="bg-green text-white rounded-md px-4 py-2 mt-8">
        Get a Demo
      </button>
    </div>
  );
};

const MainContentSection = () => {
  return (
    <main className="mt-10">
      <ClientSection />
      <CommunitySection />
      <PixelgradeSection />
      <ReinventSection />
      <DesignSiteFooterSection />
      <MeetAllCustomersSection />
      <NexcentBlogSection />
      <DemoSection />
    </main>
  );
};

export default MainContentSection;

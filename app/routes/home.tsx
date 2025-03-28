import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grainient" },
    { name: "description", content: "Grainient Clone" },
  ];
}
const BackgroundCard = ({ title, item, url }: any) => {
  const backgroundStyle = {
    backgroundImage: `url(/images/${url})`,
    backgroundSize: "120%",
  };
  return (
    <div
      style={backgroundStyle}
      className="border-2 bg-cover bg-center border-gray-500/20 rounded-[10px] p-5 flex items-end h-[150px]"
    >
      <div>
        <div className="text-lg md:text-[24px]">{title}</div>
        <div className="text-xs md:text-sm">{item}</div>
      </div>
    </div>
  );
};

const PopularCollectionCard = ({ title, item, url }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="border-2 border-gray-500/20 rounded-[10px] p-5 flex items-end h-[300px] "
    >
      <div>
        <div className="text-lg md:text-[28px]">{title}</div>
        <div className="text-xs md:text-sm">{item}</div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, url }: any) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-6">
      <div>
        <img src={url} alt="" />
      </div>
      <div className="text-lg md:text-2xl">{title}</div>
      <div className="text-xs text-lightgray max-w-xs text-center md:text-sm">
        {description}
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, followers, description, url }: any) => {
  return (
    <div className="flex flex-col p-5 gap-5 bg-darkgray rounded-[10px] border border-white/10">
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-red-600 rounded-full overflow-hidden">
          <img src={url} alt="" />
        </div>
        <div className="space-y-1">
          <p className="text-sm md:text-base">{name}</p>
          <p className="text-xs md:text-sm">{followers}</p>
        </div>
      </div>
      <div className="text-xs text-lightgray md:text-sm">{description}</div>
    </div>
  );
};

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="32"
      height="32"
      viewBox="0,0,256,256"
      className="md:hidden"
    >
      <g
        fill="#c2f13c"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(8.53333,8.53333)">
          <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
        </g>
      </g>
    </svg>
  );
};

// #b2b2b2 - gray
// #C2F13C - green
export default function Home() {
  return (
    <>
      <div className="absolute w-full ">
        <div className="bg-white text-xs md:text-base text-black text-center p-2">
          <div className="flex items-center justify-center gap-2">
            <img src="./images/hero-lightning.svg" alt="" />
            Enjoy up to 50% off with the Go Unlimited Plan
          </div>
        </div>

        <nav className=" bg-[#131516] p-4 ">
          <div className=" flex justify-between items-center max-w-[1260px] mx-auto">
            <div className="font-bold">
              <div className="flex items-center gap-2">
                <img src="./images/logo.svg" alt="" />
                <p className="text-lg">Grainient.</p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-5">
                <div>Collections</div>
                <div>Pricing</div>
                <div>Freebies</div>
                <div>FAQ</div>
                <div>Request</div>
              </div>
            </div>
            <div>
              <MenuIcon />
              <div className="hidden md:block space-x-2">
                <button className="font-semibold bg-white  rounded-[10px] px-3 py-2 text-black ">
                  <div className="flex items-center gap-2 ">
                    <img className="" src="./images/user.svg" alt="" />
                    <span className="font-bold">Sign in</span>
                  </div>
                </button>
                <button className="font-semibold bg-[#C2F13C] rounded-[10px] px-3 py-2 text-black ">
                  <div className="flex items-center gap-2 ">
                    <img
                      className=""
                      src="./images/hero-lightning.svg"
                      alt=""
                    />
                    <span className="font-bold">Go Unlimited</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="">
        <section className=" bg-[url(/images/moon.png)] bg-cover bg-center ">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="flex flex-col items-center gap-4">
              <div className="text-sm border rounded-full border-white/10 px-3 py-1 md:text-base">
                Beyond Radiance
              </div>
              <h1 className="text-3xl text-center md:text-5xl">
                Present your <br />
                designs like a Pro
              </h1>
              <p className="text-lightgray text-xs text-center max-w-md md:text-sm">
                Over 1000+ High Quality, grainy textured and smooth gradient
                backgrounds. Elevate your designs with Grainients.
              </p>
              <button className="font-semibold bg-[#C2F13C] rounded-[10px] px-3 py-2 text-black ">
                <div className="flex items-center gap-2 ">
                  <img className="" src="./images/hero-lightning.svg" alt="" />
                  <span className="font-bold">Go Unlimited</span>
                </div>
              </button>
            </div>
          </div>
        </section>
        <div
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="absolute bottom-0 inset-x-0 flex gap-2 overflow-hidden items-center justify-between"
        >
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-1.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-2.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-3.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-4.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-5.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-6.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-7.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-8.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-9.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-10.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-11.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-1.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-2.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-3.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-4.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-5.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-6.jpeg"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-7.png"
            alt=""
          />
          <img
            className="h-[60px] md:h-[100px]"
            src="./images/small-8.jpeg"
            alt=""
          />
        </div>
        <div className="max-w-[1260px] mx-auto">
          <div className="mx-3">
            <section className="pb-5 mt-16">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(139, 139, 139) 0%, rgb(224, 224, 224) 49.5495%, rgb(139, 139, 139) 100%)",
                }}
                className="text-[22px] text-center space-y-7 leading-7 bg-clip-text text-transparent"
              >
                <p>
                  Empower your design presentations with mesmerising Gradients
                </p>
                <p>
                  03 Explosive styles to revolutionize your design aesthetic
                </p>
                <p>Immerse yourself in the symphony of Grainients</p>
              </div>
            </section>

            <section className="pb-5 mt-16">
              <div className="space-y-5">
                <div className="text-xs flex justify-between items-center">
                  <p className="md:text-base">Background Categories</p>
                  <button className="font-semibold rounded-[10px] bg-[#131516] px-4 py-2">
                    Go unlimited
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                  <BackgroundCard
                    title={"All Backgrounds"}
                    item={"973 Backrounds"}
                    url={"bg-1.jpeg"}
                  />
                  <BackgroundCard
                    title={"AI Generated"}
                    item={"451 AI Backgrounds"}
                    url={"bg-2.jpeg"}
                  />
                  <BackgroundCard
                    title={"Smooth Blend"}
                    item={"222 Silky Smooth Gradients"}
                    url={"bg-3.jpeg"}
                  />
                  <BackgroundCard
                    title={"Noisy/Grainy"}
                    item={"300 Noisy/Grainy Textured"}
                    url={"bg-4.jpeg"}
                  />
                </div>
              </div>
            </section>

            <section className="pb-16">
              <div className="space-y-5">
                <div className="text-xs flex justify-between items-center">
                  <p className="md:text-base">Popular Collection</p>
                  <button className="font-semibold rounded-[10px] bg-[#131516] px-4 py-2">
                    See All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <PopularCollectionCard
                    title={"Spectral Gradients (Darks)"}
                    item={"50 Noise/Grainy Textured Gradients for Dark mode"}
                    url={"pop-1.jpeg"}
                  />
                  <PopularCollectionCard
                    title={"Ultravibe"}
                    item={
                      "20 Ultra high quality Hero section gradient backgrounds"
                    }
                    url={"pop-2.png"}
                  />
                  <PopularCollectionCard
                    title={"Moon"}
                    item={"12 Moon crescent Gradient backgrounds"}
                    url={"moon.png"}
                  />
                  <PopularCollectionCard
                    title={"Darkmists"}
                    item={
                      "60 Smooth blurry Gradients blend of creative colors. (Dark mode)"
                    }
                    url={"pop-4.jpeg"}
                  />

                  <PopularCollectionCard
                    title={"Spectral Gradient (Lights)"}
                    item={"50 Noise/Grainy Textured Gradients for Light mode"}
                    url={"pop-5.jpeg"}
                  />
                  <PopularCollectionCard
                    title={"Phantom"}
                    item={"16 Abstract 3D focused glass backgrounds"}
                    url={"pop-6.jpeg"}
                  />
                </div>
              </div>
            </section>

            <section className="pb-16 md:my-32">
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                  <FeatureCard
                    title={"Highest Quality"}
                    description={
                      "Enhance Your Design game with Top-Tier 4K-8k Resolutions."
                    }
                    url={"./images/star-badge.svg"}
                  />
                  <FeatureCard
                    title={"Unbeatable design"}
                    description={
                      "Unmatched Gradient Designs for Cosmic Creations."
                    }
                    url={"./images/lightning.svg"}
                  />
                  <FeatureCard
                    title={"AI Generated"}
                    description={
                      "Each Background generated with highest quality & details."
                    }
                    url={"/images/brush.svg"}
                  />
                  <FeatureCard
                    title={"Go Unlimited"}
                    description={
                      "Covered by our Boundless License for personal and commercial use."
                    }
                    url={"./images/stars.svg"}
                  />
                </div>
              </div>
            </section>

            <section className="md:my-32">
              <div className="text-center space-y-2 mb-16">
                <p className="text-xl md:text-[34px]">
                  ❤️ Loved by Creatives all around the globe
                </p>
                <p className="text-xs text-lightgray md:text-sm">
                  More than 1K of creative people loved Grainient’s customized
                  Gradients and AI generated backgrounds. See what they says
                  about us!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <TestimonialCard
                  name={"Supercharge design"}
                  followers={"131K Followers"}
                  description={
                    "Grainient already looks like a go-to visit on a regular basis, even though they just started! If you want cohesive but visually appealing assets for your UI projects, I’d definitely check them out! I’m impressed by the number of items and styles already available!"
                  }
                  url={"./images/testi-5.png"}
                />
                <TestimonialCard
                  name={"TheChrisdo"}
                  followers={"972K Followers"}
                  description={"They look good."}
                  url={"./images/testi-4.png"}
                />
                <TestimonialCard
                  name={"Jan Mraz"}
                  followers={"330K Followers"}
                  description={
                    "Grainient offers a versatile collection of premium gradients that have become an essential tool in my UI design process, adding depth and texture to interfaces while maintaining a modern aesthetic. Its rich gradient options also play a crucial role in visual brand identity creation, allowing me to craft unique and cohesive color schemes that stand out. Thanks, Basit, for this resource!"
                  }
                  url={"./images/testi-2.png"}
                />
                <TestimonialCard
                  name={"Muhammad Salman"}
                  followers={"388K Followers"}
                  description={
                    "I just checked out Grainient, and I have to say, it looks awesome! The gradients are really cool, and the AI designs are spot on. The site is super easy to use, which I think is going to be a big hit with designers. I’m definitely going to keep it in mind for my own projects. Thanks for the Basit for providing these amazing gradients."
                  }
                  url={"./images/testi-1.png"}
                />
                <TestimonialCard
                  name={"Nick Kutsenko"}
                  followers={"122K Followers"}
                  description={
                    "Grainients really impressed me with its collection of smooth and grainy gradients! As a UX designer, I see a lot of potential in this resource—it’s packed with perfect backgrounds for any project. It’s a true source of inspiration for creating stylish and high-quality designs!"
                  }
                  url={"./images/testi-3.png"}
                />

                <TestimonialCard
                  name={"Aneta Kmiecik"}
                  followers={"75.6K Followers"}
                  description={
                    "Grainient is a perfect place for finding gradient backgrounds for your next design project. The backgrounds are colorful, with natural blur and a delicate noise overlay in many. As an example, Granient’s backgrounds have a perfect use case for adding some juice to your design presentation. As a background, they can add positive impression and make your mockups look visually more appealing. I’m looking forward to using Granient in my projects, portfolio and presentations!!"
                  }
                  url={"./images/testi-6.png"}
                />
              </div>
            </section>

            <section
              style={{
                backgroundImage: `url(/images/pop-4.jpeg)`,
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="px-5 py-10 md:p-20 space-y-8 my-48 border border-white/20 rounded-3xl bg-cover bg-center"
            >
              <div className="space-y-2">
                <div className="text-[20px] md:text-3xl font-semibold">
                  Be notified when new update drops
                </div>
                <div className="text-lightgray text-xs md:text-base">
                  We release new Gradients & AI generated Backgrounds every
                  week.
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3  ">
                <input
                  className="border border-white/10 rounded-[10px] p-3 placeholder:text-lightgray bg-darkgray w-full max-w-sm"
                  placeholder="Type your email here"
                  type="text"
                />
                <button className="py-3 px-5 bg-white rounded-[10px] text-black font-semibold text-base">
                  Get Notified
                </button>
              </div>
            </section>
          </div>
        </div>

        <footer className="bg-darkgray px-5 py-12 rounded-[10px]">
          <div className="md:max-w-[1260px] mx-auto">
            <div className="flex flex-col justify-between gap-12 md:flex-row ">
              <div className="space-y-4">
                <div className="text-2xl font-semibold">
                  <div className="flex items-center gap-2 md:text-[24px]">
                    <img src="./images/logo.svg" alt="" />
                    Grainient.
                  </div>
                </div>
                <p className="text-xs text-lightgray max-w-xs font-medium md:text-sm">
                  High-Quality gradient and abstract AI Generated background for
                  designers and startup creatives.
                </p>
                <p className="text-xs md:text-sm text-lightgray max-w-xs font-medium">
                  Developed by{" "}
                  <a
                    href="https://x.com/syeddhasnainn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Hasnain
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col gap-6">
                  <p className="text-xs md:text-base">Grainients</p>
                  <div className="flex flex-col text-xs md:text-sm text-lightgray space-y-3">
                    <a href="">Collections</a>
                    <a href="">Freebies</a>
                    <a href="">Pricing</a>
                    <a href="">Go unlimited</a>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xs md:text-base">Information</p>
                  <div className="flex flex-col text-xs md:text-sm text-lightgray space-y-3">
                    <a href="">Sign in</a>
                    <a href="">Activate License</a>
                    <a href="">FAQ</a>
                    <a href="">Request</a>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xs md:text-base">Legal</p>
                  <div className="flex flex-col text-xs text-lightgray space-y-3">
                    <a href="">Contact us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">License Agreement</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-16 flex flex-col justify-between gap-12 md:flex-row text-lightgray/50">
              <div className="text-xs  md:text-sm">
                Copyright 2025 Grainient. All rights reserved.
              </div>

              <div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm">
                <a href="">Twitter(X)</a>
                <a href="">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

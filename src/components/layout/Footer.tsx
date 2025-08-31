import FacebookIcon from "../Icons/Social/FacebookIcon";
import InstagramIcon from "../Icons/Social/InstagramIcon";
import LinkedinIcon from "../Icons/Social/LinkedinIcon";
import TwitterIcon from "../Icons/Social/TwitterIcon";
import BrandLogo from "../ui/BrandLogo";
import SubscribeInput from "../ui/SubscribeInput";

function Footer() {
  return (
    <footer className="mt-10 grid grid-cols-12 py-11">
      <div className="col-span-5">
        <BrandLogo />
        <p className="mt-7 max-w-[420px] text-sm leading-8 text-[var(--color-secondary)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-[34px] flex gap-7">
          <a href="#?">
            <FacebookIcon />
          </a>
          <a href="#?">
            <TwitterIcon />
          </a>
          <a href="#?">
            <InstagramIcon />
          </a>
          <a href="#?">
            <LinkedinIcon />
          </a>
        </div>
        <div className="mt-9 text-sm text-[var(--color-secondary)]">
          &copy; 2024 . All rights reserved.
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-between gap-3 py-4 text-lg">
        <h4 className="text-xl font-semibold">Take a tour</h4>
        <a href="#?" className="hover:text-slate-400">
          Features
        </a>
        <a href="#?" className="hover:text-slate-400">
          Partners
        </a>
        <a href="#?" className="hover:text-slate-400">
          Pricing
        </a>
        <a href="#?" className="hover:text-slate-400">
          Product
        </a>
        <a href="#?" className="hover:text-slate-400">
          Support
        </a>
      </div>
      <div className="col-span-2 flex flex-col justify-between gap-3 py-4 text-lg">
        <h4 className="text-xl font-semibold">Our Company</h4>
        <a href="#?" className="hover:text-slate-400">
          About Us
        </a>
        <a href="#?" className="hover:text-slate-400">
          Agents
        </a>
        <a href="#?" className="hover:text-slate-400">
          Blog
        </a>
        <a href="#?" className="hover:text-slate-400">
          Media
        </a>
        <a href="#?" className="hover:text-slate-400">
          Contact Us
        </a>
      </div>
      <div className="col-span-3 py-4">
        <h4 className="text-xl font-semibold">Subscribe</h4>
        <p className="mt-7 pr-6 text-sm leading-6 text-[var(--color-secondary)]">
          Subscribe to get latest property, blog news from us
        </p>
        <form className="mt-6">
          <SubscribeInput />
        </form>
      </div>
    </footer>
  );
}

export default Footer;

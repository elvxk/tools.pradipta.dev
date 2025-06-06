import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 opacity-75">
      <div className="text-center items-center justify-center flex flex-col">
        <Link
          className="flex flex-col justify-between items-center text-sm font-bold"
          href="https://tools.pradipta.dev"
          target="_blank"
        >
          <Image
            src="/eltoolnobg.webp"
            alt="elvxk tool"
            width={23}
            height={23}
          />
          ELVXK TOOL
        </Link>
        <p className="text-sm">
          Made with love © {new Date().getFullYear()}{" "}
          <Link href="https://pradipta.dev" target="_blank">
            elvxk
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

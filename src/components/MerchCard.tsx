import { FiEye, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { LuEuro } from "react-icons/lu";

export const GridCards = () => {
    return (
        <div className="bg-neutral-900 p-4 text-neutral-50 md:p-12">
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-neutral-700 border border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
                <Card
                    href="/oops"
                    title="Liquid Death X Metallica Sweatshorts"
                    price="70"
                    src="/merch/metallicashorts.webp"
                />
                <Card
                    href="/oops"
                    title="Reusable Slaughter Bottle"
                    price="51"
                    src="/merch/blackBottle.webp"
                />
                <Card
                    href="/oops"
                    title="The Flasket"
                    price="46"
                    src="/merch/theFlasket.webp"
                />
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-neutral-700 border-x border-b border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
                <Card
                    href="/oops"
                    title="Chainsaw Massacre Hat"
                    price="44"
                    src="/merch/capChainsaw.webp"
                />
                <Card
                    href="/oops"
                    title="Nixon Death Clock III"
                    price="290"
                    src="/merch/nixonIIIclock.webp"
                />
                <Card
                    href="/oops"
                    title="Liquid Death X PSD Boxer"
                    price="26"
                    src="/merch/liquidXpsd.webp"
                />
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-neutral-700 border-x border-b border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
                <Card
                    href="/oops"
                    title="Kill Murray Boonie Hat"
                    price="11 min"
                    src="/merch/killmurray.webp"
                />
                <Card
                    href="/oops"
                    title="Vicious Death Hat"
                    price="21 min"
                    src="/merch/viciousDeath.webp"
                />
                <TitleCard />
            </div>
        </div>
    );
};

const Card = ({
    href,
    title,
    price,
    src,
}: {
    href: string;
    title: string;
    price: string;
    src: string;
}) => {
    return (
        <a
            href={href}
            className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors hover:bg-neutral-950 md:h-80 md:p-9"
        >
            <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
                <LuEuro  className="text-base" />
                <span>{price}</span>
            </div>
            <h2 className="relative z-10 text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
                {title}
            </h2>

            <FiEye className="absolute right-3 top-4 z-10 text-2xl text-neutral-400 transition-colors group-hover:text-neutral-50" />

            <div
                className="absolute bottom-0 left-0 right-0 top-0 opacity-30   transition-all group-hover:opacity-100 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <Corners />
        </a>
    );
};

const Corners = () => (
    <>
        <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
        <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-gold transition-all duration-500 group-hover:scale-100" />
    </>
);

const TitleCard = () => {
    return (
        <a
            href="/oops"
            target="_blank"
            className="group relative flex h-56 flex-col justify-between bg-neutral-950 p-6 md:h-80 md:p-9"
        >
            <h2 className="text-4xl uppercase leading-tight">
                <span className="text-neutral-400 transition-colors duration-500 group-hover:text-gold">
                    CHECK OUT
                </span>
                <br />
                OUR FULL LIST OF MERCH
            </h2>
            <div className="flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
                <FiExternalLink className="text-base" />
                <span>collections / merch-store</span>
            </div>

            <FiArrowUpRight className="absolute right-3 top-4 text-2xl text-neutral-400 transition-colors duration-500 group-hover:text-gold-300" />
        </a>
    );
};
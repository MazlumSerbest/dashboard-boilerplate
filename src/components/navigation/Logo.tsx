import Image from "next/image";

type Props = {
    width: number;
    height: number;
};

export default function Logo(props: Props) {
    const { width, height } = props;

    return (
        <div className="flex justify-center">
            <Image
                src="/images/vercel.svg"
                width={width}
                height={height}
                alt="Company Logo"
            />
        </div>
    );
}

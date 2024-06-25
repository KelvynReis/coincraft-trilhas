import { ComponentProps } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

type CardItemProps = {
    title: string;
    description: string;

} & ComponentProps<'div'>

export default function CardItem({ title, description, className, ...rest }: CardItemProps) {
    return (
        <div className="w-full max-w-[400px] relative" {...rest}>
            <div className="w-full max-w-[360px]  left-[10px] top-[10px] absolute bg-gradient-to-l from-[#55D98D] via-[#46B671] to-[#389658] rounded-2xl shadow" >
                <div className={cn('w-full  center-col gap-5 px-6 py-6', className)}>
                    <Icon name={'LuPiggyBank'} size={37} className='text-white w-[38] h-[31]' />
                    <span className='font-league text-white text-3xl font-semibold uppercase'>{title}</span>
                    <p className='text-center text-white font-sans'>{description}</p>
                </div>
            </div>
            <div className="w-full max-w-[380px] h-64  rounded-3xl border border-green-400" />
        </div>
    )
}

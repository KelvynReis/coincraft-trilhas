import { ComponentProps } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

type CardItemProps = {
    title: string;
    description: string;

} & ComponentProps<'div'>

export default function CardItem({ title, description, className, ...rest }: CardItemProps) {
    return (
        <div className="w-full max-w-[380px] h-64  rounded-3xl border border-green-400 flex items-center justify-center" {...rest}>
            <div className=" mx-4 max-w-[350px]  md:max-w-[360px] z-10 absolute bg-gradient-to-l from-[#55D98D] via-[#46B671] to-[#389658] rounded-2xl shadow" >
                <div className={cn('  center-col gap-5  md:px-2 py-6', className)}>
                    <Icon name={'LuPiggyBank'} size={37} className='text-white w-[30] h-[25] md:w-[38] md:h-[31]' />
                    <span className='font-league text-white text-lg md:text-3xl font-semibold uppercase tracking-tighter'>{title}</span>
                    <p className='text-center text-white font-sans text-sm md:text-base'>{description}</p>
                </div>
            </div>
        </div>
    )
}

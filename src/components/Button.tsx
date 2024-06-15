type ButtonProps = {
    name: string
    handleButton: () => void
}

export function Button({ name, handleButton }: ButtonProps) {

    return (
        <button onClick={() => handleButton()} className="p-2 text-white w-full border border-white rounded-lg cursor-pointer hover:bg-white/80 hover:transition-all">
            {name}
        </button>
    )
}
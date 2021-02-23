interface ButtonProps {
    color: string,
    children: string
}

export function Button(props: ButtonProps) {
    return (
        <button style={{ backgroundColor: props.color}}>{props.children}</button>
    )
}

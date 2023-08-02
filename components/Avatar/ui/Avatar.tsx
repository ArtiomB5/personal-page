import Image from 'next/image'

export const Avatar = (props: {src: string}) => {
    return <>
        <Image className={"rounded w-36 h-36"} src={props.src} alt={"Extra large avatar"} width={200} height={200}/>
    </>
}
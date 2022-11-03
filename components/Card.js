import Image from 'next/image'

const Card = (props) => {
    return (
        <div className='meal'>
            <Image
                src={props.thumb}
                alt={props.name} title=""
                width={350}
                height={200}
            />
            <h2>{props.name}</h2>
        </div>
    )
}
export default Card
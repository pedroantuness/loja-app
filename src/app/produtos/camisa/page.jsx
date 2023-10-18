import Image from "next/image";
import Link from "next/link";

export default function Camisa(){

    return(

        <div>
            <h1>Camisa</h1>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam id ratione cupiditate in consequatur, qui consectetur odio velit tempore ullam placeat cum est ipsam eligendi necessitatibus iste neque unde.
                </p>
                <figure>
                    <Image
                        src="https://prints.ultracoloringpages.com/551ada1f48c923acddbbb135962eebb9.png"
                        alt="Camisa"
                        width={300}
                        height={300}
                    />
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>

    )

}
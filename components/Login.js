import Image from 'next/image';
import { signIn } from 'next-auth/client';

export const Login = ()=>{
    return(
        <div className="grid place-items-center">
            <Image
					alt='facebook'
					src='https://links.papareact.com/5me'
					width={200}
					height={300}
					objectFit="contain"
				/>
                <h1
                onClick={signIn}
                className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">
                    Login with Facebook
                </h1>
        </div>
    )
}
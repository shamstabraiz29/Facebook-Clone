import Image from 'next/image';
import { session, signOut, useSession } from 'next-auth/client';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { db, storage } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

export const InputBox = () => {
	const [session] = useSession();
	const inputRef = useRef(null);
	const addImgRef = useRef(null);
	const [postImg, setPostImg] = useState(null);

	console.log('here is image', postImg);

	const sendpost = async (e) => {
		e.preventDefault();
		console.log(db, 'testing');
		if (!inputRef.current.value) return;

		const colRef = collection(db, 'posts');

		await addDoc(colRef, {
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
		});
		inputRef.current.value = '';
	};

	const onImageChange = (e) => {
		const file = e.target.files;
		const reader = new FileReader();
		reader.readAsDataURL(file[0]);

		reader.onload = (readerEvent) => {
			setPostImg(readerEvent.target.result);
		};
	};

	const removeImg = () => {
		setPostImg(null);
	};

	return (
		<div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
			<div className='flex space-x-4 items-center'>
				<Image
					className='rounded-full'
					alt=''
					src={session.user.image}
					width={40}
					height={40}
					layout='fixed'
				/>
				<form className='flex flex-1 '>
					<input
						className='rounded-full h-12 bg-gray-100, flex-grow px-5 focus:outline-none'
						type='text'
						ref={inputRef}
						placeholder={`What's on your mind, ${session.user.name} ?`}
					/>
					<button hidden type='submit' onClick={sendpost}>
						Submit
					</button>
				</form>
				{postImg && (
					<div
						onClick={removeImg}
						className='flex flex-col filter hover:brightness-110 transition duration-150 hover: scale-105 cursor-pointer'
					>
						<Image
							className='h-8 object-contain'
							src={postImg}
							alt=''
							width={20}
							height={20}
						/>
						<p className='text-xs text-red-500 text-center'>Remove</p>
					</div>
				)}
			</div>
			<div className='flex justify-evenly p-3 border-t'>
				<div className='inputIcon'>
					<VideoCameraIcon className='h-7 text-red-500' />
					<p className='text-xs sm:text-sm xl:text-base'>Live Vedio</p>
				</div>
				<div className='inputIcon' onClick={() => addImgRef.current.click()}>
					<CameraIcon className='h-7 text-green-400' />
					<p className='text-xs sm:text-sm xl:text-base'>photo/Vedio</p>
					<input hidden type='file' ref={addImgRef} onChange={onImageChange} />
				</div>
				<div className='inputIcon'>
					<EmojiHappyIcon className='h-7 text-yellow-300' />
					<p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
				</div>
			</div>
		</div>
	);
};

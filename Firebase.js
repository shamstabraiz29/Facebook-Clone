import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDjwdxYU09KR9-Telm4qFS4JoELafO3fbQ',
	authDomain: 'facebook-clone-nextjs-2dcc9.firebaseapp.com',
	projectId: 'facebook-clone-nextjs-2dcc9',
	storageBucket: 'facebook-clone-nextjs-2dcc9.appspot.com',
	messagingSenderId: '662489031143',
	appId: '1:662489031143:web:ae71393e61a214e3f35d42',
	measurementId: 'G-VFB246J0M5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage();

export { db, storage };

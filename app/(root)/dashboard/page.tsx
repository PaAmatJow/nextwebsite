'use client'


import { RequestInit } from "next/dist/server/web/spec-extension/request";
import useSWR from "swr";

// interface Data {
//   userId: number;
//   id: number;
//   title: string;
//   body: string
// }

const Dashboard = () => {
	// const [data, setData] = useState([]);
	// // eslint-disable-next-line no-unused-vars
	// const [err, setErr] = useState(false);
	// // eslint-disable-next-line no-unused-vars
	// const [IsLoading, setIsLoading] = useState(false); 

	// useEffect(() => {
	// 	const getData = async () => {
	// 		setIsLoading(true);
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
	// 			cache: 'no-store',
	// 		});

	// 		if (!res.ok) {
	// 			setErr(true);
	// 		}

	// 		const post = await res.json();
	// 		setData(post);
	// 		setIsLoading(false);
	// 	};
	// 	getData();
	// }, []);

  const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())

    const { data, error, isLoading } = useSWR(
			'https://jsonplaceholder.typicode.com/posts',
			fetcher
		);

    if (error) return <div>failed to load</div>;
		if (isLoading) return <div>loading...</div>;

	console.log('ma data:', data);

	return <div>Dashboard</div>;
}
export default Dashboard
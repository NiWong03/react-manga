import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {useState, useEffect} from 'react';

function App() {
	const [mangaList, SetMangaList] = useState([]);
	const [topManga, SetTopManga] = useState([]);
	const [search, SetSearch] = useState("");

	// const GetTopManga = async () => {
	// 	const temp = await fetch('https://api.jikan.moe/v4/top/manga')
	// 		.then(res => res.json());

	// 		// SetTopManga(temp.top.slice(0,5));
	// }
	const GetTopManga=async()=>{
		const res=await fetch(`https://api.jikan.moe/v4/top/manga?limit=10`)
		const resData= await res.json();
		SetTopManga(resData.data)
		
	}

	const HandleSearch = e =>{
		e.preventDefault();

		FetchManga(search);
	}

	const FetchManga = async (query)=>{
		const res=await fetch(`https://api.jikan.moe/v4/manga?q=${search}&limit=20`)
      	const resData= await res.json();

		console.log(resData.data)

      	SetMangaList(resData.data)
		

	}

	useEffect(()=> {
		GetTopManga();
	}, []);
	useEffect(()=>{
		SetMangaList(topManga);
	})

	console.log(mangaList);

	


  	return (
    <div className="App">
		<Header />
		<div className="content-wrap">
			<Sidebar
				topManga={topManga}/>
			<MainContent
				HandleSearch = {HandleSearch}
				search = {search}
				SetSearch ={SetSearch}
				mangaList = {mangaList}
				topManga={topManga} />
		</div> 
		
    </div>
  );
}

export default App;

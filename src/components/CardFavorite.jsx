import React from 'react'
// import ReactLoading from 'react-loading';
import { useHistory } from 'react-router';
export default function Home(props) {
    let history = useHistory();

    const handleClick = () => {
        history.push({ pathname: `/detail/${props.dataFavorite.number}`, state: props.dataFavorite })
    }

    return (
        <div className="md:w-1/2 lg:w-1/3 py-4 px-4" >
            <div className=" ">
                <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">

                    <div className="flex justify-center">
                        <img src="https://cdn-brilio-net.akamaized.net/news/2020/06/24/187066/1255167-aplikasi-alquran-untuk-smartphone.png" className="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16" alt="ayat alquran" />
                    </div>
                    <div className="py-2 px-2">
                        <div className=" font-bold font-title text-center">{props.dataFavorite.name}</div>

                        <div className="text-sm font-light text-center my-2">{props.dataFavorite.englishName}</div>
                    </div>
                    <button onClick={handleClick} className="hover:bg-green-600 rounded-md px-2 hover:text-white">Detail</button>
                </div>
            </div>
        </div >
    )
}


// class Home extends React.Component {
//     render() {
//         return <div className="flex flex-wrap">
//             {
//                 this.props.dataAlquran.map(e => (
//                     <React.Fragment key={e.number}>
//                         <div className="md:w-1/2 lg:w-1/3 py-4 px-4" >
//                             <div className=" ">
//                                 <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">

//                                     <div className="flex justify-center">
//                                         <img src="https://cdn-brilio-net.akamaized.net/news/2020/06/24/187066/1255167-aplikasi-alquran-untuk-smartphone.png" className="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16" />
//                                     </div>
//                                     <div className="py-2 px-2">
//                                         <div className=" font-bold font-title text-center">{e.name}</div>

//                                         <div className="text-sm font-light text-center my-2">{e.englishName}</div>
//                                     </div>
//                                     <button onClick={() => this.props.handleClick(e.number, true)} className="hover:bg-green-600 rounded-md px-2 hover:text-white">Detail</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </React.Fragment>
//                 ))
//             }
//         </div>


//     }
// }

// export default Home;

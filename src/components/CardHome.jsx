import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { addDataFavorite } from '../store/actions/favorite';
import { useHistory } from 'react-router';
export default function Home(props) {
    let history = useHistory();
    const dispatch = useDispatch()
    const handleClick = () => {
        history.push(`/detail/${props.dataAlquran.number}`)
    }

    const addFavorite = () => {
        if (props.dataAlquran) {
            Swal.fire({
                icon: 'success',
                title: 'success add favorite',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(addDataFavorite(props.dataAlquran))
        } else {
            dispatch(addDataFavorite(true))
        }
    }

    return (
        <div className="md:w-1/2 lg:w-1/3 py-4 px-4" >
            <div className=" ">
                <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">

                    <div className="flex justify-center">
                        <img src="https://cdn-brilio-net.akamaized.net/news/2020/06/24/187066/1255167-aplikasi-alquran-untuk-smartphone.png" className="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16" alt="ayat alquran" />
                    </div>
                    <div className="py-2 px-2">
                        <div className=" font-bold font-title text-center">{props.dataAlquran.name}</div>

                        <div className="text-sm font-light text-center my-2">{props.dataAlquran.englishName}</div>
                    </div>
                    <button onClick={handleClick} className="hover:bg-green-600 rounded-md px-2 hover:text-white">Detail</button>
                    <button onClick={addFavorite} className="hover:bg-green-600 rounded-md px-2 hover:text-white">Favorite</button>
                </div>
            </div>
        </div >
    )
}
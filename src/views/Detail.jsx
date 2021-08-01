import { useEffect } from 'react'
import ReactLoading from 'react-loading';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataDetail } from '../store/actions/detail';
import ReactAudioPlayer from 'react-audio-player';

export default function Detail({ handlerBack }) {
    let history = useHistory()
    let id = useParams()
    const dispatch = useDispatch()
    const dataDetail = useSelector(state => state.dataDetail.data)
    const errors = useSelector(state => state.dataDetail.isError)

    useEffect(() => {
        dispatch(fetchDataDetail(id.id))
    }, [dispatch, id.id])

    handlerBack = () => {
        history.push('/')
    }

    if (errors) {
        return (
            <div>
                <h1 className="pt-10 text-center text-5xl">404</h1>
                <h1 className="pt-2 text-center ">PAGE NOT FOUND</h1>
            </div>
        )
    } else if (!dataDetail) {
        return (
            <div className="grid justify-items-center pt-10">
                <ReactLoading type={'spin'} color={'green'} height={'10%'} width={'10%'} />
                <h1 className="pt-10">...Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <div className="antialiased font-sans bg-gray-200">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <h1 className="text-center font-serif text-3xl pt-2 pb-4">Surah {dataDetail.data[0].englishName} : {dataDetail.data[0].name}</h1>
                            <div className="grid grid-cols-2">
                                <button onClick={() => handlerBack()} className="hover:bg-green-600 rounded-md px-2 mb-2 hover:text-white w-32"> Back to home</button>
                                <h1 className="font-serif text-xl text-right">Place : {dataDetail.data[0].revelationType}</h1>
                            </div>
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-white">
                                <table className="min-w-full leading-normal">
                                    < thead >
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Ayat
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Translate english
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Arabic
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Audio
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            dataDetail.data[0].ayahs.map((e, i) => {
                                                return (
                                                    <tr key={e.number}>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {dataDetail.data[1].ayahs[i].text}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {e.text}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <ReactAudioPlayer
                                                                src={dataDetail.data[2].ayahs[i].audio}
                                                                controls
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
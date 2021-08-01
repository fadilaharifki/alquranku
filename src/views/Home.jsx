import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAlquran } from '../store/actions/dataAlquran'
import ReactLoading from 'react-loading';
import Card from '../components/CardHome';
import debounce from 'lodash.debounce';

export default function Home() {
    const selector = useSelector(state => state.dataAlquran)
    const errors = useSelector(state => state.dataAlquran.isError)
    const [idSurah, setIdSurah] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataAlquran(idSurah))
    }, [dispatch, idSurah])
    const inputSearch = (event) => {
        if (event.target.value) {
            if (+event.target.value <= 114 && +event.target.value > 0) {
                setIdSurah(`/${event.target.value}`)
            } else {
                setIdSurah()
            }
        } else {
            setIdSurah()
        }
    }

    const debouncedChangeHandler = debounce(inputSearch, 1000)

    const search = (event) => {
        event.preventDefault()
        dispatch(fetchDataAlquran(idSurah))
    }

    if (errors) {
        return (
            <div>
                <h1 className="pt-10 text-center text-5xl ">404</h1>
                <h1 className="pt-2 text-center ">PAGE NOT FOUND</h1>
            </div>
        )
    } else if (!selector.dataAlquran) {
        return (
            <div className="grid justify-items-center pt-10">
                <ReactLoading type={'spin'} color={'green'} height={'10%'} width={'10%'} />
                <h1 className="pt-10">...Loading...</h1>
            </div>
        )
    } else if (selector.dataAlquran.data.length > 0) {
        return (
            <React.Fragment>

                <h1 className="text-center font-serif text-3xl pt-2 pb-4 cursor-pointer hover:bg-red-800 hover:text-white theme-s-sm:bg-custom-yellow theme-s-sm:text-white">Alquran Surah</h1>
                <div className="flex justify-end">
                    <form onSubmit={search}>
                        <input
                            onChange={debouncedChangeHandler}
                            className=" md:w-auto w-48
                border-2 border-green-500
                rounded-md
                m-6
                p-1
                focus:outline-none
                focus:ring-2 focus:ring-green-600
                focus:border-transparent
                ...
              "
                            placeholder="no surah 1 between 114"
                        />
                        <button type="submit"
                            className="
                hover:bg-green-700 
                hover:text-white
                px-4
                border border-green-500
                rounded-xl
                focus:outline-none
                focus:ring-2 focus:ring-green-600 focus:ring-opacity-50
                h-10
                mt-6
                mr-10
              "
                        >
                            search
                        </button>
                    </form>
                </div>
                <div className="flex flex-wrap">
                    {
                        selector.dataAlquran.data.map((e) => {
                            return <Card dataAlquran={e} key={e.number}></Card>
                        })
                    }
                </div>

            </React.Fragment >
        )
    } else {
        return (
            <React.Fragment>

                <h1 className="text-center font-serif text-3xl pt-2 pb-4">Alquran Surah</h1>
                <div className="flex justify-end">
                    <form onSubmit={search}>
                        <input
                            onChange={debouncedChangeHandler}
                            className=" md:w-auto w-48
                border-2 border-green-500
                rounded-md
                m-6
                p-1
                focus:outline-none
                focus:ring-2 focus:ring-green-600
                focus:border-transparent
                ...
              "
                            placeholder="input number surah max 144"
                        />
                        <button
                            type="submit"
                            className="
                hover:bg-green-700 
                hover:text-white
                px-4
                border border-green-500
                rounded-xl
                focus:outline-none
                focus:ring-2 focus:ring-green-600 focus:ring-opacity-50
                h-10
                mt-6
                mr-10
              "
                        >
                            search
                        </button>
                    </form>
                </div>
                <div className="flex flex-wrap">
                    {
                        <Card dataAlquran={selector.dataAlquran.data}></Card>
                    }
                </div>

            </React.Fragment >
        )
    }
}
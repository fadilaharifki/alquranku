// import { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { setDataAlquran } from '../store/action'

// const useFetch = (Url) => {
//     // const dispatch = useDispatch()
//     // console.log(Url, 'KKKKKKKKKKKkk');
//     const [data, setData] = useState()
//     useEffect(() => {
//         fetch(Url)
//             .then(response => {
//                 return response.json()
//             })
//             .then(result => {
//                 setData(result)
//                 // dispatch(setDataAlquran(result))
//             })
//             .catch(err => console.log(err))
//     }, [Url])

//     return { data }
// }

// export default useFetch
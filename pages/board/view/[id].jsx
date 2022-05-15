//      board/view/1
import { useRouter } from "next/router"


const View = (props) => {
    console.log('hello front')

    const router = useRouter()
    return (
        <>
            view page 
            <h2> {router.query.id} {props.name} </h2>
        </>
    )
}

export async function getServerSideProps(context){
    console.log('hello server')
    console.log(context.query.id)
    return {//return은 props 만 리턴
        props:{
            name:'aa22'
        }
    }
}
//웹서버에서 돌아가는 코드

//싱글페이지 어플리케이션

export default View
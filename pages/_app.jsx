import DefaultLayout from "../component/defaultLayout"
import 'antd/dist/antd.css'


const App = ({ Component,pagePorps}) => {
    return (
        <>
            Hello Next
            <DefaultLayout>
                <Component {...pagePorps} />
            </DefaultLayout>
        </>
    )
}

export default App
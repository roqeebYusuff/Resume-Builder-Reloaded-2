import { Button } from "reactstrap"
import {BsDownload} from 'react-icons/bs'

const StepFinal = ({download}) => {
    return (
        <>
            <div>Looking good!</div>
            <Button color='success' onClick={download}> <BsDownload className='mr-2' /> Download</Button>
        </>
    )
}

export default StepFinal
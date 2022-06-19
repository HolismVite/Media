import { DialogForm, Upload } from '@Form'

const inputs = <>
    <Upload
        column='Image'
        multiple={true}
    />
</>

const CreateImage = () => {
    return <DialogForm
        title='Upload image(s)'
        entityType='Image'
        inputs={inputs}
    />
}

export default CreateImage
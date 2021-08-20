import React from 'react'

const data = {
    "form": {
        "sections": [
            {
                "order": 1,
                "section_title": "Basic Information",
                "fields": [
                    {
                        "name": "name",
                        "label": "Name",
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "textbox"
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "hidden": false,
                        "required": true,
                        "data_type": "String",
                        "html_element": "email"
                    },
                    {
                        "name": "phone",
                        "label": "Phone",
                        "required": true,
                        "data_type": "number",
                        "html_element": "textbox"
                    },
                    {
                        "name": "age",
                        "label": "Age",
                        "hidden": false,
                        "options": [],
                        "required": true,
                        "data_type": "number",
                        "html_element": "number"
                    },
                    {
                        "name": "photo",
                        "label": "Photo",
                        "hidden": false,
                        "options": [],
                        "required": true,
                        "data_type": "Image",
                        "html_element": "file"
                    }
                ]
            }
        ]
    }
}

export default function Jsonform1() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <form className="form-outer" onSubmit={onSubmit}>
                    {
                        data.form.sections.map(formData => {
                            console.log("formData", formData)
                            return(
                                    <div>
                                        <h1>{formData.section_title}</h1>
                                        {
                                            formData.fields.map(inputData => {
                                                console.log("inputData", inputData)
                                                return(
                                                    <div>
                                                        <label>{inputData.label}</label>
                                                        <input type={inputData.html_element} name={inputData.name} required={inputData.required} datatype={inputData.data_type} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            )
                        })
                    }
                <button type="onSubmit">Submit</button>        
            </form>
        </div>
    )
}

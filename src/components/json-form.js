import React from 'react'

const regexEmail = "/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/";
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
export default function Jsonform() {
    const submitForm = () => {

    }
    return (
        <div className="container">
            <form className="form-outer" onSubmit={submitForm}>
                {
                    data.form.sections.map(item => {
                        console.log("itemitem", item)
                        return (
                            <div>
                                <h1>{item.section_title}</h1>
                                {
                                    item.fields.map(formData => {
                                        console.log("formData", formData)
                                        return (
                                            <div>
                                                <label>{formData.label}:</label>
                                                {
                                                    formData.html_element === "email" ? <input type={formData.html_element} name={formData.name} hidden={formData.hidden} required={formData.required} /> :
                                                        <input type={formData.html_element} datatype={formData.data_type} name={formData.name} hidden={formData.hidden} required={formData.required} />
                                                }
                                                
                                            </div>      
                                            )
                                    })
                                }    
                            </div>
                        )
                    })
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

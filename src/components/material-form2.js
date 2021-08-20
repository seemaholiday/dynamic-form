import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
const data = {
    "form": {
        "sections": [
            {
                "section_title": "Material UI Form Using Json",
                "fields": [
                    {
                        "name": "name",
                        "label": "Name",
                        "required": true,
                        "hidden": true,
                        "data_type": "String",
                        "html_element": "TextField",
                        "error": true,
                        "variant": "outlined"
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "hidden": false,
                        "required": true,
                        "data_type": "email",
                        "html_element": "TextField",
                        "error": TouchRipple,
                        "variant": "outlined"
                    },
                    {
                        "name": "age",
                        "label": "Age",
                        "hidden": false,
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "TextField",
                        "error": false,
                        "variant": "outlined"
                    },
                    {
                        "name": "phone",
                        "label": "Phone",
                        "hidden": true,
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "TextField",
                        "error": false,
                        "variant": "outlined"
                    },
                    {
                        "name": "address",
                        "label": "Address",
                        "minRows": "3",
                        "placeholder": "Enter Address",
                        "html_element": "TextArea",
                        "variant": "outlined"
                    },
                    {
                        "name": "country",
                        "label": "Country",
                        "hidden": false,
                        "required": true,
                        "data_type": "Image",
                        "error": false,
                        "variant": "outlined",
                        "placeholder": "Choose Country",
                        "options": [
                            {
                                "label": "India",
                                "value": "india"
                            },
                            {
                                "label": "Canada",
                                "value": "canada"
                            },
                            {
                                "label": "England",
                                "value": "england"
                            }
                        ],
                        "html_element": "Select"
                    },
                    {
                        "name": "hobby",
                        "label": "Hobby",
                        "hidden": false,
                        "error": false,
                        "variant": "outlined",
                        "options": [
                            {
                                "label": "Football",
                                "value": "football"
                            },
                            {
                                "label": "Cricket",
                                "value": "cricket"
                            },
                            {
                                "label": "Travel",
                                "value": "travel"
                            }
                        ],
                        "required": false,
                        "html_element": "multiple"
                    }
                ],
                "feilds2": [
                    {
                        "section_title3": "What would you like to have?",
                        "required": false,
                        "checkFeilds": [
                            {
                                "name": "tea",
                                "value": "tea",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Tea"
                            },
                            {
                                "name": "coffy",
                                "value": "coffy",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Coffy"
                            },
                            {
                                "name": "juice",
                                "value": "juice",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Juice"
                            },
                            {
                                "name": "soup",
                                "value": "soup",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "label": "Soup"
                            }
                        ]
                    }
                ]
            }
        ]
    }

}

export default function MaterialForm2() {
    const [val, setVal] = React.useState({name:'', email:'', age:'', phone:'', address:''})
    const [selectCountry, setCountry] = React.useState('')
    const [selectHobby, setHobby] = React.useState([])
    const [like, setLike] = React.useState([])
    const [error, setError] = React.useState(null)
    const [addressError, setAddressError] = React.useState(null)
    const [required, setRequired] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')
    const [helperTextAddress, setHelperTextAddress] = React.useState('')
    const [emailHelperText, setEmailHelperText] = React.useState('')
    const [phoneHelperText, setPhoneHelperText] = React.useState('')
    const [show, setShow] = React.useState(false)
    
    const onHandleChange = (e) => {
            console.log("e.target.value", e.target.value)
            setVal({
                ...val,
                [e.target.name]:e.target.value
            })
            if(!val.name && !val.email && !val.age && !val.phone) {
                setError(false)
                setHelperText('')
            } else if(e.target.name === "email") {
                var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                if(regex.test(e.target.value))
                {
                    setEmailHelperText('')
                } else {
                    setEmailHelperText('Not Valid Email')
                }
            } else if(e.target.name  === "address") {
                    if(e.target.value) {
                        setAddressError(true)
                        setHelperTextAddress('required')
                    } 
                    else{
                        setAddressError(false)
                        setHelperTextAddress('')
                    }
            }
    };
    const likeEvent = (e) => {
        setLike([...like, e.target.defaultValue])
    }
    const onSelectCountry = (e) => {
        if(selectCountry !== "") 
        {
            setError(false)
            setHelperText('')
        }
        else{
            setError(true)
            setHelperText('required')
            setCountry(e.target.innerText)
        }
    }
    const onSelectHobby = (e) => {
        console.log("setHobby", e.target.innerText)
        if(selectHobby.length > 0) 
        {
            setError(false)
            setHelperText('')
        }
        else{
            setError(true)
            setHelperText('required')
            var arr = []
            arr.push(e.target.innerText)
            setHobby(arr)
        }
    }
    const submitForm = (e) => {
        e.preventDefault();

        console.log("valvalval", val)
        if(val.address) {
            setAddressError(false)
            setHelperTextAddress('')
        } else{
            setAddressError(true)
            setHelperTextAddress('required')
        }
        if(val.name !== "" && val.email !== "" && val.age !== "" && val.phone !== "" && selectCountry !== "" && selectHobby.length > 0){
            console.log("Submit Data")
            setError(false)
            setHelperText('')
            setShow(true)
        }
        else {
            setError(true)
            setHelperText('required')
        }

    }
    return (
        <form className="form-outer-wrapper" onSubmit={submitForm} error>
            <div>
                {
                    console.log("errorrrrrrr", selectCountry)
                }
                {show ?
                <ul style={{listStyle:'none'}}>
                    <li>Name:{val.name}</li>
                    <li>Age: {val.age}</li>
                    <li>Email:{val.email}</li>
                    <li>Address:{val.address}</li>
                    <li>Country:{selectCountry}</li>

                </ul>
                : ""}
            </div>
            {
                data.form.sections.map((item) => {
                    return (
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}> <h2>{item.section_title}</h2></Grid>
                            {
                                item.fields.map(data => {
                                    console.log("data", data)
                                    return (
                                        <Grid item xs={12} sm={6}>
                                            {
                                                data.data_type === "String" ?
                                                    <TextField fullWidth={true} error={error} variant={data.variant} label={data.label} name={data.name} type={data.data_type === "String"} onChange={onHandleChange} helperText={helperText} />
                                                    : 
                                                    data.data_type === "email" ?
                                                    <TextField fullWidth={true} error={error} variant={data.variant} label={data.label} name={data.name} type={data.data_type} onChange={onHandleChange} helperText={emailHelperText} />
                                                    : 
                                                    data.data_type === "Integer" ? 
                                                    <TextField fullWidth={true} error={error} InputProps={{ inputProps: { min: data.name === "phone" ? "" : 10,  max: data.name === "phone" ? "" : 40} }} min={18} max={40} variant={data.variant} label={data.label} name={data.name} type={data.data_type === "Integer" ? "number" : "String"} onChange={onHandleChange} helperText = {helperText} />
                                                    :
                                                    data.html_element === "TextArea" ?
                                                    <div>
                                                        <TextareaAutosize className="textArea" name={data.name} label={data.label} variant={data.variant} minRows={data.minRows} placeholder={data.placeholder}  onChange={onHandleChange}/>
                                                        <div style={{color:'red', fontSize:'12px'}}>{helperTextAddress}</div>
                                                    </div>
                                                        : data.html_element === "Select" ?
                                                            <Autocomplete
                                                                id="combo-box-demo"
                                                                options={data.options}
                                                                getOptionLabel={(option) => option.label}
                                                                style={{ width: 300 }}
                                                                onChange={onSelectCountry}

                                                                renderInput={(params) => <TextField name={data.name} helperText={helperText} error={error} {...params} label={data.label} variant={data.variant}/>}
                                                            />
                                                            : data.html_element === "multiple" ?
                                                                <Autocomplete
                                                                    id="combo-box-demo"
                                                                    multiple
                                                                    options={data.options}
                                                                    onChange={onSelectHobby}
                                                                    getOptionLabel={(option) => option.label}
                                                                    style={{ width: 300 }}
                                                                    
                                                                    renderInput={(params) => <TextField {...params} helperText={helperText} error={error} label={data.label} variant={data.variant}/>}
                                                                />
                                                                : ""
                                            }

                                        </Grid>
                                    )
                                })
                            }
                            {
                                item.feilds2.map(data1 => {
                                    return (
                                        <Grid item xs={12} sm={6}>
                                            {
                                                <Grid item xs={12} sm={12}>
                                                    {
                                                        <div>
                                                          <Grid item xs={12} sm={12}><strong>{data1.section_title3}</strong></Grid>
                                                        <Grid item xs={12} sm={12} className="flex">
                                                           
                                                            {data1.checkFeilds ? data1.checkFeilds.map(checkdata => {
                                                                return (
                                                                    <Grid item xs={12} sm={12}>
                                                                        <label>{checkdata.label}</label>
                                                                        <Checkbox
                                                                        onChange={likeEvent}
                                                                        value={checkdata.value}
                                                                        
                                                                            checked={checkdata.checked}
                                                                            defaultChecked={checkdata.defaultChecked}
                                                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                                                        />
                                                                    </Grid>
                                                                )
                                                            })
                                                                : ""}

                                                        </Grid>
                                                        </div>
                                                    }
                                                </Grid>
                                            }
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                })
            }
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    )
}

import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
                        "error": false
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "hidden": false,
                        "required": true,
                        "data_type": "String",
                        "html_element": "TextField",
                        "error": false
                    },
                    {
                        "name": "age",
                        "label": "Age",
                        "hidden": false,
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "TextField",
                        "error": false
                    },
                    {
                        "name": "phone",
                        "label": "Phone",
                        "hidden": true,
                        "required": true,
                        "data_type": "Integer",
                        "html_element": "TextField",
                        "error": false
                    },
                    {
                        "name": "address",
                        "label": "Address",
                        "minRows": "3",
                        "placeholder": "Enter Address",
                        "html_element": "TextArea"
                    },
                    {
                        "name": "country",
                        "label": "Country",
                        "hidden": false,
                        "required": true,
                        "data_type": "Image",
                        "html_element": "Select",
                        "error": false,
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
                        "required": true,
                        "html_element": "select"
                    },
                    {
                        "name": "hobby",
                        "label": "Hobby",
                        "hidden": false,
                        "error": false,
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
                        "required": true,
                        "html_element": "multiple"
                    }
                ],
                "feilds2":[
                    {
                        "section_title2": "Choose Gender",
                        "radioFeilds": [
                            {
                                "name": "radio1",
                                "label": "Male",
                                "value": "male",
                                "html_element": "radio",
                                "data_type": "radio",
                                "hidden": false,
                                "required": true,
                                "error": false
                            },
                            {
                                "name": "radio1",
                                "label": "Female",
                                "value": "female",
                                "html_element": "radio",
                                "data_type": "radio",
                                "hidden": false,
                                "required": true,
                                "error": false
                            },
                        ]
                    },
                    {
                        "section_title3": "What would you like to have?",
                        "checkFeilds": [
                            {
                                "name": "tea",
                                "value": "tea",
                                "html_element": "checkbox",
                                "defaultChecked": true,
                                "hidden": false,
                                "required": false,
                                "label": "Tea"
                            },
                            {
                                "name": "coffy",
                                "value": "coffy",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "required": true,
                                "label": "Coffy"
                            },
                            {
                                "name": "juice",
                                "value": "juice",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "required": true,
                                "label": "Juice"
                            },
                            {
                                "name": "soup",
                                "value": "soup",
                                "html_element": "checkbox",
                                "defaultChecked": false,
                                "hidden": false,
                                "required": true,
                                "label": "Soup"
                            }
                        ]
                    }
                ]
            }
        ]
    }

}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

export default function JsonMaterialForm() {
    const [selectedValue, setSelectedValue] = React.useState('male');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const classes = useStyles();

    const submit = () => {

    }
    return (
        <div className="form-outer-wrapper">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
                {
                    data.form.sections.map(data => {
                        return (
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}><h2>{data.section_title}</h2></Grid>
                                {data.fields.map((items, key) => {
                                    console.log("itemsitems", items)
                                    return (
                                        <Grid container item xs={6} sm={6} spacing={2}>
                                            {
                                                items.html_element === "TextField" ?
                                                    <TextField
                                                        error={items.error}
                                                        required={items.required}
                                                        name={items.name}
                                                        label={items.label}
                                                        variant="outlined"
                                                        fullWidth={true}
                                                        type={items.data_type === "Integer" ? "Number" : "String"}
                                                    />
                                                    :
                                                    items.html_element === "select" ?
                                                        <Autocomplete
                                                            id="combo-box-demo"

                                                            key={key + 1}
                                                            options={items.options}
                                                            getOptionLabel={(option) => option.label}
                                                            style={{ width: 300 }}
                                                            renderInput={(params) => <TextField {...params} label={items.label} error={items.error} variant="outlined" />}
                                                        />
                                                        : 
                                                        items.html_element === "TextArea" ?
                                                        <TextareaAutosize
                                                            minRows={items.minRows}
                                                            placeholder={items.placeholder}
                                                            className="textArea"
                                                            
                                                        />
                                                       
                                                    :
                                                    <Autocomplete
                                                    id="combo-box-demo1"
                                                    multiple={items.html_element}
                                                    className="dropdownn"
                                                    error={items.error}
                                                    key={key + 1}
                                                    options={items.options}
                                                    getOptionLabel={(option) => option.label}
                                                    style={{ width: 300 }}
                                                    renderInput={(params) => <TextField error={items.error} {...params} label={items.label} variant="outlined" />}
                                                />
                                            }   
                                        </Grid>
                                    )
                                })}

                                {
                                    data.feilds2.map(data => {
                                        console.log("dataaaaaaaaaaaa", data)
                                        return(
                                            <Grid container item xs={12} sm={12} spacing={2} className="lbl">
                                               <Grid container item xs={12} sm={12} spacing={2}> <strong>{data.section_title2}</strong></Grid>
                                                {
                                                  data.radioFeilds ? data.radioFeilds.map(radioData => {
                                                        return(
                                                            <Grid container item xs={3} sm={3} spacing={2}>
                                                                <label>{radioData.label}</label>
                                                                <Radio label={radioData.label} value={radioData.value} checked={selectedValue === radioData.value ? true : false} name={radioData.name} onChange={handleChange}/>
                                                            </Grid>
                                                        )
                                                    })
                                                    :""
                                                }
                                                  <Grid container item xs={12} sm={12} spacing={2}> <strong>{data.section_title3}</strong></Grid>
                                                {
                                                  data.checkFeilds ? data.checkFeilds.map(checkData => {
                                                        return(
                                                            <Grid container item xs={3} sm={3} spacing={2}>
                                                                <label>{checkData.label}</label><Checkbox defaultChecked={checkData.defaultChecked} value={checkData.value} name={checkData.name} checked={checkData.checked} />
                                                            </Grid>
                                                        )
                                                    })
                                                    :""
                                                }
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                            
                        )
                    })
                }
                <Grid container spacing={3}>
                    <Grid container item xs={12} sm={12} spacing={2}>
                        <Button type="submit" variant="contained" color="primary" className="btn-css">Submit</Button>
                    </Grid>
                </Grid>
            </form>

        </div>
    )
}

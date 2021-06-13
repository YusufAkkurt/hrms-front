import { useFormik } from 'formik';
import {
    Button,
    Card, CardActions,
    CardContent,
    CardHeader, Checkbox, Divider, FormControlLabel,
    Grid,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CityService from "../../../services/cityService";
import JobService from "../../../services/jobService";
import WorkTypeService from "../../../services/workTypeService";
import SaveIcon from '@material-ui/icons/Save';
import JobAdService from "../../../services/jobAdService";

function getCurrentDate() {
    function join(t, a, s) {
        function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
        }

        return a.map(format).join(s);
    }

    let a = [{ year: 'numeric' }, { month: '2-digit' }, { day: 'numeric' },];
    return join(new Date(), a, '-');
}

export default function JobAdCreate() {
    const [cities, setCities] = useState([])
    const [jobs, setJobs] = useState([])
    const [workTypes, setWorkTypes] = useState([])
    const jobAdService = new JobAdService()

    useEffect(() => {
        let cityService = new CityService();
        let jobService = new JobService();
        let workTypeService = new WorkTypeService();

        cityService.getAll().then(result => setCities(result.data.data));
        jobService.getAll().then(result => setJobs(result.data.data));
        workTypeService.getAll().then(result => setWorkTypes(result.data.data));
    }, []);

    const formik = useFormik({
        initialValues: {
            city: {
                id: 0
            },
            employer: {
                id: 9
            },
            job: {
                id: 0
            },
            workType: {
                id: 0
            },
            applicationDeadline: getCurrentDate(),
            description: '',
            openPositionCount: 0,
            salaryMin: 0,
            salaryMax: 0,
            remote: false
        },
        onSubmit: values => {
            jobAdService.add(values).then(result => {
                console.log(result.data.message);
                if (result.data.success)
                    formik.resetForm();
            })
        },
    });

    return ( <main>
        <Card variant="outlined">
            <CardHeader title={ "Yeni iş ilanı ekle" }/>
            <Divider/>
            <form onSubmit={ formik.handleSubmit }>
                <CardContent>
                    <Grid container spacing={ 3 }>
                        <Grid item sm={ 4 }>
                            <Select name="city.id" onChange={ formik.handleChange } value={ formik.values.city.id }
                                    variant="outlined" style={ { width: "100%" } }>
                                <MenuItem value={ 0 }><em>Şehirler</em></MenuItem>

                                { cities.map(city => (
                                    <MenuItem key={ city.id } value={ city.id }>{ city.name }</MenuItem>
                                )) }
                            </Select>
                        </Grid>

                        <Grid item sm={ 4 }>
                            <Select name="job.id" onChange={ formik.handleChange } value={ formik.values.job.id }
                                    variant="outlined" style={ { width: "100%" } }>
                                <MenuItem value={ 0 }><em>İş Pozisyonları</em></MenuItem>

                                { jobs.map(job => (
                                    <MenuItem key={ job.id } value={ job.id }>{ job.name }</MenuItem>
                                )) }
                            </Select>
                        </Grid>

                        <Grid item sm={ 4 }>
                            <Select name="workType.id" onChange={ formik.handleChange }
                                    value={ formik.values.workType.id }
                                    variant="outlined" style={ { width: "100%" } }>
                                <MenuItem value={ 0 }><em>Çalışma Zamanı Türleri</em></MenuItem>

                                { workTypes.map(workType => (
                                    <MenuItem key={ workType.id } value={ workType.id }>{ workType.name }</MenuItem>
                                )) }
                            </Select>
                        </Grid>

                        <Grid item sm={ 4 }>
                            <TextField type="date" name="applicationDeadline" label="Son başvuru tarihi" size="small"
                                       onChange={ formik.handleChange } value={ formik.values.applicationDeadline }
                                       variant="outlined" style={ { width: "100%" } }/>

                            <TextField type="number" name="openPositionCount" label="Açık pozisyon sayısı" size="small"
                                       onChange={ formik.handleChange } value={ formik.values.openPositionCount }
                                       variant="outlined" style={ { width: "100%", marginTop: "17px" } }/>

                            <Grid container spacing={ 2 }>
                                <Grid item sm={ 6 }>
                                    <TextField type="number" name="salaryMin" label="Minimum maaş" size="small"
                                               onChange={ formik.handleChange } value={ formik.values.salaryMin }
                                               variant="outlined" style={ { width: "100%", marginTop: "17px" } }/>
                                </Grid>

                                <Grid item sm={ 6 }>
                                    <TextField type="number" name="salaryMax" label="Maximum maas" size="small"
                                               onChange={ formik.handleChange } value={ formik.values.salaryMax }
                                               variant="outlined" style={ { width: "100%", marginTop: "17px" } }/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item sm={ 8 }>
                            <TextField label="Açıklama" size="small" fullWidth multiline rows={ 7 } variant="outlined"
                                       name="description" onChange={ formik.handleChange }
                                       value={ formik.values.description }/>
                        </Grid>

                        <Grid item sm={ 12 }>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={ formik.values.remote }
                                        onChange={ formik.handleChange }
                                        name="remote"
                                        color="primary"
                                    />
                                }
                                label="Uzaktan çalışma imkanı var ise kutucu işaretleryiniz."
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" type={ "submit" } startIcon={ <SaveIcon/> }>
                        Ekle
                    </Button>
                </CardActions>
            </form>
        </Card>

    </main> );
}

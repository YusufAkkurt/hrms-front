import { Fab, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import JobAdService from "../../../services/jobAdService";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ( {
    root: {
        position: 'relative',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(0),
        right: theme.spacing(0),
    }
} ));

export default function JobAdList() {
    const classes = useStyles();
    const [jobAds, setJobAds] = useState([]);

    const fab = {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon/>,
        label: 'Add',
    };


    useEffect(() => {
        let jobAdService = new JobAdService();
        jobAdService.getAll().then(result => setJobAds(result.data.data))
    }, [])

    return (
        <div className={ classes.root }>
            <TableContainer style={{paddingBottom: "100px"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Firma</TableCell>
                            <TableCell align="center">İş Pozisyonu</TableCell>
                            <TableCell align="center">Açık Pozisyon</TableCell>
                            <TableCell align="center">Yayınlanma Tarihi</TableCell>
                            <TableCell align="right">Son Başvuru Tarihi</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { jobAds.map(jobAd => (
                            <TableRow key={ jobAd.id }>
                                <TableCell align="left">{ jobAd.companyName }</TableCell>
                                <TableCell align="center">{ jobAd.jobName }</TableCell>
                                <TableCell align="center">{ jobAd.openPositionCount }</TableCell>
                                <TableCell align="center">{ jobAd.createdAt }</TableCell>
                                <TableCell align="right">{ jobAd.applicationDeadline }</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>

            <Link to={"/job-ads/create"}>
                <Fab aria-label={ fab.label } className={ fab.className } color={ fab.color }>
                    { fab.icon }
                </Fab>
            </Link>
        </div>
    )
}

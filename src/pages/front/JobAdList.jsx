import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import JobAdService from "../../services/jobAdService";

export default function JobAdList() {
    const [jobAds, setJobAds] = useState([]);

    useEffect(() => {
        let jobAdService = new JobAdService();
        jobAdService.getAll().then(result => setJobAds(result.data.data))
    })

    return (
        <TableContainer>
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
    )
}

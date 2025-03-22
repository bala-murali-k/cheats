import { Grid, Card, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

function ViewJavascriptCheat () {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Card>
                    <Typography>
                        Objects
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="includes_accordion_js_content"
                            id="includes_accordion_js"
                        >
                            <Typography>
                                includes
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                syntax: array.includes(target)
                                The includes is used to check whether an array or string contains a specific value.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ViewJavascriptCheat

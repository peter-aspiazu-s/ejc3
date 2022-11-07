import {FC} from 'react'
import Image from 'next/image';
import { Grid, Button, Typography } from '@mui/material';

import wsPubli from '../../public/images/whatsapp-publi.webp'

interface CalledToContactProps {
    calledToContactText: string;
    textCalled: string;
    textButton: string;
}

export const CalledToContact: FC<CalledToContactProps> = ({
    calledToContactText,
    textCalled,
    textButton,
}) => {
  return (
    <Grid container
        sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
        }}
    >
        <Grid item xs={12} md={6}>
            <Grid container>
                <Grid 
                    item 
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: {xs:'center',md:'left'},
                        alignItems: 'center',
                        mb: 3
                    }}    
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '1.4rem', sm: '1.5rem', md: '1.7rem', lg: '1.8rem', xl: '1.9rem'
                            },
                            color: 'primary.light'
                        }}
                    >
                        {calledToContactText}
                    </Typography>
                </Grid>
                <Grid item xs={12} 
                    sx={{mb:3, display: 'flex', justifyContent:'center', textAlign:{xs:'center',md:'left'}}}>
                    <Typography>
                        {textCalled}
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}    
                >
                    <Button
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                        size="large"
                        variant="contained"
                        color="success"
                    >
                            {textButton}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={6} sx={{display: {xs:'none',md:'flex'}, justifyContent: 'center'}}>
            <Image src={wsPubli} width={400} height={400} />
        </Grid>
    </Grid>
  )
}

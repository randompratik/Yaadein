import React from 'react';
import {Container, AppBar, Typography, Grid, Grow} from '@material-ui/core'
import yaadein from './images/yaadein.png'
import Form from './components/forms/form.js';
import Posts from './components/posts/posts.js';
import useStyle from './styles';
const App=()=>{
        const classes=useStyle();
    return(
           
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Yaadein</Typography>
                <img className={classes.image} src={yaadein} alt="yaadein" height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={3}>
                        {/* xs==xtra small, sm==small-medium */}
                         <Grid item xs={12} sm={7}>
                             <Posts />
                         </Grid>
                         <Grid item xs={12} sm={4}>    
                              <Form />
                         </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>

        
    );
}

export default App;
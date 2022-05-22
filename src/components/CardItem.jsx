import React, {Component} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Stack, Divider } from '@mui/material';

class CardItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            phone: `${data.phone}`,
            birth: `${data.dob.date}`,
            thumbnail: `${data.picture.large}`,
            email: `${data.email}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

  render() {
    const {items} = this.state;
      return (
        <Card 
        display="flex"
        direction="column"
        sx={{ width: 345 }}>
          {
            items.length > 0 ? items.map(item =>{
              const {id, firstName, lastName, birth, thumbnail, phone, email} = item;
              return (
                <>
                  <Stack padding={1}>
                    <Typography>Personal ID : {id}</Typography>
                  </Stack>
                  <Divider/>
                  <Stack alignItems="center" paddingTop={2}>
                    <Avatar
                    sx={{ width: 120, height: 120 }}
                    src="{thumbnail}"
                    />
                  </Stack>

                  <CardContent>

                    <Typography gutterBottom variant="subtitle2" component="div" paddingTop={1} style={{fontWeight: 'bold'}}>
                      Name
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {firstName} {lastName}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2" component="div" paddingTop={1} style={{fontWeight: 'bold'}}>
                      Phone Number
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {phone}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2" component="div" paddingTop={1} style={{fontWeight: 'bold'}}>
                      Birthday
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {birth}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2" component="div" paddingTop={1} style={{fontWeight: 'bold'}}>
                      Email
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      
                    </Typography>
                      {email}
                  </CardContent>
                </>
              );
            }) : null
          }
        </Card>
      );
  }
}

export default CardItem